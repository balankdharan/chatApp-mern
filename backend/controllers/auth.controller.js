export const login = (req, res) => {
  console.log("Login user");
};
export const logout = (req, res) => {
  console.log("Logout user");
};
export const signUp = (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (err) {
    console.log("Error: " + err);
  }
};
