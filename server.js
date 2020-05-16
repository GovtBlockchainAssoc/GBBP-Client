'use strict';
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var app = express();
app.use(cookieParser());
app.use(cors());
app.use(cors({ origin: "*", credentials: true }));
var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));
var srvr = app.listen(process.env.PORT || 1337, function () {
    console.log('GBBP Client Server listening');
});
//# sourceMappingURL=server.js.map