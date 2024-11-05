# Upvotes vs Downvotes

Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

### Examples
getVoteCount(votes)|Expected
-|-
`getVoteCount({ upvotes: 13, downvotes: 0 })`|&#10132;&#160;`13`
`getVoteCount({ upvotes: 2, downvotes: 33 })`|&#10132;&#160;`-31`
`getVoteCount({ upvotes: 132, downvotes: 132 })`|&#10132;&#160;`0`

### Notes
- You can expect only positive integers for vote counts.

&#160;

# Extract City Facts

Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

1. `name`
2. `population`
3. `continent`

The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

### Examples
cityFacts(city)|Expected
-|-
`cityFacts({`<br>`  name: "Paris",`<br>`  population: "2,140,526",`<br>`  continent: "Europe"`<br>`})`|&#10132;&#160;`"Paris has a population of 2,140,526 and is situated in Europe"`
`cityFacts({`<br>`  name: "Tokyo",`<br>`  population: "13,929,286",`<br>`  continent: "Asia"`<br>`})`|&#10132;&#160;`"Tokyo has a population of 13,929,286 and is situated in Asia"`

### Notes
- Don't add a period at the end.

&#160;

# Volume of a Box

Create a function that takes an object argument `sizes` (contains _width_, _length_, _height_ keys) and returns the volume of the box.

### Examples
volumeOfBox(sizes)|Expected
-|-
`volumeOfBox({ width: 2, length: 5, height: 1 })`|&#10132;&#160;`10`
`volumeOfBox({ width: 4, length: 2, height: 2 })`|&#10132;&#160;`16`
`volumeOfBox({ width: 2, length: 3, height: 5 })`|&#10132;&#160;`30`

### Notes
- Don't forget to `return` the result.
- Remember that the values are in an object.
- Volume is length \* width \* height.

&#160;

# Is the Object Empty?

Write a function that returns `true` if an object is empty, and `false` otherwise.

### Examples
isEmpty(obj)|Expected
-|-
`isEmpty({})`|&#10132;&#160;`true`
`isEmpty({ a: 1 })`|&#10132;&#160;`false`

### Notes
- N/A

&#160;

# 50-30-20 Strategy

The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

Given the after-tax income as `ati`, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

### Examples
fiftyThirtyTwenty(ati)|Expected
-|-
`fiftyThirtyTwenty(10000)`|&#10132;&#160;`{ "Needs": 5000, "Wants": 3000, "Savings": 2000 }`
`fiftyThirtyTwenty(50000)`|&#10132;&#160;`{ "Needs": 25000, "Wants": 15000, "Savings": 10000 }`
`fiftyThirtyTwenty(13450)`|&#10132;&#160;`{ "Needs": 6725, "Wants": 4035, "Savings": 2690 }`

### Notes
- N/A

&#160;

# Calculate the Profit

You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the *cost price per unit* (in dollars), *sell price per unit* (in dollars), and the *starting inventory*. Return the total **profit** made, rounded to the nearest dollar.

### Examples
profit(info)|Expected
-|-
`profit({`<br>`  costPrice: 32.67,`<br>`  sellPrice: 45.00,`<br>`  inventory: 1200`<br>`})`|&#10132;&#160;`14796`
`profit({`<br>`  costPrice: 225.89,`<br>`  sellPrice: 550.00,`<br>`  inventory: 100`<br>`})`|&#10132;&#160;`32411`
`profit({`<br>`  costPrice: 2.77,`<br>`  sellPrice: 7.95,`<br>`  inventory: 8500`<br>`})`|&#10132;&#160;`44030`

### Notes
- Assume all inventory has been sold.
- Profit = Total Sales - Total Cost

&#160;

# Check if Number is within a Given Range

Given a number and an object with `min` and `max` properties, return `true` if the number lies within the given range (inclusive).

### Examples
isInRange(num, range)|Expected
-|-
`isInRange(4, { min: 0, max: 5 })`|&#10132;&#160;`true`
`isInRange(4, { min: 4, max: 5 })`|&#10132;&#160;`true`
`isInRange(4, { min: 6, max: 10 })`|&#10132;&#160;`false`
`isInRange(5, { min: 5, max: 5 })`|&#10132;&#160;`true`

### Notes
- Numbers can be positive or negative, and they may not be integers.
- You can assume `min <= max` is always true.

&#160;

# Shapes With N Sides

Create a function that takes a **whole number** as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

Inputs | Outputs
--- | ---
1 | "circle"
2 | "semi-circle"
3 | "triangle"
4 | "square"
5 | "pentagon"
6 | "hexagon"
7 | "heptagon"
8 | "octagon"
9 | "nonagon"
10 | "decagon"

### Examples
nSidedShape(n)|Expected
-|-
`nSidedShape(3)`|&#10132;&#160;`"triangle"`
`nSidedShape(1)`|&#10132;&#160;`"circle"`
`nSidedShape(9)`|&#10132;&#160;`"nonagon"`

### Notes
- There won't be any tests with a number below 1 or greater than 10.
- Return the output in *lowercase*.
- The challenge is intended to be completed **without conditionals** (it would take too long)!

&#160;

# Printer Levels

Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

### Examples
inkLevels(inks)|Expected
-|-
`inkLevels({`<br>`  "cyan": 23,`<br>`  "magenta": 12,`<br>`  "yellow": 10`<br>`})`|&#10132;&#160;`10`
`inkLevels({`<br>`  "cyan": 432,`<br>`  "magenta": 543,`<br>`  "yellow": 777`<br>`})`|&#10132;&#160;`432`
`inkLevels({`<br>`  "cyan": 700,`<br>`  "magenta": 700,`<br>`  "yellow": 0`<br>`})`|&#10132;&#160;`0`

### Notes
- A single printed page requires each color once, so printing is not possible if any of the slots lack ink (see example #3).

&#160;

# Scrabble Hand

Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

Here's an example hand:
```
[
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]
```

The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.

### Examples
maximumScore(tileHand)|Expected
-|-
`maximumScore([`<br>`  { tile: "N", score: 1 },`<br>`  { tile: "K", score: 5 },`<br>`  { tile: "Z", score: 10 },`<br>`  { tile: "X", score: 8 },`<br>`  { tile: "D", score: 2 },`<br>`  { tile: "A", score: 1 },`<br>`  { tile: "E", score: 1 }`<br>`])`|&#10132;&#160;`28`
`maximumScore([`<br>`  { tile: "B", score: 2 },`<br>`  { tile: "V", score: 4 },`<br>`  { tile: "F", score: 4 },`<br>`  { tile: "U", score: 1 },`<br>`  { tile: "D", score: 2 },`<br>`  { tile: "O", score: 1 },`<br>`  { tile: "U", score: 1 }`<br>`])`|&#10132;&#160;`15`

### Notes
- Here, each tile is represented as an object with two keys: tile and score.

&#160;

# Converting Objects to Arrays

Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

### Examples
toArray(obj)|Expected
-|-
`toArray({ a: 1, b: 2 })`|&#10132;&#160;`[["a", 1], ["b", 2]]`
`toArray({ shrimp: 15, tots: 12 })`|&#10132;&#160;`[["shrimp", 15], ["tots", 12]]`
`toArray({})`|&#10132;&#160;`[]`

### Notes
- Return an empty array if the object is empty.

&#160;

# Online Shopping

Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

### Examples
freeShipping(order)|Expected
-|-
`freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 })`|&#10132;&#160;`false`
`freeShipping({ "Flatscreen TV": 399.99 })`|&#10132;&#160;`true`
`freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })`|&#10132;&#160;`true`

### Notes
- Ignore tax or additional fees when calculating the total order cost.

&#160;
