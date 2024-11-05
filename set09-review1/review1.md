# How Much is True?

Create a function which returns the number of `true` values there are in an array.

### Examples
countTrue(arr)|Expected
-|-
`countTrue([true, false, false, true, false])`|&#10132;&#160;`2`
`countTrue([false, false, false, false])`|&#10132;&#160;`0`
`countTrue([])`|&#10132;&#160;`0`

### Notes
- Return `0` if given an empty array.
- All array items are of the type bool (`true` or `false`).

&#160;

# Return the Factorial

Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

### Examples
factorial(int)|Expected
-|-
`factorial(3)`|&#10132;&#160;`6`
`factorial(5)`|&#10132;&#160;`120`
`factorial(13)`|&#10132;&#160;`6227020800`

### Notes
- Assume all inputs are greater than or equal to 0.

&#160;

# Join Two Portions of a Path

Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

### Examples
joinPath(portion1, portion2)|Expected
-|-
`joinPath("portion1", "portion2")`|&#10132;&#160;`"portion1/portion2"`
`joinPath("portion1/", "portion2")`|&#10132;&#160;`"portion1/portion2"`
`joinPath("portion1", "/portion2")`|&#10132;&#160;`"portion1/portion2"`
`joinPath("portion1/", "/portion2")`|&#10132;&#160;`"portion1/portion2"`

### Notes
- Try not to solve this challenge using only `if-else` conditions.

&#160;

# Number Split

Given a number, return an array containing the two halves of the number. If the number is odd, make the **rightmost number higher**.

### Examples
numberSplit(n)|Expected
-|-
`numberSplit(4)`|&#10132;&#160;`[2, 2]`
`numberSplit(10)`|&#10132;&#160;`[5, 5]`
`numberSplit(11)`|&#10132;&#160;`[5, 6]`
`numberSplit(-9)`|&#10132;&#160;`[-5, -4]`

### Notes
- All numbers will be integers.
- You can expect negative numbers too.

&#160;

# Tile Teamwork Tactics

In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the **same tile** as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position `a` and your friend's position `b` and returns a boolean representation of whether  it's possible to earn a bonus on any die roll.

### Examples
possibleBonus(a, b)|Expected
-|-
`possibleBonus(3, 7)`|&#10132;&#160;`true`
`possibleBonus(1, 9)`|&#10132;&#160;`false`
`possibleBonus(5, 3)`|&#10132;&#160;`false`

### Notes
- You cannot move backward (which is why example #3 doesn't work).
- If you are already on the same tile, return `false`, as you would be advancing away.
- Expect only positive integer inputs.

&#160;

# Hiding the Card Number

Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by `************`.

### Examples
cardHide(card)|Expected
-|-
`cardHide("1234123456785678")`|&#10132;&#160;`"************5678"`
`cardHide("8754456321113213")`|&#10132;&#160;`"************3213"`
`cardHide("35123413355523")`|&#10132;&#160;`"**********5523"`

### Examples
- Ensure you return a string.
- The length of the string must remain the same as the input.

&#160;

# Absolute Sum

Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

### Examples
getAbsSum(arr)|Expected
-|-
`getAbsSum([2, -1, 4, 8, 10])`|&#10132;&#160;`25`
`getAbsSum([-3, -4, -10, -2, -3])`|&#10132;&#160;`22`
`getAbsSum([2, 4, 6, 8, 10])`|&#10132;&#160;`30`
`getAbsSum([-1])`|&#10132;&#160;`1`

### Notes
- The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).
- All the elements in the given array are integers.

&#160;

# Spelling it Out

Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

### Examples
spelling(str)|Expected
-|-
`spelling("bee")`|&#10132;&#160;`["b", "be", "bee"]`
`spelling("happy")`|&#10132;&#160;`["h", "ha", "hap", "happ", "happy"]`
`spelling("eagerly")`|&#10132;&#160;`["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]`

### Notes
- N/A

&#160;

# Amplify the Multiples of Four

In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

Each number of the sequence that can be **exactly divided by 4** must be **amplified by 10** (_see notes below_).

Given a higher bound `num`, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

### Examples
amplify(num)|Expected
-|-
`amplify(4)`<br>Create a sequence from 1 to 4<br>4 is exactly divisible by 4, so it will be 4*10 = 40|&#10132;&#160;`[1, 2, 3, 40]`
`amplify(3)`<br>Create a sequence from 1 to 3<br>There are no numbers that can be exactly divided by 4|&#10132;&#160;`[1, 2, 3]`
`amplify(25)`<br>Create a sequence from 1 to 25<br>The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.|&#10132;&#160;`[1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]`

### Notes
- The given parameter `num` will always be equal to or greater than 1.
- Remember to include the `num` as the higher bound of the sequence (see the **Examples**) above.
- A number `a` amplified by a factor `b` can also be read as: `a * b`.
- A number `a` is exactly divisible by a number `b` when the **remainder** of the division `a / b` is equal to `0`.

&#160;

# Is the Number Symmetrical?

Create a function that takes a number as an argument and returns `true` or `false` depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

### Examples
isSymmetrical(num)|Expected
-|-
`isSymmetrical(7227)`|&#10132;&#160;`true`
`isSymmetrical(12567)`|&#10132;&#160;`false`
`isSymmetrical(44444444)`|&#10132;&#160;`true`
`isSymmetrical(9939)`|&#10132;&#160;`false`
`isSymmetrical(1112111)`|&#10132;&#160;`true`

### Notes
- N/A

&#160;

# Hashes and Pluses

Create a function that returns the number of hashes and pluses in a string.

### Examples
hashPlusCount(str)|Expected
-|-
`hashPlusCount("###+")`|&#10132;&#160;`[3, 1]`
`hashPlusCount("##+++#")`|&#10132;&#160;`[3, 3]`
`hashPlusCount("#+++#+#++#")`|&#10132;&#160;`[4, 6]`
`hashPlusCount("")`|&#10132;&#160;`[0, 0]`

### Notes
- Return `[0, 0]` for an empty string.
- Return in the order of `[hashes, pluses]`.

&#160;

# Convert to Decimal Notation

Create a function to convert an array of percentages to their decimal equivalents.

### Examples
convertToDecimal(perc)|Expected
-|-
`convertToDecimal(["1%", "2%", "3%"])`|&#10132;&#160;`[0.01, 0.02, 0.03]`
`convertToDecimal(["45%", "32%", "97%", "33%"])`|&#10132;&#160;`[0.45, 0.32, 0.97, 0.33]`
`convertToDecimal(["33%", "98.1%", "56.44%", "100%"])`|&#10132;&#160;`[0.33, 0.981, 0.5644, 1]`

### Notes
- N/A

&#160;

# Count Ones in a 2D Array

Create a function to count the number of `1`s in a 2D array.

### Examples
countOnes(matrix)|Expected
-|-
`countOnes([`<br>`  [1, 0],`<br>`  [0, 0]`<br>`])`|&#10132;&#160;`1`
`countOnes([`<br>`  [1, 1, 1],`<br>`  [0, 0, 1],`<br>`  [1, 1, 1]`<br>`])`|&#10132;&#160;`7`
`countOnes([`<br>`  [1, 2, 3],`<br>`  [0, 2, 1],`<br>`  [5, 7, 33]`<br>`])`|&#10132;&#160;`2`

### Notes
- N/A

&#160;

# Is One Array a Subset of Another?

Create a function that returns `true` if the first array is a **subset** of the second. Return `false` otherwise.

### Examples
isSubset(arr1, arr2)|Expected
-|-
`isSubset([3, 2, 5], [5, 3, 7, 9, 2])`|&#10132;&#160;`true`
`isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])`|&#10132;&#160;`true`
`isSubset([1, 2], [3, 5, 9, 1])`|&#10132;&#160;`false`

### Notes
- Both arrays will contain only unique values.

&#160;

# Spotlight Sum

Given a 10x10 grid of numbers 1-100, return the **Spotlight Sum**, given a number `n`. The spotlight sum can be defined as the total of the 8 numbers immediately surrounding the number `n` on the grid, including `n` in the total.

### Worked Example
```
[
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]

spotlight_sum(45) ➞ 405

// The 8 numbers surrounding 45 on the grid are:
// [34, 35, 36, 44, 46, 54, 55, 56]
// Total of the numbers is 360.
// Include 45 in the total (360 + 45 = 405)
// Return the answer.
```

### Examples
spotlightSum(n)|Expected
-|-
`spotlightSum(19)`|&#10132;&#160;`171`
`spotlightSum(48)`|&#10132;&#160;`432`
`spotlightSum(88)`|&#10132;&#160;`792`

### Notes
- Note that any numbers which don't have the *full 8 numbers* surrounding it are **not included in the tests.**

&#160;

# Omnipresent Value

A value is **omnipresent** if it exists in every subarray inside the main array. 

To illustrate:

```
[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
```

Create a function that determines whether an input value is **omnipresent** for a given array.

### Examples
isOmnipresent(arr, val)|Expected
-|-
`isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)`|&#10132;&#160;`true`
`isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)`|&#10132;&#160;`false`
`isOmnipresent([[5], [5], [5], [6, 5]], 5)`|&#10132;&#160;`true`
`isOmnipresent([[5], [5], [5], [6, 5]], 6)`|&#10132;&#160;`false`

### Notes
- Sub-arrays can be any length.

&#160;
