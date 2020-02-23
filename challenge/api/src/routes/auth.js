const express = require("express");
const jwt = require("jsonwebtoken");
const { config } = require("../config");
const User = require("../schemas/User");
const verifyToken = require("../utils/verifyToken");

function authApi(app) {
  const router = express.Router();

  app.use("/api/v0", router);

  router.post("/authenticate", async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).send("The email doesn't exists");
    }

    const validated = await user.validatePassword(password);

    if (!validated) {
      return res.status(401).json({ auth: false, token: null });
    }

    const token = jwt.sign({ id: user._id }, config.authJwtSecret, {
      expiresIn: parseInt(config.expires)
    });

    res.status(200).json({ auth: true, token });
  });

  router.get("/users/me", verifyToken, async (req, res, next) => {
    const user = await User.findById(req.userId, { password: 0 });

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).json(user);
  });
}

module.exports = authApi;
