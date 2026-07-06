export const logout = (navigate) => {
  try {
    // Remove stored authentication data
    localStorage.clear();

    navigate("/login", { replace: true });
  } catch (error) {
    console.error("Logout Error:", error);
  }
};
