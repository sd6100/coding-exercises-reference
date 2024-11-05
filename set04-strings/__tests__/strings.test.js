const strings = require('../strings');

test('isEmpty should return true when given ""', () => {
  expect(strings.isEmpty("")).toEqual(true);
});

test('isEmpty should return false when given " "', () => {
  expect(strings.isEmpty(" ")).toEqual(false);
});

test('isEmpty should return false when given "            "', () => {
  expect(strings.isEmpty("            ")).toEqual(false);
});

test('isEmpty should return false when given "38215"', () => {
  expect(strings.isEmpty("38215")).toEqual(false);
});

test('isEmpty should return false when given "afjabsdf"', () => {
  expect(strings.isEmpty("afjabsdf")).toEqual(false);
});

test('isEmpty should return false when given "!?@&"', () => {
  expect(strings.isEmpty("!?@&")).toEqual(false);
});

test('countDs should return 4 when given "My friend Dylan got distracted at school"', () => {
  expect(strings.countDs("My friend Dylan got distracted at school")).toEqual(4);
});

test('countDs should return 2 when given "Debris was scattered all over the place."', () => {
  expect(strings.countDs("Debris was scattered all over the place.")).toEqual(2);
});

test('countDs should return 3 when given "The rodents hibernated in their den."', () => {
  expect(strings.countDs("The rodents hibernated in their den.")).toEqual(3);
});

test('countSyllables should return 6 when given "Hehehehehehe"', () => {
  expect(strings.countSyllables("Hehehehehehe")).toEqual(6);
});

test('countSyllables should return 8 when given "bobobobobobobobo"', () => {
  expect(strings.countSyllables("bobobobobobobobo")).toEqual(8);
});

test('countSyllables should return 4 when given "NANANANA"', () => {
  expect(strings.countSyllables("NANANANA")).toEqual(4);
});

test('countSyllables should return 4 when given "lelelele"', () => {
  expect(strings.countSyllables("lelelele")).toEqual(4);
});

test('countSyllables should return 9 when given "momomomomomomomomo"', () => {
  expect(strings.countSyllables("momomomomomomomomo")).toEqual(9);
});

test('countSyllables should return 10 when given "WiWiWiWiWiWiWiWiWiWi"', () => {
  expect(strings.countSyllables("WiWiWiWiWiWiWiWiWiWi")).toEqual(10);
});

test('countSyllables should return 12 when given "RURURURURURUrurururuRURU"', () => {
  expect(strings.countSyllables("RURURURURURUrurururuRURU")).toEqual(12);
});

test('countSyllables should return 1 when given "go"', () => {
  expect(strings.countSyllables("go")).toEqual(1);
});

test('countSyllables should return 2 when given "dede"', () => {
  expect(strings.countSyllables("dede")).toEqual(2);
});

test('countWords should return 3 when given "It\'s high noon"', () => {
  expect(strings.countWords("It's high noon")).toEqual(3);
});

test('countWords should return 4 when given "Is this easy mode"', () => {
  expect(strings.countWords("Is this easy mode")).toEqual(4);
});

test('countWords should return 5 when given "What an easy task, right"', () => {
  expect(strings.countWords("What an easy task, right")).toEqual(5);
});

test('countWords should return 4 when given "This is a test"', () => {
  expect(strings.countWords("This is a test")).toEqual(4);
});

test('countWords should return 6 when given "Just an example here move along"', () => {
  expect(strings.countWords("Just an example here move along")).toEqual(6);
});

test('countWords should return 4 when given "How are you today?"', () => {
  expect(strings.countWords("How are you today?")).toEqual(4);
});

test('lastItem should return 2 when given [0,4,19,34,50,-9,2]', () => {
  expect(strings.lastItem([0,4,19,34,50,-9,2])).toEqual(2);
});

test('lastItem should return "User" when given ["Hello","There","JavaScript","User"]', () => {
  expect(strings.lastItem(["Hello","There","JavaScript","User"])).toEqual("User");
});

test('lastItem should return true when given [true,false,false,true]', () => {
  expect(strings.lastItem([true,false,false,true])).toEqual(true);
});

test('lastItem should return 5 when given [0,7,7,5]', () => {
  expect(strings.lastItem([0,7,7,5])).toEqual(5);
});

test('lastItem should return "." when given "JavaScript is a great programming langauge."', () => {
  expect(strings.lastItem("JavaScript is a great programming langauge.")).toEqual(".");
});

test('lastItem should return "O" when given ["H","E","L","L","O"]', () => {
  expect(strings.lastItem(["H","E","L","L","O"])).toEqual("O");
});

test('lastItem should return "g" when given "The quick brown fox jumped over the lazy dog"', () => {
  expect(strings.lastItem("The quick brown fox jumped over the lazy dog")).toEqual("g");
});

test('isIdentical should return true when given "kkkkk"', () => {
  expect(strings.isIdentical("kkkkk")).toEqual(true);
});

test('isIdentical should return false when given "ckkkk"', () => {
  expect(strings.isIdentical("ckkkk")).toEqual(false);
});

test('isIdentical should return false when given "kkkkck"', () => {
  expect(strings.isIdentical("kkkkck")).toEqual(false);
});

test('isIdentical should return false when given "aabc"', () => {
  expect(strings.isIdentical("aabc")).toEqual(false);
});

test('isIdentical should return true when given "ccc"', () => {
  expect(strings.isIdentical("ccc")).toEqual(true);
});

test('isIdentical should return false when given "aabbbb"', () => {
  expect(strings.isIdentical("aabbbb")).toEqual(false);
});

test('isIdentical should return true when given "bbbbbb"', () => {
  expect(strings.isIdentical("bbbbbb")).toEqual(true);
});

test('modifyLast should return "Hellooo" when given ("Hello", 3)', () => {
  expect(strings.modifyLast("Hello", 3)).toEqual("Hellooo");
});

test('modifyLast should return "heyyyyyy" when given ("hey", 6)', () => {
  expect(strings.modifyLast("hey", 6)).toEqual("heyyyyyy");
});

test('modifyLast should return "plsssss!1!!!!!" when given ("plsssss!1!", 5)', () => {
  expect(strings.modifyLast("plsssss!1!", 5)).toEqual("plsssss!1!!!!!");
});

test('modifyLast should return "grr" when given ("gr", 2)', () => {
  expect(strings.modifyLast("gr", 2)).toEqual("grr");
});

test('modifyLast should return "excuse me what?????" when given ("excuse me what?", 5)', () => {
  expect(strings.modifyLast("excuse me what?", 5)).toEqual("excuse me what?????");
});

test('modifyLast should return "1233333" when given ("123", 5)', () => {
  expect(strings.modifyLast("123", 5)).toEqual("1233333");
});

test('modifyLast should return "aaa" when given ("a", 3)', () => {
  expect(strings.modifyLast("a", 3)).toEqual("aaa");
});

test('modifyLast should return "STOPPP" when given ("STOP", 3)', () => {
  expect(strings.modifyLast("STOP", 3)).toEqual("STOPPP");
});

test('isSafeBridge should return true when given "####"', () => {
  expect(strings.isSafeBridge("####")).toEqual(true);
});

test('isSafeBridge should return false when given "## ####"', () => {
  expect(strings.isSafeBridge("## ####")).toEqual(false);
});

test('isSafeBridge should return true when given "#"', () => {
  expect(strings.isSafeBridge("#")).toEqual(true);
});

test('isSafeBridge should return false when given "# #"', () => {
  expect(strings.isSafeBridge("# #")).toEqual(false);
});

test('longBurp should return "Burrrp" when given 3', () => {
  expect(strings.longBurp(3)).toEqual("Burrrp");
});

test('longBurp should return "Burrrrrp" when given 5', () => {
  expect(strings.longBurp(5)).toEqual("Burrrrrp");
});

test('longBurp should return "Burrrrrrrrrp" when given 9', () => {
  expect(strings.longBurp(9)).toEqual("Burrrrrrrrrp");
});

test('longBurp should return "Burrrrrrrrrrp" when given 10', () => {
  expect(strings.longBurp(10)).toEqual("Burrrrrrrrrrp");
});

test('longBurp should return "Burrrrrrrrrrrrrp" when given 13', () => {
  expect(strings.longBurp(13)).toEqual("Burrrrrrrrrrrrrp");
});

test('longBurp should return "Burrrrrrrrrrrrrrrrrrp" when given 18', () => {
  expect(strings.longBurp(18)).toEqual("Burrrrrrrrrrrrrrrrrrp");
});

test('longBurp should return "Burp" when given 1', () => {
  expect(strings.longBurp(1)).toEqual("Burp");
});

test('uploadCount should return 79 when given (["Dec 10","Dec 10","Dec 9","Dec 9","Dec 9","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 7","Dec 7","Dec 7","Dec 7","Dec 7","Dec 5","Dec 5","Dec 5","Dec 4","Dec 4","Dec 4","Dec 4","Dec 4","Dec 3","Dec 3","Dec 3","Dec 2","Dec 2","Dec 2","Dec 1","Dec 1","Dec 1","Dec 1","Nov 30","Nov 30","Nov 28","Nov 28","Nov 27","Nov 27","Nov 27","Nov 26","Nov 26","Nov 25","Nov 25","Nov 25","Nov 25","Nov 24","Nov 24","Nov 23","Nov 23","Nov 23","Nov 21","Nov 21","Nov 20","Nov 20","Nov 20","Nov 19","Nov 19","Nov 19","Nov 18","Nov 18","Nov 17","Nov 17","Nov 17","Nov 16","Nov 16","Nov 16","Nov 16","Nov 15","Nov 15","Nov 14","Nov 14","Nov 14","Nov 13","Nov 13","Nov 13","Nov 13","Nov 12","Nov 12","Nov 12","Nov 11","Nov 11","Nov 11","Nov 11","Nov 10","Nov 10","Nov 10","Nov 9","Nov 9","Nov 9","Nov 9","Nov 9","Nov 8","Nov 7","Nov 7","Nov 7","Nov 6","Nov 6","Nov 5","Nov 5","Nov 4","Nov 4","Nov 4","Nov 4","Nov 3","Nov 3","Nov 3","Nov 2","Nov 2","Nov 2","Nov 2","Nov 1","Oct 31","Oct 31","Oct 31","Oct 31","Oct 31","Oct 30","Oct 29","Oct 29","Oct 28","Oct 28","Oct 28","Oct 27","Oct 27","Oct 26","Oct 26","Oct 26","Oct 25","Oct 24","Oct 24","Oct 24","Oct 23","Oct 23","Oct 23","Oct 22","Oct 22","Oct 22","Oct 21","Oct 20","Oct 20","Oct 20","Oct 20","Oct 19","Oct 19","Oct 19","Oct 18","Oct 17","Oct 17","Oct 17","Oct 17","Oct 16","Oct 16","Oct 15","Oct 15","Oct 14","Oct 14","Oct 13","Oct 13","Oct 13","Oct 12","Oct 12","Oct 10","Oct 10","Oct 10","Oct 9","Oct 9","Oct 9","Oct 8","Oct 8","Oct 7","Oct 7","Oct 6","Oct 6","Oct 5","Oct 5","Oct 3","Oct 3","Oct 3","Oct 2","Oct 2","Oct 2","Oct 2","Oct 1","Oct 1","Sept 30","Sept 30","Sept 29","Sept 29","Sept 29","Sept 28","Sept 28","Sept 26","Sept 26","Sept 25","Sept 24","Sept 24","Sept 23","Sept 23","Sept 23","Sept 22","Sept 22","Sept 22","Sept 21","Sept 21","Sept 20","Sept 19","Sept 19","Sept 19","Sept 18","Sep 18"], "Nov")', () => {
  expect(strings.uploadCount(["Dec 10","Dec 10","Dec 9","Dec 9","Dec 9","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 7","Dec 7","Dec 7","Dec 7","Dec 7","Dec 5","Dec 5","Dec 5","Dec 4","Dec 4","Dec 4","Dec 4","Dec 4","Dec 3","Dec 3","Dec 3","Dec 2","Dec 2","Dec 2","Dec 1","Dec 1","Dec 1","Dec 1","Nov 30","Nov 30","Nov 28","Nov 28","Nov 27","Nov 27","Nov 27","Nov 26","Nov 26","Nov 25","Nov 25","Nov 25","Nov 25","Nov 24","Nov 24","Nov 23","Nov 23","Nov 23","Nov 21","Nov 21","Nov 20","Nov 20","Nov 20","Nov 19","Nov 19","Nov 19","Nov 18","Nov 18","Nov 17","Nov 17","Nov 17","Nov 16","Nov 16","Nov 16","Nov 16","Nov 15","Nov 15","Nov 14","Nov 14","Nov 14","Nov 13","Nov 13","Nov 13","Nov 13","Nov 12","Nov 12","Nov 12","Nov 11","Nov 11","Nov 11","Nov 11","Nov 10","Nov 10","Nov 10","Nov 9","Nov 9","Nov 9","Nov 9","Nov 9","Nov 8","Nov 7","Nov 7","Nov 7","Nov 6","Nov 6","Nov 5","Nov 5","Nov 4","Nov 4","Nov 4","Nov 4","Nov 3","Nov 3","Nov 3","Nov 2","Nov 2","Nov 2","Nov 2","Nov 1","Oct 31","Oct 31","Oct 31","Oct 31","Oct 31","Oct 30","Oct 29","Oct 29","Oct 28","Oct 28","Oct 28","Oct 27","Oct 27","Oct 26","Oct 26","Oct 26","Oct 25","Oct 24","Oct 24","Oct 24","Oct 23","Oct 23","Oct 23","Oct 22","Oct 22","Oct 22","Oct 21","Oct 20","Oct 20","Oct 20","Oct 20","Oct 19","Oct 19","Oct 19","Oct 18","Oct 17","Oct 17","Oct 17","Oct 17","Oct 16","Oct 16","Oct 15","Oct 15","Oct 14","Oct 14","Oct 13","Oct 13","Oct 13","Oct 12","Oct 12","Oct 10","Oct 10","Oct 10","Oct 9","Oct 9","Oct 9","Oct 8","Oct 8","Oct 7","Oct 7","Oct 6","Oct 6","Oct 5","Oct 5","Oct 3","Oct 3","Oct 3","Oct 2","Oct 2","Oct 2","Oct 2","Oct 1","Oct 1","Sept 30","Sept 30","Sept 29","Sept 29","Sept 29","Sept 28","Sept 28","Sept 26","Sept 26","Sept 25","Sept 24","Sept 24","Sept 23","Sept 23","Sept 23","Sept 22","Sept 22","Sept 22","Sept 21","Sept 21","Sept 20","Sept 19","Sept 19","Sept 19","Sept 18","Sep 18"], "Nov")).toEqual(79);
});

test('uploadCount should return 36 when given (["Dec 10","Dec 10","Dec 9","Dec 9","Dec 9","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 7","Dec 7","Dec 7","Dec 7","Dec 7","Dec 5","Dec 5","Dec 5","Dec 4","Dec 4","Dec 4","Dec 4","Dec 4","Dec 3","Dec 3","Dec 3","Dec 2","Dec 2","Dec 2","Dec 1","Dec 1","Dec 1","Dec 1","Nov 30","Nov 30","Nov 28","Nov 28","Nov 27","Nov 27","Nov 27","Nov 26","Nov 26","Nov 25","Nov 25","Nov 25","Nov 25","Nov 24","Nov 24","Nov 23","Nov 23","Nov 23","Nov 21","Nov 21","Nov 20","Nov 20","Nov 20","Nov 19","Nov 19","Nov 19","Nov 18","Nov 18","Nov 17","Nov 17","Nov 17","Nov 16","Nov 16","Nov 16","Nov 16","Nov 15","Nov 15","Nov 14","Nov 14","Nov 14","Nov 13","Nov 13","Nov 13","Nov 13","Nov 12","Nov 12","Nov 12","Nov 11","Nov 11","Nov 11","Nov 11","Nov 10","Nov 10","Nov 10","Nov 9","Nov 9","Nov 9","Nov 9","Nov 9","Nov 8","Nov 7","Nov 7","Nov 7","Nov 6","Nov 6","Nov 5","Nov 5","Nov 4","Nov 4","Nov 4","Nov 4","Nov 3","Nov 3","Nov 3","Nov 2","Nov 2","Nov 2","Nov 2","Nov 1","Oct 31","Oct 31","Oct 31","Oct 31","Oct 31","Oct 30","Oct 29","Oct 29","Oct 28","Oct 28","Oct 28","Oct 27","Oct 27","Oct 26","Oct 26","Oct 26","Oct 25","Oct 24","Oct 24","Oct 24","Oct 23","Oct 23","Oct 23","Oct 22","Oct 22","Oct 22","Oct 21","Oct 20","Oct 20","Oct 20","Oct 20","Oct 19","Oct 19","Oct 19","Oct 18","Oct 17","Oct 17","Oct 17","Oct 17","Oct 16","Oct 16","Oct 15","Oct 15","Oct 14","Oct 14","Oct 13","Oct 13","Oct 13","Oct 12","Oct 12","Oct 10","Oct 10","Oct 10","Oct 9","Oct 9","Oct 9","Oct 8","Oct 8","Oct 7","Oct 7","Oct 6","Oct 6","Oct 5","Oct 5","Oct 3","Oct 3","Oct 3","Oct 2","Oct 2","Oct 2","Oct 2","Oct 1","Oct 1","Sept 30","Sept 30","Sept 29","Sept 29","Sept 29","Sept 28","Sept 28","Sept 26","Sept 26","Sept 25","Sept 24","Sept 24","Sept 23","Sept 23","Sept 23","Sept 22","Sept 22","Sept 22","Sept 21","Sept 21","Sept 20","Sept 19","Sept 19","Sept 19","Sept 18","Sep 18"], "Dec")', () => {
  expect(strings.uploadCount(["Dec 10","Dec 10","Dec 9","Dec 9","Dec 9","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 7","Dec 7","Dec 7","Dec 7","Dec 7","Dec 5","Dec 5","Dec 5","Dec 4","Dec 4","Dec 4","Dec 4","Dec 4","Dec 3","Dec 3","Dec 3","Dec 2","Dec 2","Dec 2","Dec 1","Dec 1","Dec 1","Dec 1","Nov 30","Nov 30","Nov 28","Nov 28","Nov 27","Nov 27","Nov 27","Nov 26","Nov 26","Nov 25","Nov 25","Nov 25","Nov 25","Nov 24","Nov 24","Nov 23","Nov 23","Nov 23","Nov 21","Nov 21","Nov 20","Nov 20","Nov 20","Nov 19","Nov 19","Nov 19","Nov 18","Nov 18","Nov 17","Nov 17","Nov 17","Nov 16","Nov 16","Nov 16","Nov 16","Nov 15","Nov 15","Nov 14","Nov 14","Nov 14","Nov 13","Nov 13","Nov 13","Nov 13","Nov 12","Nov 12","Nov 12","Nov 11","Nov 11","Nov 11","Nov 11","Nov 10","Nov 10","Nov 10","Nov 9","Nov 9","Nov 9","Nov 9","Nov 9","Nov 8","Nov 7","Nov 7","Nov 7","Nov 6","Nov 6","Nov 5","Nov 5","Nov 4","Nov 4","Nov 4","Nov 4","Nov 3","Nov 3","Nov 3","Nov 2","Nov 2","Nov 2","Nov 2","Nov 1","Oct 31","Oct 31","Oct 31","Oct 31","Oct 31","Oct 30","Oct 29","Oct 29","Oct 28","Oct 28","Oct 28","Oct 27","Oct 27","Oct 26","Oct 26","Oct 26","Oct 25","Oct 24","Oct 24","Oct 24","Oct 23","Oct 23","Oct 23","Oct 22","Oct 22","Oct 22","Oct 21","Oct 20","Oct 20","Oct 20","Oct 20","Oct 19","Oct 19","Oct 19","Oct 18","Oct 17","Oct 17","Oct 17","Oct 17","Oct 16","Oct 16","Oct 15","Oct 15","Oct 14","Oct 14","Oct 13","Oct 13","Oct 13","Oct 12","Oct 12","Oct 10","Oct 10","Oct 10","Oct 9","Oct 9","Oct 9","Oct 8","Oct 8","Oct 7","Oct 7","Oct 6","Oct 6","Oct 5","Oct 5","Oct 3","Oct 3","Oct 3","Oct 2","Oct 2","Oct 2","Oct 2","Oct 1","Oct 1","Sept 30","Sept 30","Sept 29","Sept 29","Sept 29","Sept 28","Sept 28","Sept 26","Sept 26","Sept 25","Sept 24","Sept 24","Sept 23","Sept 23","Sept 23","Sept 22","Sept 22","Sept 22","Sept 21","Sept 21","Sept 20","Sept 19","Sept 19","Sept 19","Sept 18","Sep 18"], "Dec")).toEqual(36);
});

test('uploadCount should return 25 when given (["Dec 10","Dec 10","Dec 9","Dec 9","Dec 9","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 7","Dec 7","Dec 7","Dec 7","Dec 7","Dec 5","Dec 5","Dec 5","Dec 4","Dec 4","Dec 4","Dec 4","Dec 4","Dec 3","Dec 3","Dec 3","Dec 2","Dec 2","Dec 2","Dec 1","Dec 1","Dec 1","Dec 1","Nov 30","Nov 30","Nov 28","Nov 28","Nov 27","Nov 27","Nov 27","Nov 26","Nov 26","Nov 25","Nov 25","Nov 25","Nov 25","Nov 24","Nov 24","Nov 23","Nov 23","Nov 23","Nov 21","Nov 21","Nov 20","Nov 20","Nov 20","Nov 19","Nov 19","Nov 19","Nov 18","Nov 18","Nov 17","Nov 17","Nov 17","Nov 16","Nov 16","Nov 16","Nov 16","Nov 15","Nov 15","Nov 14","Nov 14","Nov 14","Nov 13","Nov 13","Nov 13","Nov 13","Nov 12","Nov 12","Nov 12","Nov 11","Nov 11","Nov 11","Nov 11","Nov 10","Nov 10","Nov 10","Nov 9","Nov 9","Nov 9","Nov 9","Nov 9","Nov 8","Nov 7","Nov 7","Nov 7","Nov 6","Nov 6","Nov 5","Nov 5","Nov 4","Nov 4","Nov 4","Nov 4","Nov 3","Nov 3","Nov 3","Nov 2","Nov 2","Nov 2","Nov 2","Nov 1","Oct 31","Oct 31","Oct 31","Oct 31","Oct 31","Oct 30","Oct 29","Oct 29","Oct 28","Oct 28","Oct 28","Oct 27","Oct 27","Oct 26","Oct 26","Oct 26","Oct 25","Oct 24","Oct 24","Oct 24","Oct 23","Oct 23","Oct 23","Oct 22","Oct 22","Oct 22","Oct 21","Oct 20","Oct 20","Oct 20","Oct 20","Oct 19","Oct 19","Oct 19","Oct 18","Oct 17","Oct 17","Oct 17","Oct 17","Oct 16","Oct 16","Oct 15","Oct 15","Oct 14","Oct 14","Oct 13","Oct 13","Oct 13","Oct 12","Oct 12","Oct 10","Oct 10","Oct 10","Oct 9","Oct 9","Oct 9","Oct 8","Oct 8","Oct 7","Oct 7","Oct 6","Oct 6","Oct 5","Oct 5","Oct 3","Oct 3","Oct 3","Oct 2","Oct 2","Oct 2","Oct 2","Oct 1","Oct 1","Sept 30","Sept 30","Sept 29","Sept 29","Sept 29","Sept 28","Sept 28","Sept 26","Sept 26","Sept 25","Sept 24","Sept 24","Sept 23","Sept 23","Sept 23","Sept 22","Sept 22","Sept 22","Sept 21","Sept 21","Sept 20","Sept 19","Sept 19","Sept 19","Sept 18"], "Sept")', () => {
  expect(strings.uploadCount(["Dec 10","Dec 10","Dec 9","Dec 9","Dec 9","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 7","Dec 7","Dec 7","Dec 7","Dec 7","Dec 5","Dec 5","Dec 5","Dec 4","Dec 4","Dec 4","Dec 4","Dec 4","Dec 3","Dec 3","Dec 3","Dec 2","Dec 2","Dec 2","Dec 1","Dec 1","Dec 1","Dec 1","Nov 30","Nov 30","Nov 28","Nov 28","Nov 27","Nov 27","Nov 27","Nov 26","Nov 26","Nov 25","Nov 25","Nov 25","Nov 25","Nov 24","Nov 24","Nov 23","Nov 23","Nov 23","Nov 21","Nov 21","Nov 20","Nov 20","Nov 20","Nov 19","Nov 19","Nov 19","Nov 18","Nov 18","Nov 17","Nov 17","Nov 17","Nov 16","Nov 16","Nov 16","Nov 16","Nov 15","Nov 15","Nov 14","Nov 14","Nov 14","Nov 13","Nov 13","Nov 13","Nov 13","Nov 12","Nov 12","Nov 12","Nov 11","Nov 11","Nov 11","Nov 11","Nov 10","Nov 10","Nov 10","Nov 9","Nov 9","Nov 9","Nov 9","Nov 9","Nov 8","Nov 7","Nov 7","Nov 7","Nov 6","Nov 6","Nov 5","Nov 5","Nov 4","Nov 4","Nov 4","Nov 4","Nov 3","Nov 3","Nov 3","Nov 2","Nov 2","Nov 2","Nov 2","Nov 1","Oct 31","Oct 31","Oct 31","Oct 31","Oct 31","Oct 30","Oct 29","Oct 29","Oct 28","Oct 28","Oct 28","Oct 27","Oct 27","Oct 26","Oct 26","Oct 26","Oct 25","Oct 24","Oct 24","Oct 24","Oct 23","Oct 23","Oct 23","Oct 22","Oct 22","Oct 22","Oct 21","Oct 20","Oct 20","Oct 20","Oct 20","Oct 19","Oct 19","Oct 19","Oct 18","Oct 17","Oct 17","Oct 17","Oct 17","Oct 16","Oct 16","Oct 15","Oct 15","Oct 14","Oct 14","Oct 13","Oct 13","Oct 13","Oct 12","Oct 12","Oct 10","Oct 10","Oct 10","Oct 9","Oct 9","Oct 9","Oct 8","Oct 8","Oct 7","Oct 7","Oct 6","Oct 6","Oct 5","Oct 5","Oct 3","Oct 3","Oct 3","Oct 2","Oct 2","Oct 2","Oct 2","Oct 1","Oct 1","Sept 30","Sept 30","Sept 29","Sept 29","Sept 29","Sept 28","Sept 28","Sept 26","Sept 26","Sept 25","Sept 24","Sept 24","Sept 23","Sept 23","Sept 23","Sept 22","Sept 22","Sept 22","Sept 21","Sept 21","Sept 20","Sept 19","Sept 19","Sept 19","Sept 18"], "Sept")).toEqual(25);
});

test('uploadCount should return 73 when given (["Dec 10","Dec 10","Dec 9","Dec 9","Dec 9","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 7","Dec 7","Dec 7","Dec 7","Dec 7","Dec 5","Dec 5","Dec 5","Dec 4","Dec 4","Dec 4","Dec 4","Dec 4","Dec 3","Dec 3","Dec 3","Dec 2","Dec 2","Dec 2","Dec 1","Dec 1","Dec 1","Dec 1","Nov 30","Nov 30","Nov 28","Nov 28","Nov 27","Nov 27","Nov 27","Nov 26","Nov 26","Nov 25","Nov 25","Nov 25","Nov 25","Nov 24","Nov 24","Nov 23","Nov 23","Nov 23","Nov 21","Nov 21","Nov 20","Nov 20","Nov 20","Nov 19","Nov 19","Nov 19","Nov 18","Nov 18","Nov 17","Nov 17","Nov 17","Nov 16","Nov 16","Nov 16","Nov 16","Nov 15","Nov 15","Nov 14","Nov 14","Nov 14","Nov 13","Nov 13","Nov 13","Nov 13","Nov 12","Nov 12","Nov 12","Nov 11","Nov 11","Nov 11","Nov 11","Nov 10","Nov 10","Nov 10","Nov 9","Nov 9","Nov 9","Nov 9","Nov 9","Nov 8","Nov 7","Nov 7","Nov 7","Nov 6","Nov 6","Nov 5","Nov 5","Nov 4","Nov 4","Nov 4","Nov 4","Nov 3","Nov 3","Nov 3","Nov 2","Nov 2","Nov 2","Nov 2","Nov 1","Oct 31","Oct 31","Oct 31","Oct 31","Oct 31","Oct 30","Oct 29","Oct 29","Oct 28","Oct 28","Oct 28","Oct 27","Oct 27","Oct 26","Oct 26","Oct 26","Oct 25","Oct 24","Oct 24","Oct 24","Oct 23","Oct 23","Oct 23","Oct 22","Oct 22","Oct 22","Oct 21","Oct 20","Oct 20","Oct 20","Oct 20","Oct 19","Oct 19","Oct 19","Oct 18","Oct 17","Oct 17","Oct 17","Oct 17","Oct 16","Oct 16","Oct 15","Oct 15","Oct 14","Oct 14","Oct 13","Oct 13","Oct 13","Oct 12","Oct 12","Oct 10","Oct 10","Oct 10","Oct 9","Oct 9","Oct 9","Oct 8","Oct 8","Oct 7","Oct 7","Oct 6","Oct 6","Oct 5","Oct 5","Oct 3","Oct 3","Oct 3","Oct 2","Oct 2","Oct 2","Oct 2","Oct 1","Oct 1","Sept 30","Sept 30","Sept 29","Sept 29","Sept 29","Sept 28","Sept 28","Sept 26","Sept 26","Sept 25","Sept 24","Sept 24","Sept 23","Sept 23","Sept 23","Sept 22","Sept 22","Sept 22","Sept 21","Sept 21","Sept 20","Sept 19","Sept 19","Sept 19","Sept 18","Sep 18"], "Oct")', () => {
  expect(strings.uploadCount(["Dec 10","Dec 10","Dec 9","Dec 9","Dec 9","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 8","Dec 7","Dec 7","Dec 7","Dec 7","Dec 7","Dec 5","Dec 5","Dec 5","Dec 4","Dec 4","Dec 4","Dec 4","Dec 4","Dec 3","Dec 3","Dec 3","Dec 2","Dec 2","Dec 2","Dec 1","Dec 1","Dec 1","Dec 1","Nov 30","Nov 30","Nov 28","Nov 28","Nov 27","Nov 27","Nov 27","Nov 26","Nov 26","Nov 25","Nov 25","Nov 25","Nov 25","Nov 24","Nov 24","Nov 23","Nov 23","Nov 23","Nov 21","Nov 21","Nov 20","Nov 20","Nov 20","Nov 19","Nov 19","Nov 19","Nov 18","Nov 18","Nov 17","Nov 17","Nov 17","Nov 16","Nov 16","Nov 16","Nov 16","Nov 15","Nov 15","Nov 14","Nov 14","Nov 14","Nov 13","Nov 13","Nov 13","Nov 13","Nov 12","Nov 12","Nov 12","Nov 11","Nov 11","Nov 11","Nov 11","Nov 10","Nov 10","Nov 10","Nov 9","Nov 9","Nov 9","Nov 9","Nov 9","Nov 8","Nov 7","Nov 7","Nov 7","Nov 6","Nov 6","Nov 5","Nov 5","Nov 4","Nov 4","Nov 4","Nov 4","Nov 3","Nov 3","Nov 3","Nov 2","Nov 2","Nov 2","Nov 2","Nov 1","Oct 31","Oct 31","Oct 31","Oct 31","Oct 31","Oct 30","Oct 29","Oct 29","Oct 28","Oct 28","Oct 28","Oct 27","Oct 27","Oct 26","Oct 26","Oct 26","Oct 25","Oct 24","Oct 24","Oct 24","Oct 23","Oct 23","Oct 23","Oct 22","Oct 22","Oct 22","Oct 21","Oct 20","Oct 20","Oct 20","Oct 20","Oct 19","Oct 19","Oct 19","Oct 18","Oct 17","Oct 17","Oct 17","Oct 17","Oct 16","Oct 16","Oct 15","Oct 15","Oct 14","Oct 14","Oct 13","Oct 13","Oct 13","Oct 12","Oct 12","Oct 10","Oct 10","Oct 10","Oct 9","Oct 9","Oct 9","Oct 8","Oct 8","Oct 7","Oct 7","Oct 6","Oct 6","Oct 5","Oct 5","Oct 3","Oct 3","Oct 3","Oct 2","Oct 2","Oct 2","Oct 2","Oct 1","Oct 1","Sept 30","Sept 30","Sept 29","Sept 29","Sept 29","Sept 28","Sept 28","Sept 26","Sept 26","Sept 25","Sept 24","Sept 24","Sept 23","Sept 23","Sept 23","Sept 22","Sept 22","Sept 22","Sept 21","Sept 21","Sept 20","Sept 19","Sept 19","Sept 19","Sept 18","Sep 18"], "Oct")).toEqual(73);
});

test('keyboardMistakes should return "MUBASHIR" when given "MUB45H1R"', () => {
  expect(strings.keyboardMistakes("MUB45H1R")).toEqual("MUBASHIR");
});

test('keyboardMistakes should return "DUBLIN" when given "DUBL1N"', () => {
  expect(strings.keyboardMistakes("DUBL1N")).toEqual("DUBLIN");
});

test('keyboardMistakes should return "SINGAPORE" when given "51NG4P0RE"', () => {
  expect(strings.keyboardMistakes("51NG4P0RE")).toEqual("SINGAPORE");
});

test('keyboardMistakes should return "PAKISTAN" when given "P4K15T4N"', () => {
  expect(strings.keyboardMistakes("P4K15T4N")).toEqual("PAKISTAN");
});

test('keyboardMistakes should return "PARIS" when given "P4R15"', () => {
  expect(strings.keyboardMistakes("P4R15")).toEqual("PARIS");
});

test('forbiddenLetter should return false when given ("e", ["rinse","and","repeat"])', () => {
  expect(strings.forbiddenLetter("e", ["rinse","and","repeat"])).toEqual(false);
});

test('forbiddenLetter should return true when given ("d", ["python","javascript","ruby","fortran"])', () => {
  expect(strings.forbiddenLetter("d", ["python","javascript","ruby","fortran"])).toEqual(true);
});

test('forbiddenLetter should return true when given ("a", ["spoon","fork","knife"])', () => {
  expect(strings.forbiddenLetter("a", ["spoon","fork","knife"])).toEqual(true);
});

test('forbiddenLetter should return true when given ("b", ["test","dot","assert","equals"])', () => {
  expect(strings.forbiddenLetter("b", ["test","dot","assert","equals"])).toEqual(true);
});

test('forbiddenLetter should return false when given ("i", ["rock","paper","scissors"])', () => {
  expect(strings.forbiddenLetter("i", ["rock","paper","scissors"])).toEqual(false);
});

test('forbiddenLetter should return true when given ("t", [])', () => {
  expect(strings.forbiddenLetter("t", [])).toEqual(true);
});
