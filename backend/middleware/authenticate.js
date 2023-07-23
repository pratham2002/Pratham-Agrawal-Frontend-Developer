const jwt = require("jsonwebtoken");
const SECRET_KEY = "ABCDE"; //should be added to a env file
// Middleware to verify the JWT
function authenticateToken(req, res, next) {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ error: "Forbidden" });
      }

      req.userData = user;
      next();
    });
  } catch (error) {
    console.log({ msg: error.message });
  }
}

module.exports = {
  authenticateToken,
};
