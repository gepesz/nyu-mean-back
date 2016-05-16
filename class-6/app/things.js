var mongoose = require("mongoose");
console.log("hello");

mongoose.connect("mongodb://localhost:27017/my_world");

var thingSchema = mongoose.Schema({
    name: String
});

var Thing = mongoose.model("thing", thingSchema);

mongoose.connection.on("open", function() {
    Thing.find(function(err, result) {
        console.log(err);
        console.log(JSON.stringify(result));
        console.log("------");
    });
    Thing.findById("55947cb1c0bbfd96c9415f73", function(err, result) {
         console.log("HERE IS ROCK");
         console.log(err);
         console.log(result);
    }); 
    Thing.find({name: "rock"}).then(function(rock) {
        console.log(rock);
    });
    
    var newThing = new Thing({name: Math.random().toString()});
    newThing.save();
   console.log("I am ready");
});   

mongoose.connection.on("error", function(error) {
   console.log(error);
});   
