const arrays2 = require('../arrays2');

test('isFourLetters should return ["Ryan","Matt"] when given ["Ryan","Kieran","Jason","Matt"]', () => {
  expect(arrays2.isFourLetters(["Ryan","Kieran","Jason","Matt"])).toEqual(["Ryan","Matt"]);
});

test('isFourLetters should return ["Pair"] when given ["Tomato","Potato","Pair"]', () => {
  expect(arrays2.isFourLetters(["Tomato","Potato","Pair"])).toEqual(["Pair"]);
});

test('isFourLetters should return ["Bear"] when given ["Kangaroo","Bear","Fox"]', () => {
  expect(arrays2.isFourLetters(["Kangaroo","Bear","Fox"])).toEqual(["Bear"]);
});

test('isFourLetters should return ["Blue","Pink"] when given ["Red","Blue","Green","Pink"]', () => {
  expect(arrays2.isFourLetters(["Red","Blue","Green","Pink"])).toEqual(["Blue","Pink"]);
});

test('isFourLetters should return [] when given ["is","up","two","elephant"]', () => {
  expect(arrays2.isFourLetters(["is","up","two","elephant"])).toEqual([]);
});

test('isFourLetters should return [] when given []', () => {
  expect(arrays2.isFourLetters([])).toEqual([]);
});

test('isFourLetters should return ["jazz","quiz","jump"] when given ["jazz","quiz","jump"]', () => {
  expect(arrays2.isFourLetters(["jazz","quiz","jump"])).toEqual(["jazz","quiz","jump"]);
});

test('isFourLetters should return [] when given [""]', () => {
  expect(arrays2.isFourLetters([""])).toEqual([]);
});

test('isFourLetters should return [] when given ["Broccoli","Carrot","Spinach"]', () => {
  expect(arrays2.isFourLetters(["Broccoli","Carrot","Spinach"])).toEqual([]);
});

test('hurdleJump should return true when given ([1,2,3,4,5], 5)', () => {
  expect(arrays2.hurdleJump([1,2,3,4,5], 5)).toEqual(true);
});

test('hurdleJump should return false when given ([5,5,3,4,5], 3)', () => {
  expect(arrays2.hurdleJump([5,5,3,4,5], 3)).toEqual(false);
});

test('hurdleJump should return true when given ([5,4,5,6], 10)', () => {
  expect(arrays2.hurdleJump([5,4,5,6], 10)).toEqual(true);
});

test('hurdleJump should return false when given ([1,2,1], 1)', () => {
  expect(arrays2.hurdleJump([1,2,1], 1)).toEqual(false);
});

test('hurdleJump should return true when given ([3,3,3], 4)', () => {
  expect(arrays2.hurdleJump([3,3,3], 4)).toEqual(true);
});

test('hurdleJump should return false when given ([4,4], 3)', () => {
  expect(arrays2.hurdleJump([4,4], 3)).toEqual(false);
});

test('hurdleJump should return true when given ([], 4)', () => {
  expect(arrays2.hurdleJump([], 4)).toEqual(true);
});

test('addEnding should return ["cleverly","meekly","hurriedly","nicely"] when given (["clever","meek","hurried","nice"], "ly")', () => {
  expect(arrays2.addEnding(["clever","meek","hurried","nice"], "ly")).toEqual(["cleverly","meekly","hurriedly","nicely"]);
});

test('addEnding should return ["newer","panderer","scooper"] when given (["new","pander","scoop"], "er")', () => {
  expect(arrays2.addEnding(["new","pander","scoop"], "er")).toEqual(["newer","panderer","scooper"]);
});

test('addEnding should return ["bending","sharpening","meaning"] when given (["bend","sharpen","mean"], "ing")', () => {
  expect(arrays2.addEnding(["bend","sharpen","mean"], "ing")).toEqual(["bending","sharpening","meaning"]);
});

test('addEnding should return ["bendy","toothy","minty"] when given (["bend","tooth","mint"], "y")', () => {
  expect(arrays2.addEnding(["bend","tooth","mint"], "y")).toEqual(["bendy","toothy","minty"]);
});

test('addEnding should return ["bendier","toothier","mintier"] when given (["bend","tooth","mint"], "ier")', () => {
  expect(arrays2.addEnding(["bend","tooth","mint"], "ier")).toEqual(["bendier","toothier","mintier"]);
});

test('correctStream should return [1,1,-1] when given (["it","is","find"], ["it","is","fine"])', () => {
  expect(arrays2.correctStream(["it","is","find"], ["it","is","fine"])).toEqual([1,1,-1]);
});

test('correctStream should return [1,-1,1,1,1] when given (["april","showrs","bring","may","flowers"], ["april","showers","bring","may","flowers"])', () => {
  expect(arrays2.correctStream(["april","showrs","bring","may","flowers"], ["april","showers","bring","may","flowers"])).toEqual([1,-1,1,1,1]);
});

test('correctStream should return [1,-1,1] when given (["weird","indicr","moment"], ["weird","indict","moment"])', () => {
  expect(arrays2.correctStream(["weird","indicr","moment"], ["weird","indict","moment"])).toEqual([1,-1,1]);
});

test('correctStream should return [1,1,1] when given (["starry","wind","skies"], ["starry","wind","skies"])', () => {
  expect(arrays2.correctStream(["starry","wind","skies"], ["starry","wind","skies"])).toEqual([1,1,1]);
});

test('countdown should return [3,2,1,0] when given 3', () => {
  expect(arrays2.countdown(3)).toEqual([3,2,1,0]);
});

test('countdown should return [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0] when given 20', () => {
  expect(arrays2.countdown(20)).toEqual([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]);
});

test('countdown should return [1,0] when given 1', () => {
  expect(arrays2.countdown(1)).toEqual([1,0]);
});

test('countdown should return [0] when given 0', () => {
  expect(arrays2.countdown(0)).toEqual([0]);
});

test('negate should return [-1,-2,-3,-4] when given [1,2,3,4]', () => {
  expect(arrays2.negate([1,2,3,4])).toEqual([-1,-2,-3,-4]);
});

test('negate should return [1,2,3,4] when given [-1,-2,-3,-4]', () => {
  expect(arrays2.negate([-1,-2,-3,-4])).toEqual([1,2,3,4]);
});

test('negate should return [] when given []', () => {
  expect(arrays2.negate([])).toEqual([]);
});

test('findSmallestNum should return 2 when given [34,15,88,2]', () => {
  expect(arrays2.findSmallestNum([34,15,88,2])).toEqual(2);
});

test('findSmallestNum should return -345 when given [34,-345,-1,100]', () => {
  expect(arrays2.findSmallestNum([34,-345,-1,100])).toEqual(-345);
});

test('findSmallestNum should return -76 when given [-76,1.345,1,0]', () => {
  expect(arrays2.findSmallestNum([-76,1.345,1,0])).toEqual(-76);
});

test('findSmallestNum should return -0.9999 when given [0.4356,0.8795,0.5435,-0.9999]', () => {
  expect(arrays2.findSmallestNum([0.4356,0.8795,0.5435,-0.9999])).toEqual(-0.9999);
});

test('findSmallestNum should return 7 when given [7,7,7]', () => {
  expect(arrays2.findSmallestNum([7,7,7])).toEqual(7);
});

test('findSmallestNum should return 1 when given [4,6,1,3,4,5,5,1]', () => {
  expect(arrays2.findSmallestNum([4,6,1,3,4,5,5,1])).toEqual(1);
});

test('findSmallestNum should return -8 when given [-4,-6,-8,-1]', () => {
  expect(arrays2.findSmallestNum([-4,-6,-8,-1])).toEqual(-8);
});

test('findSmallestNum should return 23 when given [54,76,23,54]', () => {
  expect(arrays2.findSmallestNum([54,76,23,54])).toEqual(23);
});

test('findSmallestNum should return 100 when given [100]', () => {
  expect(arrays2.findSmallestNum([100])).toEqual(100);
});

test('findSmallestNum should return 0 when given [0,1,2,3,4,5]', () => {
  expect(arrays2.findSmallestNum([0,1,2,3,4,5])).toEqual(0);
});

test('nextElement should return 11 when given [3,5,7,9]', () => {
  expect(arrays2.nextElement([3,5,7,9])).toEqual(11);
});

test('nextElement should return -8 when given [-5,-6,-7]', () => {
  expect(arrays2.nextElement([-5,-6,-7])).toEqual(-8);
});

test('nextElement should return 2 when given [2,2,2,2,2]', () => {
  expect(arrays2.nextElement([2,2,2,2,2])).toEqual(2);
});

test('convertCartesian should return [[1,5],[5,8],[3,9],[3,1],[4,0]] when given ([1,5,3,3,4], [5,8,9,1,0])', () => {
  expect(arrays2.convertCartesian([1,5,3,3,4], [5,8,9,1,0])).toEqual([[1,5],[5,8],[3,9],[3,1],[4,0]]);
});

test('convertCartesian should return [[9,1],[8,1],[3,1]] when given ([9,8,3], [1,1,1])', () => {
  expect(arrays2.convertCartesian([9,8,3], [1,1,1])).toEqual([[9,1],[8,1],[3,1]]);
});

test('convertCartesian should return [[2,7],[5,8],[1,9]] when given ([2,5,1], [7,8,9])', () => {
  expect(arrays2.convertCartesian([2,5,1], [7,8,9])).toEqual([[2,7],[5,8],[1,9]]);
});

test('convertCartesian should return [[3,6],[2,1],[2,7]] when given ([3,2,2], [6,1,7])', () => {
  expect(arrays2.convertCartesian([3,2,2], [6,1,7])).toEqual([[3,6],[2,1],[2,7]]);
});

test('getDiscounts should return [1,2,3,5.5] when given ([2,4,6,11], "50%")', () => {
  expect(arrays2.getDiscounts([2,4,6,11], "50%")).toEqual([1,2,3,5.5]);
});

test('getDiscounts should return [7.5,15,30,60] when given ([10,20,40,80], "75%")', () => {
  expect(arrays2.getDiscounts([10,20,40,80], "75%")).toEqual([7.5,15,30,60]);
});

test('getDiscounts should return [45] when given ([100], "45%")', () => {
  expect(arrays2.getDiscounts([100], "45%")).toEqual([45]);
});

test('filterDigitLength should return [232,555] when given ([88,232,4,9721,555], 3)', () => {
  expect(arrays2.filterDigitLength([88,232,4,9721,555], 3)).toEqual([232,555]);
});

test('filterDigitLength should return [2,7,8,9] when given ([2,7,8,9,1012], 1)', () => {
  expect(arrays2.filterDigitLength([2,7,8,9,1012], 1)).toEqual([2,7,8,9]);
});

test('filterDigitLength should return [] when given ([32,88,74,91,300,4050], 1)', () => {
  expect(arrays2.filterDigitLength([32,88,74,91,300,4050], 1)).toEqual([]);
});

test('filterDigitLength should return [5,6,8,9] when given ([5,6,8,9], 1)', () => {
  expect(arrays2.filterDigitLength([5,6,8,9], 1)).toEqual([5,6,8,9]);
});

test('filterDigitLength should return [838,435,989,431] when given ([99,838,435,7666,989,431], 3)', () => {
  expect(arrays2.filterDigitLength([99,838,435,7666,989,431], 3)).toEqual([838,435,989,431]);
});

test('filterDigitLength should return [99] when given ([99,838,435,7666,989,431], 2)', () => {
  expect(arrays2.filterDigitLength([99,838,435,7666,989,431], 2)).toEqual([99]);
});

test('getExtension should return ["jpg","pdf","mp3"] when given ["project1.jpg","project1.pdf","project1.mp3"]', () => {
  expect(arrays2.getExtension(["project1.jpg","project1.pdf","project1.mp3"])).toEqual(["jpg","pdf","mp3"]);
});

test('getExtension should return ["rb","cpp","py","js"] when given ["ruby.rb","cplusplus.cpp","python.py","javascript.js"]', () => {
  expect(arrays2.getExtension(["ruby.rb","cplusplus.cpp","python.py","javascript.js"])).toEqual(["rb","cpp","py","js"]);
});

test('getExtension should return ["html","css"] when given ["code.html","code.css"]', () => {
  expect(arrays2.getExtension(["code.html","code.css"])).toEqual(["html","css"]);
});

test('getExtension should return ["java","java","java"] when given ["minesweeper.java","game.java","my_project.java"]', () => {
  expect(arrays2.getExtension(["minesweeper.java","game.java","my_project.java"])).toEqual(["java","java","java"]);
});
