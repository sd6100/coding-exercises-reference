# Is the Number Less than or Equal to Zero?

Create a function that takes a number as its only argument and returns `true` if it's less than or equal to zero, otherwise return `false`.

### Examples
lessThanOrEqualToZero(num)|Expected
-|-
`lessThanOrEqualToZero(5)`|&#10132;&#160;`false`
`lessThanOrEqualToZero(0)`|&#10132;&#160;`true`
`lessThanOrEqualToZero(-2)`|&#10132;&#160;`true`

### Notes
- Don't forget to `return` the result.

&#160;

# Multiple of 100

Create a function that takes an integer and returns `true` if it's divisible by 100, otherwise return `false`.

### Examples
divisible(num)|Expected
-|-
`divisible(1)`|&#10132;&#160;`false`
`divisible(1000)`|&#10132;&#160;`true`
`divisible(100)`|&#10132;&#160;`true`
### Notes
- Don't forget to `return` the result.

&#160;

# Two Makes Ten

Create a function that takes two arguments. Both arguments are integers, `a` and `b`. Return `true` if one of them is `10` or if their sum is `10`.

### Examples
makesTen(a, b)|Expected
-|-
`makesTen(9, 10)`|&#10132;&#160;`true`
`makesTen(9, 9)`|&#10132;&#160;`false`
`makesTen(1, 9)`|&#10132;&#160;`true`

### Notes
- Don't forget to `return` the result.

&#160;

# Check if an Integer is Divisible By Five

Create a function that returns `true` if an integer is evenly divisible by 5, and `false` otherwise.

### Examples
divisibleByFive(n)|Expected
-|-
`divisibleByFive(5)`|&#10132;&#160;`true`
`divisibleByFive(-55)`|&#10132;&#160;`true`
`divisibleByFive(37)`|&#10132;&#160;`false`

### Notes
- Don't forget to `return` the result.

&#160;

# Divides Evenly

Given two integers, `a` and `b`, return `true` if `a` can be divided evenly by `b`. Return `false` otherwise.

### Examples
dividesEvenly(a, b)|Expected
-|-
`dividesEvenly(98, 7)`<br>98/7 = 14|&#10132;&#160;`true`
`dividesEvenly(85, 4)`<br>85/4 = 21.25|&#10132;&#160;`false`

### Notes
- `a` will always be greater than or equal to `b`.

&#160;

# Is the Number Even or Odd?

Create a function that takes a number as an argument and returns `"even"` for even numbers and `"odd"` for odd numbers.

### Examples
isEvenOrOdd(num)|Expected
-|-
`isEvenOrOdd(3)`|&#10132;&#160;`"odd"`
`isEvenOrOdd(146)`|&#10132;&#160;`"even"`
`isEvenOrOdd(19)`|&#10132;&#160;`"odd"`

### Notes
- Dont forget to `return` the result.
- Input will always be a valid integer.
- Expect negative integers (whole numbers).
- Tests are case sensitive (return `"even"` or `"odd"` in lowercase).

&#160;

# Word Numbers!

Create a function that returns a number, based on the string provided. Here is a list of all digits:

String    |    Number
----------|----------
"one"     |     1
"two"     |     2
"three"  |     3
"four"    |     4
"five"     |     5
"six"       |     6
"seven" |     7
"eight"  |     8
"nine"    |     9
"zero"    |     0

### Examples
word(s)|Expected
-|-
`word("one")`|&#10132;&#160;`1`
`word("two")`|&#10132;&#160;`2`
`word("nine")`|&#10132;&#160;`9`

### Notes
- All numbers will be single digit positive integers. 

&#160;

# Convert Number to Corresponding Month Name

Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given `3` as input, your function should return `"March"`, because March is the 3rd month.

Number | Month Name
--- | ---
1 | January
2 | February
3 | March
4 | April
5 | May
6 | June
7 | July
8 | August
9 | September
10 | October
11 | November
12 | December

### Examples
monthName(num)|Expected
-|-
`monthName(3)`|&#10132;&#160;`"March"`
`monthName(12)`|&#10132;&#160;`"December"`
`monthName(6)`|&#10132;&#160;`"June"`

### Notes
- You can expect only integers ranging from 1 to 12 as test input.

&#160;

# Hello; Hello World; World

Write a function that takes an integer and:
- If the number is a multiple of 3, return `"Hello"`.
- If the number is a multiple of 5, return `"World"`.
- If the number is a multiple of both 3 and 5, return `"Hello World"`.

### Examples
helloWorld(num)|Expected
-|-
`helloWorld(3)`|&#10132;&#160;`"Hello"`
`helloWorld(5)`|&#10132;&#160;`"World"`
`helloWorld(15)`|&#10132;&#160;`"Hello World"`

### Notes
- Don't forget to `return` the result.

&#160;

# Slice of Pie

Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

1. Total number of slices.
2. Number of recipients.
3. How many slices each person gets.

The function will be in this form:

```
equalSlices(total slices, no. recipients, slices each)
```

### Examples
equalSlices(total, people, each)|Expected
-|-
`equalSlices(11, 5, 2)`<br>5 people x 2 slices each = 10 slices < 11 slices|&#10132;&#160;`true`
`equalSlices(11, 5, 3)`<br>5 people x 3 slices each = 15 slices > 11 slices|&#10132;&#160;`false`
`equalSlices(8, 3, 2)`|&#10132;&#160;`true`
`equalSlices(8, 3, 3)`|&#10132;&#160;`false`
`equalSlices(24, 12, 2)`|&#10132;&#160;`true`

### Notes
- Return (trivially) `true` if there are zero people.
- It's fine not to use the entire pie.
- All test parameters are integers.
- Don't forget to `return` the result.

&#160;

# Is It a Triangle?

Create a function that takes three numbers as arguments and returns `true` if it's a triangle and `false` if not.

### Examples
isTriangle(a, b, c)|Expected
-|-
`isTriangle(2, 3, 4)`|&#10132;&#160;`true`
`isTriangle(3, 4, 5)`|&#10132;&#160;`true`
`isTriangle(4, 3, 8)`|&#10132;&#160;`false`

### Notes
- `a`, `b` and, `c` are the side lengths of the triangles.
- Test input will always be three positive numbers.

&#160;

# Equality of 3 Values

Create a function that takes three integer arguments `(a, b, c) ` and returns the amount of integers which are of equal value.

### Examples
equal(a, b, c)|Expected
-|-
`equal(3, 4, 3)`|&#10132;&#160;`2`
`equal(1, 1, 1)`|&#10132;&#160;`3`
`equal(3, 4, 1)`|&#10132;&#160;`0`

### Notes
- Your function must return 0, 2 or 3.

&#160;
