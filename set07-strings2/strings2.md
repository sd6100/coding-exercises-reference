# Vowel Replacer

Create a function that replaces all the vowels in a string with a specified character.

### Examples
replaceVowels(str, ch)|Expected
-|-
`replaceVowels("the aardvark", "#")`|&#10132;&#160;`"th# ##rdv#rk"`
`replaceVowels("minnie mouse", "?")`|&#10132;&#160;`"m?nn?? m??s?"`
`replaceVowels("shakespeare", "*")`|&#10132;&#160;`"sh*k*sp**r*"`

### Notes
- All characters will be in lower case.

&#160;

# Strange Pair

A pair of strings form a **strange pair** if both of the following are true:

- The 1st string's **first** letter = 2nd string's **last** letter.
- The 1st string's **last** letter = 2nd string's **first** letter.

Create a function that returns `true` if a pair of strings constitutes a **strange pair**, and `false` otherwise.

### Examples
isStrangePair(str1, str2)|Expected
-|-
`isStrangePair("ratio", "orator")`<br>"ratio" ends with "o" and "orator" starts with "o".<br>"ratio" starts with "r" and "orator" ends with "r".|&#10132;&#160;`true`
`isStrangePair("sparkling", "groups")`|&#10132;&#160;`true`
`isStrangePair("bush", "hubris")`|&#10132;&#160;`false`
`isStrangePair("", "")`|&#10132;&#160;`true`

### Notes
- It should work on a pair of empty strings (they trivially share nothing).

&#160;

# The Full Length of a Google

Google's logo can be stretched depending on how many pages it lets you skip forward to.

![Image of Goooooooooogle](https://edabit-challenges.s3.amazonaws.com/Google.png)

Let's say we wanted to *change* the number of pages that Google could skip to. Create a function where given a *number of pages* `n`, return the word "Google" but with the correct number of "o"s.

### Examples
googlify(n)|Expected
-|-
`googlify(10)`|&#10132;&#160;`"Goooooooooogle"`
`googlify(23)`|&#10132;&#160;`"Gooooooooooooooooooooooogle"`
`googlify(2)`|&#10132;&#160;`"Google"`
`googlify(-2)`|&#10132;&#160;`"invalid"`

### Notes
- If `n` is *equal to* or *less than* **1**, return `invalid `.

&#160;

# Smaller String Number

Create a function that returns the smaller number.

### Examples
smallerNum(n1, n2)|Expected
-|-
`smallerNum("21", "44")`|&#10132;&#160;`"21"`
`smallerNum("1500", "1")`|&#10132;&#160;`"1"`
`smallerNum("5", "5")`|&#10132;&#160;`"5"`

### Notes
- Numbers will be represented as strings, and your output should also be a string.
- If both numbers tie, return either number.
- Numbers will be positive.
- **Bonus**: See if you can do this **without** converting to integers.

&#160;

# Owofied a Sentence

Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

### Examples
owofied(sentence)|Expected
-|-
`owofied("I'm gonna ride 'til I can't no more")`|&#10132;&#160;`"I'm gonna rwidwe 'twil I can't no morwe owo"`
`owofied("Do you ever feel like a plastic bag")`|&#10132;&#160;`"Do you wevwer fwewel lwikwe a plastwic bag owo"`
`owofied("Cause baby you're a firework")`|&#10132;&#160;`"Causwe baby you'rwe a fwirwework owo"`

### Notes
- Don't forget to return the value!
- There's a **space** in front of **owo**!

&#160;

# Count Syllables

Create a function that counts the number of syllables a word has. Each syllable is separated with a dash `-`.


### Examples
numberSyllables(word)|Expected
-|-
`numberSyllables("buf-fet")`|&#10132;&#160;`2`
`numberSyllables("beau-ti-ful")`|&#10132;&#160;`3`
`numberSyllables("mon-u-men-tal")`|&#10132;&#160;`4`
`numberSyllables("on-o-mat-o-poe-ia")`|&#10132;&#160;`6`

### Notes
- Don't forget to `return` the result.

&#160;

# Is the String a Palindrome?

A palindrome is a word that is identical forward and backwards.

- mom
- racecar
- kayak

Given a word, create a function that checks whether it is a palindrome.

### Examples
checkPalindrome(str)|Expected
-|-
`checkPalindrome("mom")`|&#10132;&#160;`true`
`checkPalindrome("scary")`|&#10132;&#160;`false`
`checkPalindrome("reviver")`|&#10132;&#160;`true`
`checkPalindrome("stressed")`|&#10132;&#160;`false`

### Notes
- All test input is lower cased.

&#160;

# Retrieve the Subreddit

Create a function to extract the name of the subreddit from its URL.

### Examples
subReddit(link)|Expected
-|-
`subReddit("https://www.reddit.com/r/funny/")`|&#10132;&#160;`"funny"`
`subReddit("https://www.reddit.com/r/relationships/")`|&#10132;&#160;`"relationships"`
`subReddit("https://www.reddit.com/r/mildlyinteresting/")`|&#10132;&#160;`"mildlyinteresting"`

### Notes
- N/A

&#160;

# Little Dictionary

Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

### Examples
dictionary(initial, words)|Expected
-|-
`dictionary("bu", ["button", "breakfast", "border"])`|&#10132;&#160;`["button"]`
`dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])`|&#10132;&#160;`["triplet", "tries", trip"]`
`dictionary("beau", ["pastry", "delicious", "name", "boring"])`|&#10132;&#160;`[]`

### Notes
- If none of the words match, return an empty array.
- Keep the filtered array in the same relative order as the original array of words.

&#160;

# Between Words

Write a function that takes three string arguments (`first`, `last`, and `word`) and returns `true` if `word` is found between `first` and `last` in the dictionary, otherwise `false`.

### Examples
isBetween(first, last, word)|Expected
-|-
`isBetween("apple", "banana", "azure")`|&#10132;&#160;`true`
`isBetween("monk", "monument", "monkey")`|&#10132;&#160;`true`
`isBetween("bookend", "boolean", "boost")`|&#10132;&#160;`false`

### Notes
- All letters will be in lowercase.
- All three words will be different.
- Remember that the string `word` is in the middle.

&#160;

# Find the Amount of Potatoes

Create a function to return the amount of potatoes there are in a string.

### Examples
potatoes(str)|Expected
-|-
`potatoes("potato")`|&#10132;&#160;`1`
`potatoes("potatopotato")`|&#10132;&#160;`2`
`potatoes("potatoapple")`|&#10132;&#160;`1`

### Notes
- N/A

&#160;

# What's Hiding Amongst the Crowd?

A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

- The wanted word is in **lowercase**.
- The crowd of letters is all in **uppercase**.
- Note that the word will be spread out amongst the random letters, but their letters **remain in the same order**.

### Examples
detectWord(str)|Expected
-|-
`detectWord("UcUNFYGaFYFYGtNUH")`|&#10132;&#160;`"cat"`
`detectWord("bEEFGBuFBRrHgUHlNFYaYr")`|&#10132;&#160;`"burglar"`
`detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")`|&#10132;&#160;`"embezzlement"`

### Notes
- N/A

&#160;
