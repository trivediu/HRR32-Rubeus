//Database Connection and Functions
var mysql = require('mysql');

var connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '',
  database  : 'greenfield'
});

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

module.exports = {
  connection: connection,
  insertData: insertData
}

//mysql -u -root > db/schema.sql
//mysql -u -root -p
