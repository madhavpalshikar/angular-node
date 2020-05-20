const {mongoose, db} = require('../config/config');
const user = db.model('User', {
    name: String,
    age: Number,
    email: String,
    password: String
})

module.exports = user;