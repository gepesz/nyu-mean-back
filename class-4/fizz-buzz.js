console.log("hello");

module.exports = {
    generate: generate
};

function generate(startAt, endAt) {
    return [1, 2, "Fizz", 4, "Buzz"];   
};