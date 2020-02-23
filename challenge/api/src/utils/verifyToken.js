const jwt = require("jsonwebtoken");
const { config } = require("../config");

function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.status(401).json({
      auth: false,
      message: "Unauthorized"
    });
  }

  const decoded = jwt.verify(token, config.authJwtSecret);
  req.userId = decoded.id;

  next();
}

module.exports = verifyToken;
