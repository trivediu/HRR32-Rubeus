// Add dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

/************************************************
Passport Related (Below)
************************************************/
const config = require('../config/civic.js');

app.use(session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

const passport = require('passport');
const passportSetup = require('../config/passport-setup.js');


//initialize passport
app.use(passport.initialize());
app.use(passport.session());

/************************************************/







app.use(express.static(`${__dirname}/../client/dist`));

// app.use(bodyParser.text()) this is an alternative to json
const db = require('../db/index.js');
const apiHelpers = require('../lib/apiHelper.js');

const apiSearch = require('../lib/apiSearch.js');

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
  console.log(`App listening on ${port}`);
});

// ////******route requests*********///


app.post('/login', (req, res, next) => {
  console.log(req.body);
});
// DESCRIPTION: This will respond to user input on the front-end and send back the appropriate data. req.body will be our friend here.
// STATUS: to be integrated with front end

app.post('/saveUser', (req, res, next) => {
  // console.log('POST to /saveUser, req.body is:', req.body.zip)
  // console.log('response to / from server', res);
  console.log(typeof (req.body));
  const zip = req.body.zip;

  apiSearch.searchByZip(zip, (response) => {
    if (response.error) {
      console.log(response.error);
      res.send(JSON.stringify('Please enter valid ZIP code.'));
    } else {
      console.log(response);
      res.status(201);
      res.send(apiHelpers.getOfficials('state', response));
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
    res.send('you are now logged in');
    console.log(req.user);
    //res.redirect('/');
  });
