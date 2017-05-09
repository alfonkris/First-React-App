const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const connection  = require('express-myconnection');
const mysql = require('mysql');

const app = express();

/*MySql connection*/
app.use(

    connection(mysql,{
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'rest-crud-node',
        debug    : false //set true if you wanna see debug logger
    },'request')

);

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

//RESTful route
var router = express.Router();

module.exports = app;
