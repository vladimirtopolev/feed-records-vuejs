const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require('../config');


module.exports = (req, res, next) => {
    let accessToken = req.cookies.jwt;

    if (!accessToken){
        return res.status(403).send()
    }

    try{
        jwt.verify(accessToken, ACCESS_TOKEN_SECRET)
        next()
    }
    catch(e){
        //if an error occured return request unauthorized error
        return res.status(401).send()
    }
}