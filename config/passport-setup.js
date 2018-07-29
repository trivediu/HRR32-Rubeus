const config = require('./civic.js');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../db/users.js');


/******************************************************************************
Name: Passport Implementation Below
Description: to sign into passport, go to
             localhost:3000/auth/google
******************************************************************************/
passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      //upon user providing passport details, check if user exists
      //if they do, take them to login page, if not, then create their
      //account automatically and then redirect them to login page
      console.log('passport authenticate callback');
      db.doesExist(profile.id)
        .then(userRowID => {
          if (userRowID === false) {
            //the user does not exist, create an entry
            db.createUser(profile.id, profile.displayName)
              .then(newUserRowID => done(null, newUserRowID))
              .catch(err => console.log(err));
          } else {
            //the user exists
            done(null, userRowID);
          }
        })
        .catch(err => console.log(err)); //catch is called if err checking user exists
  }
));

/******************************************************************************
Name: Passport Serialize and Deserialize User
Description: assign a unique value to the cookie rather than using google
             profile id we will simply use the sql table id to allow flexibility
             in using other authentication services in the future
             such as facebook, git, etc.
******************************************************************************/


passport.serializeUser((userRowId, done) => {
  //verify serialize is being called
  //console.log('serializeUser called', userRowId)

  //Get all data about user, and insert that into the cookie as a unique identifier
   db.getUser(userRowId).then(userRowData => {
    done(null, userRowData);
  });


});

passport.deserializeUser((userRowData, done) => {
  //verify deserialize being called
  //console.log('deserialize user called', userRowData)

  //When user visits the site again, deserialize user's row data
  //by setting user's official data to be their row data
  done(null, userRowData);
});


