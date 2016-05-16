var mongoose = require("mongoose");

var thingSchema = mongoose.Schema({
    name: { required: true, type: String, unique: true },
    active: { type: Boolean, default: false }
});

var Thing = mongoose.model("thing", thingSchema);

module.exports = Thing;