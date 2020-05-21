const { jwtSecret } = require('../config/config.js');
const jwt = require('jsonwebtoken');

exports.verify = (req,res,next)=>{
    jwt.verify(req.body.token, jwtSecret, (err, decoded)=>{
        if(err){
            res.send('Authntication failed!');
        }

        req.userDetails = decoded;
        next();
    })
}