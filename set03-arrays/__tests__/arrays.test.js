const arrays = require('../arrays');

test('makePair should return [1,2] when given (1, 2)', () => {
  expect(arrays.makePair(1, 2)).toEqual([1,2]);
});

test('makePair should return [21,82] when given (21, 82)', () => {
  expect(arrays.makePair(21, 82)).toEqual([21,82]);
});

test('makePair should return [4213,526] when given (4213, 526)', () => {
  expect(arrays.makePair(4213, 526)).toEqual([4213,526]);
});

test('getFirstValue should return 1 when given [1,2,3]', () => {
  expect(arrays.getFirstValue([1,2,3])).toEqual(1);
});

test('getFirstValue should return 80 when given [80,5,100]', () => {
  expect(arrays.getFirstValue([80,5,100])).toEqual(80);
});

test('getFirstValue should return -500 when given [-500,0,50]', () => {
  expect(arrays.getFirstValue([-500,0,50])).toEqual(-500);
});

test('getFirstValue should return 5 when given [5,2,3]', () => {
  expect(arrays.getFirstValue([5,2,3])).toEqual(5);
});

test('getFirstValue should return 75675 when given [75675,5,100]', () => {
  expect(arrays.getFirstValue([75675,5,100])).toEqual(75675);
});

test('getFirstValue should return -52320 when given [-52320,0,50]', () => {
  expect(arrays.getFirstValue([-52320,0,50])).toEqual(-52320);
});

test('getLastItem should return "Duck" when given ["Cat","Dog","Duck"]', () => {
  expect(arrays.getLastItem(["Cat","Dog","Duck"])).toEqual("Duck");
});

test('getLastItem should return 3 when given [1,2,3]', () => {
  expect(arrays.getLastItem([1,2,3])).toEqual(3);
});

test('getLastItem should return true when given [true,false,false,true]', () => {
  expect(arrays.getLastItem([true,false,false,true])).toEqual(true);
});

test('getLastItem should return false when given [false]', () => {
  expect(arrays.getLastItem([false])).toEqual(false);
});

test('getLastItem should return 45 when given [1,2,3,56,87,23,65,45]', () => {
  expect(arrays.getLastItem([1,2,3,56,87,23,65,45])).toEqual(45);
});

test('getLastItem should return "Apple" when given [true,false,"Apple"]', () => {
  expect(arrays.getLastItem([true,false,"Apple"])).toEqual("Apple");
});

test('getLastItem should return null when given [null,null,null]', () => {
  expect(arrays.getLastItem([null,null,null])).toEqual(null);
});

test('getLastItem should return 1 when given [1]', () => {
  expect(arrays.getLastItem([1])).toEqual(1);
});

test('findIndex should return 3 when given (["abc","ghj","banana","grape"], "grape")', () => {
  expect(arrays.findIndex(["abc","ghj","banana","grape"], "grape")).toEqual(3);
});

test('findIndex should return 5 when given (["a","b","c","d","e","f"], "f")', () => {
  expect(arrays.findIndex(["a","b","c","d","e","f"], "f")).toEqual(5);
});

test('findIndex should return 1 when given (["hi","edabit.com","testcase","validstring"], "edabit.com")', () => {
  expect(arrays.findIndex(["hi","edabit.com","testcase","validstring"], "edabit.com")).toEqual(1);
});

test('check should return true when given ([1,2,3,4,5], 3)', () => {
  expect(arrays.check([1,2,3,4,5], 3)).toEqual(true);
});

test('check should return false when given ([1,1,2,1,1], 3)', () => {
  expect(arrays.check([1,1,2,1,1], 3)).toEqual(false);
});

test('check should return true when given ([1,1,2,1,5,4,7], 7)', () => {
  expect(arrays.check([1,1,2,1,5,4,7], 7)).toEqual(true);
});

test('check should return false when given ([1,1,2,1,5,4,7], 8)', () => {
  expect(arrays.check([1,1,2,1,5,4,7], 8)).toEqual(false);
});

test('check should return true when given ([5,5,5,6], 5)', () => {
  expect(arrays.check([5,5,5,6], 5)).toEqual(true);
});

test('check should return false when given ([], 5)', () => {
  expect(arrays.check([], 5)).toEqual(false);
});

test('search should return 2 when given ([1,2,3,4], 3)', () => {
  expect(arrays.search([1,2,3,4], 3)).toEqual(2);
});

test('search should return 3 when given ([2,4,6,8,10], 8)', () => {
  expect(arrays.search([2,4,6,8,10], 8)).toEqual(3);
});

test('search should return -1 when given ([1,3,5,7,9], 11)', () => {
  expect(arrays.search([1,3,5,7,9], 11)).toEqual(-1);
});

test('search should return 1 when given ([1,5,7,11,25,100,200,350], 5)', () => {
  expect(arrays.search([1,5,7,11,25,100,200,350], 5)).toEqual(1);
});

test('addIndexes should return [0,1,2,3,4] when given [0,0,0,0,0]', () => {
  expect(arrays.addIndexes([0,0,0,0,0])).toEqual([0,1,2,3,4]);
});

test('addIndexes should return [1,3,5,7,9] when given [1,2,3,4,5]', () => {
  expect(arrays.addIndexes([1,2,3,4,5])).toEqual([1,3,5,7,9]);
});

test('addIndexes should return [5,5,5,5,5] when given [5,4,3,2,1]', () => {
  expect(arrays.addIndexes([5,4,3,2,1])).toEqual([5,5,5,5,5]);
});

test('addIndexes should return [-25,-14,5] when given [-25,-15,3]', () => {
  expect(arrays.addIndexes([-25,-15,3])).toEqual([-25,-14,5]);
});

test('addIndexes should return [27] when given [27]', () => {
  expect(arrays.addIndexes([27])).toEqual([27]);
});

test('addIndexes should return [-48,-19,43,32,-21,-12,-7,12,12,4,13,-6,35] when given [-48,-20,41,29,-25,-17,-13,5,4,-5,3,-17,23]', () => {
  expect(arrays.addIndexes([-48,-20,41,29,-25,-17,-13,5,4,-5,3,-17,23])).toEqual([-48,-19,43,32,-21,-12,-7,12,12,4,13,-6,35]);
});

test('addIndexes should return [-32,-23,-48,51,9,-22,-27,4,24,-7,-21,0,55] when given [-32,-24,-50,48,5,-27,-33,-3,16,-16,-31,-11,43]', () => {
  expect(arrays.addIndexes([-32,-24,-50,48,5,-27,-33,-3,16,-16,-31,-11,43])).toEqual([-32,-23,-48,51,9,-22,-27,4,24,-7,-21,0,55]);
});

test('addIndexes should return [38,-7,42,-47,-22,2,-23,-26,21,37] when given [38,-8,40,-50,-26,-3,-29,-33,13,28]', () => {
  expect(arrays.addIndexes([38,-8,40,-50,-26,-3,-29,-33,13,28])).toEqual([38,-7,42,-47,-22,2,-23,-26,21,37]);
});

test('addIndexes should return [-1,-2,-18,16,23,-7,21,15,-41,36,-11,28,53,30,19,-30,-17] when given [-1,-3,-20,13,19,-12,15,8,-49,27,-21,17,41,17,5,-45,-33]', () => {
  expect(arrays.addIndexes([-1,-3,-20,13,19,-12,15,8,-49,27,-21,17,41,17,5,-45,-33])).toEqual([-1,-2,-18,16,23,-7,21,15,-41,36,-11,28,53,30,19,-30,-17]);
});

test('addIndexes should return [35,-47,-15,28,29,-40,-43,-25,-32,57,30,-16,-10,12,-6,10,45,35,-10,-17] when given [35,-48,-17,25,25,-45,-49,-32,-40,48,20,-27,-22,-1,-20,-5,29,18,-28,-36]', () => {
  expect(arrays.addIndexes([35,-48,-17,25,25,-45,-49,-32,-40,48,20,-27,-22,-1,-20,-5,29,18,-28,-36])).toEqual([35,-47,-15,28,29,-40,-43,-25,-32,57,30,-16,-10,12,-6,10,45,35,-10,-17]);
});

test('addIndexes should return [-48] when given [-48]', () => {
  expect(arrays.addIndexes([-48])).toEqual([-48]);
});

test('addIndexes should return [-15,-19,-26,-38,2,-31,-12,-16,52,-8,-2,-22,19,47,19,-1] when given [-15,-20,-28,-41,-2,-36,-18,-23,44,-17,-12,-33,7,34,5,-16]', () => {
  expect(arrays.addIndexes([-15,-20,-28,-41,-2,-36,-18,-23,44,-17,-12,-33,7,34,5,-16])).toEqual([-15,-19,-26,-38,2,-31,-12,-16,52,-8,-2,-22,19,47,19,-1]);
});

test('addIndexes should return [-20,26,51,-1,-16,-21,29,30,-42,53,-38,-16] when given [-20,25,49,-4,-20,-26,23,23,-50,44,-48,-27]', () => {
  expect(arrays.addIndexes([-20,25,49,-4,-20,-26,23,23,-50,44,-48,-27])).toEqual([-20,26,51,-1,-16,-21,29,30,-42,53,-38,-16]);
});

test('addIndexes should return [-9,47,-15,29,4,-21,18,-8,-22,-35,39,56,-26,-30] when given [-9,46,-17,26,0,-26,12,-15,-30,-44,29,45,-38,-43]', () => {
  expect(arrays.addIndexes([-9,46,-17,26,0,-26,12,-15,-30,-44,29,45,-38,-43])).toEqual([-9,47,-15,29,4,-21,18,-8,-22,-35,39,56,-26,-30]);
});

test('addIndexes should return [-44,-41,28,-47,-25,-27,-16,34,-23,30,-2,-7,-1,-11,38,50] when given [-44,-42,26,-50,-29,-32,-22,27,-31,21,-12,-18,-13,-24,24,35]', () => {
  expect(arrays.addIndexes([-44,-42,26,-50,-29,-32,-22,27,-31,21,-12,-18,-13,-24,24,35])).toEqual([-44,-41,28,-47,-25,-27,-16,34,-23,30,-2,-7,-1,-11,38,50]);
});

test('addIndexes should return [49,-27,-28,38] when given [49,-28,-30,35]', () => {
  expect(arrays.addIndexes([49,-28,-30,35])).toEqual([49,-27,-28,38]);
});

test('reverse should return [4,3,2,1] when given [1,2,3,4]', () => {
  expect(arrays.reverse([1,2,3,4])).toEqual([4,3,2,1]);
});

test('reverse should return [7,6,5] when given [5,6,7]', () => {
  expect(arrays.reverse([5,6,7])).toEqual([7,6,5]);
});

test('reverse should return [4,3,2,9,9] when given [9,9,2,3,4]', () => {
  expect(arrays.reverse([9,9,2,3,4])).toEqual([4,3,2,9,9]);
});

test('reverse should return [3,3] when given [3,3]', () => {
  expect(arrays.reverse([3,3])).toEqual([3,3]);
});

test('reverse should return [-1,-1,-1] when given [-1,-1,-1]', () => {
  expect(arrays.reverse([-1,-1,-1])).toEqual([-1,-1,-1]);
});

test('reverse should return [] when given []', () => {
  expect(arrays.reverse([])).toEqual([]);
});

test('getSumOfItems should return 13 when given [2,7,4]', () => {
  expect(arrays.getSumOfItems([2,7,4])).toEqual(13);
});

test('getSumOfItems should return 48 when given [45,3,0]', () => {
  expect(arrays.getSumOfItems([45,3,0])).toEqual(48);
});

test('getSumOfItems should return 105 when given [-2,84,23]', () => {
  expect(arrays.getSumOfItems([-2,84,23])).toEqual(105);
});

test('arrayLessThan100 should return true when given [5,57]', () => {
  expect(arrays.arrayLessThan100([5,57])).toEqual(true);
});

test('arrayLessThan100 should return false when given [77,30]', () => {
  expect(arrays.arrayLessThan100([77,30])).toEqual(false);
});

test('arrayLessThan100 should return true when given [0,59,15]', () => {
  expect(arrays.arrayLessThan100([0,59,15])).toEqual(true);
});

test('arrayLessThan100 should return true when given [0]', () => {
  expect(arrays.arrayLessThan100([0])).toEqual(true);
});

test('arrayLessThan100 should return false when given [35,59,15]', () => {
  expect(arrays.arrayLessThan100([35,59,15])).toEqual(false);
});

test('arrayLessThan100 should return false when given [25,50,25]', () => {
  expect(arrays.arrayLessThan100([25,50,25])).toEqual(false);
});

test('sumFive should return 77 when given [1,5,20,30,4,9,18]', () => {
  expect(arrays.sumFive([1,5,20,30,4,9,18])).toEqual(77);
});

test('sumFive should return 0 when given [1,2,3,4]', () => {
  expect(arrays.sumFive([1,2,3,4])).toEqual(0);
});

test('sumFive should return 252 when given [10,12,28,47,55,100]', () => {
  expect(arrays.sumFive([10,12,28,47,55,100])).toEqual(252);
});

test('sumFive should return 111 when given [25,44,6,4,3,36]', () => {
  expect(arrays.sumFive([25,44,6,4,3,36])).toEqual(111);
});

test('sumFive should return 591 when given [5,2,150,187,254,0]', () => {
  expect(arrays.sumFive([5,2,150,187,254,0])).toEqual(591);
});

test('sumFive should return 4400 when given [1000,2500,2,4,500,400]', () => {
  expect(arrays.sumFive([1000,2500,2,4,500,400])).toEqual(4400);
});

test('sumFive should return 821.3 when given [125.5,147.2,548.6,2.3,1.5]', () => {
  expect(arrays.sumFive([125.5,147.2,548.6,2.3,1.5])).toEqual(821.3);
});

test('getMultipliedArr should return [4,10,6] when given [2,5,3]', () => {
  expect(arrays.getMultipliedArr([2,5,3])).toEqual([4,10,6]);
});

test('getMultipliedArr should return [2,172,-10] when given [1,86,-5]', () => {
  expect(arrays.getMultipliedArr([1,86,-5])).toEqual([2,172,-10]);
});

test('getMultipliedArr should return [10,764,0] when given [5,382,0]', () => {
  expect(arrays.getMultipliedArr([5,382,0])).toEqual([10,764,0]);
});
