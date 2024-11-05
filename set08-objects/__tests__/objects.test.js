const objects = require('../objects');

test('getVoteCount should return 13 when given {"upvotes":13,"downvotes":0}', () => {
  expect(objects.getVoteCount({"upvotes":13,"downvotes":0})).toEqual(13);
});

test('getVoteCount should return -31 when given {"upvotes":2,"downvotes":33}', () => {
  expect(objects.getVoteCount({"upvotes":2,"downvotes":33})).toEqual(-31);
});

test('getVoteCount should return 0 when given {"upvotes":132,"downvotes":132}', () => {
  expect(objects.getVoteCount({"upvotes":132,"downvotes":132})).toEqual(0);
});

test('getVoteCount should return 0 when given {"upvotes":0,"downvotes":0}', () => {
  expect(objects.getVoteCount({"upvotes":0,"downvotes":0})).toEqual(0);
});

test('getVoteCount should return -3 when given {"downvotes":4,"upvotes":1}', () => {
  expect(objects.getVoteCount({"downvotes":4,"upvotes":1})).toEqual(-3);
});

test('cityFacts should return "Manila has a population of 1,780,148 and is situated in Asia" when given {"name":"Manila","population":"1,780,148","continent":"Asia"}', () => {
  expect(objects.cityFacts({"name":"Manila","population":"1,780,148","continent":"Asia"})).toEqual("Manila has a population of 1,780,148 and is situated in Asia");
});

test('cityFacts should return "Melbourne has a population of 4,936,349 and is situated in Australia" when given {"name":"Melbourne","population":"4,936,349","continent":"Australia"}', () => {
  expect(objects.cityFacts({"name":"Melbourne","population":"4,936,349","continent":"Australia"})).toEqual("Melbourne has a population of 4,936,349 and is situated in Australia");
});

test('cityFacts should return "Kampala has a population of 1,507,080 and is situated in Africa" when given {"name":"Kampala","population":"1,507,080","continent":"Africa"}', () => {
  expect(objects.cityFacts({"name":"Kampala","population":"1,507,080","continent":"Africa"})).toEqual("Kampala has a population of 1,507,080 and is situated in Africa");
});

test('cityFacts should return "Buenos Aires has a population of 2,891,082 and is situated in South America" when given {"name":"Buenos Aires","population":"2,891,082","continent":"South America"}', () => {
  expect(objects.cityFacts({"name":"Buenos Aires","population":"2,891,082","continent":"South America"})).toEqual("Buenos Aires has a population of 2,891,082 and is situated in South America");
});

test('cityFacts should return "Vancouver has a population of 631,486 and is situated in North America" when given {"name":"Vancouver","population":"631,486","continent":"North America"}', () => {
  expect(objects.cityFacts({"name":"Vancouver","population":"631,486","continent":"North America"})).toEqual("Vancouver has a population of 631,486 and is situated in North America");
});

test('cityFacts should return "Berlin has a population of 3,748,148 and is situated in Europe" when given {"name":"Berlin","population":"3,748,148","continent":"Europe"}', () => {
  expect(objects.cityFacts({"name":"Berlin","population":"3,748,148","continent":"Europe"})).toEqual("Berlin has a population of 3,748,148 and is situated in Europe");
});

test('volumeOfBox should return 22 when given {"width":11,"length":1,"height":2}', () => {
  expect(objects.volumeOfBox({"width":11,"length":1,"height":2})).toEqual(22);
});

test('volumeOfBox should return 15 when given {"width":1,"length":5,"height":3}', () => {
  expect(objects.volumeOfBox({"width":1,"length":5,"height":3})).toEqual(15);
});

test('volumeOfBox should return 2 when given {"width":2,"length":1,"height":1}', () => {
  expect(objects.volumeOfBox({"width":2,"length":1,"height":1})).toEqual(2);
});

test('volumeOfBox should return 60 when given {"width":2,"length":6,"height":5}', () => {
  expect(objects.volumeOfBox({"width":2,"length":6,"height":5})).toEqual(60);
});

test('volumeOfBox should return 30 when given {"width":2,"length":5,"height":3}', () => {
  expect(objects.volumeOfBox({"width":2,"length":5,"height":3})).toEqual(30);
});

test('volumeOfBox should return 10 when given {"width":2,"length":5,"height":1}', () => {
  expect(objects.volumeOfBox({"width":2,"length":5,"height":1})).toEqual(10);
});

test('isEmpty should return true when given {}', () => {
  expect(objects.isEmpty({})).toEqual(true);
});

test('isEmpty should return false when given {"a":1}', () => {
  expect(objects.isEmpty({"a":1})).toEqual(false);
});

test('isEmpty should return false when given {"z":2,"w":4,"y":5}', () => {
  expect(objects.isEmpty({"z":2,"w":4,"y":5})).toEqual(false);
});

test('fiftyThirtyTwenty should return {"Needs":5000,"Wants":3000,"Savings":2000} when given 10000', () => {
  expect(objects.fiftyThirtyTwenty(10000)).toEqual({"Needs":5000,"Wants":3000,"Savings":2000});
});

test('fiftyThirtyTwenty should return {"Needs":25000,"Wants":15000,"Savings":10000} when given 50000', () => {
  expect(objects.fiftyThirtyTwenty(50000)).toEqual({"Needs":25000,"Wants":15000,"Savings":10000});
});

test('fiftyThirtyTwenty should return {"Needs":6725,"Wants":4035,"Savings":2690} when given 13450', () => {
  expect(objects.fiftyThirtyTwenty(13450)).toEqual({"Needs":6725,"Wants":4035,"Savings":2690});
});

test('fiftyThirtyTwenty should return {"Needs":13900,"Wants":8340,"Savings":5560} when given 27800', () => {
  expect(objects.fiftyThirtyTwenty(27800)).toEqual({"Needs":13900,"Wants":8340,"Savings":5560});
});

test('fiftyThirtyTwenty should return {"Needs":9500,"Wants":5700,"Savings":3800} when given 19000', () => {
  expect(objects.fiftyThirtyTwenty(19000)).toEqual({"Needs":9500,"Wants":5700,"Savings":3800});
});

test('fiftyThirtyTwenty should return {"Needs":8805,"Wants":5283,"Savings":3522} when given 17610', () => {
  expect(objects.fiftyThirtyTwenty(17610)).toEqual({"Needs":8805,"Wants":5283,"Savings":3522});
});

test('fiftyThirtyTwenty should return {"Needs":12500,"Wants":7500,"Savings":5000} when given 25000', () => {
  expect(objects.fiftyThirtyTwenty(25000)).toEqual({"Needs":12500,"Wants":7500,"Savings":5000});
});

test('fiftyThirtyTwenty should return {"Needs":50000,"Wants":30000,"Savings":20000} when given 100000', () => {
  expect(objects.fiftyThirtyTwenty(100000)).toEqual({"Needs":50000,"Wants":30000,"Savings":20000});
});

test('fiftyThirtyTwenty should return {"Needs":173550,"Wants":104130,"Savings":69420} when given 347100', () => {
  expect(objects.fiftyThirtyTwenty(347100)).toEqual({"Needs":173550,"Wants":104130,"Savings":69420});
});

test('profit should return 14796 when given {"costPrice":32.67,"sellPrice":45,"inventory":1200}', () => {
  expect(objects.profit({"costPrice":32.67,"sellPrice":45,"inventory":1200})).toEqual(14796);
});

test('profit should return 20784 when given {"costPrice":0.1,"sellPrice":0.18,"inventory":259800}', () => {
  expect(objects.profit({"costPrice":0.1,"sellPrice":0.18,"inventory":259800})).toEqual(20784);
});

test('profit should return 34497 when given {"costPrice":185,"sellPrice":299.99,"inventory":300}', () => {
  expect(objects.profit({"costPrice":185,"sellPrice":299.99,"inventory":300})).toEqual(34497);
});

test('profit should return 60577 when given {"costPrice":378.11,"sellPrice":990,"inventory":99}', () => {
  expect(objects.profit({"costPrice":378.11,"sellPrice":990,"inventory":99})).toEqual(60577);
});

test('profit should return 25740 when given {"costPrice":4.67,"sellPrice":5,"inventory":78000}', () => {
  expect(objects.profit({"costPrice":4.67,"sellPrice":5,"inventory":78000})).toEqual(25740);
});

test('profit should return 31546 when given {"costPrice":19.87,"sellPrice":110,"inventory":350}', () => {
  expect(objects.profit({"costPrice":19.87,"sellPrice":110,"inventory":350})).toEqual(31546);
});

test('profit should return 9540 when given {"costPrice":2.91,"sellPrice":4.5,"inventory":6000}', () => {
  expect(objects.profit({"costPrice":2.91,"sellPrice":4.5,"inventory":6000})).toEqual(9540);
});

test('profit should return 40990 when given {"costPrice":68.01,"sellPrice":149.99,"inventory":500}', () => {
  expect(objects.profit({"costPrice":68.01,"sellPrice":149.99,"inventory":500})).toEqual(40990);
});

test('profit should return 70500 when given {"costPrice":1.45,"sellPrice":8.5,"inventory":10000}', () => {
  expect(objects.profit({"costPrice":1.45,"sellPrice":8.5,"inventory":10000})).toEqual(70500);
});

test('profit should return 242190 when given {"costPrice":10780,"sellPrice":34999,"inventory":10}', () => {
  expect(objects.profit({"costPrice":10780,"sellPrice":34999,"inventory":10})).toEqual(242190);
});

test('isInRange should return true when given (4, {"min":0,"max":5})', () => {
  expect(objects.isInRange(4, {"min":0,"max":5})).toEqual(true);
});

test('isInRange should return true when given (4, {"min":4,"max":5})', () => {
  expect(objects.isInRange(4, {"min":4,"max":5})).toEqual(true);
});

test('isInRange should return true when given (4, {"min":0,"max":4})', () => {
  expect(objects.isInRange(4, {"min":0,"max":4})).toEqual(true);
});

test('isInRange should return false when given (4, {"min":6,"max":10})', () => {
  expect(objects.isInRange(4, {"min":6,"max":10})).toEqual(false);
});

test('isInRange should return false when given (11, {"min":6,"max":10})', () => {
  expect(objects.isInRange(11, {"min":6,"max":10})).toEqual(false);
});

test('isInRange should return true when given (5, {"min":5,"max":5})', () => {
  expect(objects.isInRange(5, {"min":5,"max":5})).toEqual(true);
});

test('isInRange should return true when given (1.5, {"min":1.25,"max":1.75})', () => {
  expect(objects.isInRange(1.5, {"min":1.25,"max":1.75})).toEqual(true);
});

test('isInRange should return false when given (1.1, {"min":1.25,"max":1.75})', () => {
  expect(objects.isInRange(1.1, {"min":1.25,"max":1.75})).toEqual(false);
});

test('isInRange should return false when given (1.8, {"min":1.25,"max":1.75})', () => {
  expect(objects.isInRange(1.8, {"min":1.25,"max":1.75})).toEqual(false);
});

test('isInRange should return true when given (-1, {"min":-1,"max":1})', () => {
  expect(objects.isInRange(-1, {"min":-1,"max":1})).toEqual(true);
});

test('nSidedShape should return "circle" when given 1', () => {
  expect(objects.nSidedShape(1)).toEqual("circle");
});

test('nSidedShape should return "semi-circle" when given 2', () => {
  expect(objects.nSidedShape(2)).toEqual("semi-circle");
});

test('nSidedShape should return "triangle" when given 3', () => {
  expect(objects.nSidedShape(3)).toEqual("triangle");
});

test('nSidedShape should return "square" when given 4', () => {
  expect(objects.nSidedShape(4)).toEqual("square");
});

test('nSidedShape should return "pentagon" when given 5', () => {
  expect(objects.nSidedShape(5)).toEqual("pentagon");
});

test('nSidedShape should return "hexagon" when given 6', () => {
  expect(objects.nSidedShape(6)).toEqual("hexagon");
});

test('nSidedShape should return "heptagon" when given 7', () => {
  expect(objects.nSidedShape(7)).toEqual("heptagon");
});

test('nSidedShape should return "octagon" when given 8', () => {
  expect(objects.nSidedShape(8)).toEqual("octagon");
});

test('nSidedShape should return "nonagon" when given 9', () => {
  expect(objects.nSidedShape(9)).toEqual("nonagon");
});

test('nSidedShape should return "decagon" when given 10', () => {
  expect(objects.nSidedShape(10)).toEqual("decagon");
});

test('inkLevels should return 10 when given {"cyan":23,"magenta":12,"yellow":10}', () => {
  expect(objects.inkLevels({"cyan":23,"magenta":12,"yellow":10})).toEqual(10);
});

test('inkLevels should return 432 when given {"cyan":432,"magenta":543,"yellow":777}', () => {
  expect(objects.inkLevels({"cyan":432,"magenta":543,"yellow":777})).toEqual(432);
});

test('inkLevels should return 0 when given {"cyan":700,"magenta":700,"yellow":0}', () => {
  expect(objects.inkLevels({"cyan":700,"magenta":700,"yellow":0})).toEqual(0);
});

test('inkLevels should return 1 when given {"cyan":70,"magenta":700,"yellow":1}', () => {
  expect(objects.inkLevels({"cyan":70,"magenta":700,"yellow":1})).toEqual(1);
});

test('inkLevels should return 6543 when given {"cyan":6543,"magenta":74543,"yellow":2345678}', () => {
  expect(objects.inkLevels({"cyan":6543,"magenta":74543,"yellow":2345678})).toEqual(6543);
});

test('inkLevels should return 1 when given {"cyan":1,"magenta":1,"yellow":1}', () => {
  expect(objects.inkLevels({"cyan":1,"magenta":1,"yellow":1})).toEqual(1);
});

test('inkLevels should return 700 when given {"cyan":700,"magenta":700,"yellow":700}', () => {
  expect(objects.inkLevels({"cyan":700,"magenta":700,"yellow":700})).toEqual(700);
});

test('maximumScore should return 28 when given [{"tile":"N","score":1},{"tile":"K","score":5},{"tile":"Z","score":10},{"tile":"X","score":8},{"tile":"D","score":2},{"tile":"A","score":1},{"tile":"E","score":1}]', () => {
  expect(objects.maximumScore([{"tile":"N","score":1},{"tile":"K","score":5},{"tile":"Z","score":10},{"tile":"X","score":8},{"tile":"D","score":2},{"tile":"A","score":1},{"tile":"E","score":1}])).toEqual(28);
});

test('maximumScore should return 15 when given [{"tile":"B","score":2},{"tile":"V","score":4},{"tile":"F","score":4},{"tile":"U","score":1},{"tile":"D","score":2},{"tile":"O","score":1},{"tile":"U","score":1}]', () => {
  expect(objects.maximumScore([{"tile":"B","score":2},{"tile":"V","score":4},{"tile":"F","score":4},{"tile":"U","score":1},{"tile":"D","score":2},{"tile":"O","score":1},{"tile":"U","score":1}])).toEqual(15);
});

test('maximumScore should return 18 when given [{"tile":"M","score":3},{"tile":"Q","score":10},{"tile":"O","score":1},{"tile":"E","score":1},{"tile":"E","score":1},{"tile":"I","score":1},{"tile":"A","score":1}]', () => {
  expect(objects.maximumScore([{"tile":"M","score":3},{"tile":"Q","score":10},{"tile":"O","score":1},{"tile":"E","score":1},{"tile":"E","score":1},{"tile":"I","score":1},{"tile":"A","score":1}])).toEqual(18);
});

test('maximumScore should return 7 when given [{"tile":"A","score":1},{"tile":"E","score":1},{"tile":"O","score":1},{"tile":"E","score":1},{"tile":"E","score":1},{"tile":"I","score":1},{"tile":"A","score":1}]', () => {
  expect(objects.maximumScore([{"tile":"A","score":1},{"tile":"E","score":1},{"tile":"O","score":1},{"tile":"E","score":1},{"tile":"E","score":1},{"tile":"I","score":1},{"tile":"A","score":1}])).toEqual(7);
});

test('toArray should return [["a",1],["b",2]] when given {"a":1,"b":2}', () => {
  expect(objects.toArray({"a":1,"b":2})).toEqual([["a",1],["b",2]]);
});

test('toArray should return [["foo",33],["bar",45],["baz",67]] when given {"foo":33,"bar":45,"baz":67}', () => {
  expect(objects.toArray({"foo":33,"bar":45,"baz":67})).toEqual([["foo",33],["bar",45],["baz",67]]);
});

test('toArray should return [["shrimp",15],["tots",12]] when given {"shrimp":15,"tots":12}', () => {
  expect(objects.toArray({"shrimp":15,"tots":12})).toEqual([["shrimp",15],["tots",12]]);
});

test('toArray should return [] when given {}', () => {
  expect(objects.toArray({})).toEqual([]);
});

test('freeShipping should return false when given {"Shampoo":5.99,"Rubber Ducks":15.99}', () => {
  expect(objects.freeShipping({"Shampoo":5.99,"Rubber Ducks":15.99})).toEqual(false);
});

test('freeShipping should return true when given {"Flatscreen TV":399.99}', () => {
  expect(objects.freeShipping({"Flatscreen TV":399.99})).toEqual(true);
});

test('freeShipping should return true when given {"Monopoly":11.99,"Secret Hitler":35.99,"Bananagrams":13.99}', () => {
  expect(objects.freeShipping({"Monopoly":11.99,"Secret Hitler":35.99,"Bananagrams":13.99})).toEqual(true);
});

test('freeShipping should return false when given {"Scrabble":12.32,"Jenga":5.55,"Clue":20}', () => {
  expect(objects.freeShipping({"Scrabble":12.32,"Jenga":5.55,"Clue":20})).toEqual(false);
});

test('freeShipping should return true when given {"Elephant Plushie":40.55,"Octopus Plushie":20.33,"Spongebob Plushie":20}', () => {
  expect(objects.freeShipping({"Elephant Plushie":40.55,"Octopus Plushie":20.33,"Spongebob Plushie":20})).toEqual(true);
});
