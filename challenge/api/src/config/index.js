require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 8001,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  expires: process.env.TWO_HOURS_IN_SEC,
  authJwtSecret: process.env.AUTH_JWT_SECRET
};

module.exports = { config };