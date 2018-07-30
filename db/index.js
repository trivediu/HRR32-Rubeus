//Database Connection and Functions
var mysql = require('mysql');

//var connection = mysql.createConnection({
var connection = mysql.createPool({
  host      : 'localhost',
  user      : 'root',
  password  : '',
  database  : 'greenfield'
});

/*
Simple Test Function to verify MySql functionality - not used elsewhere
*/

//***************************************


//*************************************************
// module.exports = {
//   connection: connection,
//   insertData: insertData,
//   doesExist:  doesExist,
//   createUser: createUser,
//   getUser:    getUser
// };

module.exports = {
  connection: connection
};

//mysql -u -root > db/schema.sql
//mysql -u -root -p
