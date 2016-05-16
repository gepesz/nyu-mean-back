/* globals _ */
function Thing(config) {
  this.name = config.name;
  this.numberInStock = config.numberInStock;
  this.numberOwned = config.numberOwned || 0;
}

Thing.prototype = {
    available: function() {
        return this.numberInStock > 0;
    },
    isOwned: function() {
        return this.numberOwned > 0;
    }
};