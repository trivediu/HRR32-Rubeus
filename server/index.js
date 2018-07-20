//Add dependencies
const express = require('express');
const app = express();


//app.use(bodyParser.text()) this is an alternative to json
const db = require('../db/index.js');
const apiHelpers = require('../lib/apiHelper.js');
const bodyParser = require('body-parser');
const apiSearch = require('../lib/apiSearch.js')

app.use(bodyParser.json()) //This should be adjusted towards the type of req.body we will get
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json()); //or some other type
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(bodyParser.text()) this is an alternative to json


let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}`)
})

//////******route requests*********///


//DESCRIPTION: This will repond to get requests and send back the appropriate data. We may need to use the database.
//STATUS: to be integrated with front-end
app.get('/', (req, res) => {

    // console.log('GET / to server', res);

});

//DESCRIPTION: This will respond to user input on the front-end and send back the appropriate data. req.body will be our friend here.
//STATUS: to be integrated with front end
// app.post('/saveUser', (req, res) => {
//     //const data = req.body;
//     console.log(req.body);
//     const data = {
//             name: 'Uday Trivedi2',
//             password: 'ABCDEF2',
//             zipcode: '917102'
//            };

//     const cb = () => {
//         console.log('success data inserted!');
//     }

//     //db.insertData(data, cb);

// });

app.post('/saveUser', (req, res, next) => {

    // console.log('POST to /, req.body is:', req.body)
    // console.log('response to / from server', res);

    let send = res.send.bind(res)
    let zip = req.body //this might need to change depending on its label

    apiSearch.searchByZip(zip, (response) => {
      res.status(201);
      send(apiHelpers.getOfficials('state', response.data))//is this context ok?
    });

    //uday will add the thing here
});


//DESCRIPTION: This post will grab the user form data (zip code currently)
//             and insert it into the database along with some temporary dummy data

//STATUS:      Still in progress - will be finalized upon oauth implementation
app.post('/', (req, res) => {
    //console.log the data that has been received
    // console.log(req.body);



    // console.log('response to / from server', res);

});


//DESCRIPTION: This feature has yet to be claimed
//STATUS:
app.post('/', (req, res, next) => {

    //console.log('POST to /SOMEOTHERROUTE, req.body is:', req.body)
  });


//DESCRIPTION:This feature has yet to be claimed
//STATUS:
app.put('/', (req, res) => {

    // console.log('PUT to /, req.body is:', req.body)
    // console.log('PUT to /, res is:', res)


    // console.log('response to / from server', res);
})