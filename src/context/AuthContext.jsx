import React, { createContext, useContext, useState, useEffect } from "react";
import { LogIn, LogOut, SignUp, ForgotPassword, VerifyOTP, VerifyRegisterOTP, ResetPassword, ChangePassword, GetMe } from "../api/authAPI";
import { setLocalToken } from "../api/axiosClient";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessTokenState] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper to set token both in React state and Axios client memory
  const updateToken = (token) => {
    setAccessTokenState(token);
    setLocalToken(token);
  };

  // Perform initial session check by trying to refresh token
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Attempt silent refresh
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/refreshtoken`,
          {},
          { withCredentials: true }
        );
        const token = response.data.accessToken;
        updateToken(token);

        // Fetch user info
        const meResponse = await GetMe();
        setUser(meResponse.user);
      } catch (err) {
        console.log("No active session found.");
        updateToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for session expiration events from axios client
    const handleSessionExpired = () => {
      setUser(null);
      updateToken(null);
    };

    window.addEventListener("auth-session-expired", handleSessionExpired);
    return () => {
      window.removeEventListener("auth-session-expired", handleSessionExpired);
    };
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const data = await LogIn({ email, password });
      updateToken(data.accessToken);
      const meResponse = await GetMe();
      setUser(meResponse.user);
      return meResponse.user;
    } catch (err) {
      updateToken(null);
      setUser(null);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await LogOut();
    } catch (err) {
      console.error("Logout failed at backend, clearing local state anyway:", err);
    } finally {
      updateToken(null);
      setUser(null);
      setLoading(false);
    }
  };

  const signUp = async (fullName, email, password) => {
    return await SignUp({ fullName, email, password });
  };

  const requestPasswordReset = async (email) => {
    return await ForgotPassword({ email });
  };

  const verifyOTP = async (userId, code, isForgotPassword) => {
    if (isForgotPassword) {
      return await VerifyOTP({ userId, code });
    } else {
      return await VerifyRegisterOTP({ userId, code });
    }
  };

  const resetUserPassword = async (password) => {
    const response = await ResetPassword({ password });
    if (response.accessToken) {
      updateToken(response.accessToken);
      const meResponse = await GetMe();
      setUser(meResponse.user);
    }
    return response;
  };

  const changeUserPassword = async (oldPassword, newPassword) => {
    return await ChangePassword({ oldPassword, newPassword });
  };

  const value = {
    user,
    accessToken,
    loading,
    login,
    logout,
    signUp,
    requestPasswordReset,
    verifyOTP,
    resetUserPassword,
    changeUserPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
