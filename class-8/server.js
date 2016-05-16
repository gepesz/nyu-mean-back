var express = require("express");
var Tab = require("./app/tab");
var db = require("./app/config/db");
var Thing = require("./app/models/things");
var bodyParser = require("body-parser");

db.connect()
    .then(function() {
        console.log("connected");
    });

var app = express();
app.set("view engine", "jade");
app.locals.pretty = true;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({}));
app.use(function(req, res, next) {
    res.locals.tabs = [
        new Tab("Home", "/"),
        new Tab("Things", "/things"),
        new Tab("People", "/people")
    ];
    next();
});

app.get("/", function(req, res) {
    res.render("index", {
        title: "Hello there!",
        activePath: "/"
    });
});
app.get("/people", function(req, res) {
    res.render("people", {
        title: "People",
        activePath: "/people"
    });
});

app.get("/things", function(req, res) {
    Thing.find({}).then(function(things) {
        res.render("things", {
            title: "Things",
            activePath: "/things",
            things: things
        });
    });
});

app.post("/things/new", function(req, res) {
    // console.log(req.body);
    var thing = new Thing(req.body);
    thing.name = thing.name.trim();  // no spaces allowed
    thing.save(function(err) {
        var next = "/things";
        if ( err ) {
            // error case
            var error;
            console.log(err);
            if ( err.name === "ValidationError" ) {
                // empty name issue
                error = "1";
            } else if ( err.name === "MongoError" ) {
                // duplicate name issue
                error = "2";
            } else {
                throw "Unknown error encountered: " + err;
            }
            next += "/new?error=" + error;
        }
        
        // redirect to 'next'
        // console.log("Next ==> " + next);
        res.redirect(next);
    });
});

app.post("/things/:id", function(req, res) {
    // console.log(req.body);
    var action = req.body.action;
    if ( action === "Update" ) {
        Thing.update(
            {_id: req.params.id},
            {$set:{ name: req.body.name,
                    active: req.body.active || false }},
            { runValidators: true },
            function(err) {
                var next = "/things";
                if ( err ) {
                    // error case
                    var error;
                    console.log(err);
                    if ( err.name === "ValidationError" ) {
                        // empty name issue
                        error = "1";
                    } else if ( err.name === "MongoError" ) {
                        // duplicate name issue
                        error = "2";
                    } else {
                        throw "Unknown error encountered: " + err;
                    }
                    next += "/" + req.params.id + "?error=" + error;
                }
                
                // redirect to 'next'
                // console.log("Next ==> " + next);
                res.redirect(next);
            }
        );
    } else if ( action === "Delete" ) {
        Thing.remove({_id: req.params.id})
            .then(function() {
                res.redirect("/things");
            });
    } else {
        throw "Unknown action: " + action;
    }
});

app.get("/things/new", function(req, res) {
    res.render("thing_new", {
        title: "Create a new thing",
        activePath: "/things",
        req: req
    });
});
app.get("/things/:id", function(req, res) {
    Thing.findById(req.params.id)
        .then(function(thing) {
            res.render("thing", {
                title: "Thing: " + thing.name,
                activePath: "/things",
                thing: thing,
                req: req
            })
        });
});

app.listen(process.env.PORT);