var Q = require("q");
module.exports = Foo;

function Foo(name) {
    this.name = name;
}

Foo.prototype = {
    doSomething: function(msg, cb) {
        var dfd = Q.defer();
        var that = this;
        setTimeout(function() {
            var result = (that.name + ":" + msg).toUpperCase();
            if ( msg == "bad" ) {
                dfd.reject("BAD is bad");
            } else {
                dfd.resolve(result);
            }
        }, 500);
        return dfd.promise;
    }
}