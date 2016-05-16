/* globals describe expect it beforeEach */

var Foo = require("../app/foo");

describe("Foo", function() {
   it("exists", function() {
      expect(Foo).toBeDefined(); 
   });
   describe("it can be created", function() {
       var foo;
       beforeEach(function() {
           foo = new Foo("bar");
       });
       it("foo has name of bar", function() {
           expect(foo.name).toEqual("bar");
       });
   });
   describe("doSomething", function() {
      describe("name is foo and message is bar", function() {
          var result;
          beforeEach(function(done) {
             var foo = new Foo("bizz");
             foo.doSomething("bar").then(function(_result) {
                 console.log(_result);
                 result = _result;
                 done();
             });
          });
          it("result is BIZZ:BAR", function() {
              expect(result).toEqual("BIZZ:BAR");
          });
      });
      describe("name is bizz and message is bad", function() {
          var error;
          beforeEach(function(done) {
             var foo = new Foo("bizz");
             foo.doSomething("bad").catch(function(_error) {
                 console.log(_error);
                 error = _error;
                 done();
             });
          });
          it("result is BIZZ:BAD", function() {
              expect(error).toEqual("BAD is bad");
          });
      });
   });
    
});