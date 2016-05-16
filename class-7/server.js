var express = require("express");
var db = require("./app/db");

db.connect()
    .then(function() {
       console.log("database is connected"); 
    });

var app = express();
app.locals.pretty = true;
app.set("view engine", "jade");

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/things", function(req, res) {
    res.render("things");
});

app.get("/people", function(req, res) {
    res.render("people");
});


app.listen(process.env.PORT);