const strings2 = require('../strings2');

test('replaceVowels should return "th# ##rdv#rk" when given ("the aardvark", "#")', () => {
  expect(strings2.replaceVowels("the aardvark", "#")).toEqual("th# ##rdv#rk");
});

test('replaceVowels should return "m?nn?? m??s?" when given ("minnie mouse", "?")', () => {
  expect(strings2.replaceVowels("minnie mouse", "?")).toEqual("m?nn?? m??s?");
});

test('replaceVowels should return "sh*k*sp**r*" when given ("shakespeare", "*")', () => {
  expect(strings2.replaceVowels("shakespeare", "*")).toEqual("sh*k*sp**r*");
});

test('replaceVowels should return "<ll <s f<<r <n l<v< <nd w<r" when given ("all is fair in love and war", "<")', () => {
  expect(strings2.replaceVowels("all is fair in love and war", "<")).toEqual("<ll <s f<<r <n l<v< <nd w<r");
});

test('isStrangePair should return true when given ("ratio", "orator")', () => {
  expect(strings2.isStrangePair("ratio", "orator")).toEqual(true);
});

test('isStrangePair should return true when given ("sparkling", "groups")', () => {
  expect(strings2.isStrangePair("sparkling", "groups")).toEqual(true);
});

test('isStrangePair should return true when given ("mentee", "eminem")', () => {
  expect(strings2.isStrangePair("mentee", "eminem")).toEqual(true);
});

test('isStrangePair should return true when given ("yahtzee", "easy")', () => {
  expect(strings2.isStrangePair("yahtzee", "easy")).toEqual(true);
});

test('isStrangePair should return false when given ("bush", "hubris")', () => {
  expect(strings2.isStrangePair("bush", "hubris")).toEqual(false);
});

test('isStrangePair should return false when given ("edit", "cheese")', () => {
  expect(strings2.isStrangePair("edit", "cheese")).toEqual(false);
});

test('isStrangePair should return false when given ("false", "true")', () => {
  expect(strings2.isStrangePair("false", "true")).toEqual(false);
});

test('isStrangePair should return false when given ("cupid", "dionysus")', () => {
  expect(strings2.isStrangePair("cupid", "dionysus")).toEqual(false);
});

test('isStrangePair should return false when given ("futile", "elephant")', () => {
  expect(strings2.isStrangePair("futile", "elephant")).toEqual(false);
});

test('isStrangePair should return true when given ("", "")', () => {
  expect(strings2.isStrangePair("", "")).toEqual(true);
});

test('isStrangePair should return false when given ("", "abc")', () => {
  expect(strings2.isStrangePair("", "abc")).toEqual(false);
});

test('isStrangePair should return true when given ("a", "a")', () => {
  expect(strings2.isStrangePair("a", "a")).toEqual(true);
});

test('isStrangePair should return false when given ("a", "b")', () => {
  expect(strings2.isStrangePair("a", "b")).toEqual(false);
});

test('isStrangePair should return true when given ("&", "&")', () => {
  expect(strings2.isStrangePair("&", "&")).toEqual(true);
});

test('isStrangePair should return true when given ("&!", "!&")', () => {
  expect(strings2.isStrangePair("&!", "!&")).toEqual(true);
});

test('isStrangePair should return true when given ("5556", "65")', () => {
  expect(strings2.isStrangePair("5556", "65")).toEqual(true);
});

test('googlify should return "invalid" when given -5', () => {
  expect(strings2.googlify(-5)).toEqual("invalid");
});

test('googlify should return "invalid" when given -4', () => {
  expect(strings2.googlify(-4)).toEqual("invalid");
});

test('googlify should return "invalid" when given -3', () => {
  expect(strings2.googlify(-3)).toEqual("invalid");
});

test('googlify should return "invalid" when given -2', () => {
  expect(strings2.googlify(-2)).toEqual("invalid");
});

test('googlify should return "invalid" when given -1', () => {
  expect(strings2.googlify(-1)).toEqual("invalid");
});

test('googlify should return "invalid" when given 0', () => {
  expect(strings2.googlify(0)).toEqual("invalid");
});

test('googlify should return "invalid" when given 1', () => {
  expect(strings2.googlify(1)).toEqual("invalid");
});

test('googlify should return "Google" when given 2', () => {
  expect(strings2.googlify(2)).toEqual("Google");
});

test('googlify should return "Gooogle" when given 3', () => {
  expect(strings2.googlify(3)).toEqual("Gooogle");
});

test('googlify should return "Goooogle" when given 4', () => {
  expect(strings2.googlify(4)).toEqual("Goooogle");
});

test('googlify should return "Gooooogle" when given 5', () => {
  expect(strings2.googlify(5)).toEqual("Gooooogle");
});

test('googlify should return "Goooooogle" when given 6', () => {
  expect(strings2.googlify(6)).toEqual("Goooooogle");
});

test('googlify should return "Gooooooogle" when given 7', () => {
  expect(strings2.googlify(7)).toEqual("Gooooooogle");
});

test('googlify should return "Goooooooogle" when given 8', () => {
  expect(strings2.googlify(8)).toEqual("Goooooooogle");
});

test('googlify should return "Gooooooooogle" when given 9', () => {
  expect(strings2.googlify(9)).toEqual("Gooooooooogle");
});

test('googlify should return "Goooooooooogle" when given 10', () => {
  expect(strings2.googlify(10)).toEqual("Goooooooooogle");
});

test('googlify should return "Gooooooooooogle" when given 11', () => {
  expect(strings2.googlify(11)).toEqual("Gooooooooooogle");
});

test('googlify should return "Goooooooooooogle" when given 12', () => {
  expect(strings2.googlify(12)).toEqual("Goooooooooooogle");
});

test('googlify should return "Gooooooooooooogle" when given 13', () => {
  expect(strings2.googlify(13)).toEqual("Gooooooooooooogle");
});

test('googlify should return "Goooooooooooooogle" when given 14', () => {
  expect(strings2.googlify(14)).toEqual("Goooooooooooooogle");
});

test('googlify should return "Gooooooooooooooogle" when given 15', () => {
  expect(strings2.googlify(15)).toEqual("Gooooooooooooooogle");
});

test('googlify should return "Goooooooooooooooogle" when given 16', () => {
  expect(strings2.googlify(16)).toEqual("Goooooooooooooooogle");
});

test('googlify should return "Gooooooooooooooooogle" when given 17', () => {
  expect(strings2.googlify(17)).toEqual("Gooooooooooooooooogle");
});

test('googlify should return "Goooooooooooooooooogle" when given 18', () => {
  expect(strings2.googlify(18)).toEqual("Goooooooooooooooooogle");
});

test('googlify should return "Gooooooooooooooooooogle" when given 19', () => {
  expect(strings2.googlify(19)).toEqual("Gooooooooooooooooooogle");
});

test('googlify should return "Goooooooooooooooooooogle" when given 20', () => {
  expect(strings2.googlify(20)).toEqual("Goooooooooooooooooooogle");
});

test('googlify should return "Gooooooooooooooooooooogle" when given 21', () => {
  expect(strings2.googlify(21)).toEqual("Gooooooooooooooooooooogle");
});

test('googlify should return "Goooooooooooooooooooooogle" when given 22', () => {
  expect(strings2.googlify(22)).toEqual("Goooooooooooooooooooooogle");
});

test('googlify should return "Gooooooooooooooooooooooogle" when given 23', () => {
  expect(strings2.googlify(23)).toEqual("Gooooooooooooooooooooooogle");
});

test('googlify should return "Goooooooooooooooooooooooogle" when given 24', () => {
  expect(strings2.googlify(24)).toEqual("Goooooooooooooooooooooooogle");
});

test('googlify should return "Gooooooooooooooooooooooooogle" when given 25', () => {
  expect(strings2.googlify(25)).toEqual("Gooooooooooooooooooooooooogle");
});

test('googlify should return "Goooooooooooooooooooooooooogle" when given 26', () => {
  expect(strings2.googlify(26)).toEqual("Goooooooooooooooooooooooooogle");
});

test('googlify should return "Gooooooooooooooooooooooooooogle" when given 27', () => {
  expect(strings2.googlify(27)).toEqual("Gooooooooooooooooooooooooooogle");
});

test('googlify should return "Goooooooooooooooooooooooooooogle" when given 28', () => {
  expect(strings2.googlify(28)).toEqual("Goooooooooooooooooooooooooooogle");
});

test('googlify should return "Gooooooooooooooooooooooooooooogle" when given 29', () => {
  expect(strings2.googlify(29)).toEqual("Gooooooooooooooooooooooooooooogle");
});

test('smallerNum should return "21" when given ("21", "44")', () => {
  expect(strings2.smallerNum("21", "44")).toEqual("21");
});

test('smallerNum should return "153" when given ("153", "367")', () => {
  expect(strings2.smallerNum("153", "367")).toEqual("153");
});

test('smallerNum should return "16" when given ("1500", "16")', () => {
  expect(strings2.smallerNum("1500", "16")).toEqual("16");
});

test('smallerNum should return "23" when given ("100", "23")', () => {
  expect(strings2.smallerNum("100", "23")).toEqual("23");
});

test('smallerNum should return "1" when given ("1500", "1")', () => {
  expect(strings2.smallerNum("1500", "1")).toEqual("1");
});

test('smallerNum should return "5" when given ("5", "5")', () => {
  expect(strings2.smallerNum("5", "5")).toEqual("5");
});

test('owofied should return "I\'m gonna rwidwe \'twil I can\'t no morwe owo" when given "I\'m gonna ride \'til I can\'t no more"', () => {
  expect(strings2.owofied("I'm gonna ride 'til I can't no more")).toEqual("I'm gonna rwidwe 'twil I can't no morwe owo");
});

test('owofied should return "Do you wevwer fwewel lwikwe a plastwic bag owo" when given "Do you ever feel like a plastic bag"', () => {
  expect(strings2.owofied("Do you ever feel like a plastic bag")).toEqual("Do you wevwer fwewel lwikwe a plastwic bag owo");
});

test('owofied should return "Causwe baby you\'rwe a fwirwework owo" when given "Cause baby you\'re a firework"', () => {
  expect(strings2.owofied("Cause baby you're a firework")).toEqual("Causwe baby you'rwe a fwirwework owo");
});

test('owofied should return "Nwevwer gonna gwivwe you up owo" when given "Never gonna give you up"', () => {
  expect(strings2.owofied("Never gonna give you up")).toEqual("Nwevwer gonna gwivwe you up owo");
});

test('owofied should return "Wwe\'vwe known weach othwer for so long owo" when given "We\'ve known each other for so long"', () => {
  expect(strings2.owofied("We've known each other for so long")).toEqual("Wwe'vwe known weach othwer for so long owo");
});

test('owofied should return "Nwevwer gonna lwet you down owo" when given "Never gonna let you down"', () => {
  expect(strings2.owofied("Never gonna let you down")).toEqual("Nwevwer gonna lwet you down owo");
});

test('owofied should return "Shwinwe brwight lwikwe a dwiamond owo" when given "Shine bright like a diamond"', () => {
  expect(strings2.owofied("Shine bright like a diamond")).toEqual("Shwinwe brwight lwikwe a dwiamond owo");
});

test('numberSyllables should return 2 when given "buf-fet"', () => {
  expect(strings2.numberSyllables("buf-fet")).toEqual(2);
});

test('numberSyllables should return 3 when given "beau-ti-ful"', () => {
  expect(strings2.numberSyllables("beau-ti-ful")).toEqual(3);
});

test('numberSyllables should return 4 when given "mon-u-men-tal"', () => {
  expect(strings2.numberSyllables("mon-u-men-tal")).toEqual(4);
});

test('numberSyllables should return 6 when given "on-o-mat-o-poe-ia"', () => {
  expect(strings2.numberSyllables("on-o-mat-o-poe-ia")).toEqual(6);
});

test('numberSyllables should return 3 when given "o-ver-ly"', () => {
  expect(strings2.numberSyllables("o-ver-ly")).toEqual(3);
});

test('numberSyllables should return 2 when given "pas-try"', () => {
  expect(strings2.numberSyllables("pas-try")).toEqual(2);
});

test('numberSyllables should return 2 when given "flu-id"', () => {
  expect(strings2.numberSyllables("flu-id")).toEqual(2);
});

test('numberSyllables should return 3 when given "syl-la-ble"', () => {
  expect(strings2.numberSyllables("syl-la-ble")).toEqual(3);
});

test('checkPalindrome should return true when given "mom"', () => {
  expect(strings2.checkPalindrome("mom")).toEqual(true);
});

test('checkPalindrome should return false when given "scary"', () => {
  expect(strings2.checkPalindrome("scary")).toEqual(false);
});

test('checkPalindrome should return true when given "reviver"', () => {
  expect(strings2.checkPalindrome("reviver")).toEqual(true);
});

test('checkPalindrome should return false when given "stressed"', () => {
  expect(strings2.checkPalindrome("stressed")).toEqual(false);
});

test('checkPalindrome should return false when given "good"', () => {
  expect(strings2.checkPalindrome("good")).toEqual(false);
});

test('checkPalindrome should return true when given "refer"', () => {
  expect(strings2.checkPalindrome("refer")).toEqual(true);
});

test('checkPalindrome should return false when given "something"', () => {
  expect(strings2.checkPalindrome("something")).toEqual(false);
});

test('checkPalindrome should return true when given "redder"', () => {
  expect(strings2.checkPalindrome("redder")).toEqual(true);
});

test('checkPalindrome should return true when given "civic"', () => {
  expect(strings2.checkPalindrome("civic")).toEqual(true);
});

test('subReddit should return "relationships" when given "https://www.reddit.com/r/relationships/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/relationships/")).toEqual("relationships");
});

test('subReddit should return "mildlyinteresting" when given "https://www.reddit.com/r/mildlyinteresting/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/mildlyinteresting/")).toEqual("mildlyinteresting");
});

test('subReddit should return "funny" when given "https://www.reddit.com/r/funny/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/funny/")).toEqual("funny");
});

test('subReddit should return "CrappyDesign" when given "https://www.reddit.com/r/CrappyDesign/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/CrappyDesign/")).toEqual("CrappyDesign");
});

test('subReddit should return "confession" when given "https://www.reddit.com/r/confession/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/confession/")).toEqual("confession");
});

test('subReddit should return "AskMen" when given "https://www.reddit.com/r/AskMen/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/AskMen/")).toEqual("AskMen");
});

test('subReddit should return "comics" when given "https://www.reddit.com/r/comics/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/comics/")).toEqual("comics");
});

test('subReddit should return "lifehacks" when given "https://www.reddit.com/r/lifehacks/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/lifehacks/")).toEqual("lifehacks");
});

test('subReddit should return "wholesomememes" when given "https://www.reddit.com/r/wholesomememes/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/wholesomememes/")).toEqual("wholesomememes");
});

test('subReddit should return "iamverysmart" when given "https://www.reddit.com/r/iamverysmart/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/iamverysmart/")).toEqual("iamverysmart");
});

test('subReddit should return "starterpacks" when given "https://www.reddit.com/r/starterpacks/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/starterpacks/")).toEqual("starterpacks");
});

test('subReddit should return "awww" when given "https://www.reddit.com/r/awww/"', () => {
  expect(strings2.subReddit("https://www.reddit.com/r/awww/")).toEqual("awww");
});

test('dictionary should return ["button"] when given ("bu", ["button","breakfast","border"])', () => {
  expect(strings2.dictionary("bu", ["button","breakfast","border"])).toEqual(["button"]);
});

test('dictionary should return [] when given ("beau", ["pastry","delicious","name","boring"])', () => {
  expect(strings2.dictionary("beau", ["pastry","delicious","name","boring"])).toEqual([]);
});

test('dictionary should return ["there"] when given ("there", ["there","here","everywhere"])', () => {
  expect(strings2.dictionary("there", ["there","here","everywhere"])).toEqual(["there"]);
});

test('dictionary should return ["snow"] when given ("sno", ["snow","paper","ghost"])', () => {
  expect(strings2.dictionary("sno", ["snow","paper","ghost"])).toEqual(["snow"]);
});

test('dictionary should return ["marriage","married","many"] when given ("ma", ["marriage","married","many","delight"])', () => {
  expect(strings2.dictionary("ma", ["marriage","married","many","delight"])).toEqual(["marriage","married","many"]);
});

test('dictionary should return ["notion","nominate","note"] when given ("no", ["inferno","notion","nominate","note","fairy"])', () => {
  expect(strings2.dictionary("no", ["inferno","notion","nominate","note","fairy"])).toEqual(["notion","nominate","note"]);
});

test('dictionary should return ["creating","creature","creed"] when given ("cre", ["creating","creature","creed","increasing"])', () => {
  expect(strings2.dictionary("cre", ["creating","creature","creed","increasing"])).toEqual(["creating","creature","creed"]);
});

test('isBetween should return true when given ("apple", "banana", "azure")', () => {
  expect(strings2.isBetween("apple", "banana", "azure")).toEqual(true);
});

test('isBetween should return true when given ("bookcase", "zebra", "squid")', () => {
  expect(strings2.isBetween("bookcase", "zebra", "squid")).toEqual(true);
});

test('isBetween should return true when given ("shrapnel", "tapenade", "tally")', () => {
  expect(strings2.isBetween("shrapnel", "tapenade", "tally")).toEqual(true);
});

test('isBetween should return true when given ("monk", "monument", "monkey")', () => {
  expect(strings2.isBetween("monk", "monument", "monkey")).toEqual(true);
});

test('isBetween should return true when given ("oath", "ostrich", "osteoporosis")', () => {
  expect(strings2.isBetween("oath", "ostrich", "osteoporosis")).toEqual(true);
});

test('isBetween should return false when given ("ostracize", "ostrich", "open")', () => {
  expect(strings2.isBetween("ostracize", "ostrich", "open")).toEqual(false);
});

test('isBetween should return false when given ("bookend", "boolean", "boost")', () => {
  expect(strings2.isBetween("bookend", "boolean", "boost")).toEqual(false);
});

test('isBetween should return false when given ("tamer", "tanner", "timid")', () => {
  expect(strings2.isBetween("tamer", "tanner", "timid")).toEqual(false);
});

test('isBetween should return false when given ("rhino", "sorcerer", "quote")', () => {
  expect(strings2.isBetween("rhino", "sorcerer", "quote")).toEqual(false);
});

test('isBetween should return false when given ("body", "lung", "ace")', () => {
  expect(strings2.isBetween("body", "lung", "ace")).toEqual(false);
});

test('potatoes should return 1 when given "potato"', () => {
  expect(strings2.potatoes("potato")).toEqual(1);
});

test('potatoes should return 2 when given "potatopotatocherry"', () => {
  expect(strings2.potatoes("potatopotatocherry")).toEqual(2);
});

test('potatoes should return 3 when given "potatopotatopotatoorange"', () => {
  expect(strings2.potatoes("potatopotatopotatoorange")).toEqual(3);
});

test('potatoes should return 4 when given "potatopotatobananapotatopotato"', () => {
  expect(strings2.potatoes("potatopotatobananapotatopotato")).toEqual(4);
});

test('potatoes should return 5 when given "potatopotatomangopotatopotatopotato"', () => {
  expect(strings2.potatoes("potatopotatomangopotatopotatopotato")).toEqual(5);
});

test('potatoes should return 6 when given "potatocucumberpotatopotatopotatopotatopotato"', () => {
  expect(strings2.potatoes("potatocucumberpotatopotatopotatopotatopotato")).toEqual(6);
});

test('detectWord should return "cat" when given "UcUNFYGaFYFYGtNUH"', () => {
  expect(strings2.detectWord("UcUNFYGaFYFYGtNUH")).toEqual("cat");
});

test('detectWord should return "burglar" when given "bEEFGBuFBRrHgUHlNFYaYr"', () => {
  expect(strings2.detectWord("bEEFGBuFBRrHgUHlNFYaYr")).toEqual("burglar");
});

test('detectWord should return "embezzlement" when given "YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"', () => {
  expect(strings2.detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")).toEqual("embezzlement");
});

test('detectWord should return "certain" when given "cLXSNVVJVOJBIQRVKIZWKJOIVHXELVReLXSNVVJVOJBIQRVKIZWKJOIVHXELVRrLXSNVVJVOJBIQRVKIZWKJOIVHXELVRtLXSNVVJVOJBIQRVKIZWKJOIVHXELVRaLXSNVVJVOJBIQRVKIZWKJOIVHXELVRiLXSNVVJVOJBIQRVKIZWKJOIVHXELVRn"', () => {
  expect(strings2.detectWord("cLXSNVVJVOJBIQRVKIZWKJOIVHXELVReLXSNVVJVOJBIQRVKIZWKJOIVHXELVRrLXSNVVJVOJBIQRVKIZWKJOIVHXELVRtLXSNVVJVOJBIQRVKIZWKJOIVHXELVRaLXSNVVJVOJBIQRVKIZWKJOIVHXELVRiLXSNVVJVOJBIQRVKIZWKJOIVHXELVRn")).toEqual("certain");
});

test('detectWord should return "cat" when given "cUEOYCSUXVOaUEOYCSUXVOt"', () => {
  expect(strings2.detectWord("cUEOYCSUXVOaUEOYCSUXVOt")).toEqual("cat");
});

test('detectWord should return "vegetable" when given "vJAQSZNYRQTFUHDHSDMBDPUNFQJXSXeJAQSZNYRQTFUHDHSDMBDPUNFQJXSXgJAQSZNYRQTFUHDHSDMBDPUNFQJXSXeJAQSZNYRQTFUHDHSDMBDPUNFQJXSXtJAQSZNYRQTFUHDHSDMBDPUNFQJXSXaJAQSZNYRQTFUHDHSDMBDPUNFQJXSXbJAQSZNYRQTFUHDHSDMBDPUNFQJXSXlJAQSZNYRQTFUHDHSDMBDPUNFQJXSXe"', () => {
  expect(strings2.detectWord("vJAQSZNYRQTFUHDHSDMBDPUNFQJXSXeJAQSZNYRQTFUHDHSDMBDPUNFQJXSXgJAQSZNYRQTFUHDHSDMBDPUNFQJXSXeJAQSZNYRQTFUHDHSDMBDPUNFQJXSXtJAQSZNYRQTFUHDHSDMBDPUNFQJXSXaJAQSZNYRQTFUHDHSDMBDPUNFQJXSXbJAQSZNYRQTFUHDHSDMBDPUNFQJXSXlJAQSZNYRQTFUHDHSDMBDPUNFQJXSXe")).toEqual("vegetable");
});

test('detectWord should return "delight" when given "dATIQTJLBZFHSRXWOZQMOKZPANOUGMeATIQTJLBZFHSRXWOZQMOKZPANOUGMlATIQTJLBZFHSRXWOZQMOKZPANOUGMiATIQTJLBZFHSRXWOZQMOKZPANOUGMgATIQTJLBZFHSRXWOZQMOKZPANOUGMhATIQTJLBZFHSRXWOZQMOKZPANOUGMt"', () => {
  expect(strings2.detectWord("dATIQTJLBZFHSRXWOZQMOKZPANOUGMeATIQTJLBZFHSRXWOZQMOKZPANOUGMlATIQTJLBZFHSRXWOZQMOKZPANOUGMiATIQTJLBZFHSRXWOZQMOKZPANOUGMgATIQTJLBZFHSRXWOZQMOKZPANOUGMhATIQTJLBZFHSRXWOZQMOKZPANOUGMt")).toEqual("delight");
});

test('detectWord should return "pricey" when given "pUBOKJGODIJBSXPMTODCGHATrUBOKJGODIJBSXPMTODCGHATiUBOKJGODIJBSXPMTODCGHATcUBOKJGODIJBSXPMTODCGHATeUBOKJGODIJBSXPMTODCGHATy"', () => {
  expect(strings2.detectWord("pUBOKJGODIJBSXPMTODCGHATrUBOKJGODIJBSXPMTODCGHATiUBOKJGODIJBSXPMTODCGHATcUBOKJGODIJBSXPMTODCGHATeUBOKJGODIJBSXPMTODCGHATy")).toEqual("pricey");
});

test('detectWord should return "snake" when given "sWRRKMVJVHHZTKAQTJUQDPKHSHPOYCnWRRKMVJVHHZTKAQTJUQDPKHSHPOYCaWRRKMVJVHHZTKAQTJUQDPKHSHPOYCkWRRKMVJVHHZTKAQTJUQDPKHSHPOYCe"', () => {
  expect(strings2.detectWord("sWRRKMVJVHHZTKAQTJUQDPKHSHPOYCnWRRKMVJVHHZTKAQTJUQDPKHSHPOYCaWRRKMVJVHHZTKAQTJUQDPKHSHPOYCkWRRKMVJVHHZTKAQTJUQDPKHSHPOYCe")).toEqual("snake");
});

test('detectWord should return "angle" when given "aJULRJHMOVLEFVJZnJULRJHMOVLEFVJZgJULRJHMOVLEFVJZlJULRJHMOVLEFVJZe"', () => {
  expect(strings2.detectWord("aJULRJHMOVLEFVJZnJULRJHMOVLEFVJZgJULRJHMOVLEFVJZlJULRJHMOVLEFVJZe")).toEqual("angle");
});

test('detectWord should return "aware" when given "aJWCHXONGQCXGPXLZQBKEIHZWwJWCHXONGQCXGPXLZQBKEIHZWaJWCHXONGQCXGPXLZQBKEIHZWrJWCHXONGQCXGPXLZQBKEIHZWe"', () => {
  expect(strings2.detectWord("aJWCHXONGQCXGPXLZQBKEIHZWwJWCHXONGQCXGPXLZQBKEIHZWaJWCHXONGQCXGPXLZQBKEIHZWrJWCHXONGQCXGPXLZQBKEIHZWe")).toEqual("aware");
});

test('detectWord should return "name" when given "nNUZKGKNEVZBPQZQQLHZZPaNUZKGKNEVZBPQZQQLHZZPmNUZKGKNEVZBPQZQQLHZZPe"', () => {
  expect(strings2.detectWord("nNUZKGKNEVZBPQZQQLHZZPaNUZKGKNEVZBPQZQQLHZZPmNUZKGKNEVZBPQZQQLHZZPe")).toEqual("name");
});

test('detectWord should return "clever" when given "cLBFKXYQFLLElLBFKXYQFLLEeLBFKXYQFLLEvLBFKXYQFLLEeLBFKXYQFLLEr"', () => {
  expect(strings2.detectWord("cLBFKXYQFLLElLBFKXYQFLLEeLBFKXYQFLLEvLBFKXYQFLLEeLBFKXYQFLLEr")).toEqual("clever");
});

test('detectWord should return "brash" when given "bDUNEPWILKUFNTRGMBRSVGAABBFCCXErDUNEPWILKUFNTRGMBRSVGAABBFCCXEaDUNEPWILKUFNTRGMBRSVGAABBFCCXEsDUNEPWILKUFNTRGMBRSVGAABBFCCXEh"', () => {
  expect(strings2.detectWord("bDUNEPWILKUFNTRGMBRSVGAABBFCCXErDUNEPWILKUFNTRGMBRSVGAABBFCCXEaDUNEPWILKUFNTRGMBRSVGAABBFCCXEsDUNEPWILKUFNTRGMBRSVGAABBFCCXEh")).toEqual("brash");
});

test('detectWord should return "fast" when given "fXTTJVWFCHYZMaXTTJVWFCHYZMsXTTJVWFCHYZMt"', () => {
  expect(strings2.detectWord("fXTTJVWFCHYZMaXTTJVWFCHYZMsXTTJVWFCHYZMt")).toEqual("fast");
});

test('detectWord should return "downtown" when given "dJYPHZIRXYOLDGAQUPHIZTXJOKNoJYPHZIRXYOLDGAQUPHIZTXJOKNwJYPHZIRXYOLDGAQUPHIZTXJOKNnJYPHZIRXYOLDGAQUPHIZTXJOKNtJYPHZIRXYOLDGAQUPHIZTXJOKNoJYPHZIRXYOLDGAQUPHIZTXJOKNwJYPHZIRXYOLDGAQUPHIZTXJOKNn"', () => {
  expect(strings2.detectWord("dJYPHZIRXYOLDGAQUPHIZTXJOKNoJYPHZIRXYOLDGAQUPHIZTXJOKNwJYPHZIRXYOLDGAQUPHIZTXJOKNnJYPHZIRXYOLDGAQUPHIZTXJOKNtJYPHZIRXYOLDGAQUPHIZTXJOKNoJYPHZIRXYOLDGAQUPHIZTXJOKNwJYPHZIRXYOLDGAQUPHIZTXJOKNn")).toEqual("downtown");
});

test('detectWord should return "plants" when given "pKICNUFWFNFORlKICNUFWFNFORaKICNUFWFNFORnKICNUFWFNFORtKICNUFWFNFORs"', () => {
  expect(strings2.detectWord("pKICNUFWFNFORlKICNUFWFNFORaKICNUFWFNFORnKICNUFWFNFORtKICNUFWFNFORs")).toEqual("plants");
});

test('detectWord should return "windy" when given "wLAXIBDWXVPRQOOQRRTOYRODLAQHiLAXIBDWXVPRQOOQRRTOYRODLAQHnLAXIBDWXVPRQOOQRRTOYRODLAQHdLAXIBDWXVPRQOOQRRTOYRODLAQHy"', () => {
  expect(strings2.detectWord("wLAXIBDWXVPRQOOQRRTOYRODLAQHiLAXIBDWXVPRQOOQRRTOYRODLAQHnLAXIBDWXVPRQOOQRRTOYRODLAQHdLAXIBDWXVPRQOOQRRTOYRODLAQHy")).toEqual("windy");
});

test('detectWord should return "start" when given "sELJQETMYLTDKXYNSSOISZFPMAtELJQETMYLTDKXYNSSOISZFPMAaELJQETMYLTDKXYNSSOISZFPMArELJQETMYLTDKXYNSSOISZFPMAt"', () => {
  expect(strings2.detectWord("sELJQETMYLTDKXYNSSOISZFPMAtELJQETMYLTDKXYNSSOISZFPMAaELJQETMYLTDKXYNSSOISZFPMArELJQETMYLTDKXYNSSOISZFPMAt")).toEqual("start");
});

test('detectWord should return "wet" when given "wQYKDHGMNYMKUHKDeQYKDHGMNYMKUHKDt"', () => {
  expect(strings2.detectWord("wQYKDHGMNYMKUHKDeQYKDHGMNYMKUHKDt")).toEqual("wet");
});

test('detectWord should return "knife" when given "kVOJQJIFILEHVnVOJQJIFILEHViVOJQJIFILEHVfVOJQJIFILEHVe"', () => {
  expect(strings2.detectWord("kVOJQJIFILEHVnVOJQJIFILEHViVOJQJIFILEHVfVOJQJIFILEHVe")).toEqual("knife");
});

test('detectWord should return "note" when given "nBKCXNIJYJSVDoBKCXNIJYJSVDtBKCXNIJYJSVDe"', () => {
  expect(strings2.detectWord("nBKCXNIJYJSVDoBKCXNIJYJSVDtBKCXNIJYJSVDe")).toEqual("note");
});

test('detectWord should return "brush" when given "bOEYZAJVFYUGXQWZXrOEYZAJVFYUGXQWZXuOEYZAJVFYUGXQWZXsOEYZAJVFYUGXQWZXh"', () => {
  expect(strings2.detectWord("bOEYZAJVFYUGXQWZXrOEYZAJVFYUGXQWZXuOEYZAJVFYUGXQWZXsOEYZAJVFYUGXQWZXh")).toEqual("brush");
});

test('detectWord should return "toothbrush" when given "tEMVSYRPYHSZRLJNOMTYRPREIHoEMVSYRPYHSZRLJNOMTYRPREIHoEMVSYRPYHSZRLJNOMTYRPREIHtEMVSYRPYHSZRLJNOMTYRPREIHhEMVSYRPYHSZRLJNOMTYRPREIHbEMVSYRPYHSZRLJNOMTYRPREIHrEMVSYRPYHSZRLJNOMTYRPREIHuEMVSYRPYHSZRLJNOMTYRPREIHsEMVSYRPYHSZRLJNOMTYRPREIHh"', () => {
  expect(strings2.detectWord("tEMVSYRPYHSZRLJNOMTYRPREIHoEMVSYRPYHSZRLJNOMTYRPREIHoEMVSYRPYHSZRLJNOMTYRPREIHtEMVSYRPYHSZRLJNOMTYRPREIHhEMVSYRPYHSZRLJNOMTYRPREIHbEMVSYRPYHSZRLJNOMTYRPREIHrEMVSYRPYHSZRLJNOMTYRPREIHuEMVSYRPYHSZRLJNOMTYRPREIHsEMVSYRPYHSZRLJNOMTYRPREIHh")).toEqual("toothbrush");
});

test('detectWord should return "soggy" when given "sWRIQGRPNHQQPSIPRoWRIQGRPNHQQPSIPRgWRIQGRPNHQQPSIPRgWRIQGRPNHQQPSIPRy"', () => {
  expect(strings2.detectWord("sWRIQGRPNHQQPSIPRoWRIQGRPNHQQPSIPRgWRIQGRPNHQQPSIPRgWRIQGRPNHQQPSIPRy")).toEqual("soggy");
});

test('detectWord should return "flowers" when given "fRBODZACXIIXHZRGKJQMDLOONTlRBODZACXIIXHZRGKJQMDLOONToRBODZACXIIXHZRGKJQMDLOONTwRBODZACXIIXHZRGKJQMDLOONTeRBODZACXIIXHZRGKJQMDLOONTrRBODZACXIIXHZRGKJQMDLOONTs"', () => {
  expect(strings2.detectWord("fRBODZACXIIXHZRGKJQMDLOONTlRBODZACXIIXHZRGKJQMDLOONToRBODZACXIIXHZRGKJQMDLOONTwRBODZACXIIXHZRGKJQMDLOONTeRBODZACXIIXHZRGKJQMDLOONTrRBODZACXIIXHZRGKJQMDLOONTs")).toEqual("flowers");
});

test('detectWord should return "doll" when given "dPWUSQZDQIHANDHEQUZBLAULSoPWUSQZDQIHANDHEQUZBLAULSlPWUSQZDQIHANDHEQUZBLAULSl"', () => {
  expect(strings2.detectWord("dPWUSQZDQIHANDHEQUZBLAULSoPWUSQZDQIHANDHEQUZBLAULSlPWUSQZDQIHANDHEQUZBLAULSl")).toEqual("doll");
});

test('detectWord should return "aloof" when given "aOGSREBZUHUEJYSSBUlOGSREBZUHUEJYSSBUoOGSREBZUHUEJYSSBUoOGSREBZUHUEJYSSBUf"', () => {
  expect(strings2.detectWord("aOGSREBZUHUEJYSSBUlOGSREBZUHUEJYSSBUoOGSREBZUHUEJYSSBUoOGSREBZUHUEJYSSBUf")).toEqual("aloof");
});

test('detectWord should return "auspicious" when given "aGQEAESDQIBWRUTuGQEAESDQIBWRUTsGQEAESDQIBWRUTpGQEAESDQIBWRUTiGQEAESDQIBWRUTcGQEAESDQIBWRUTiGQEAESDQIBWRUToGQEAESDQIBWRUTuGQEAESDQIBWRUTs"', () => {
  expect(strings2.detectWord("aGQEAESDQIBWRUTuGQEAESDQIBWRUTsGQEAESDQIBWRUTpGQEAESDQIBWRUTiGQEAESDQIBWRUTcGQEAESDQIBWRUTiGQEAESDQIBWRUToGQEAESDQIBWRUTuGQEAESDQIBWRUTs")).toEqual("auspicious");
});

test('detectWord should return "market" when given "mPVIWSNGHMXHaPVIWSNGHMXHrPVIWSNGHMXHkPVIWSNGHMXHePVIWSNGHMXHt"', () => {
  expect(strings2.detectWord("mPVIWSNGHMXHaPVIWSNGHMXHrPVIWSNGHMXHkPVIWSNGHMXHePVIWSNGHMXHt")).toEqual("market");
});

test('detectWord should return "diligent" when given "dUMIHKRZLPJFAGUKPGXHiUMIHKRZLPJFAGUKPGXHlUMIHKRZLPJFAGUKPGXHiUMIHKRZLPJFAGUKPGXHgUMIHKRZLPJFAGUKPGXHeUMIHKRZLPJFAGUKPGXHnUMIHKRZLPJFAGUKPGXHt"', () => {
  expect(strings2.detectWord("dUMIHKRZLPJFAGUKPGXHiUMIHKRZLPJFAGUKPGXHlUMIHKRZLPJFAGUKPGXHiUMIHKRZLPJFAGUKPGXHgUMIHKRZLPJFAGUKPGXHeUMIHKRZLPJFAGUKPGXHnUMIHKRZLPJFAGUKPGXHt")).toEqual("diligent");
});

test('detectWord should return "striped" when given "sPRTRRRETBCDTtPRTRRRETBCDTrPRTRRRETBCDTiPRTRRRETBCDTpPRTRRRETBCDTePRTRRRETBCDTd"', () => {
  expect(strings2.detectWord("sPRTRRRETBCDTtPRTRRRETBCDTrPRTRRRETBCDTiPRTRRRETBCDTpPRTRRRETBCDTePRTRRRETBCDTd")).toEqual("striped");
});

test('detectWord should return "moon" when given "mDKXCLZDVPRNMGGFGEOZoDKXCLZDVPRNMGGFGEOZoDKXCLZDVPRNMGGFGEOZn"', () => {
  expect(strings2.detectWord("mDKXCLZDVPRNMGGFGEOZoDKXCLZDVPRNMGGFGEOZoDKXCLZDVPRNMGGFGEOZn")).toEqual("moon");
});

test('detectWord should return "account" when given "aQQWPQYQEEDILHYDSGQAINQZWCABYcQQWPQYQEEDILHYDSGQAINQZWCABYcQQWPQYQEEDILHYDSGQAINQZWCABYoQQWPQYQEEDILHYDSGQAINQZWCABYuQQWPQYQEEDILHYDSGQAINQZWCABYnQQWPQYQEEDILHYDSGQAINQZWCABYt"', () => {
  expect(strings2.detectWord("aQQWPQYQEEDILHYDSGQAINQZWCABYcQQWPQYQEEDILHYDSGQAINQZWCABYcQQWPQYQEEDILHYDSGQAINQZWCABYoQQWPQYQEEDILHYDSGQAINQZWCABYuQQWPQYQEEDILHYDSGQAINQZWCABYnQQWPQYQEEDILHYDSGQAINQZWCABYt")).toEqual("account");
});

test('detectWord should return "smelly" when given "sJPUQNBZOQYREGGQSYPmJPUQNBZOQYREGGQSYPeJPUQNBZOQYREGGQSYPlJPUQNBZOQYREGGQSYPlJPUQNBZOQYREGGQSYPy"', () => {
  expect(strings2.detectWord("sJPUQNBZOQYREGGQSYPmJPUQNBZOQYREGGQSYPeJPUQNBZOQYREGGQSYPlJPUQNBZOQYREGGQSYPlJPUQNBZOQYREGGQSYPy")).toEqual("smelly");
});
