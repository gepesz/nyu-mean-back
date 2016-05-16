var db = require("../app/db");

/* globals describe it expect beforeEach */
describe("db", function() {
    describe("connecting", function() {
       var connected;
       var disconnected;
       
       beforeEach(function(done) {
           db.connect()
                .then(function() {
                    connected = true;
                    return db.disconnect();
                })
                .then(function() {
                    disconnected = true;
                    done();
                });
       });
       
       it("can connect", function() {
          expect(connected).toEqual(true); 
       });
    });
});    