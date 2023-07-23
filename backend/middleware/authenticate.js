const jwt = require("jsonwebtoken");
const SECRET_KEY = "ABCDE"; //should be added to a env file
// Middleware to verify the JWT
function authenticateToken(req, res, next) {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden" });
      }

      req.userData = user;
      next();
    });
  } catch (error) {
    console.log({ msg: error.message });
    return res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = {
  authenticateToken,
};
