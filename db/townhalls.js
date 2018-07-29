const c = require('../db/index.js');

/**********************************************************
Function Name: getTownHallNames
Input:  No input
Output:  The names of all town halls as an array
Description: Used to populate any dropdown on the front
            end that show which town halls are currently
            available to choose from
**********************************************************/
var getTownHallNames = () => {
  return new Promise ((resolve, reject) => {
    const sql = 'SELECT name FROM townhalls';
    c.connection.query(sql, inserts, (err, results, data) => {
      err ? reject(err) : resolve(results);
    });
  });
};


module.exports = {
  getTownHallNames: getTownHallNames
};