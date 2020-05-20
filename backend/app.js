const { dbname, connectionString, jwtSecret, port } = require('./config/config.js');
const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const fileupload = require('express-fileupload');
const user = require('./routes/user');
app.use(express.json());

app.use('/user', user);

app.listen(port);
