//Add dependencies
const express = require('express');
const app = express();
const mongodb = require('../db/index.js');
const apiHelpers = require(/*find out what its called*/);
const bodyParser = require('body-parser');


app.use(express.static(__dirname + '../client/dist'));
app.use(bodyParser.json()) //or some other type


let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}`)
})

//////******route requests*********///


//DESCRIPTION:
//STATUS:
app.get('/', (req, res) => {

    console.log('response to / from server', res);
});

//DESCRIPTION:
//STATUS:
app.post('/', (req, res) => {

    console.log('response to / from server', res);
});


//DESCRIPTION:
//STATUS:
app.post('/', (req, res, next) => {

    console.log('response to / from server', res);
  });


//DESCRIPTION:
//STATUS:
app.put('/', (req, res) => {

    console.log('response to / from server', res);
})

