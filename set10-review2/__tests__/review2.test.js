const review2 = require('../review2');

test('mauriceWins should return true when given ([3,5,10], [4,7,11])', () => {
  expect(review2.mauriceWins([3,5,10], [4,7,11])).toEqual(true);
});

test('mauriceWins should return false when given ([6,8,9], [7,12,14])', () => {
  expect(review2.mauriceWins([6,8,9], [7,12,14])).toEqual(false);
});

test('mauriceWins should return true when given ([1,8,20], [2,9,100])', () => {
  expect(review2.mauriceWins([1,8,20], [2,9,100])).toEqual(true);
});

test('mauriceWins should return false when given ([1,2,3], [2,3,4])', () => {
  expect(review2.mauriceWins([1,2,3], [2,3,4])).toEqual(false);
});

test('mauriceWins should return true when given ([2,4,10], [3,9,11])', () => {
  expect(review2.mauriceWins([2,4,10], [3,9,11])).toEqual(true);
});

test('mauriceWins should return true when given ([3,8,13], [5,11,15])', () => {
  expect(review2.mauriceWins([3,8,13], [5,11,15])).toEqual(true);
});

test('battingAvg should return ".286" when given [[0,0],[1,3],[2,2],[0,4],[1,5]]', () => {
  expect(review2.battingAvg([[0,0],[1,3],[2,2],[0,4],[1,5]])).toEqual(".286");
});

test('battingAvg should return ".350" when given [[2,5],[2,3],[0,3],[1,5],[2,4]]', () => {
  expect(review2.battingAvg([[2,5],[2,3],[0,3],[1,5],[2,4]])).toEqual(".350");
});

test('battingAvg should return ".273" when given [[2,3],[1,5],[2,4],[1,5],[0,5]]', () => {
  expect(review2.battingAvg([[2,3],[1,5],[2,4],[1,5],[0,5]])).toEqual(".273");
});

test('battingAvg should return ".261" when given [[1,4],[0,5],[4,4],[1,5],[0,5]]', () => {
  expect(review2.battingAvg([[1,4],[0,5],[4,4],[1,5],[0,5]])).toEqual(".261");
});

test('battingAvg should return ".318" when given [[3,3],[0,5],[0,4],[3,5],[1,5]]', () => {
  expect(review2.battingAvg([[3,3],[0,5],[0,4],[3,5],[1,5]])).toEqual(".318");
});

test('battingAvg should return ".316" when given [[0,5],[1,2],[1,1],[4,5],[1,6],[2,5],[0,4],[3,3],[0,4],[0,3]]', () => {
  expect(review2.battingAvg([[0,5],[1,2],[1,1],[4,5],[1,6],[2,5],[0,4],[3,3],[0,4],[0,3]])).toEqual(".316");
});

test('battingAvg should return ".277" when given [[1,6],[1,4],[0,4],[3,6],[2,5],[1,4],[1,6],[0,1],[2,5],[2,6]]', () => {
  expect(review2.battingAvg([[1,6],[1,4],[0,4],[3,6],[2,5],[1,4],[1,6],[0,1],[2,5],[2,6]])).toEqual(".277");
});

test('battingAvg should return ".306" when given [[2,4],[1,6],[2,6],[1,4],[4,4],[3,6],[2,5],[0,4],[0,5],[0,5]]', () => {
  expect(review2.battingAvg([[2,4],[1,6],[2,6],[1,4],[4,4],[3,6],[2,5],[0,4],[0,5],[0,5]])).toEqual(".306");
});

test('battingAvg should return ".283" when given [[2,6],[0,3],[2,5],[1,3],[4,6],[1,4],[0,5],[0,5],[0,6],[3,3]]', () => {
  expect(review2.battingAvg([[2,6],[0,3],[2,5],[1,3],[4,6],[1,4],[0,5],[0,5],[0,6],[3,3]])).toEqual(".283");
});

test('battingAvg should return ".234" when given [[1,6],[0,5],[0,6],[0,3],[2,4],[3,3],[1,6],[3,4],[0,5],[1,5]]', () => {
  expect(review2.battingAvg([[1,6],[0,5],[0,6],[0,3],[2,4],[3,3],[1,6],[3,4],[0,5],[1,5]])).toEqual(".234");
});

test('battingAvg should return ".225" when given [[1,1],[1,5],[0,3],[1,3],[2,6],[0,4],[0,5],[1,5],[1,6],[2,2]]', () => {
  expect(review2.battingAvg([[1,1],[1,5],[0,3],[1,3],[2,6],[0,4],[0,5],[1,5],[1,6],[2,2]])).toEqual(".225");
});

test('battingAvg should return ".283" when given [[2,6],[0,5],[1,4],[2,4],[4,5],[1,6],[2,2],[0,4],[1,5],[0,5]]', () => {
  expect(review2.battingAvg([[2,6],[0,5],[1,4],[2,4],[4,5],[1,6],[2,2],[0,4],[1,5],[0,5]])).toEqual(".283");
});

test('battingAvg should return ".295" when given [[0,3],[1,5],[3,4],[0,6],[1,2],[3,4],[4,5],[0,5],[0,5],[1,5]]', () => {
  expect(review2.battingAvg([[0,3],[1,5],[3,4],[0,6],[1,2],[3,4],[4,5],[0,5],[0,5],[1,5]])).toEqual(".295");
});

test('battingAvg should return ".333" when given [[3,3],[0,1],[0,3],[3,5],[1,5],[1,1],[2,6],[0,4],[1,5],[2,6]]', () => {
  expect(review2.battingAvg([[3,3],[0,1],[0,3],[3,5],[1,5],[1,1],[2,6],[0,4],[1,5],[2,6]])).toEqual(".333");
});

test('battingAvg should return ".321" when given [[1,6],[1,5],[1,6],[3,5],[3,5],[1,5],[1,4],[2,6],[1,5],[3,6]]', () => {
  expect(review2.battingAvg([[1,6],[1,5],[1,6],[3,5],[3,5],[1,5],[1,4],[2,6],[1,5],[3,6]])).toEqual(".321");
});

test('tetra should return 1 when given 1', () => {
  expect(review2.tetra(1)).toEqual(1);
});

test('tetra should return 4 when given 2', () => {
  expect(review2.tetra(2)).toEqual(4);
});

test('tetra should return 10 when given 3', () => {
  expect(review2.tetra(3)).toEqual(10);
});

test('tetra should return 20 when given 4', () => {
  expect(review2.tetra(4)).toEqual(20);
});

test('tetra should return 35 when given 5', () => {
  expect(review2.tetra(5)).toEqual(35);
});

test('tetra should return 165 when given 9', () => {
  expect(review2.tetra(9)).toEqual(165);
});

test('checkTitle should return true when given "A Mind Boggling Achievement"', () => {
  expect(review2.checkTitle("A Mind Boggling Achievement")).toEqual(true);
});

test('checkTitle should return true when given "A Simple Java Script Program!"', () => {
  expect(review2.checkTitle("A Simple Java Script Program!")).toEqual(true);
});

test('checkTitle should return false when given "Water is transparent"', () => {
  expect(review2.checkTitle("Water is transparent")).toEqual(false);
});

test('addNums should return 20 when given "2, 5, 1, 8, 4"', () => {
  expect(review2.addNums("2, 5, 1, 8, 4")).toEqual(20);
});

test('addNums should return 28 when given "1, 2, 3, 4, 5, 6, 7"', () => {
  expect(review2.addNums("1, 2, 3, 4, 5, 6, 7")).toEqual(28);
});

test('addNums should return 10 when given "10"', () => {
  expect(review2.addNums("10")).toEqual(10);
});

test('addNums should return -7 when given "-12, -8, 2, 11, -16, 16"', () => {
  expect(review2.addNums("-12, -8, 2, 11, -16, 16")).toEqual(-7);
});

test('addNums should return 90 when given "25, -4, -15, -7, 27, 12, 29, -6, 20, 9"', () => {
  expect(review2.addNums("25, -4, -15, -7, 27, 12, 29, -6, 20, 9")).toEqual(90);
});

test('addNums should return -51 when given "24, 7, -15, -28, -21, 6, 5, -6, 23, 24, -22, 30, -21, -10, -10, -12, 24, -18, -13, -27, 22, -30, -11, -13, 6, 7, 27, 1"', () => {
  expect(review2.addNums("24, 7, -15, -28, -21, 6, 5, -6, 23, 24, -22, 30, -21, -10, -10, -12, 24, -18, -13, -27, 22, -30, -11, -13, 6, 7, 27, 1")).toEqual(-51);
});

test('addNums should return -81 when given "-17, -18, -18, -14, -8, 0, 12, 2, 10, 5, -8, 12, -17, 8, -5, -23, 2, 29, -30, 13, -22, 19, 13, -18, -8"', () => {
  expect(review2.addNums("-17, -18, -18, -14, -8, 0, 12, 2, 10, 5, -8, 12, -17, 8, -5, -23, 2, 29, -30, 13, -22, 19, 13, -18, -8")).toEqual(-81);
});

test('addNums should return 128 when given "16, 8, 19, 25, 18, 26, 2, 14"', () => {
  expect(review2.addNums("16, 8, 19, 25, 18, 26, 2, 14")).toEqual(128);
});

test('addNums should return -38 when given "-18, -10, 9, 12, -16, 22, 2, 17, 10, -25, 1, -25, -15, -29, 12, 11, 4"', () => {
  expect(review2.addNums("-18, -10, 9, 12, -16, 22, 2, 17, 10, -25, 1, -25, -15, -29, 12, 11, 4")).toEqual(-38);
});

test('addNums should return -94 when given "12, -30, 26, -18, -4, 25, 19, -22, 7, -17, 3, -30, -27, 10, -12, -12, -24"', () => {
  expect(review2.addNums("12, -30, 26, -18, -4, 25, 19, -22, 7, -17, 3, -30, -27, 10, -12, -12, -24")).toEqual(-94);
});

test('addNums should return 81 when given "0, 21, 20, 0, 26, -9, 12, -9, 20"', () => {
  expect(review2.addNums("0, 21, 20, 0, 26, -9, 12, -9, 20")).toEqual(81);
});

test('addNums should return 28 when given "-27, 28, -9, -9, 4, -22, -13, 0, -2, 19, 9, 5, 20, 21, -3, 22, 6, -10, -1, -12, 2"', () => {
  expect(review2.addNums("-27, 28, -9, -9, 4, -22, -13, 0, -2, 19, 9, 5, 20, 21, -3, 22, 6, -10, -1, -12, 2")).toEqual(28);
});

test('addNums should return 58 when given "13, -29, 13, 22, 23, 14, 2"', () => {
  expect(review2.addNums("13, -29, 13, 22, 23, 14, 2")).toEqual(58);
});

test('addNums should return -113 when given "-18, 3, 30, 13, 20, -23, -18, -27, -30, 1, -19, -3, -19, -22, -1"', () => {
  expect(review2.addNums("-18, 3, 30, 13, 20, -23, -18, -27, -30, 1, -19, -3, -19, -22, -1")).toEqual(-113);
});

test('addNums should return 82 when given "18, 20, 11, -7, -1, -7, -17, -3, 25, 23, 25, 6, 7, -1, -11, -24, -19, -18, 8, 24, 29, 19, 13, 0, -19, -25, -2, 8"', () => {
  expect(review2.addNums("18, 20, 11, -7, -1, -7, -17, -3, 25, 23, 25, 6, 7, -1, -11, -24, -19, -18, 8, 24, 29, 19, 13, 0, -19, -25, -2, 8")).toEqual(82);
});

test('addNums should return -154 when given "-13, -30, -1, -9, -25, -9, 11, -28, 0, 10, -23, -20, -5, 21, -29, 6, 20, -23, -23, -24, 30, -14, 24"', () => {
  expect(review2.addNums("-13, -30, -1, -9, -25, -9, 11, -28, 0, 10, -23, -20, -5, 21, -29, 6, 20, -23, -23, -24, 30, -14, 24")).toEqual(-154);
});

test('addNums should return -11 when given "5, -16"', () => {
  expect(review2.addNums("5, -16")).toEqual(-11);
});

test('addNums should return 26 when given "-28, -1, 12, 15, 16, -11, 23"', () => {
  expect(review2.addNums("-28, -1, 12, 15, 16, -11, 23")).toEqual(26);
});

test('addNums should return 8 when given "16, -3, 15, -20"', () => {
  expect(review2.addNums("16, -3, 15, -20")).toEqual(8);
});

test('addNums should return 25 when given "10, -2, -3, 6, -17, -8, -4, -9, -19, -13, 9, 19, 26, 26, -23, 5, 4, 2, -22, -10, 3, 11, -1, 10, 2, 23"', () => {
  expect(review2.addNums("10, -2, -3, 6, -17, -8, -4, -9, -19, -13, 9, 19, 26, 26, -23, 5, 4, 2, -22, -10, 3, 11, -1, 10, 2, 23")).toEqual(25);
});

test('minutesToSeconds should return 60 when given "01:00"', () => {
  expect(review2.minutesToSeconds("01:00")).toEqual(60);
});

test('minutesToSeconds should return 836 when given "13:56"', () => {
  expect(review2.minutesToSeconds("13:56")).toEqual(836);
});

test('minutesToSeconds should return false when given "10:60"', () => {
  expect(review2.minutesToSeconds("10:60")).toEqual(false);
});

test('minutesToSeconds should return 7941 when given "132:21"', () => {
  expect(review2.minutesToSeconds("132:21")).toEqual(7941);
});

test('minutesToSeconds should return false when given "132:271"', () => {
  expect(review2.minutesToSeconds("132:271")).toEqual(false);
});

test('minutesToSeconds should return 90 when given "01:30"', () => {
  expect(review2.minutesToSeconds("01:30")).toEqual(90);
});

test('minutesToSeconds should return 600 when given "10:00"', () => {
  expect(review2.minutesToSeconds("10:00")).toEqual(600);
});

test('highLow should return "542 -214" when given "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"', () => {
  expect(review2.highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toEqual("542 -214");
});

test('highLow should return "1 -1" when given "1 -1"', () => {
  expect(review2.highLow("1 -1")).toEqual("1 -1");
});

test('highLow should return "1 1" when given "1 1"', () => {
  expect(review2.highLow("1 1")).toEqual("1 1");
});

test('highLow should return "-1 -1" when given "-1 -1"', () => {
  expect(review2.highLow("-1 -1")).toEqual("-1 -1");
});

test('highLow should return "1 -1" when given "1 -1 0"', () => {
  expect(review2.highLow("1 -1 0")).toEqual("1 -1");
});

test('highLow should return "1 0" when given "1 1 0"', () => {
  expect(review2.highLow("1 1 0")).toEqual("1 0");
});

test('highLow should return "0 -1" when given "-1 -1 0"', () => {
  expect(review2.highLow("-1 -1 0")).toEqual("0 -1");
});

test('highLow should return "42 42" when given "42"', () => {
  expect(review2.highLow("42")).toEqual("42 42");
});

test('reverseCase should return "hAPPY bIRTHDAY" when given "Happy Birthday"', () => {
  expect(review2.reverseCase("Happy Birthday")).toEqual("hAPPY bIRTHDAY");
});

test('reverseCase should return "many thanks" when given "MANY THANKS"', () => {
  expect(review2.reverseCase("MANY THANKS")).toEqual("many thanks");
});

test('reverseCase should return "SpOnTaNeOuS" when given "sPoNtAnEoUs"', () => {
  expect(review2.reverseCase("sPoNtAnEoUs")).toEqual("SpOnTaNeOuS");
});

test('reverseCase should return "Excellent, YoUr Majesty" when given "eXCELLENT, yOuR mAJESTY"', () => {
  expect(review2.reverseCase("eXCELLENT, yOuR mAJESTY")).toEqual("Excellent, YoUr Majesty");
});

test('highestDigit should return 5 when given 51', () => {
  expect(review2.highestDigit(51)).toEqual(5);
});

test('highestDigit should return 0 when given 0', () => {
  expect(review2.highestDigit(0)).toEqual(0);
});

test('highestDigit should return 9 when given 7495037', () => {
  expect(review2.highestDigit(7495037)).toEqual(9);
});

test('highestDigit should return 2 when given 222222', () => {
  expect(review2.highestDigit(222222)).toEqual(2);
});

test('mean should return 2.55 when given [1,0,4,5,2,4,1,2,3,3,3]', () => {
  expect(review2.mean([1,0,4,5,2,4,1,2,3,3,3])).toEqual(2.55);
});

test('mean should return 2849.25 when given [324,543,654,9876]', () => {
  expect(review2.mean([324,543,654,9876])).toEqual(2849.25);
});

test('mean should return 0 when given [0,0,0,0]', () => {
  expect(review2.mean([0,0,0,0])).toEqual(0);
});

test('mean should return 44 when given [30,40,20,100,30]', () => {
  expect(review2.mean([30,40,20,100,30])).toEqual(44);
});

test('mean should return 0.75 when given [1,1,1,0]', () => {
  expect(review2.mean([1,1,1,0])).toEqual(0.75);
});

test('mean should return 0.8 when given [1,1,0,1,2,1,1,1,0,0]', () => {
  expect(review2.mean([1,1,0,1,2,1,1,1,0,0])).toEqual(0.8);
});

test('mean should return 10000 when given [10000]', () => {
  expect(review2.mean([10000])).toEqual(10000);
});

test('findLargestNums should return [7,90,2] when given [[4,2,7,1],[20,70,40,90],[1,2,0]]', () => {
  expect(review2.findLargestNums([[4,2,7,1],[20,70,40,90],[1,2,0]])).toEqual([7,90,2]);
});

test('findLargestNums should return [0.7634,9.32,9] when given [[0.4321,0.7634,0.652],[1.324,9.32,2.5423,6.4314],[9,3,6,3]]', () => {
  expect(review2.findLargestNums([[0.4321,0.7634,0.652],[1.324,9.32,2.5423,6.4314],[9,3,6,3]])).toEqual([0.7634,9.32,9]);
});

test('findLargestNums should return [-34,-2,7] when given [[-34,-54,-74],[-32,-2,-65],[-54,7,-43]]', () => {
  expect(review2.findLargestNums([[-34,-54,-74],[-32,-2,-65],[-54,7,-43]])).toEqual([-34,-2,7]);
});

test('findLargestNums should return [1.34,-1.762,65] when given [[0.34,-5,1.34],[-6.432,-1.762,-1.99],[32,65,-6]]', () => {
  expect(review2.findLargestNums([[0.34,-5,1.34],[-6.432,-1.762,-1.99],[32,65,-6]])).toEqual([1.34,-1.762,65]);
});

test('findLargestNums should return [0,3,-2] when given [[0,0,0,0],[3,3,3,3],[-2,-2]]', () => {
  expect(review2.findLargestNums([[0,0,0,0],[3,3,3,3],[-2,-2]])).toEqual([0,3,-2]);
});

test('isValid should return true when given "59001"', () => {
  expect(review2.isValid("59001")).toEqual(true);
});

test('isValid should return false when given "853a7"', () => {
  expect(review2.isValid("853a7")).toEqual(false);
});

test('isValid should return false when given "732 32"', () => {
  expect(review2.isValid("732 32")).toEqual(false);
});

test('isValid should return false when given "788876"', () => {
  expect(review2.isValid("788876")).toEqual(false);
});

test('isValid should return false when given "a923b"', () => {
  expect(review2.isValid("a923b")).toEqual(false);
});

test('isValid should return false when given "5923!"', () => {
  expect(review2.isValid("5923!")).toEqual(false);
});

test('isValid should return false when given "59238aa"', () => {
  expect(review2.isValid("59238aa")).toEqual(false);
});

test('isValid should return true when given "88231"', () => {
  expect(review2.isValid("88231")).toEqual(true);
});

test('maxTotal should return 43 when given [1,1,0,1,3,10,10,10,10,1]', () => {
  expect(review2.maxTotal([1,1,0,1,3,10,10,10,10,1])).toEqual(43);
});

test('maxTotal should return 100 when given [0,0,0,0,0,0,0,0,0,100]', () => {
  expect(review2.maxTotal([0,0,0,0,0,0,0,0,0,100])).toEqual(100);
});

test('maxTotal should return 40 when given [1,2,3,4,5,6,7,8,9,10]', () => {
  expect(review2.maxTotal([1,2,3,4,5,6,7,8,9,10])).toEqual(40);
});

test('maxTotal should return 236 when given [12,8,73,1,24,11,88,39,2,-47]', () => {
  expect(review2.maxTotal([12,8,73,1,24,11,88,39,2,-47])).toEqual(236);
});

test('maxTotal should return 177 when given [48,90,42,-12,1,-14,-36,-37,-9,-4]', () => {
  expect(review2.maxTotal([48,90,42,-12,1,-14,-36,-37,-9,-4])).toEqual(177);
});

test('maxTotal should return 95 when given [-99,-38,-13,-84,66,13,-13,-16,14,15]', () => {
  expect(review2.maxTotal([-99,-38,-13,-84,66,13,-13,-16,14,15])).toEqual(95);
});

test('maxTotal should return 268 when given [60,-70,-53,-4,53,-66,10,-7,56,89]', () => {
  expect(review2.maxTotal([60,-70,-53,-4,53,-66,10,-7,56,89])).toEqual(268);
});

test('maxTotal should return 343 when given [88,45,76,34,-42,10,-22,85,-52,49]', () => {
  expect(review2.maxTotal([88,45,76,34,-42,10,-22,85,-52,49])).toEqual(343);
});

test('maxTotal should return 343 when given [70,-74,20,-56,-15,93,-75,98,46,36]', () => {
  expect(review2.maxTotal([70,-74,20,-56,-15,93,-75,98,46,36])).toEqual(343);
});

test('maxTotal should return 322 when given [-20,-61,50,52,60,-70,0,69,91,-36]', () => {
  expect(review2.maxTotal([-20,-61,50,52,60,-70,0,69,91,-36])).toEqual(322);
});

test('maxTotal should return 363 when given [31,75,78,76,-51,-8,17,-23,34,100]', () => {
  expect(review2.maxTotal([31,75,78,76,-51,-8,17,-23,34,100])).toEqual(363);
});

test('maxTotal should return 185 when given [-79,85,55,-5,-86,-72,31,-68,13,1]', () => {
  expect(review2.maxTotal([-79,85,55,-5,-86,-72,31,-68,13,1])).toEqual(185);
});

test('maxTotal should return 163 when given [-93,-79,-26,53,74,-55,68,-36,-6,-94]', () => {
  expect(review2.maxTotal([-93,-79,-26,53,74,-55,68,-36,-6,-94])).toEqual(163);
});

test('maxTotal should return 205 when given [-100,21,22,65,19,2,-11,3,24,73]', () => {
  expect(review2.maxTotal([-100,21,22,65,19,2,-11,3,24,73])).toEqual(205);
});

test('maxTotal should return 383 when given [92,-43,80,43,23,-41,-19,90,78,31]', () => {
  expect(review2.maxTotal([92,-43,80,43,23,-41,-19,90,78,31])).toEqual(383);
});

test('maxTotal should return 307 when given [-71,-11,-89,60,71,-62,54,11,73,49]', () => {
  expect(review2.maxTotal([-71,-11,-89,60,71,-62,54,11,73,49])).toEqual(307);
});

test('maxTotal should return 208 when given [61,-55,60,-30,27,61,-68,-1,-36,-27]', () => {
  expect(review2.maxTotal([61,-55,60,-30,27,61,-68,-1,-36,-27])).toEqual(208);
});

test('maxTotal should return 250 when given [67,-44,40,-75,27,71,-59,4,45,-91]', () => {
  expect(review2.maxTotal([67,-44,40,-75,27,71,-59,4,45,-91])).toEqual(250);
});

test('maxTotal should return 229 when given [27,-61,81,-28,5,45,-81,37,30,36]', () => {
  expect(review2.maxTotal([27,-61,81,-28,5,45,-81,37,30,36])).toEqual(229);
});

test('maxTotal should return 244 when given [42,34,-11,-41,-73,53,52,34,63,-15]', () => {
  expect(review2.maxTotal([42,34,-11,-41,-73,53,52,34,63,-15])).toEqual(244);
});

test('convertBinary should return "01110" when given "house"', () => {
  expect(review2.convertBinary("house")).toEqual("01110");
});

test('convertBinary should return "0100000" when given "excLAIM"', () => {
  expect(review2.convertBinary("excLAIM")).toEqual("0100000");
});

test('convertBinary should return "0111" when given "moon"', () => {
  expect(review2.convertBinary("moon")).toEqual("0111");
});

test('convertBinary should return "0111" when given "MOOn"', () => {
  expect(review2.convertBinary("MOOn")).toEqual("0111");
});

test('convertBinary should return "1111111111" when given "topsyTurvy"', () => {
  expect(review2.convertBinary("topsyTurvy")).toEqual("1111111111");
});

test('societyName should return "AMS" when given ["Adam","Sarah","Malcolm"]', () => {
  expect(review2.societyName(["Adam","Sarah","Malcolm"])).toEqual("AMS");
});

test('societyName should return "CJMPRR" when given ["Phoebe","Chandler","Rachel","Ross","Monica","Joey"]', () => {
  expect(review2.societyName(["Phoebe","Chandler","Rachel","Ross","Monica","Joey"])).toEqual("CJMPRR");
});

test('societyName should return "CHLN" when given ["Harry","Newt","Luna","Cho"]', () => {
  expect(review2.societyName(["Harry","Newt","Luna","Cho"])).toEqual("CHLN");
});

test('societyName should return "IJS" when given ["Sherlock","Irene","John"]', () => {
  expect(review2.societyName(["Sherlock","Irene","John"])).toEqual("IJS");
});

test('societyName should return "AHPRS" when given ["Sheldon","Amy","Penny","Howard","Raj"]', () => {
  expect(review2.societyName(["Sheldon","Amy","Penny","Howard","Raj"])).toEqual("AHPRS");
});

test('leftDigit should return 2 when given "TrAdE2W1n95!"', () => {
  expect(review2.leftDigit("TrAdE2W1n95!")).toEqual(2);
});

test('leftDigit should return 3 when given "V3r1ta$"', () => {
  expect(review2.leftDigit("V3r1ta$")).toEqual(3);
});

test('leftDigit should return 1 when given "U//DertHe1nflu3nC3"', () => {
  expect(review2.leftDigit("U//DertHe1nflu3nC3")).toEqual(1);
});

test('leftDigit should return 5 when given "J@v@5cR1PT"', () => {
  expect(review2.leftDigit("J@v@5cR1PT")).toEqual(5);
});

test('leftDigit should return 0 when given "0nSlaUgh7*d3atH"', () => {
  expect(review2.leftDigit("0nSlaUgh7*d3atH")).toEqual(0);
});

test('leftDigit should return 8 when given "F8andD3st1nY"', () => {
  expect(review2.leftDigit("F8andD3st1nY")).toEqual(8);
});
