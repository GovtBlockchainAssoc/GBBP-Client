'use strict';
if (process.env.NODE_ENV !== 'production') { require('dotenv').config(); }
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var Web3 = require('web3');

let webGBBP = new Web3(new Web3.providers.HttpProvider('http://etht5zt7j-dns-reg1.eastus2.cloudapp.azure.com:8540'));
webGBBP.eth.net.getId().then((id) => console.log("GBBP = " + id));

var app = express();
app.use(cookieParser());
app.use(cors());
app.use(cors({ origin: "*", credentials: true }));

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

var srvr = app.listen(process.env.PORT || 1337, function () {
    console.log('GBA DAO listening');
});
