const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const connection = require('express-myconnection');
const mysql = require('mysql');

const app = express();

/*MySql connection*/
app.use(connection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rest-crud-node',
  debug: false //set true if you wanna see debug logger
}, 'request'));

app.use(bodyParser.urlencoded({extended: true})); //support x-www-form-urlencoded
app.use(bodyParser.json());
app.use(expressValidator());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

//RESTful route
// const router = express.Router();

/*------------------------------------------------------
*  This is router middleware,invoked everytime
*  we hit url /api and anything after /api
*  like /api/user , /api/user/7
*  we can use this for doing validation,authetication
*  for every route started with /api
--------------------------------------------------------*/
// router.use(function(req, res, next) {
//   console.log(req.method, req.url);
//   next();
// });

// var signup = router.route('/auth');

//post data to DB | POST
app.post('/auth', function(req, res, next) {

  //validation
  req.assert('name', 'Name is required').notEmpty();
  req.assert('email', 'A valid email is required').isEmail();
  req.assert('password', 'Enter a password 6 - 20').len(6, 20);

  var errors = req.validationErrors();
  if (errors) {
    res.status(422).json(errors);
    return;
  }

  //get data
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  //inserting into mysql
  req.getConnection(function(err, conn) {

    if (err)
      return next("Cannot Connect");

    var query = conn.query("INSERT INTO t_user set ? ", data, function(err, rows) {

      if (err) {
        console.log(err);
        return next("Mysql error, check your query");
      }

      res.sendStatus(200);

    });

  });

});

//show the CRUD interface | GET
app.post('/auth/signin', function(req, res, next) {

  //get data
  var data = {
    email: req.body.email,
    password: req.body.password
  };

  req.getConnection(function(err, conn) {

    if (err)
      return next("Cannot Connect");

    var query = conn.query('SELECT * FROM t_user WHERE Email=" +mysql.escape(data.email)+ " and Password="+mysql.escape(data.password)+"', function(err, rows) {

      if (err) {
        console.log(err);
        return next("Mysql error, check your query");
      }

      res.redirect('/');

    });

  });

});

//now we need to apply our router here
// app.use('/api', router);

module.exports = app;
