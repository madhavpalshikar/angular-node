const { port } = require('./config/config.js');
const express = require('express');
const app = express();
const fileupload = require('express-fileupload');
const user = require('./routes/user.router');
app.use(express.json());

app.use('/user', user);

app.listen(port);
