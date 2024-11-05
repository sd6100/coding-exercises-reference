# Return the Four Letter Strings

Create a function that takes an array of strings and returns the words that are exactly four letters.

### Examples
isFourLetters(arr)|Expected
-|-
`isFourLetters(["Tomato", "Potato", "Pair"])`|&#10132;&#160;`["Pair"]`
`isFourLetters(["Kangaroo", "Bear", "Fox"])`|&#10132;&#160;`["Bear"]`
`isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])`|&#10132;&#160;`["Ryan", "Matt"]`

### Notes
- You can expect valid strings for all test cases.

&#160;

# Hurdle Jump

Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

A hurdler can clear a hurdle if their jump height is **greater than or equal to** the hurdle height.

### Examples
hurdleJump(hurdles, jumpHeight)|Expected
-|-
`hurdleJump([1, 2, 3, 4, 5], 5)`|&#10132;&#160;`true`
`hurdleJump([5, 5, 3, 4, 5], 3)`|&#10132;&#160;`false`
`hurdleJump([5, 4, 5, 6], 10)`|&#10132;&#160;`true`
`hurdleJump([1, 2, 1], 1)`|&#10132;&#160;`false`

### Notes
- Return `true` for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).

&#160;

# Word Endings

Create a function that adds a string ending to each member in an array.

### Examples
addEnding(arr, ending)|Expected
-|-
`addEnding(["clever", "meek", "hurried", "nice"], "ly")`|&#10132;&#160;`["cleverly", "meekly", "hurriedly", "nicely"]`
`addEnding(["new", "pander", "scoop"], "er")`|&#10132;&#160;`["newer", "panderer", "scooper"]`
`addEnding(["bend", "sharpen", "mean"], "ing")`|&#10132;&#160;`["bending", "sharpening", "meaning"]`

### Notes
- Don't forget to `return` the result.

&#160;

# Typing Game

You're in the midst of creating a typing game.

Create a function that takes in two arrays: the array of **user-typed words**, and the array of **correctly-typed words** and outputs an array containing `1`s (correctly-typed words) and `-1`s (incorrectly-typed words).
```
Inputs:
User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

Output: [1, 1, -1, -1, 1]
```

### Examples
correctStream(user, correct)|Expected
-|-
`correctStream(`<br>`  ["it", "is", "find"],`<br>`  ["it", "is", "fine"]`<br>`)`|&#10132;&#160;`[1, 1, -1]`
`correctStream(`<br>`  ["april", "showrs", "bring", "may", "flowers"],`<br>`  ["april", "showers", "bring", "may", "flowers"]`<br>`)`|&#10132;&#160;`[1, -1, 1, 1, 1]`

### Notes
- The input array lengths will always be the same.

&#160;

# Generate a Countdown of Numbers in an Array

Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

### Examples
countdown(start)|Expected
-|-
`countdown(5)`|&#10132;&#160;`[5, 4, 3, 2, 1, 0]`
`countdown(1)`|&#10132;&#160;`[1, 0]`
`countdown(0)`|&#10132;&#160;`[0]`

### Notes
- The argument will always be greater than or equal to zero.

&#160;

# Negate the Array of Numbers

Given an array of numbers, negate all elements contained within.

- Negating a positive value `-+n` will return `-n`, because all `+`'s are removed.
- Negating a negative value `--n` will return `n`, because the first `-` turns the second minus into a `+`.

### Examples
negate(arr)|Expected
-|-
`negate([1, 2, 3, 4])`|&#10132;&#160;`[-1, -2, -3, -4]`
`negate([-1, 2, -3, 4])`|&#10132;&#160;`[1, -2, 3, -4]`
`negate([])`|&#10132;&#160;`[]`

### Notes
- If you get an empty array, return an empty array: `[]`

&#160;

# Find the Smallest Number in an Array

Create a function that takes an array of numbers and returns the smallest number in the set.

### Examples
findSmallestNum(arr)|Expected
-|-
`findSmallestNum([34, 15, 88, 2])`|&#10132;&#160;`2`
`findSmallestNum([34, -345, -1, 100])`|&#10132;&#160;`-345`
`findSmallestNum([-76, 1.345, 1, 0])`|&#10132;&#160;`-76`
`findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])`|&#10132;&#160;`-0.9999`
`findSmallestNum([7, 7, 7])`|&#10132;&#160;`7`

### Notes
- Test cases contain decimals.

&#160;

# Next Element in Arithmetic Sequence

Create a function that returns the next element in an **arithmetic sequence**. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

### Examples
nextElement(arr)|Expected
-|-
`nextElement([3, 5, 7, 9])`|&#10132;&#160;`11`
`nextElement([-5, -6, -7])`|&#10132;&#160;`-8`
`nextElement([2, 2, 2, 2, 2])`|&#10132;&#160;`2`

### Notes
- All input arrays will contain **integers only**.

&#160;

# X and Y Coordinates

Create a function that converts two arrays of **x-** and **y-** coordinates into an array of `(x, y)` coordinates.

### Examples
convertCartesian(x, y)|Expected
-|-
`convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])`|&#10132;&#160;`[[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]`
`convertCartesian([9, 8, 3], [1, 1, 1])`|&#10132;&#160;`[[9, 1], [8, 1], [3, 1]]`

### Notes
- `x` and `y` arrays will always be the same length.

&#160;

# Applying Discounts

Create a function that applies a *discount* `d` to every number in the array.

### Examples
getDiscounts(nums, d)|Expected
-|-
`getDiscounts([2, 4, 6, 11], "50%")`|&#10132;&#160;`[1, 2, 3, 5.5]`
`getDiscounts([10, 20, 40, 80], "75%")`|&#10132;&#160;`[7.5, 15, 30, 60]`
`getDiscounts([100], "45%")`|&#10132;&#160;`[45]`

### Notes
- The discount is the percentage of the original price (i.e the discount of "75%" to 12 would be 9 as opposed to taking off 75% (making 3)).
- There won't be any awkward decimal numbers, only 0.5 to deal with.

&#160;

# Filter by Digit Length

Create a function that filters out an array to include numbers that only have a certain number of digits.

### Examples
filterDigitLength(arr, num)|Expected
-|-
`filterDigitLength([88, 232, 4, 9721, 555], 3)`<br>Include only numbers with 3 digits.|&#10132;&#160;`[232, 555]`
`filterDigitLength([2, 7, 8, 9, 1012], 1)`<br>Include only numbers with 1 digit.|&#10132;&#160;`[2, 7, 8, 9]`
`filterDigitLength([32, 88, 74, 91, 300, 4050], 1)`<br>No numbers with only 1 digit exist => return empty array.|&#10132;&#160;`[]`
`filterDigitLength([5, 6, 8, 9], 1)`<br>All numbers in the array have 1 digit only => return original array.|&#10132;&#160;`[5, 6, 8, 9]`

### Notes
- If no numbers of the specified digit length exist, return an empty array.
- If all numbers in the array have the specified digit length, return the original array.
- The sub-array returned should have the same relative order as the original array.

&#160;

# Get the File Extension

Write a function that maps files to their extension names.

### Examples
getExtension(arr)|Expected
-|-
`getExtension(["code.html", "code.css"])`|&#10132;&#160;`["html", "css"]`
`getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])`|&#10132;&#160;`["jpg", "pdf", "mp3"]`
`getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])`|&#10132;&#160;`["rb", "cpp", "py", "js"]`

### Notes
- N/A

&#160;
