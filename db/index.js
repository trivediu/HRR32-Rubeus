//Database Connection and Functions
var mysql = require('mysql');

var connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '',
  database  : 'greenfield'
});

/*
Simple Test Function to verify MySql functionality - not used elsewhere
*/
var insertData = (data, callback) => {
  const username = data.name;
  const password = data.password;
  const zipcode = data.zipcode;

  const sql = "INSERT INTO users (username, password, zipcode) VALUES (?, ?, ?)";
  var inserts = [username, password, zipcode];
  connection.query(sql, inserts, (err, results, data) => {
    err ? console.log('Error', err) : callback();
  });
};

/******************************************************************************
Function Name: createUser
Input:  a user's google profile ID
Output:  A promise that resolves
Additional Description:
    This function will create a new user profile if the user does not exist
    within the database after Google OAuth.  Upon successfully resolving the
    unique mysql row id will be returned
********************************************************************************/
var createUser = (profileId, displayName) => {
  return new Promise ((resolve, reject) => {
    const inserts = [profileId, displayName];
    const sql = "INSERT INTO users (userid, username) VALUES (?, ?)";
    connection.query(sql, inserts, (err, results, data) => {
      err ? reject(err) : resolve(results.insertId);
    });
  });
};


/******************************************************************************
Function Name: doesExist
Input:  a user's google profile ID
Output:  A promise that resolves to either the user's DB ID value or false
Additional Description:

    The doesExist function (Promise) will resolve to a true value (row ID) if
    a user's profile ID exists otherwise it will resolve to a false value if a
    user's profile ID does NOT exist.
********************************************************************************/
var doesExist = (profileId) => {
  return new Promise((resolve, reject) => {
    const inserts = [profileId];
    //const sql = 'SELECT * FROM users WHERE EXISTS (SELECT * FROM USERS WHERE userid LIKE (?))';
    const sql = 'SELECT id FROM users WHERE userid LIKE (?)';
    connection.query(sql, inserts, (err, results, data) => {
        if (err) {
          reject(err);
        } else {
          if (results.length === 0) {
            resolve(false);
          } else {
            resolve(results[0].id);
          }
        }
      });
  });
};

/**********************************************************
Function Name: getUser
Input:  A row id
Output:  The corresponding user's entire row
Description: Used during deserialize to extract a specific
user's row information from the database
**********************************************************/
var getUser = (rowId) => {
  return new Promise ((resolve, reject) => {
    rowId = Number(rowId);
    const inserts = [rowId];
    const sql = 'SELECT * FROM users WHERE id=(?)';
    connection.query(sql, inserts, (err, results, data) => {
      err ? reject(err) : resolve(results);
    });
  });
};

module.exports = {
  connection: connection,
  insertData: insertData,
  doesExist:  doesExist,
  createUser: createUser,
  getUser:    getUser
};

//mysql -u -root > db/schema.sql
//mysql -u -root -p
