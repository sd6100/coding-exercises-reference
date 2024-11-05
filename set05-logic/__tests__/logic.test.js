const logic = require('../logic');

test('flipBool should return 0 when given 1', () => {
  expect(logic.flipBool(1)).toEqual(0);
});

test('flipBool should return 0 when given true', () => {
  expect(logic.flipBool(true)).toEqual(0);
});

test('flipBool should return 1 when given 0', () => {
  expect(logic.flipBool(0)).toEqual(1);
});

test('flipBool should return 1 when given false', () => {
  expect(logic.flipBool(false)).toEqual(1);
});

test('isLeap should return true when given 2020', () => {
  expect(logic.isLeap(2020)).toEqual(true);
});

test('isLeap should return false when given 1800', () => {
  expect(logic.isLeap(1800)).toEqual(false);
});

test('isLeap should return true when given 2000', () => {
  expect(logic.isLeap(2000)).toEqual(true);
});

test('isLeap should return false when given 2019', () => {
  expect(logic.isLeap(2019)).toEqual(false);
});

test('isLeap should return true when given 1452', () => {
  expect(logic.isLeap(1452)).toEqual(true);
});

test('isLeap should return false when given 1998', () => {
  expect(logic.isLeap(1998)).toEqual(false);
});

test('isLeap should return true when given 1904', () => {
  expect(logic.isLeap(1904)).toEqual(true);
});

test('isLeap should return false when given 1985', () => {
  expect(logic.isLeap(1985)).toEqual(false);
});

test('isLeap should return true when given 2048', () => {
  expect(logic.isLeap(2048)).toEqual(true);
});

test('isLeap should return true when given 1600', () => {
  expect(logic.isLeap(1600)).toEqual(true);
});

test('shouldServeDrinks should return false when given (17, true)', () => {
  expect(logic.shouldServeDrinks(17, true)).toEqual(false);
});

test('shouldServeDrinks should return false when given (30, true)', () => {
  expect(logic.shouldServeDrinks(30, true)).toEqual(false);
});

test('shouldServeDrinks should return true when given (24, false)', () => {
  expect(logic.shouldServeDrinks(24, false)).toEqual(true);
});

test('shouldServeDrinks should return true when given (18, false)', () => {
  expect(logic.shouldServeDrinks(18, false)).toEqual(true);
});

test('shouldServeDrinks should return false when given (3, false)', () => {
  expect(logic.shouldServeDrinks(3, false)).toEqual(false);
});

test('middleEarth should return true when given ["Frodo","Sam","Gandalf"]', () => {
  expect(logic.middleEarth(["Frodo","Sam","Gandalf"])).toEqual(true);
});

test('middleEarth should return false when given ["Orc","Sam","Gandalf","Frodo"]', () => {
  expect(logic.middleEarth(["Orc","Sam","Gandalf","Frodo"])).toEqual(false);
});

test('middleEarth should return true when given ["Sam","Frodo","Saruman"]', () => {
  expect(logic.middleEarth(["Sam","Frodo","Saruman"])).toEqual(true);
});

test('middleEarth should return false when given ["Orc","Frodo","Legolas","Sam","Bilbo"]', () => {
  expect(logic.middleEarth(["Orc","Frodo","Legolas","Sam","Bilbo"])).toEqual(false);
});

test('middleEarth should return true when given ["Aragorn","Gandalf","Sam","Frodo","Gollum"]', () => {
  expect(logic.middleEarth(["Aragorn","Gandalf","Sam","Frodo","Gollum"])).toEqual(true);
});

test('middleEarth should return false when given ["Arwen","Sam","Gandalf","Frodo","Boromir"]', () => {
  expect(logic.middleEarth(["Arwen","Sam","Gandalf","Frodo","Boromir"])).toEqual(false);
});

test('middleEarth should return true when given ["Faramir","Frodo","Sam","Galadriel"]', () => {
  expect(logic.middleEarth(["Faramir","Frodo","Sam","Galadriel"])).toEqual(true);
});

test('middleEarth should return true when given ["Eowin","Gimli","Bilbo","Frodo","Sam","Sauron"]', () => {
  expect(logic.middleEarth(["Eowin","Gimli","Bilbo","Frodo","Sam","Sauron"])).toEqual(true);
});

test('middleEarth should return false when given ["Gandalf","Sam","Bilbo","Legolas","Frodo"]', () => {
  expect(logic.middleEarth(["Gandalf","Sam","Bilbo","Legolas","Frodo"])).toEqual(false);
});

test('middleEarth should return true when given ["Legolas","Eowyn","Gandalf","Sam","Frodo","Gimli"]', () => {
  expect(logic.middleEarth(["Legolas","Eowyn","Gandalf","Sam","Frodo","Gimli"])).toEqual(true);
});

test('totalCups should return 7 when given 6', () => {
  expect(logic.totalCups(6)).toEqual(7);
});

test('totalCups should return 3 when given 3', () => {
  expect(logic.totalCups(3)).toEqual(3);
});

test('totalCups should return 8 when given 7', () => {
  expect(logic.totalCups(7)).toEqual(8);
});

test('totalCups should return 14 when given 12', () => {
  expect(logic.totalCups(12)).toEqual(14);
});

test('totalCups should return 248 when given 213', () => {
  expect(logic.totalCups(213)).toEqual(248);
});

test('totalCups should return 18 when given 16', () => {
  expect(logic.totalCups(16)).toEqual(18);
});

test('hasSameBread should return true when given (["white bread","lettuce","white bread"], ["white bread","tomato","white bread"])', () => {
  expect(logic.hasSameBread(["white bread","lettuce","white bread"], ["white bread","tomato","white bread"])).toEqual(true);
});

test('hasSameBread should return false when given (["brown bread","chicken","brown bread"], ["white bread","chicken","white bread"])', () => {
  expect(logic.hasSameBread(["brown bread","chicken","brown bread"], ["white bread","chicken","white bread"])).toEqual(false);
});

test('hasSameBread should return false when given (["toast","cheese","toast"], ["brown bread","cheese","toast"])', () => {
  expect(logic.hasSameBread(["toast","cheese","toast"], ["brown bread","cheese","toast"])).toEqual(false);
});

test('hasSameBread should return true when given (["white bread","lettuce","toast"], ["white bread","tomato","toast"])', () => {
  expect(logic.hasSameBread(["white bread","lettuce","toast"], ["white bread","tomato","toast"])).toEqual(true);
});

test('hasSameBread should return false when given (["white bread","lettuce","toast"], ["brown bread","tomato","toast"])', () => {
  expect(logic.hasSameBread(["white bread","lettuce","toast"], ["brown bread","tomato","toast"])).toEqual(false);
});

test('hasSameBread should return false when given (["white bread","lettuce","brown bread"], ["brown bread","tomato","white bread"])', () => {
  expect(logic.hasSameBread(["white bread","lettuce","brown bread"], ["brown bread","tomato","white bread"])).toEqual(false);
});

test('hasSameBread should return false when given (["white bread","lettuce","brown bread"], ["white bread","tomato","white bread"])', () => {
  expect(logic.hasSameBread(["white bread","lettuce","brown bread"], ["white bread","tomato","white bread"])).toEqual(false);
});

test('automorphic should return true when given 1', () => {
  expect(logic.automorphic(1)).toEqual(true);
});

test('automorphic should return false when given 3', () => {
  expect(logic.automorphic(3)).toEqual(false);
});

test('automorphic should return true when given 6', () => {
  expect(logic.automorphic(6)).toEqual(true);
});

test('automorphic should return false when given 9', () => {
  expect(logic.automorphic(9)).toEqual(false);
});

test('automorphic should return false when given 10', () => {
  expect(logic.automorphic(10)).toEqual(false);
});

test('automorphic should return true when given 25', () => {
  expect(logic.automorphic(25)).toEqual(true);
});

test('automorphic should return false when given 53', () => {
  expect(logic.automorphic(53)).toEqual(false);
});

test('automorphic should return true when given 76', () => {
  expect(logic.automorphic(76)).toEqual(true);
});

test('automorphic should return false when given 95', () => {
  expect(logic.automorphic(95)).toEqual(false);
});

test('automorphic should return false when given 100', () => {
  expect(logic.automorphic(100)).toEqual(false);
});

test('automorphic should return true when given 625', () => {
  expect(logic.automorphic(625)).toEqual(true);
});

test('automorphic should return false when given 225', () => {
  expect(logic.automorphic(225)).toEqual(false);
});

test('stackBoxes should return 1 when given 1', () => {
  expect(logic.stackBoxes(1)).toEqual(1);
});

test('stackBoxes should return 4 when given 2', () => {
  expect(logic.stackBoxes(2)).toEqual(4);
});

test('stackBoxes should return 0 when given 0', () => {
  expect(logic.stackBoxes(0)).toEqual(0);
});

test('stackBoxes should return 25 when given 5', () => {
  expect(logic.stackBoxes(5)).toEqual(25);
});

test('stackBoxes should return 729 when given 27', () => {
  expect(logic.stackBoxes(27)).toEqual(729);
});

test('stackBoxes should return 38416 when given 196', () => {
  expect(logic.stackBoxes(196)).toEqual(38416);
});

test('stackBoxes should return 262144 when given 512', () => {
  expect(logic.stackBoxes(512)).toEqual(262144);
});

test('isNarcissistic should return true when given 1', () => {
  expect(logic.isNarcissistic(1)).toEqual(true);
});

test('isNarcissistic should return true when given 5', () => {
  expect(logic.isNarcissistic(5)).toEqual(true);
});

test('isNarcissistic should return true when given 7', () => {
  expect(logic.isNarcissistic(7)).toEqual(true);
});

test('isNarcissistic should return true when given 153', () => {
  expect(logic.isNarcissistic(153)).toEqual(true);
});

test('isNarcissistic should return true when given 370', () => {
  expect(logic.isNarcissistic(370)).toEqual(true);
});

test('isNarcissistic should return true when given 371', () => {
  expect(logic.isNarcissistic(371)).toEqual(true);
});

test('isNarcissistic should return true when given 1634', () => {
  expect(logic.isNarcissistic(1634)).toEqual(true);
});

test('isNarcissistic should return false when given 9004', () => {
  expect(logic.isNarcissistic(9004)).toEqual(false);
});

test('isNarcissistic should return false when given 2546', () => {
  expect(logic.isNarcissistic(2546)).toEqual(false);
});

test('isNarcissistic should return false when given 2124', () => {
  expect(logic.isNarcissistic(2124)).toEqual(false);
});

test('isNarcissistic should return false when given 8345', () => {
  expect(logic.isNarcissistic(8345)).toEqual(false);
});

test('matchHouses should return 6 when given 1', () => {
  expect(logic.matchHouses(1)).toEqual(6);
});

test('matchHouses should return 0 when given 0', () => {
  expect(logic.matchHouses(0)).toEqual(0);
});

test('matchHouses should return 86 when given 17', () => {
  expect(logic.matchHouses(17)).toEqual(86);
});

test('matchHouses should return 181 when given 36', () => {
  expect(logic.matchHouses(36)).toEqual(181);
});

test('matchHouses should return 76 when given 15', () => {
  expect(logic.matchHouses(15)).toEqual(76);
});

test('matchHouses should return 496 when given 99', () => {
  expect(logic.matchHouses(99)).toEqual(496);
});

test('matchHouses should return 16 when given 3', () => {
  expect(logic.matchHouses(3)).toEqual(16);
});

test('matchHouses should return 436 when given 87', () => {
  expect(logic.matchHouses(87)).toEqual(436);
});

test('calculateYears should return [1,15,15] when given 1', () => {
  expect(logic.calculateYears(1)).toEqual([1,15,15]);
});

test('calculateYears should return [2,24,24] when given 2', () => {
  expect(logic.calculateYears(2)).toEqual([2,24,24]);
});

test('calculateYears should return [10,56,64] when given 10', () => {
  expect(logic.calculateYears(10)).toEqual([10,56,64]);
});

test('calculateYears should return [20,96,114] when given 20', () => {
  expect(logic.calculateYears(20)).toEqual([20,96,114]);
});

test('calculateYears should return [65,276,339] when given 65', () => {
  expect(logic.calculateYears(65)).toEqual([65,276,339]);
});

test('calculateYears should return [43,188,229] when given 43', () => {
  expect(logic.calculateYears(43)).toEqual([43,188,229]);
});

test('calculateYears should return [100,416,514] when given 100', () => {
  expect(logic.calculateYears(100)).toEqual([100,416,514]);
});

test('whoWinsTonight should return "Bill" when given (20, 20, 5, 10)', () => {
  expect(logic.whoWinsTonight(20, 20, 5, 10)).toEqual("Bill");
});

test('whoWinsTonight should return "Bill" when given (30, 100, 1, 50)', () => {
  expect(logic.whoWinsTonight(30, 100, 1, 50)).toEqual("Bill");
});

test('whoWinsTonight should return "Bill" when given (90, 10, 2, 5)', () => {
  expect(logic.whoWinsTonight(90, 10, 2, 5)).toEqual("Bill");
});

test('whoWinsTonight should return "Will" when given (10, 2, 20, 1)', () => {
  expect(logic.whoWinsTonight(10, 2, 20, 1)).toEqual("Will");
});

test('whoWinsTonight should return "Will" when given (40, 100, 5, 10)', () => {
  expect(logic.whoWinsTonight(40, 100, 5, 10)).toEqual("Will");
});

test('whoWinsTonight should return "Will" when given (5, 5, 5, 2)', () => {
  expect(logic.whoWinsTonight(5, 5, 5, 2)).toEqual("Will");
});

test('whoWinsTonight should return "Tie" when given (3, 7, 2, 5)', () => {
  expect(logic.whoWinsTonight(3, 7, 2, 5)).toEqual("Tie");
});

test('whoWinsTonight should return "Tie" when given (50, 50, 49, 26)', () => {
  expect(logic.whoWinsTonight(50, 50, 49, 26)).toEqual("Tie");
});

test('whoWinsTonight should return "Tie" when given (100000, 100000, 1, 1)', () => {
  expect(logic.whoWinsTonight(100000, 100000, 1, 1)).toEqual("Tie");
});
