/* globals _ */
function Person(config) {
    this.init(config);
}

Person.prototype = {
    init: function(config) {
        this.things = config.things || [];
        this.name = config.name;
        this.active = config.active || false;
    },
    things: function() {
        return this.things;
    },
    hasThing: function(name) {
        return _.includes(this.things, name);
    }
};