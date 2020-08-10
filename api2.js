var express = require("express");
var app = express.Router();

app.post("/parse", function (req, res) {

    let newdata = req.body.data.split('0');
    let newArray = [];

    newdata.forEach(item => {
        if (item !== '') {
            newArray.push(item);
        }

    }
    )
    let data ={
        firstname: newArray[0],
        lastname: newArray[1],
        clientId: newArray[2],
    }
    res.status(200).send({
        statusCode: 200,
        data: data
    });
});
module.exports = app; 


