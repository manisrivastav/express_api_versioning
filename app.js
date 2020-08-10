var express = require("express");
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var apiVersion1 = require("./api1.js");
var apiVersion2 = require("./api2.js");
var apiVersion3 = require("./api3.js");
var apiVersion4 = require("./api4.js");


app.use("/v1", apiVersion1);
app.use("/v2", apiVersion2);
app.use("/v3", apiVersion3);
app.use("/v4", apiVersion4);

app.listen(3000, function () {
    console.log("Appstarted on port 3000");
}); 