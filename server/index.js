//Add dependencies
const express = require('express');
const app = express();
const db = require('../db/index.js');
const apiHelpers = require('../lib/apiHelper.js');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json()); //or some other type
app.use(bodyParser.urlencoded({ extended: true }));



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





//DESCRIPTION: This post will grab the user form data (zip code currently)
//             and insert it into the database along with some temporary dummy data

//STATUS:      Still in progress - will be finalized upon oauth implementation
app.post('/', (req, res) => {
    //console.log the data that has been received
    // console.log(req.body);



    // console.log('response to / from server', res);
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

