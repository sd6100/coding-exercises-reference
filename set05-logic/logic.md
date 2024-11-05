# Flip the Boolean

Due to a programming concept known as **truthiness**, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to `true`, and 0 is often equivalent to `false`.

Create a function that returns the opposite of the given boolean, as a number.

### Examples
flipBool(b)|Expected
-|-
`flipBool(true)`|&#10132;&#160;`0`
`flipBool(false)`|&#10132;&#160;`1`
`flipBool(1)`|&#10132;&#160;`0`
`flipBool(0)`|&#10132;&#160;`1`

### Notes
- N/A

&#160;

# Leap Years

A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:

- A year must **either** be divisible by 400 **or** divisible by 4 **and not** 100.

Given a `year` you must implement a function that returns `true` if it's a leap year, or `false` if it's not.

### Examples
isLeap(year)|Expected
-|-
`isLeap(2020)`<br>Exactly divided by 4 and not by 100.|&#10132;&#160;`true`
`isLeap(1800)`<br>Exactly divided by 4, but is also exactly divided by 100.|&#10132;&#160;`false`
`isLeap(2000)`<br>Exactly divided by 400.|&#10132;&#160;`true`
`isLeap(2019)`<br>It can't be exactly divided by 400 or by 4.|&#10132;&#160;`false`

### Notes
- _Exactly divided_ can be interpreted as _the remainder of the division is equal to 0_.
- Bonus: Try to implement this function writing a single line of code.

&#160;

# Drinks Allowed?

A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people **18 and older** and when **he's not on break**.

Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

### Examples
shouldServeDrinks(age, onBreak)|Expected
-|-
`shouldServeDrinks(17, true)`|&#10132;&#160;`false`
`shouldServeDrinks(19, false)`|&#10132;&#160;`true`
`shouldServeDrinks(30, true)`|&#10132;&#160;`false`

### Notes
- Return `true` or `false`.
- Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be **18**.

&#160;

# Is Sam with Frodo?

Sam and Frodo need to be close. If they are side by side in the array, your function should return `true`. If there is a name between them, return `false`.

### Examples
middleEarth(arr)|Expected
-|-
`middleEarth(["Frodo", "Sam", "Gandalf"])`|&#10132;&#160;`true`
`middleEarth(["Frodo", "Saruman", "Sam"])`|&#10132;&#160;`false`
`middleEarth(["Orc", "Sam", "Frodo", "Legolas"])`|&#10132;&#160;`true`

### Notes
- No matter who comes first, the result must be `true` if Frodo and Sam are side by side.
- There is only one Sam and one Frodo in the array.

&#160;

# Free Coffee Cups

For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes `n` cups bought and return as an integer the total number of cups I would get.

### Examples
totalCups(n)|Expected
-|-
`totalCups(6)`|&#10132;&#160;`7`
`totalCups(12)`|&#10132;&#160;`14`
`totalCups(213)`|&#10132;&#160;`248`

### Notes
- Number of cups I bought + number of cups I got for free.
- Only valid inputs will be given.

&#160;

# Similar Bread

Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

### Examples
hasSameBread(arr1, arr2)|Expected
-|-
`hasSameBread(`<br>`  ["white bread", "lettuce", "white bread"],`<br>`  ["white bread", "tomato", "white bread"]`<br>`)`|&#10132;&#160;`true`
`hasSameBread(`<br>`  ["brown bread", "chicken", "brown bread"],`<br>`  ["white bread", "chicken", "white bread"]`<br>`)`|&#10132;&#160;`false`
`hasSameBread(`<br>`  ["toast", "cheese", "toast"],`<br>`  ["brown bread", "cheese", "toast"]`<br>`)`|&#10132;&#160;`false`

### Notes
- The arrays will always be **three** elements long.
- The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.

&#160;

# Automorphic Number

A number is called **Automorphic number** if its square ends in the original number. Create a function that takes a number `n` and returns `true` if it is an Automorphic number, otherwise `false`.

### Examples
automorphic(n)|Expected
-|-
`automorphic(1)`|&#10132;&#160;`true`
`automorphic(3)`<br>3^2 = 9|&#10132;&#160;`false`
`automorphic(6)`<br>6^2 = 36 (ends with 6)|&#10132;&#160;`true`
`automorphic(95)`<br>95^2 = 9025 (does not end with 95)|&#10132;&#160;`false`

### Notes
- N/A

&#160;

# Stack the Boxes

Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...

![Stack the Boxes](https://edabit-challenges.s3.amazonaws.com/stack_the_boxes.png "Stack the Boxes")

Write a function that takes a number `n` and returns the number of stacked boxes in a model `n` levels high, visible and invisible.

### Examples
stackBoxes(n)|Expected
-|-
`stackBoxes(1)`|&#10132;&#160;`1`
`stackBoxes(2)`|&#10132;&#160;`4`
`stackBoxes(0)`|&#10132;&#160;`0`

### Notes
- Step `n` is a positive integer.

&#160;

# Narcissistic Number

A [Narcissistic Number](https://en.wikipedia.org/wiki/Narcissistic_number) is a number that is the sum of its own digits each raised to the power of the number of digits.

For example, take 153 (3 digits), which is narcisstic:
```
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
```

1652  (4 digits), is non-narcisstic:
```
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
```

Create a function that returns `true` or `false` depending upon whether the given number `n` is a Narcissistic number or not.

### Examples
isNarcissistic(n)|Expected
-|-
`isNarcissistic(153)`|&#10132;&#160;`true`
`isNarcissistic(370)`|&#10132;&#160;`true`
`isNarcissistic(1652)`|&#10132;&#160;`false`

### Notes
- N/A

&#160;

# Matchstick Houses

This challenge will help you interpret mathematical relationships both algebraically and geometrically.

![Matchstick Houses, Steps 1, 2 and 3](https://edabit-challenges.s3.amazonaws.com/matchstick_houses.png "Matchstick Houses, Steps 1, 2 and 3")

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

### Examples
matchHouses(step)|Expected
-|-
`matchHouses(1)`|&#10132;&#160;`6`
`matchHouses(4)`|&#10132;&#160;`21`
`matchHouses(87)`|&#10132;&#160;`436`

### Notes
- Step 0 returns `0` matchsticks.
- The input (step) will always be a non-negative integer.
- Think of the input (step) as the total number of houses that have been connected together.

&#160;

# Human, Cat and Dog Years 🧑🏻🐱🐶

**Mubashir** has _a cat and a dog_. He purchased both of them at the same time `humanYears` ago.

Create a function which takes an argument of `humanYears` and returns `[humanYears, catYears, dogYears]` array.

### Human Years
- Human Years >= 1
- Human Years are whole numbers only.

### Cat Years
- 15 cat years for first year.
- +9 cat years for second year.
- +4 cat years for each year after that.

### Dog Years
- 15 dog years for first year
- +9 dog years for second year
- +5 dog years for each year after that

### Examples
calculateYears(humanYears)|Expected
-|-
`calculateYears(1)`|&#10132;&#160;`[1, 15, 15]`
`calculateYears(2)`|&#10132;&#160;`[2, 24, 24]`
`calculateYears(10)`|&#10132;&#160;`[10, 56, 64]`

### Notes
- N/A

&#160;

# A Day at the Market

*Backpack Bill and Wallet Will set off for the annual festival. As they approach the stalls, Bill retorts that he'll be able to bring home more stuff than Will. Taking this as a challenge, Will refutes and a competition spurs into action.*

* Backpack Bill has an infinite inventory space, but a limited number of coins.
* Wallet Will has an infinite number of coins, but a limited inventory space.

**Create a function that returns the name of the man who can bring home the most items. The parameters are given as follows:**

1. Bill's amount of money.
2. Will's amount of inventory space.
3. The item's price.
4. The item's size.

### Worked Example
```
whoWinsTonight(40, 95, 5, 10) ➞ "Will"

// The item costs 5 coins and takes up 10 inventory spaces.
// Bill can only buy a maximum of 8 items (40 coins DIV 5 = 8).
// Will can only bring home a maximum of 9 items. (95 inventory spaces DIV 10 = 9).
// Will is the winner.
```

### Examples
whoWinsTonight(coins, space, price, size)|Expected
-|-
`whoWinsTonight(20, 20, 5, 10)`|&#10132;&#160;`"Bill"`
`whoWinsTonight(10, 2, 20, 1)`|&#10132;&#160;`"Will"`
`whoWinsTonight(3, 7, 2, 5)`|&#10132;&#160;`"Tie"`

### Notes
* DIV means a floored division. That means you round down after dividing.
* Return `"Tie"` if both men can afford the same amount of stuff.
* All numbers will be positive integers.

&#160;
