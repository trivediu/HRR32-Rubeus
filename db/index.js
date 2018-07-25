// Database Connection and Functions
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'greenfield',
});

const insertData = (data, callback) => {
  const username = data.name;
  const password = data.password;
  const zipcode = data.zipcode;

  const sql = 'INSERT INTO users (username, password, zipcode) VALUES (?, ?, ?)';
  const inserts = [username, password, zipcode];
  connection.query(sql, inserts, (err, results, data) => {
    err ? console.log('Error', err) : callback();
  });
};

module.exports = {
  connection,
  insertData,
};

// mysql -u -root > db/schema.sql
// mysql -u -root -p
