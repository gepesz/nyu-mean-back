/* globals describe it expect beforeEach */
var Foo = require("./foo.js");

describe("Foo", function() {
   it("exists", function() {
      expect(Foo).toBeDefined(); 
   });
   describe("construction a new foo", function() {
      var foo;
      beforeEach(function() {
         foo = new Foo("xyz");
      });
      it("can be created", function() {
          expect(foo).toBeDefined();
      });
      it("has a name of xyz", function() {
          expect(foo.name).toEqual("xyz");
      });
      it("can say hello", function() {
          expect(foo.sayHello()).toEqual("Hello my name is xyz.");
      });
      it("can say hello loudly", function() {
          expect(foo.sayHelloLoudly()).toEqual("HELLO MY NAME IS XYZ.");
      });
   });
});