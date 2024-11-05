const review1 = require('../review1');

test('countTrue should return 2 when given [true,false,false,true,false]', () => {
  expect(review1.countTrue([true,false,false,true,false])).toEqual(2);
});

test('countTrue should return 0 when given [false,false,false,false]', () => {
  expect(review1.countTrue([false,false,false,false])).toEqual(0);
});

test('countTrue should return 0 when given []', () => {
  expect(review1.countTrue([])).toEqual(0);
});

test('countTrue should return 8 when given [false,false,true,true,false,false,false,true,true,true,true,false,true,true,false]', () => {
  expect(review1.countTrue([false,false,true,true,false,false,false,true,true,true,true,false,true,true,false])).toEqual(8);
});

test('countTrue should return 3 when given [true,false,true,true,false,false,false,false,false]', () => {
  expect(review1.countTrue([true,false,true,true,false,false,false,false,false])).toEqual(3);
});

test('countTrue should return 8 when given [false,true,true,false,true,true,false,true,false,true,false,true,false,true,false]', () => {
  expect(review1.countTrue([false,true,true,false,true,true,false,true,false,true,false,true,false,true,false])).toEqual(8);
});

test('countTrue should return 6 when given [true,false,true,true,true,false,true,true,false,false]', () => {
  expect(review1.countTrue([true,false,true,true,true,false,true,true,false,false])).toEqual(6);
});

test('countTrue should return 3 when given [false,false,false,false,true,false,true,false,true,false,false]', () => {
  expect(review1.countTrue([false,false,false,false,true,false,true,false,true,false,false])).toEqual(3);
});

test('countTrue should return 3 when given [true,false,false,false,true,false,false,true,false,false,false]', () => {
  expect(review1.countTrue([true,false,false,false,true,false,false,true,false,false,false])).toEqual(3);
});

test('countTrue should return 4 when given [true,true,false,true,false,false,false,false,true,false]', () => {
  expect(review1.countTrue([true,true,false,true,false,false,false,false,true,false])).toEqual(4);
});

test('countTrue should return 9 when given [true,false,true,true,false,true,true,true,true,false,true,false,true,false]', () => {
  expect(review1.countTrue([true,false,true,true,false,true,true,true,true,false,true,false,true,false])).toEqual(9);
});

test('countTrue should return 8 when given [true,false,true,true,true,true,false,true,true,false,true,false,false,false,false]', () => {
  expect(review1.countTrue([true,false,true,true,true,true,false,true,true,false,true,false,false,false,false])).toEqual(8);
});

test('countTrue should return 6 when given [true,true,false,false,false,false,true,false,true,true,false,true]', () => {
  expect(review1.countTrue([true,true,false,false,false,false,true,false,true,true,false,true])).toEqual(6);
});

test('factorial should return 2 when given 2', () => {
  expect(review1.factorial(2)).toEqual(2);
});

test('factorial should return 720 when given 6', () => {
  expect(review1.factorial(6)).toEqual(720);
});

test('factorial should return 6 when given 3', () => {
  expect(review1.factorial(3)).toEqual(6);
});

test('factorial should return 479001600 when given 12', () => {
  expect(review1.factorial(12)).toEqual(479001600);
});

test('factorial should return 120 when given 5', () => {
  expect(review1.factorial(5)).toEqual(120);
});

test('joinPath should return "portion1/portion2" when given ("portion1", "portion2")', () => {
  expect(review1.joinPath("portion1", "portion2")).toEqual("portion1/portion2");
});

test('joinPath should return "portion1/portion2" when given ("portion1/", "portion2")', () => {
  expect(review1.joinPath("portion1/", "portion2")).toEqual("portion1/portion2");
});

test('joinPath should return "portion1/portion2" when given ("portion1", "/portion2")', () => {
  expect(review1.joinPath("portion1", "/portion2")).toEqual("portion1/portion2");
});

test('joinPath should return "portion1/portion2" when given ("portion1/", "/portion2")', () => {
  expect(review1.joinPath("portion1/", "/portion2")).toEqual("portion1/portion2");
});

test('joinPath should return "5wf7fny/stJKXlc8" when given ("5wf7fny", "stJKXlc8")', () => {
  expect(review1.joinPath("5wf7fny", "stJKXlc8")).toEqual("5wf7fny/stJKXlc8");
});

test('joinPath should return "5wf7fny/stJKXlc8" when given ("5wf7fny/", "stJKXlc8")', () => {
  expect(review1.joinPath("5wf7fny/", "stJKXlc8")).toEqual("5wf7fny/stJKXlc8");
});

test('joinPath should return "5wf7fny/stJKXlc8" when given ("5wf7fny", "/stJKXlc8")', () => {
  expect(review1.joinPath("5wf7fny", "/stJKXlc8")).toEqual("5wf7fny/stJKXlc8");
});

test('joinPath should return "5wf7fny/stJKXlc8" when given ("5wf7fny/", "/stJKXlc8")', () => {
  expect(review1.joinPath("5wf7fny/", "/stJKXlc8")).toEqual("5wf7fny/stJKXlc8");
});

test('joinPath should return "FKBZOBHo/GNcYGnB" when given ("FKBZOBHo", "GNcYGnB")', () => {
  expect(review1.joinPath("FKBZOBHo", "GNcYGnB")).toEqual("FKBZOBHo/GNcYGnB");
});

test('joinPath should return "FKBZOBHo/GNcYGnB" when given ("FKBZOBHo/", "GNcYGnB")', () => {
  expect(review1.joinPath("FKBZOBHo/", "GNcYGnB")).toEqual("FKBZOBHo/GNcYGnB");
});

test('joinPath should return "FKBZOBHo/GNcYGnB" when given ("FKBZOBHo", "/GNcYGnB")', () => {
  expect(review1.joinPath("FKBZOBHo", "/GNcYGnB")).toEqual("FKBZOBHo/GNcYGnB");
});

test('joinPath should return "FKBZOBHo/GNcYGnB" when given ("FKBZOBHo/", "/GNcYGnB")', () => {
  expect(review1.joinPath("FKBZOBHo/", "/GNcYGnB")).toEqual("FKBZOBHo/GNcYGnB");
});

test('joinPath should return "vL533Y3/uVz3nul" when given ("vL533Y3", "uVz3nul")', () => {
  expect(review1.joinPath("vL533Y3", "uVz3nul")).toEqual("vL533Y3/uVz3nul");
});

test('joinPath should return "vL533Y3/uVz3nul" when given ("vL533Y3/", "uVz3nul")', () => {
  expect(review1.joinPath("vL533Y3/", "uVz3nul")).toEqual("vL533Y3/uVz3nul");
});

test('joinPath should return "vL533Y3/uVz3nul" when given ("vL533Y3", "/uVz3nul")', () => {
  expect(review1.joinPath("vL533Y3", "/uVz3nul")).toEqual("vL533Y3/uVz3nul");
});

test('joinPath should return "vL533Y3/uVz3nul" when given ("vL533Y3/", "/uVz3nul")', () => {
  expect(review1.joinPath("vL533Y3/", "/uVz3nul")).toEqual("vL533Y3/uVz3nul");
});

test('joinPath should return "kfDOTwf/Xr8viY8e" when given ("kfDOTwf", "Xr8viY8e")', () => {
  expect(review1.joinPath("kfDOTwf", "Xr8viY8e")).toEqual("kfDOTwf/Xr8viY8e");
});

test('joinPath should return "kfDOTwf/Xr8viY8e" when given ("kfDOTwf/", "Xr8viY8e")', () => {
  expect(review1.joinPath("kfDOTwf/", "Xr8viY8e")).toEqual("kfDOTwf/Xr8viY8e");
});

test('joinPath should return "kfDOTwf/Xr8viY8e" when given ("kfDOTwf", "/Xr8viY8e")', () => {
  expect(review1.joinPath("kfDOTwf", "/Xr8viY8e")).toEqual("kfDOTwf/Xr8viY8e");
});

test('joinPath should return "kfDOTwf/Xr8viY8e" when given ("kfDOTwf/", "/Xr8viY8e")', () => {
  expect(review1.joinPath("kfDOTwf/", "/Xr8viY8e")).toEqual("kfDOTwf/Xr8viY8e");
});

test('joinPath should return "F4tBPmoV/Lv18joOw" when given ("F4tBPmoV", "Lv18joOw")', () => {
  expect(review1.joinPath("F4tBPmoV", "Lv18joOw")).toEqual("F4tBPmoV/Lv18joOw");
});

test('numberSplit should return [2,2] when given 4', () => {
  expect(review1.numberSplit(4)).toEqual([2,2]);
});

test('numberSplit should return [5,5] when given 10', () => {
  expect(review1.numberSplit(10)).toEqual([5,5]);
});

test('numberSplit should return [5,6] when given 11', () => {
  expect(review1.numberSplit(11)).toEqual([5,6]);
});

test('numberSplit should return [0,0] when given 0', () => {
  expect(review1.numberSplit(0)).toEqual([0,0]);
});

test('numberSplit should return [0,1] when given 1', () => {
  expect(review1.numberSplit(1)).toEqual([0,1]);
});

test('numberSplit should return [-2,-2] when given -4', () => {
  expect(review1.numberSplit(-4)).toEqual([-2,-2]);
});

test('numberSplit should return [-3,-2] when given -5', () => {
  expect(review1.numberSplit(-5)).toEqual([-3,-2]);
});

test('numberSplit should return [-5,-4] when given -9', () => {
  expect(review1.numberSplit(-9)).toEqual([-5,-4]);
});

test('possibleBonus should return true when given (3, 7)', () => {
  expect(review1.possibleBonus(3, 7)).toEqual(true);
});

test('possibleBonus should return true when given (0, 6)', () => {
  expect(review1.possibleBonus(0, 6)).toEqual(true);
});

test('possibleBonus should return true when given (1, 6)', () => {
  expect(review1.possibleBonus(1, 6)).toEqual(true);
});

test('possibleBonus should return true when given (2, 6)', () => {
  expect(review1.possibleBonus(2, 6)).toEqual(true);
});

test('possibleBonus should return true when given (3, 6)', () => {
  expect(review1.possibleBonus(3, 6)).toEqual(true);
});

test('possibleBonus should return true when given (4, 6)', () => {
  expect(review1.possibleBonus(4, 6)).toEqual(true);
});

test('possibleBonus should return true when given (5, 6)', () => {
  expect(review1.possibleBonus(5, 6)).toEqual(true);
});

test('possibleBonus should return false when given (6, 6)', () => {
  expect(review1.possibleBonus(6, 6)).toEqual(false);
});

test('possibleBonus should return false when given (7, 6)', () => {
  expect(review1.possibleBonus(7, 6)).toEqual(false);
});

test('possibleBonus should return true when given (23, 27)', () => {
  expect(review1.possibleBonus(23, 27)).toEqual(true);
});

test('possibleBonus should return false when given (1, 9)', () => {
  expect(review1.possibleBonus(1, 9)).toEqual(false);
});

test('possibleBonus should return false when given (5, 3)', () => {
  expect(review1.possibleBonus(5, 3)).toEqual(false);
});

test('cardHide should return "************5678" when given "1234123456785678"', () => {
  expect(review1.cardHide("1234123456785678")).toEqual("************5678");
});

test('cardHide should return "************3213" when given "8754456321113213"', () => {
  expect(review1.cardHide("8754456321113213")).toEqual("************3213");
});

test('cardHide should return "**********5523" when given "35123413355523"', () => {
  expect(review1.cardHide("35123413355523")).toEqual("**********5523");
});

test('getAbsSum should return 18 when given [2,-1,-3,4,8]', () => {
  expect(review1.getAbsSum([2,-1,-3,4,8])).toEqual(18);
});

test('getAbsSum should return 1 when given [-1]', () => {
  expect(review1.getAbsSum([-1])).toEqual(1);
});

test('getAbsSum should return 23 when given [-1,-3,-5,-4,-10,0]', () => {
  expect(review1.getAbsSum([-1,-3,-5,-4,-10,0])).toEqual(23);
});

test('getAbsSum should return 170 when given [8,9,10,32,101,-10]', () => {
  expect(review1.getAbsSum([8,9,10,32,101,-10])).toEqual(170);
});

test('getAbsSum should return 500 when given [500]', () => {
  expect(review1.getAbsSum([500])).toEqual(500);
});

test('spelling should return ["b","be","bee"] when given "bee"', () => {
  expect(review1.spelling("bee")).toEqual(["b","be","bee"]);
});

test('spelling should return ["c","ca","cak","cake"] when given "cake"', () => {
  expect(review1.spelling("cake")).toEqual(["c","ca","cak","cake"]);
});

test('spelling should return ["h","ha","hap","happ","happy"] when given "happy"', () => {
  expect(review1.spelling("happy")).toEqual(["h","ha","hap","happ","happy"]);
});

test('spelling should return ["e","ea","eag","eage","eager","eagerl","eagerly"] when given "eagerly"', () => {
  expect(review1.spelling("eagerly")).toEqual(["e","ea","eag","eage","eager","eagerl","eagerly"]);
});

test('spelling should return ["b","be","bel","beli","belie","believ","believe"] when given "believe"', () => {
  expect(review1.spelling("believe")).toEqual(["b","be","bel","beli","belie","believ","believe"]);
});

test('amplify should return [1] when given 1', () => {
  expect(review1.amplify(1)).toEqual([1]);
});

test('amplify should return [1,2,3,40] when given 4', () => {
  expect(review1.amplify(4)).toEqual([1,2,3,40]);
});

test('amplify should return [1,2,3,40,5,6,7,80,9,10,11,120,13,14,15,160,17,18,19,200,21,22,23,240,25] when given 25', () => {
  expect(review1.amplify(25)).toEqual([1,2,3,40,5,6,7,80,9,10,11,120,13,14,15,160,17,18,19,200,21,22,23,240,25]);
});

test('amplify should return [1,2,3,40,5,6,7,80,9,10,11,120,13,14,15,160,17,18,19,200,21,22,23,240,25,26,27,280,29,30,31,320,33,34,35,360,37,38,39,400,41,42,43,440,45,46,47,480,49,50,51,520,53,54,55,560,57,58,59,600,61,62,63,640,65,66,67,680,69,70,71,720,73,74,75,760,77,78,79,800,81,82,83,840,85,86,87,880,89,90,91,920,93,94,95,960,97,98,99,1000] when given 100', () => {
  expect(review1.amplify(100)).toEqual([1,2,3,40,5,6,7,80,9,10,11,120,13,14,15,160,17,18,19,200,21,22,23,240,25,26,27,280,29,30,31,320,33,34,35,360,37,38,39,400,41,42,43,440,45,46,47,480,49,50,51,520,53,54,55,560,57,58,59,600,61,62,63,640,65,66,67,680,69,70,71,720,73,74,75,760,77,78,79,800,81,82,83,840,85,86,87,880,89,90,91,920,93,94,95,960,97,98,99,1000]);
});

test('amplify should return [1,2,3,40,5,6,7,80,9,10,11,120,13,14,15,160,17,18,19,200,21,22,23,240,25,26,27,280,29,30,31,320,33,34,35,360,37,38,39,400,41,42,43,440,45,46,47,480,49,50,51,520,53,54,55,560,57,58,59,600,61,62,63,640,65,66,67,680,69,70,71,720,73,74,75,760,77,78,79,800,81,82,83,840,85,86,87,880,89,90,91,920,93,94,95,960,97,98,99,1000,101,102,103,1040,105,106,107,1080,109,110,111,1120,113,114,115,1160,117,118,119,1200,121,122,123,1240,125,126,127,1280,129,130,131,1320,133,134,135,1360,137,138,139,1400,141,142,143,1440,145,146,147,1480,149,150,151,1520,153,154,155,1560,157,158,159,1600,161,162,163,1640,165,166,167,1680,169,170,171,1720,173,174,175,1760,177,178,179,1800,181,182,183,1840,185,186,187,1880,189,190,191,1920,193,194,195,1960,197,198,199,2000,201,202,203,2040,205,206,207,2080,209,210,211,2120,213,214,215,2160,217,218,219,2200,221,222,223,2240,225,226,227,2280,229,230,231,2320,233,234,235,2360,237,238,239,2400,241,242,243,2440,245,246,247,2480,249,250,251,2520,253,254,255,2560,257,258,259,2600,261,262,263,2640,265,266,267,2680,269,270,271,2720,273,274,275,2760,277,278,279,2800,281,282,283,2840,285,286,287,2880,289,290,291,2920,293,294,295,2960,297,298,299,3000,301,302,303,3040,305,306,307,3080,309,310,311,3120,313,314,315,3160,317,318,319,3200,321,322,323,3240,325,326,327,3280,329,330,331,3320,333] when given 333', () => {
  expect(review1.amplify(333)).toEqual([1,2,3,40,5,6,7,80,9,10,11,120,13,14,15,160,17,18,19,200,21,22,23,240,25,26,27,280,29,30,31,320,33,34,35,360,37,38,39,400,41,42,43,440,45,46,47,480,49,50,51,520,53,54,55,560,57,58,59,600,61,62,63,640,65,66,67,680,69,70,71,720,73,74,75,760,77,78,79,800,81,82,83,840,85,86,87,880,89,90,91,920,93,94,95,960,97,98,99,1000,101,102,103,1040,105,106,107,1080,109,110,111,1120,113,114,115,1160,117,118,119,1200,121,122,123,1240,125,126,127,1280,129,130,131,1320,133,134,135,1360,137,138,139,1400,141,142,143,1440,145,146,147,1480,149,150,151,1520,153,154,155,1560,157,158,159,1600,161,162,163,1640,165,166,167,1680,169,170,171,1720,173,174,175,1760,177,178,179,1800,181,182,183,1840,185,186,187,1880,189,190,191,1920,193,194,195,1960,197,198,199,2000,201,202,203,2040,205,206,207,2080,209,210,211,2120,213,214,215,2160,217,218,219,2200,221,222,223,2240,225,226,227,2280,229,230,231,2320,233,234,235,2360,237,238,239,2400,241,242,243,2440,245,246,247,2480,249,250,251,2520,253,254,255,2560,257,258,259,2600,261,262,263,2640,265,266,267,2680,269,270,271,2720,273,274,275,2760,277,278,279,2800,281,282,283,2840,285,286,287,2880,289,290,291,2920,293,294,295,2960,297,298,299,3000,301,302,303,3040,305,306,307,3080,309,310,311,3120,313,314,315,3160,317,318,319,3200,321,322,323,3240,325,326,327,3280,329,330,331,3320,333]);
});

test('amplify should return [1,2,3,40,5,6,7,80,9,10,11,120,13,14,15,160,17,18,19,200,21,22,23,240,25,26,27,280,29,30,31,320,33,34,35,360,37,38,39,400,41,42,43,440,45,46,47,480,49,50,51,520,53,54,55,560,57,58,59,600,61,62,63,640,65,66,67,680,69,70,71,720,73,74,75,760,77,78,79,800,81,82,83,840,85,86,87,880,89,90,91,920,93,94,95,960,97,98,99,1000,101,102,103,1040,105,106,107,1080,109,110,111,1120,113,114,115,1160,117,118,119,1200,121,122,123,1240,125,126,127,1280,129,130,131,1320,133,134,135,1360,137,138,139,1400,141,142,143,1440,145,146,147,1480,149,150,151,1520,153,154,155,1560,157,158,159,1600,161,162,163,1640,165,166,167,1680,169,170,171,1720,173,174,175,1760,177,178,179,1800,181,182,183,1840,185,186,187,1880,189,190,191,1920,193,194,195,1960,197,198,199,2000,201,202,203,2040,205,206,207,2080,209,210,211,2120,213,214,215,2160,217,218,219,2200,221,222,223,2240,225,226,227,2280,229,230,231,2320,233,234,235,2360,237,238,239,2400,241,242,243,2440,245,246,247,2480,249,250,251,2520,253,254,255,2560,257,258,259,2600,261,262,263,2640,265,266,267,2680,269,270,271,2720,273,274,275,2760,277,278,279,2800,281,282,283,2840,285,286,287,2880,289,290,291,2920,293,294,295,2960,297,298,299,3000,301,302,303,3040,305,306,307,3080,309,310,311,3120,313,314,315,3160,317,318,319,3200,321,322,323,3240,325,326,327,3280,329,330,331,3320,333,334,335,3360,337,338,339,3400,341,342,343,3440,345,346,347,3480,349,350,351,3520,353,354,355,3560,357,358,359,3600,361,362,363,3640,365,366,367,3680,369,370,371,3720,373,374,375,3760,377,378,379,3800,381,382,383,3840,385,386,387,3880,389,390,391,3920,393,394,395,3960,397,398,399,4000,401,402,403,4040,405,406,407,4080,409,410,411,4120,413,414,415,4160,417,418,419,4200,421,422,423,4240,425,426,427,4280,429,430,431,4320,433,434,435,4360,437,438,439,4400,441,442,443,4440,445,446,447,4480,449,450,451,4520,453,454,455,4560,457,458,459,4600,461,462,463,4640,465,466,467,4680,469,470,471,4720,473,474,475,4760,477,478,479,4800,481,482,483,4840,485,486,487,4880,489,490,491,4920,493,494,495,4960,497,498,499,5000] when given 500', () => {
  expect(review1.amplify(500)).toEqual([1,2,3,40,5,6,7,80,9,10,11,120,13,14,15,160,17,18,19,200,21,22,23,240,25,26,27,280,29,30,31,320,33,34,35,360,37,38,39,400,41,42,43,440,45,46,47,480,49,50,51,520,53,54,55,560,57,58,59,600,61,62,63,640,65,66,67,680,69,70,71,720,73,74,75,760,77,78,79,800,81,82,83,840,85,86,87,880,89,90,91,920,93,94,95,960,97,98,99,1000,101,102,103,1040,105,106,107,1080,109,110,111,1120,113,114,115,1160,117,118,119,1200,121,122,123,1240,125,126,127,1280,129,130,131,1320,133,134,135,1360,137,138,139,1400,141,142,143,1440,145,146,147,1480,149,150,151,1520,153,154,155,1560,157,158,159,1600,161,162,163,1640,165,166,167,1680,169,170,171,1720,173,174,175,1760,177,178,179,1800,181,182,183,1840,185,186,187,1880,189,190,191,1920,193,194,195,1960,197,198,199,2000,201,202,203,2040,205,206,207,2080,209,210,211,2120,213,214,215,2160,217,218,219,2200,221,222,223,2240,225,226,227,2280,229,230,231,2320,233,234,235,2360,237,238,239,2400,241,242,243,2440,245,246,247,2480,249,250,251,2520,253,254,255,2560,257,258,259,2600,261,262,263,2640,265,266,267,2680,269,270,271,2720,273,274,275,2760,277,278,279,2800,281,282,283,2840,285,286,287,2880,289,290,291,2920,293,294,295,2960,297,298,299,3000,301,302,303,3040,305,306,307,3080,309,310,311,3120,313,314,315,3160,317,318,319,3200,321,322,323,3240,325,326,327,3280,329,330,331,3320,333,334,335,3360,337,338,339,3400,341,342,343,3440,345,346,347,3480,349,350,351,3520,353,354,355,3560,357,358,359,3600,361,362,363,3640,365,366,367,3680,369,370,371,3720,373,374,375,3760,377,378,379,3800,381,382,383,3840,385,386,387,3880,389,390,391,3920,393,394,395,3960,397,398,399,4000,401,402,403,4040,405,406,407,4080,409,410,411,4120,413,414,415,4160,417,418,419,4200,421,422,423,4240,425,426,427,4280,429,430,431,4320,433,434,435,4360,437,438,439,4400,441,442,443,4440,445,446,447,4480,449,450,451,4520,453,454,455,4560,457,458,459,4600,461,462,463,4640,465,466,467,4680,469,470,471,4720,473,474,475,4760,477,478,479,4800,481,482,483,4840,485,486,487,4880,489,490,491,4920,493,494,495,4960,497,498,499,5000]);
});

test('isSymmetrical should return false when given 23', () => {
  expect(review1.isSymmetrical(23)).toEqual(false);
});

test('isSymmetrical should return false when given 9562', () => {
  expect(review1.isSymmetrical(9562)).toEqual(false);
});

test('isSymmetrical should return false when given 10019', () => {
  expect(review1.isSymmetrical(10019)).toEqual(false);
});

test('isSymmetrical should return true when given 1', () => {
  expect(review1.isSymmetrical(1)).toEqual(true);
});

test('isSymmetrical should return true when given 3223', () => {
  expect(review1.isSymmetrical(3223)).toEqual(true);
});

test('isSymmetrical should return true when given 95559', () => {
  expect(review1.isSymmetrical(95559)).toEqual(true);
});

test('isSymmetrical should return true when given 66566', () => {
  expect(review1.isSymmetrical(66566)).toEqual(true);
});

test('hashPlusCount should return [4,0] when given "####"', () => {
  expect(review1.hashPlusCount("####")).toEqual([4,0]);
});

test('hashPlusCount should return [1,0] when given "#"', () => {
  expect(review1.hashPlusCount("#")).toEqual([1,0]);
});

test('hashPlusCount should return [0,7] when given "+++++++"', () => {
  expect(review1.hashPlusCount("+++++++")).toEqual([0,7]);
});

test('hashPlusCount should return [0,2] when given "++"', () => {
  expect(review1.hashPlusCount("++")).toEqual([0,2]);
});

test('hashPlusCount should return [2,2] when given "#+#+"', () => {
  expect(review1.hashPlusCount("#+#+")).toEqual([2,2]);
});

test('hashPlusCount should return [3,1] when given "###+"', () => {
  expect(review1.hashPlusCount("###+")).toEqual([3,1]);
});

test('hashPlusCount should return [3,3] when given "##+++#"', () => {
  expect(review1.hashPlusCount("##+++#")).toEqual([3,3]);
});

test('hashPlusCount should return [4,6] when given "#+++#+#++#"', () => {
  expect(review1.hashPlusCount("#+++#+#++#")).toEqual([4,6]);
});

test('hashPlusCount should return [0,0] when given ""', () => {
  expect(review1.hashPlusCount("")).toEqual([0,0]);
});

test('convertToDecimal should return [0.33,0.981,0.5644,1] when given ["33%","98.1%","56.44%","100%"]', () => {
  expect(review1.convertToDecimal(["33%","98.1%","56.44%","100%"])).toEqual([0.33,0.981,0.5644,1]);
});

test('convertToDecimal should return [0.45,0.32,0.97,0.33] when given ["45%","32%","97%","33%"]', () => {
  expect(review1.convertToDecimal(["45%","32%","97%","33%"])).toEqual([0.45,0.32,0.97,0.33]);
});

test('convertToDecimal should return [0.01,0.02,0.03] when given ["1%","2%","3%"]', () => {
  expect(review1.convertToDecimal(["1%","2%","3%"])).toEqual([0.01,0.02,0.03]);
});

test('countOnes should return 3 when given [[1,0,1],[0,0,0],[0,0,1]]', () => {
  expect(review1.countOnes([[1,0,1],[0,0,0],[0,0,1]])).toEqual(3);
});

test('countOnes should return 7 when given [[1,1,1],[0,0,1],[1,1,1]]', () => {
  expect(review1.countOnes([[1,1,1],[0,0,1],[1,1,1]])).toEqual(7);
});

test('countOnes should return 2 when given [[1,2,3],[0,2,1],[5,7,33]]', () => {
  expect(review1.countOnes([[1,2,3],[0,2,1],[5,7,33]])).toEqual(2);
});

test('countOnes should return 0 when given [[5,2,3],[0,2,5],[5,7,33]]', () => {
  expect(review1.countOnes([[5,2,3],[0,2,5],[5,7,33]])).toEqual(0);
});

test('countOnes should return 1 when given [[5,2],[0,2],[5,1]]', () => {
  expect(review1.countOnes([[5,2],[0,2],[5,1]])).toEqual(1);
});

test('countOnes should return 3 when given [[1,1],[0,1]]', () => {
  expect(review1.countOnes([[1,1],[0,1]])).toEqual(3);
});

test('countOnes should return 1 when given [[0,1],[0,0]]', () => {
  expect(review1.countOnes([[0,1],[0,0]])).toEqual(1);
});

test('isSubset should return true when given ([3,2,5], [5,3,7,9,2])', () => {
  expect(review1.isSubset([3,2,5], [5,3,7,9,2])).toEqual(true);
});

test('isSubset should return true when given ([8,9], [7,1,9,8,4,5,6])', () => {
  expect(review1.isSubset([8,9], [7,1,9,8,4,5,6])).toEqual(true);
});

test('isSubset should return true when given ([1,2], [1,2,3])', () => {
  expect(review1.isSubset([1,2], [1,2,3])).toEqual(true);
});

test('isSubset should return false when given ([1,2], [3,5,9,1])', () => {
  expect(review1.isSubset([1,2], [3,5,9,1])).toEqual(false);
});

test('isSubset should return true when given ([1,2,3,4], [4,3,2,1])', () => {
  expect(review1.isSubset([1,2,3,4], [4,3,2,1])).toEqual(true);
});

test('isSubset should return false when given ([7,9,8,4,2], [7,9,5,8,4])', () => {
  expect(review1.isSubset([7,9,8,4,2], [7,9,5,8,4])).toEqual(false);
});

test('spotlightSum should return 108 when given 12', () => {
  expect(review1.spotlightSum(12)).toEqual(108);
});

test('spotlightSum should return 117 when given 13', () => {
  expect(review1.spotlightSum(13)).toEqual(117);
});

test('spotlightSum should return 126 when given 14', () => {
  expect(review1.spotlightSum(14)).toEqual(126);
});

test('spotlightSum should return 135 when given 15', () => {
  expect(review1.spotlightSum(15)).toEqual(135);
});

test('spotlightSum should return 144 when given 16', () => {
  expect(review1.spotlightSum(16)).toEqual(144);
});

test('spotlightSum should return 153 when given 17', () => {
  expect(review1.spotlightSum(17)).toEqual(153);
});

test('spotlightSum should return 162 when given 18', () => {
  expect(review1.spotlightSum(18)).toEqual(162);
});

test('spotlightSum should return 171 when given 19', () => {
  expect(review1.spotlightSum(19)).toEqual(171);
});

test('spotlightSum should return 198 when given 22', () => {
  expect(review1.spotlightSum(22)).toEqual(198);
});

test('spotlightSum should return 207 when given 23', () => {
  expect(review1.spotlightSum(23)).toEqual(207);
});

test('spotlightSum should return 216 when given 24', () => {
  expect(review1.spotlightSum(24)).toEqual(216);
});

test('spotlightSum should return 225 when given 25', () => {
  expect(review1.spotlightSum(25)).toEqual(225);
});

test('spotlightSum should return 234 when given 26', () => {
  expect(review1.spotlightSum(26)).toEqual(234);
});

test('spotlightSum should return 243 when given 27', () => {
  expect(review1.spotlightSum(27)).toEqual(243);
});

test('spotlightSum should return 252 when given 28', () => {
  expect(review1.spotlightSum(28)).toEqual(252);
});

test('spotlightSum should return 261 when given 29', () => {
  expect(review1.spotlightSum(29)).toEqual(261);
});

test('spotlightSum should return 288 when given 32', () => {
  expect(review1.spotlightSum(32)).toEqual(288);
});

test('spotlightSum should return 297 when given 33', () => {
  expect(review1.spotlightSum(33)).toEqual(297);
});

test('spotlightSum should return 306 when given 34', () => {
  expect(review1.spotlightSum(34)).toEqual(306);
});

test('spotlightSum should return 315 when given 35', () => {
  expect(review1.spotlightSum(35)).toEqual(315);
});

test('spotlightSum should return 324 when given 36', () => {
  expect(review1.spotlightSum(36)).toEqual(324);
});

test('isOmnipresent should return true when given ([[1,1],[1,3],[5,1],[6,1]], 1)', () => {
  expect(review1.isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 1)).toEqual(true);
});

test('isOmnipresent should return false when given ([[1,1],[1,3],[5,1],[6,1]], 6)', () => {
  expect(review1.isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 6)).toEqual(false);
});

test('isOmnipresent should return true when given ([[5],[5],[5],[6,5]], 5)', () => {
  expect(review1.isOmnipresent([[5],[5],[5],[6,5]], 5)).toEqual(true);
});

test('isOmnipresent should return false when given ([[5],[5],[5],[6,5]], 6)', () => {
  expect(review1.isOmnipresent([[5],[5],[5],[6,5]], 6)).toEqual(false);
});

test('isOmnipresent should return true when given ([[5,1],[5,1],[5,1],[6,5,1]], 1)', () => {
  expect(review1.isOmnipresent([[5,1],[5,1],[5,1],[6,5,1]], 1)).toEqual(true);
});
