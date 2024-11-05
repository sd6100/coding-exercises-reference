# Is the String Empty?

Create a function that returns `true` if a string is empty and `false` otherwise.

### Examples
isEmpty(s)|Expected
-|-
`isEmpty("")`|&#10132;&#160;`true`
`isEmpty(" ")`|&#10132;&#160;`false`
`isEmpty("a")`|&#10132;&#160;`false`

### Notes
- A string containing only whitespaces `" "` does **not** count as empty.
- Don't forget to `return` the result.

&#160;

# How Many D's Are There?

Create a function that counts how many D's are in a sentence.

### Examples
countDs(sentence)|Expected
-|-
`countDs("My friend Dylan got distracted in school.")`|&#10132;&#160;`4`
`countDs("Debris was scattered all over the yard.")`|&#10132;&#160;`3`
`countDs("The rodents hibernated in their den.")`|&#10132;&#160;`3`

### Notes
- Your function must be case-insensitive.
- Remember to `return` the result.

&#160;

# Count the Syllables

Create a function that returns the **number of syllables** in a simple string. The string is made up of *short repeated words* like `"Lalalalalalala"` (which would have *7 syllables*).

### Examples
countSyllables(str)|Expected
-|-
`countSyllables("Hehehehehehe")`|&#10132;&#160;`6`
`countSyllables("bobobobobobobobo")`|&#10132;&#160;`8`
`countSyllables("NANANA")`|&#10132;&#160;`3`

### Notes
- For simplicity, please note that each syllable will consist of two letters only.
- Your code should accept strings of any case (upper, lower and mixed case).

&#160;

# Get Word Count

Create a function that takes a string and returns the word count. The string will be a sentence.

### Examples
countWords(str)|Expected
-|-
`countWords("Just an example here move along")`|&#10132;&#160;`6`
`countWords("This is a test")`|&#10132;&#160;`4`
`countWords("What an easy task, right")`|&#10132;&#160;`5`

### Notes
- N/A

&#160;

# Return Last Item

Create a function that returns the last value of the last item in an array or string.

### Examples
lastItem(input)|Expected
-|-
`lastItem([0, 4, 19, 34, 50, -9, 2])`|&#10132;&#160;`2`
`lastItem("The quick brown fox jumped over the lazy dog")`|&#10132;&#160;`"g"`
`lastItem([])`|&#10132;&#160;`undefined`

### Notes
- Arrays/strings will be of varying size.
- Return `undefined` if array/string is empty.

&#160;

# Check if a String Contains only Identical Characters

Write a function that returns `true` if all characters in a string are identical and `false` otherwise.

### Examples
isIdentical(s)|Expected
-|-
`isIdentical("aaaaaa")`|&#10132;&#160;`true`
`isIdentical("aabaaa")`|&#10132;&#160;`false`
`isIdentical("ccccca")`|&#10132;&#160;`false`
`isIdentical("kk")`|&#10132;&#160;`true`

### Notes
- N/A

&#160;

# Modifying the Last Character

Create a function which makes the last character of a string repeat `n` number of times.

### Examples
modifyLast(str, n)|Expected
-|-
`modifyLast("Hello", 3)`|&#10132;&#160;`"Hellooo"`
`modifyLast("hey", 6)`|&#10132;&#160;`"heyyyyyy"`
`modifyLast("excuse me what?", 5)`|&#10132;&#160;`"excuse me what?????"`

### Notes
- Tests will include numbers and punctuation.
- Make sure your code is not case sensitive.

&#160;

# Broken Bridge

Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

### Examples
isSafeBridge(str)|Expected
-|-
`isSafeBridge("####")`|&#10132;&#160;`true`
`isSafeBridge("## ####")`|&#10132;&#160;`false`
`isSafeBridge("#")`|&#10132;&#160;`true`

### Notes
- You can expect the bridge's ends connecting it to its surrounding.

&#160;

# Burrrrrrrp

Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

### Examples
longBurp(num)|Expected
-|-
`longBurp(3)`|&#10132;&#160;`"Burrrp"`
`longBurp(5)`|&#10132;&#160;`"Burrrrrp"`
`longBurp(9)`|&#10132;&#160;`"Burrrrrrrrrp"`

### Notes
- Expect `num` to always be >= 1.
- Remember to use a capital "B".
- Don't forget to `return` the result.

&#160;

# YouTube Upload Count

You are given an array of `dates` in the format `Dec 11` and a `month `in the format `Dec` as arguments. Each **date** represents a **video** that was uploaded on that day. Return the number of uploads for a given month.

### Examples
uploadCount(dates, month)|Expected
-|-
`uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")`|&#10132;&#160;`2`
`uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct")`|&#10132;&#160;`1`

### Notes
- If you only pay attention to the month and ignore the day, the challenge will become easier.

&#160;

# Keyboard Mistakes

Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

- A is misinterpreted as 4
- S is misinterpreted as 5
- O is misinterpreted as 0
- I is misinterpreted as 1

The test cases contain numbers only by mistake.

### Examples
keyboardMistakes(str)|Expected
-|-
`keyboardMistakes("MUB45H1R")`|&#10132;&#160;`"MUBASHIR"`
`keyboardMistakes("DUBL1N")`|&#10132;&#160;`"DUBLIN"`
`keyboardMistakes("51NG4P0RE")`|&#10132;&#160;`"SINGAPORE"`

### Notes
- N/A

&#160;

# The Forbidden Letter

Given a letter and an array of words, return whether the letter **does not appear** in any of the words.

### Examples
forbiddenLetter(char, arr)|Expected
-|-
`forbiddenLetter("r", ["rock", "paper", "scissors"])`|&#10132;&#160;`false`
`forbiddenLetter("a", ["spoon", "fork", "knife"])`|&#10132;&#160;`true`
`forbiddenLetter("m", [])`|&#10132;&#160;`true`

### Notes
* All inputs given will be in lowercase.
* You will always be given a **forbidden letter**, but there may be **empty arrays**.

&#160;
