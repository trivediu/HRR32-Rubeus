//Database Connection and Functions
var mysql = require('mysql');

var connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '',
  database  : 'greenfield'
});

module.exports.connection = connection;