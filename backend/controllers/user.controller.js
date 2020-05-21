
const { jwtSecret } = require('../config/config.js');
const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

exports.login = (req,res)=>{
    let token  = jwt.sign({name:'madhav', age:23, userID:1222}, jwtSecret);
    res.send('your token is '+ token);
};

exports.addUser = (req,res)=>{
    userService.addUser(req);
}

exports.logout = (req,res)=>{
    
}