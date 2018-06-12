var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


var app = express();

const user_db = mongoose.createConnection('mongodb://localhost:27017/user_db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// ALLOW ACCESS HEADERS
app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,access-token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware   
    next();
});

let user_model = require('./api/models/user_model');
let user_routes = require('./api/routes/user_routes');

user_routes(app); // routing all the requests to api/routes/user_routes

app.listen(3000);