const {mongoose, db} = require('../config/config');
const tasks = db.model('Tasks', {
    title: String,
    description: String,
    datetime: String,
    order: Number,
    status: Number
})

module.exports = tasks;