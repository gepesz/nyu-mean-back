var mongoose = require("mongoose");

module.exports = Thing;

var thingSchema = mongoose.Schema({
    name: String
});

var Thing = mongoose.model("thing", thingSchema);

