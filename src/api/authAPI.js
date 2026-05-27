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
