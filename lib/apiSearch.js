const request = require('request');
const config = require('../config/civic.js');

const searchByZip = (zip, cb) => {
  console.log('zip below:');
  console.log(zip);

  const options = {
    url: `https://www.googleapis.com/civicinfo/v2/representatives/?key=${config.CIVIC_API_KEY}&address=${zip}`,
    headers: {
      'User-Agent': 'request',
    },
  };
  console.log(options.url);
  request(options, (err, res, body) => {
    if (err) {
      console.log('options below err:');
      console.log(options);
      console.log(err);
    } else {
      cb(JSON.parse(body));
    }
  });
};

module.exports = {
  searchByZip,
};
