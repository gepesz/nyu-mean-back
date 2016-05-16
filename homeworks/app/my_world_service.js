/* globals _ */
function MyWorldService(people, things) {
    this.people = people;
    this.things = things;
}

MyWorldService.prototype = {
    getPeople: function(isActive) {
        var people = this.people;
        if ( isActive ) {
            people = _.filter(people, {active: true});
        }
        return _.sortBy(people, "name");
    },
    getPerson: function(name) {
        return _.find(this.people, {name: name});
    },
    getThings: function() {
        return _.sortBy(this.things, "name");
    },
    getThing: function(name) {
        return _.find(this.things, {name: name});
    },
    acquireThing: function(personName, thingName) {
        var person = this.getPerson(personName);
        var thing = this.getThing(thingName);
        
        if ( thing.available() ) {
            person.things.push(thingName);
            thing.numberInStock--;
            thing.numberOwned++;
        } else {
            throw "No more " + thingName + " available";
        }

        return true;
    },
    returnThing: function(personName, thingName) {
        var person = this.getPerson(personName);
        var thing = this.getThing(thingName);
        
        if ( person.hasThing(thingName) ) {
            console.log(person.things);
            _.remove(person.things, function(item){ return item == thingName});
            thing.numberInStock++;
            thing.numberOwned--;
        } else {
            throw "Cannot return " + thingName;
        }
        
        return true;
    },
    getPeopleWhoOwnThing: function(thingName) {
        return _.filter(this.people, function(p) {
           return p.hasThing(thingName) ;
        });
    },
    getPeopleWhoOwnNothing: function() {
        return _.filter(this.people, function(p) {
            return p.things.length == 0;
        });
    },
    getThingsOwned: function() {
        return _.filter(this.things, function(t) {
            return t.isOwned();
        });
    },
    getThingsNotOwned: function() {
        return _.filter(this.things, function(t) {
           return !t.isOwned();
        });
    }
};
