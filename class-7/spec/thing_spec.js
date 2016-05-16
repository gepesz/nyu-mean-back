var Thing = require("../app/thing");
var db = require("../app/db");

/* globals describe it expect beforeEach afterEach */
describe("Thing", function() {
    beforeEach(function(done) {
        db.connect()
        .then(function() {
            return Thing.remove({});
        })
        .then(function() {
            var rock = new Thing({ name: 'Rock' });
            return rock.save();
        })
        .then(function() {
            var paper = new Thing({ name: 'Paper' });
            return paper.save();
        })
        .then(function() {
            var scissor = new Thing({ name: 'Scissor' });
            return scissor.save();
        })
        .then(function() {
            done();
        });
    });
    afterEach(function(done) {
        db.disconnect()
        .then(function() {
            done();
        });
    });
    
    it("exists", function() {
       expect(Thing).toBeDefined();
    });
    
    describe("find", function() {
        var things;
        
        beforeEach(function(done) {
            Thing.find()
                .then(function(_things) {
                    things = _things;
                })
                .then(function() {
                    done();
                });
        });
        
        it("there are 3 things", function() {
           expect(things.length).toEqual(3);
        });
    });
    
    describe("findOne", function(){
       describe("with name of Rock", function(){
           var name;
           beforeEach(function(done){
               Thing.findOne({ name: 'Rock'})
                    .then(function(_rock){
                        name = _rock.name;
                        done();
                    });
           });
           it("returns the rock", function(){
              expect(name).toEqual("Rock"); 
           });
       }); 
    });    
});