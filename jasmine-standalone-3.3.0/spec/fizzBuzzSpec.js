describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

it("should check num is divisible by 3", function() {
  expect(fizzbuzz.divisibleByThree(3)).toBe(true);
});
});
