const userService = require('../services/user.service');

exports.login = (req,res)=>{
    res.send('Working from router');
};

exports.addUser = (req,res)=>{
    userService.addUser(req);
}