var express = require("express");
var app = express.Router();

app.post("/parse", function (req, res) {

    let newData = req.body.data

    let newArr = []
    newArr.push(newData.substr(0, 8), newData.substr(8, 10), newData.substr(18, 7));

    let data = {
        firstname: newArr[0],
        lastname: newArr[1],
        clientId: newArr[2],
    }
    
    res.status(200).send({
        statusCode: 200,
        data: data
    });
});

module.exports = app;
