import axiosClient from "./axiosClient";

export async function SignUp({ fullName, email, password }) {
  const response = await axiosClient.post("/auth/register", {
    fullName,
    email,
    password,
  });
  return response.data; // returns { message, userId }
}

export async function LogIn({ email, password }) {
  const response = await axiosClient.post("/auth/login", {
    email,
    password,
  });
  return response.data; // returns { message, accessToken }
}

export async function LogOut() {
  const response = await axiosClient.post("/auth/logout");
  return response.data;
}

export async function GetMe() {
  const response = await axiosClient.get("/users/me");
  return response.data; // returns { user }
}

export async function ForgotPassword({ email }) {
  const response = await axiosClient.post("/auth/forgot-password", {
    email,
  });
  return response.data; // returns { message, userId }
}

export async function VerifyOTP({ userId, code }) {
  const response = await axiosClient.post("/auth/verify-forgot-otp", {
    userId,
    code,
  });
  return response.data; // returns { message }
}

export async function VerifyRegisterOTP({ userId, code }) {
  const response = await axiosClient.post("/auth/verify-email", {
    userId,
    code,
  });
  return response.data;
}

export async function ResetPassword({ password }) {
  const response = await axiosClient.post("/auth/reset-password", {
    newPassword: password,
  });
  return response.data; // returns { message, accessToken }
}

export async function ChangePassword({ oldPassword, newPassword }) {
  const response = await axiosClient.post("/auth/change-password", {
    oldPassword,
    newPassword,
  });
  return response.data;
}
