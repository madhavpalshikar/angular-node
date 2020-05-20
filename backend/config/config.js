require('dotenv').config();
const dbname = process.env.DBNAME;
const connectionString = process.env.CONNECTIONSTRING;
const jwtSecret = process.env.SECRET;
const port = process.env.PORT;
const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost:27017/'+dbname, { useNewUrlParser:true, useUnifiedTopology: true});

module.exports = {
    dbname, connectionString, jwtSecret, port, mongoose, db
}