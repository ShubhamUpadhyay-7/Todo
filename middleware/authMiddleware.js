const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided" });
  }
  const tokenWithoutBearer = token.split(" ")[1];
  try {
    const decoded = jwt.verify(tokenWithoutBearer, "secret_key");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authenticate;
