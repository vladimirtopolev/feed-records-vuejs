const express = require('express');
const jwt = require('json-web-token');
const { USERS } = require('../users');
const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE, REFRESH_TOKEN_LIFE, REFRESH_TOKEN_SECRET } = require('../../config');


const REFRESH_TOKENS = {};
const router = express.Router();

router.post('/login', (req, res) => {
    const identifier = req.body.identifier;
    const password = req.body.password;

    const targetUser = USERS.find(u => u.email === identifier);
    if (!targetUser) {
        return res.status(401).json({ error: 'USER_NOT_EXIST' })
    }

    const { password: userPassword, ...user } = targetUser;
    if (userPassword !== password) {
        return res.status(401).json({ error: 'INVALID_PASSWORD' });
    }

    let payload = { user };

    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: ACCESS_TOKEN_LIFE
    });

    REFRESH_TOKENS[user.id] = jwt.sign(payload, REFRESH_TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: REFRESH_TOKEN_LIFE
    });

    res.cookie("jwt", accessToken, { secure: true, httpOnly: true })
    res.json(user);
});
