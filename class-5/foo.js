module.exports = Foo;

function generateMessage(name) {
    return "Hello my name is " + name + ".";
}

function Foo(name) {
    this.name = name;
    this.sayHello = function() {
       return "Hello my name is " + this.name + ".";
    };
    this.sayHelloLoudly = function() {
       return generateMessage(this.name).toUpperCase();
    };
}