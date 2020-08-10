var express = require("express");
var app = express.Router();
var process = require("./processer")

app.post("/parse", function (req, res) {
    let newdata = req.body.data
    var responseData = process.processer(newdata);
    console.log(responseData);
    let data ={
        firstname: responseData[0],
        lastname: responseData[2] ,
        clientId: responseData[4] + "-" + responseData[5],
    }
    res.status(200).send({
        statusCode: 200,
        data: data
    });
});
module.exports = app;

