/* globals describe it expect FizzBuzz */
describe("FizzBuzz", function() {
   it("exists", function() {
      expect(FizzBuzz).toBeDefined(); 
   });
   describe("#generate", function() {
      it("when passed 1 returns [1]", function() {
          expect(FizzBuzz.generate(1)).toEqual([1]);
      });
      it("when passed 2 returns [1, 2]", function() {
          expect(FizzBuzz.generate(2)).toEqual([1, 2]);
      });
      it("when passed 3 returns [1, 2, 'Fizz']", function() {
          expect(FizzBuzz.generate(3)).toEqual([1, 2, 'Fizz']);
      });
      it("when passed 5 returns [1, 2, 'Fizz', 4, 'Buzz']", function() {
          expect(FizzBuzz.generate(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
      });
      it("when passed 15 element 14 is 'FizzBuzz']", function() {
          expect(FizzBuzz.generate(15)[14]).toEqual('FizzBuzz');
      });
   });
});