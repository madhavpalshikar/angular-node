const User = require('../models/user.model');

exports.addUser = (req)=>{
    const person = new User({
        name: 'madhav',
        age: 32,
        email: 'madhavwrite@gmail.com',
        password: '123456'
    });

    person.save().then(()=>console.log('User saved.'));
};