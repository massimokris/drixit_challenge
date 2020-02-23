const express = require('express');
const jwt = require('jsonwebtoken');
const { config } = require('../config');
const User = require('../schemas/User');

function authApi (app) {
    const router = express.Router();

    app.use('/api/v0', router);

    router.post('/authenticate', async (req, res, next) => {
        const { email, password } = req.body;
        const user = await User.findOne({email: email});

        if(!user) {
            return res.status(404).send("The email doesn't exists");
        }

        const validated = await user.validatePassword(password);

        if(!validated) {
            return res.status(401).json({auth: false, token: null});
        }
        
        const token = jwt.sign({id: user._id}, config.authJwtSecret, {
        expiresIn: parseInt(config.expires)
        });

        res.status(200).json({auth: true, token});
    });
}

module.exports = authApi;