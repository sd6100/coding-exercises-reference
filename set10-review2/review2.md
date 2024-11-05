# Snail Race

Steve and Maurice have racing snails. They each have three, a slow `s`, medium `m` and fast `f` one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

1. Round 1: `[s, f]` Sacrifice his slowest snail against Steve's fastest.
2. Round 2: `[m, s]` Use his middle snail against Steve's slowest.
3. Round 3: `[f, m]` Use his fastest snail against Steve's middle.

Create a function that determines whether Maurice's plan will work by outputting `true` if Maurice wins 2/3 games.

The function inputs:

1. Array 1: `[s, m, f]` for Maurice.
1. Array 2: `[s, m, f]` for Steve.

### Examples
mauriceWins(mSnails, sSnails)|Expected
-|-
`mauriceWins([3, 5, 10], [4, 7, 11])`<br>Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.|&#10132;&#160;`true`
`mauriceWins([6, 8, 9], [7, 12, 14])`<br>Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.|&#10132;&#160;`false`
`mauriceWins([1, 8, 20], [2, 9, 100])`|&#10132;&#160;`true`

### Notes
- Maurice wins if his competing snail's speed **strictly** exceeds Steve's snail's speed.
- Steve will always play in this order: `[f, s, m]`.
- The order you'll get the snails is always in ascending order.

&#160;

# Baseball Batting Average

A baseball  player's batting average is calculated by the following formula:

```
BA = (number of hits) / (number of official at-bats)
```

Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

1. Ty Cobb .366
2. Rogers Hornsby .358
3. Shoeless Joe Jackson .356

The given array represents a season of games. Each array item indicates a player's `[hits, official at bats]` per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

### Examples
battingAvg(arr)|Expected
-|-
`battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]])`|&#10132;&#160;`".286"`
`battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]])`|&#10132;&#160;`".350"`
`battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]])`|&#10132;&#160;`".273"`

### Notes
- The number of hits will not exceed the number of official at-bats.
- The array includes official at-bats only. No other plate-appearances (walks, hit-by-pitches, sacrifices, etc.) are included in the array.
- HINT: Think in terms of total hits and total at-bats.

&#160;

# Find the nth Tetrahedral Number

A tetrahedron is a pyramid with a triangular base and three sides.  A tetrahedral number is a number of items within a tetrahedron.

Create a function that takes an integer `n` and returns the `n`th tetrahedral number.

![Alternative Text](https://edabit-challenges.s3.amazonaws.com/Pyramid_of_35_spheres_animation.gif)

### Examples
tetra(n)|Expected
-|-
`tetra(2)`|&#10132;&#160;`4`
`tetra(5)`|&#10132;&#160;`35`
`tetra(6)`|&#10132;&#160;`56`

### Notes
- There is a formula for the `n`th tetrahedral number.

&#160;

# Check If It's a Title String

Check if a string `title` is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

### Examples
checkTitle(title)|Expected
-|-
`checkTitle("A Mind Boggling Achievement")`|&#10132;&#160;`true`
`checkTitle("A Simple Java Script Program!")`|&#10132;&#160;`true`
`checkTitle("Water is transparent")`|&#10132;&#160;`false`

### Notes
- N/A

&#160;

# Adding Numbers in a String

Given a string of numbers separated by a *comma and space*, return the **total** sum of all the numbers.

### Examples
addNums(nums)|Expected
-|-
`addNums("2, 5, 1, 8, 4")`|&#10132;&#160;`20`
`addNums("1, 2, 3, 4, 5, 6, 7")`|&#10132;&#160;`28`
`addNums("10")`|&#10132;&#160;`10`

### Notes
- Numbers will always be separated by a comma and space.
- Your function should accept negative numbers.

&#160;

# Video Length in Seconds

You are given the length of a video in minutes. The format is **mm:ss** (e.g.: `"02:54"`). Create a function that takes the *video length* and return it in **seconds**.

### Examples
minutesToSeconds(time)|Expected
-|-
`minutesToSeconds("01:00")`|&#10132;&#160;`60`
`minutesToSeconds("13:56")`|&#10132;&#160;`836`
`minutesToSeconds("10:60")`|&#10132;&#160;`false`

### Notes
- The video length is given as a string.
- If the number of seconds is **60 or over**, return `false` (see example #3).
- You may get a number of minutes over 99 (e.g. `"121:49"` is perfectly **valid**).

&#160;

# Return the Highest and Lowest Numbers

Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

### Examples
highLow(str)|Expected
-|-
`highLow("1 2 3 4 5")`|&#10132;&#160;`"5 1"`
`highLow("1 2 -3 4 5")`|&#10132;&#160;`"5 -3"`
`highLow("1 9 3 4 -5")`|&#10132;&#160;`"9 -5"`
`highLow("13")`|&#10132;&#160;`"13 13"`

### Notes
- All numbers are valid Int32, no need to validate them.
- There will always be at least one number in the input string.
- Output string must be two numbers separated by a single space, and highest number is first.

&#160;

# Reverse the Case

Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

### Examples
reverseCase(str)|Expected
-|-
`reverseCase("Happy Birthday")`|&#10132;&#160;`"hAPPY bIRTHDAY"`
`reverseCase("MANY THANKS")`|&#10132;&#160;`"many thanks"`
`reverseCase("sPoNtAnEoUs")`|&#10132;&#160;`"SpOnTaNeOuS"`

### Notes
- N/A

&#160;

# Highest Digit

Create a function that takes a number as an argument and returns the highest digit in that number.

### Examples
highestDigit(number)|Expected
-|-
`highestDigit(379)`|&#10132;&#160;`9`
`highestDigit(2)`|&#10132;&#160;`2`
`highestDigit(377401)`|&#10132;&#160;`7`

### Notes
- Don't forget to `return` the result.

&#160;

# Calculate the Mean

Create a function that takes an array of numbers and returns the mean (average) of all those numbers.

### Examples
mean(arr)|Expected
-|-
`mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])`|&#10132;&#160;`2.55`
`mean([2, 3, 2, 3])`|&#10132;&#160;`2.50`
`mean([3, 3, 3, 3, 3])`|&#10132;&#160;`3.00`

### Notes
- Round to two decimal places.
- You can expect a number ranging from 0 to 10,000.

&#160;

# Find the Largest Numbers in a Group of Arrays

Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

### Examples
findLargestNums(arr)|Expected
-|-
`findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])`|&#10132;&#160;`[7, 90, 2]`
`findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])`|&#10132;&#160;`[-34, -2, 7]`
`findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])`|&#10132;&#160;`[0.7634, 9.32, 9]`

### Notes
- Watch out for negative integers (numbers).

&#160;

# Valid Zip Code

Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

- Must only contain numbers (no non-digits allowed).
- Must not contain any spaces.
- Must not be greater than 5 digits in length.

### Examples
isValid(zip)|Expected
-|-
`isValid("59001")`|&#10132;&#160;`true`
`isValid("853a7")`|&#10132;&#160;`false`
`isValid("732 32")`|&#10132;&#160;`false`
`isValid("393939")`|&#10132;&#160;`false`

### Notes
- N/A

&#160;

# Maximum Possible Total

Given an array of 10 numbers, return the **maximum possible total** made by summing just  **5 of the 10 numbers**.

### Examples
maxTotal(nums)|Expected
-|-
`maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])`|&#10132;&#160;`43`
`maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])`|&#10132;&#160;`100`
`maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])`|&#10132;&#160;`40`

### Notes
- You can select any 5 numbers from the given array to form maximum possible total.

&#160;

# Transforming Words into Binary Strings

Write a function that transforms all letters from `[a, m]` to `0` and letters from `[n, z]` to `1` in a string.

### Examples
convertBinary(str)|Expected
-|-
`convertBinary("house")`|&#10132;&#160;`"01110"`
`convertBinary("excLAIM")`|&#10132;&#160;`"0100000"`
`convertBinary("moon")`|&#10132;&#160;`"0111"`

### Notes
- Conversion should be case **insensitive** (see example #2).

&#160;

# Secret Society

A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function that takes in an array of names and returns the name of the secret society.

### Examples
societyName(friends)|Expected
-|-
`societyName(["Adam", "Sarah", "Malcolm"])`|&#10132;&#160;`"AMS"`
`societyName(["Harry", "Newt", "Luna", "Cho"])`|&#10132;&#160;`"CHLN"`
`societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])`|&#10132;&#160;`"CJMPRR"`

### Notes
- The secret society's name should be entirely uppercased.

&#160;

# Most Left Digit

Write a function that takes a string as an argument and returns the left most digit in the string.

### Examples
leftDigit(num)|Expected
-|-
`leftDigit("TrAdE2W1n95!")`|&#10132;&#160;`2`
`leftDigit("V3r1ta$")`|&#10132;&#160;`3`
`leftDigit("U//DertHe1nflu3nC3")`|&#10132;&#160;`1`
`leftDigit("J@v@5cR1PT")`|&#10132;&#160;`5`

### Notes
- Each string will have at least two numbers.
- Return the result as an integer.

&#160;
