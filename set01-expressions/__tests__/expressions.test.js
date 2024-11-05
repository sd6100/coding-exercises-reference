const expressions = require('../expressions');

test('addition should return 3 when given 2', () => {
  expect(expressions.addition(2)).toEqual(3);
});

test('addition should return -8 when given -9', () => {
  expect(expressions.addition(-9)).toEqual(-8);
});

test('addition should return 1 when given 0', () => {
  expect(expressions.addition(0)).toEqual(1);
});

test('addition should return 1000 when given 999', () => {
  expect(expressions.addition(999)).toEqual(1000);
});

test('addition should return 74 when given 73', () => {
  expect(expressions.addition(73)).toEqual(74);
});

test('calcAge should return 3650 when given 10', () => {
  expect(expressions.calcAge(10)).toEqual(3650);
});

test('calcAge should return 0 when given 0', () => {
  expect(expressions.calcAge(0)).toEqual(0);
});

test('calcAge should return 26645 when given 73', () => {
  expect(expressions.calcAge(73)).toEqual(26645);
});

test('howManySeconds should return 7200 when given 2', () => {
  expect(expressions.howManySeconds(2)).toEqual(7200);
});

test('howManySeconds should return 36000 when given 10', () => {
  expect(expressions.howManySeconds(10)).toEqual(36000);
});

test('howManySeconds should return 86400 when given 24', () => {
  expect(expressions.howManySeconds(24)).toEqual(86400);
});

test('howManySeconds should return 129600 when given 36', () => {
  expect(expressions.howManySeconds(36)).toEqual(129600);
});

test('addition2 should return 5 when given (2, 3)', () => {
  expect(expressions.addition2(2, 3)).toEqual(5);
});

test('addition2 should return -9 when given (-3, -6)', () => {
  expect(expressions.addition2(-3, -6)).toEqual(-9);
});

test('addition2 should return 10 when given (7, 3)', () => {
  expect(expressions.addition2(7, 3)).toEqual(10);
});

test('addition2 should return 90 when given (88, 2)', () => {
  expect(expressions.addition2(88, 2)).toEqual(90);
});

test('findPerimeter should return 26 when given (6, 7)', () => {
  expect(expressions.findPerimeter(6, 7)).toEqual(26);
});

test('findPerimeter should return 60 when given (20, 10)', () => {
  expect(expressions.findPerimeter(20, 10)).toEqual(60);
});

test('findPerimeter should return 22 when given (2, 9)', () => {
  expect(expressions.findPerimeter(2, 9)).toEqual(22);
});

test('triArea should return 3 when given (3, 2)', () => {
  expect(expressions.triArea(3, 2)).toEqual(3);
});

test('triArea should return 10 when given (5, 4)', () => {
  expect(expressions.triArea(5, 4)).toEqual(10);
});

test('triArea should return 50 when given (10, 10)', () => {
  expect(expressions.triArea(10, 10)).toEqual(50);
});

test('triArea should return 0 when given (0, 60)', () => {
  expect(expressions.triArea(0, 60)).toEqual(0);
});

test('triArea should return 66 when given (12, 11)', () => {
  expect(expressions.triArea(12, 11)).toEqual(66);
});

test('calculateExponent should return 3125 when given (5, 5)', () => {
  expect(expressions.calculateExponent(5, 5)).toEqual(3125);
});

test('calculateExponent should return 27 when given (3, 3)', () => {
  expect(expressions.calculateExponent(3, 3)).toEqual(27);
});

test('calculateExponent should return 10000000000 when given (10, 10)', () => {
  expect(expressions.calculateExponent(10, 10)).toEqual(10000000000);
});

test('remainder should return 1 when given (7, 2)', () => {
  expect(expressions.remainder(7, 2)).toEqual(1);
});

test('remainder should return 3 when given (3, 4)', () => {
  expect(expressions.remainder(3, 4)).toEqual(3);
});

test('remainder should return -9 when given (-9, 45)', () => {
  expect(expressions.remainder(-9, 45)).toEqual(-9);
});

test('remainder should return 0 when given (5, 5)', () => {
  expect(expressions.remainder(5, 5)).toEqual(0);
});

test('points should return 5 when given (1, 1)', () => {
  expect(expressions.points(1, 1)).toEqual(5);
});

test('points should return 8 when given (1, 2)', () => {
  expect(expressions.points(1, 2)).toEqual(8);
});

test('points should return 7 when given (2, 1)', () => {
  expect(expressions.points(2, 1)).toEqual(7);
});

test('points should return 10 when given (2, 2)', () => {
  expect(expressions.points(2, 2)).toEqual(10);
});

test('points should return 1398 when given (69, 420)', () => {
  expect(expressions.points(69, 420)).toEqual(1398);
});

test('animals should return 50 when given (5, 2, 8)', () => {
  expect(expressions.animals(5, 2, 8)).toEqual(50);
});

test('animals should return 50 when given (3, 4, 7)', () => {
  expect(expressions.animals(3, 4, 7)).toEqual(50);
});

test('animals should return 22 when given (1, 2, 3)', () => {
  expect(expressions.animals(1, 2, 3)).toEqual(22);
});

test('animals should return 34 when given (3, 5, 2)', () => {
  expect(expressions.animals(3, 5, 2)).toEqual(34);
});

test('giveMeSomething should return "something a" when given "a"', () => {
  expect(expressions.giveMeSomething("a")).toEqual("something a");
});

test('giveMeSomething should return "something is cooking" when given "is cooking"', () => {
  expect(expressions.giveMeSomething("is cooking")).toEqual("something is cooking");
});

test('giveMeSomething should return "something  is cooking" when given " is cooking"', () => {
  expect(expressions.giveMeSomething(" is cooking")).toEqual("something  is cooking");
});

test('concatName should return "Doe, John" when given ("John", "Doe")', () => {
  expect(expressions.concatName("John", "Doe")).toEqual("Doe, John");
});

test('concatName should return "Last, First" when given ("First", "Last")', () => {
  expect(expressions.concatName("First", "Last")).toEqual("Last, First");
});

test('concatName should return "B, A" when given ("A", "B")', () => {
  expect(expressions.concatName("A", "B")).toEqual("B, A");
});

test('concatName should return ",, ," when given (",", ",")', () => {
  expect(expressions.concatName(",", ",")).toEqual(",, ,");
});
