// Add dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const utils = require('./utils.js')
const db = require('../db/index.js');
const apiHelpers = require('../lib/apiHelper.js');
const dataHelpers = require('../lib/dataHelpers.js')
const apiSearch = require('../lib/apiSearch.js');
const config = require('../config/civic.js');
const path = require("path");
/************************************************
Passport Related (Below)
************************************************/

app.use(session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

const passport = require('passport');
const passportSetup = require('../config/passport-setup.js');

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser(config.SESSION_SECRET));

/************************************************/

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json()); // This should be adjusted towards the type of req.body we will get
// app.use(bodyParser.text()); //or some other type
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(bodyParser.text()) this is an alternative to json
app.use(session({
  secret: 'americaisthebest',
  resave: true,
  saveUninitialized: true,
}));


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Hello from ${port}!`);
});

// ////******route requests*********///

app.post('/login', (req, res, next) => {
  console.log(req.body);
});
// DESCRIPTION: This will respond to user input on the front-end and send back the appropriate data. req.body will be our friend here.
// STATUS: to be integrated with front end

app.post('/reps', (req, res, next) => {

  console.log("POST to /saveUser, req.body is", req.body);
  const locater = req.body.zip ? req.body.zip
                  : req.body.location ? dataHelpers.abbrState(req.body.location, 'name')
                  : null;
  const region = req.body.region;

  apiSearch.searchByZip(locater, (response) => {
    if (response.error) {
      console.log(response.error);
      res.send(JSON.stringify('Please enter valid ZIP code.'));
    } else {
      res.status(201);
      console.log(response);
      res.send(apiHelpers.getOfficials(region, response));
    }
  });

  // uday will add the thing here
  // db.insertData(data, cb);
});


/******************************************************************************
Name: Passport Authentication Routes
Description:   Will determine the routes to direct user to and send them back
               upon authentication.
******************************************************************************/
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('hello you submitted!');
    //res.send('you are now logged in');
    console.log('req.user is', req.user);
    res.redirect('/');
  });


app.get('/test', utils.authCheck, (req, res) => {
  console.log('passed authCheck');
  res.send(req.user);
});


//Temp function for Mubeen front-end prior to RR implementation
app.get('/checkuser', utils.authCheck, (req, res) => {
  res.send('user exists');
});




/******************************************************************************
Name:  React Router Redirect Routes
Description:  Implements the ability to directly access a component via url
              (e.g. localhost:3000/someUrl)
*******************************************************************************/


app.get('/main', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});


app.get('/townhall', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});


app.get('/dashboard', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});


app.get('/map', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});


app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});


app.get('/zip', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});
