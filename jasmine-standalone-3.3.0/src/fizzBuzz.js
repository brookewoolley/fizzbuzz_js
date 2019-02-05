var Fizzbuzz = function() {};

Fizzbuzz.prototype._isDivisibleBy = function(num, divisor) {
 return (num % divisor === 0);
};

Fizzbuzz.prototype.isDivisibleByThree = function(num) {
  return this._isDivisibleBy(num, 3);
}

Fizzbuzz.prototype.isDivisibleByFive = function(num) {
  return this._isDivisibleBy(num, 5);
}

Fizzbuzz.prototype.isDivisibleByFifteen = function(num) {
  return this._isDivisibleBy(num, 15);
}
