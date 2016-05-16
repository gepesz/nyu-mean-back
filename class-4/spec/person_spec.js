var Person = require("../person");
/* globals describe it expect beforeEach */
describe("Person", function() {
    it("exists", function() {
        expect(Person).toBeDefined();
    });
    
    describe("creating a person", function() {
        describe("with a name of eric", function() {
           var person;
           beforeEach(function() {
              person = new Person("Eric"); 
           });
           it("has a name of ERIC", function() {
                expect(person.name).toEqual("ERIC");
           });
        });
    });
});