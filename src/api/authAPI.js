export async function SignUp({ fullName, email, password }) {
  console.log("Signing up user:", { fullName, email });
  // Mock response for user signup
  return {
    userId: "mock-user-id-123",
    fullName,
    email,
  };
}

export async function LogIn({ email, password }) {
  console.log("Logging in user:", { email });
  // Mock response for user login
  return {
    accessToken: "mock-access-token-456",
    user: {
      userId: "mock-user-id-123",
      email,
    },
  };
}

export async function ForgotPassword({ email }) {
  console.log("Forgot Password requested for:", email);
  // Mock response for OTP request
  return {
    success: true,
    message: "OTP verification code sent to your email.",
  };
}

export async function VerifyOTP({ email, otp }) {
  console.log("Verifying OTP:", otp, "for email:", email);
  // Mock response for OTP verification
  if (otp === "1234" || otp.length === 4) {
    return {
      success: true,
      message: "OTP verified successfully.",
    };
  }
  throw new Error("Invalid OTP code. Please try again.");
}

export async function ResetPassword({ email, password }) {
  console.log("Resetting password for email:", email);
  // Mock response for resetting password
  return {
    success: true,
    message: "Password reset successful.",
  };
}

