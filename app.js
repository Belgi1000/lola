//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const noUiSlider = require("nouislider");


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){

console.log("You are listening on port 3000");

});

var slider = document.getElementById("slider");

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});


// app.post("/", function(req,res){
//
// var userName = req.body.firstName;
// // var userLastName = req.body.lastName;
// // var userEmail = req.body.email;
// // var data = {
// //   url:"https://us20.api.mailchimp.com/3.0/lists/1fa92f0ec2/",
// //   method:"POST",
// //
// // };
// //
// //
// //
// // request(data, function(error, response,body){
// //
// //
// //
// // });
// //
// //   console.log(userName, userLastName, userEmail);
// //
// //
// //   // ba4cf72a9c5a972025689c66029b87b3-us20
//
//   // 1fa92f0ec2
//
// // var headUrl = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
// // var crypto = req.body.crypto;
// // var fiat = req.body.fiat;
// //
// // var finalUrl = headUrl + crypto + fiat;
//   // request(finalUrl, function (error, response, body){
// //
// //     var data = JSON.parse(body);
// //     var price = data.averages.week;
// //     var currentDate = data.display_timestamp;
// //     res.write("<p>The current date is " + currentDate + "</p>");
// //     res.write("<h1>The current price of " + crypto + " is " + price + fiat +"</h1>");
// //   res.send();
//
// // });
//
