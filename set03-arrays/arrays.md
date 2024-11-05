# Pair Management

Given two arguments, return an array which contains these two arguments.

### Examples
makePair(num1, num2)|Expected
-|-
`makePair(1, 2)`|&#10132;&#160;`[1, 2]`
`makePair(51, 21)`|&#10132;&#160;`[51, 21]`
`makePair(512124, 215)`|&#10132;&#160;`[512124, 215]`

### Notes
- N/A

&#160;

# Return the First Element in an Array

Create a function that takes an array containing only numbers and return the first element.

### Examples
getFirstValue(arr)|Expected
-|-
`getFirstValue([1, 2, 3])`|&#10132;&#160;`1`
`getFirstValue([80, 5, 100])`|&#10132;&#160;`80`
`getFirstValue([-500, 0, 50])`|&#10132;&#160;`-500`

### Notes
- The first element in an array always has an index of 0.

&#160;

# Return the Last Element in an Array

Create a function that accepts an array and returns the last item in the array.

### Examples
getLastItem(arr)|Expected
-|-
`getLastItem([1, 2, 3])`|&#10132;&#160;`3`
`getLastItem(["cat", "dog", "duck"])`|&#10132;&#160;`"duck"`
`getLastItem([true, false, true])`|&#10132;&#160;`true`

### Notes
- Don't forget to `return` the result.

&#160;

# Find the Index

Create a function that takes an array and a string as arguments and returns the index of the string.

### Examples
findIndex(arr, str)|Expected
-|-
`findIndex(["hi", "edabit", "fgh", "abc"], "fgh")`|&#10132;&#160;`2`
`findIndex(["Red", "blue", "Blue", "Green"], "blue")`|&#10132;&#160;`1`
`findIndex(["a", "g", "y", "d"], "d")`|&#10132;&#160;`3`
`findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")`|&#10132;&#160;`0`

### Notes
- Don't forget to `return` the result.

&#160;

# Check if an Array Contains a Given Number

Write a function to check if an array contains a particular number.

### Examples
check(arr, el)|Expected
-|-
`check([1, 2, 3, 4, 5], 3)`|&#10132;&#160;`true`
`check([1, 1, 2, 1, 1], 3)`|&#10132;&#160;`false`
`check([5, 5, 5, 6], 5)`|&#10132;&#160;`true`
`check([], 5)`|&#10132;&#160;`false`

### Notes
- Don't forget to `return` the result.

&#160;

# Find the Index (Part #2)

Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return `-1`.

### Examples
search(arr, item)|Expected
-|-
`search([1, 2, 3, 4], 3)`|&#10132;&#160;`2`
`search([2, 4, 6, 8, 10], 8)`|&#10132;&#160;`3`
`search([1, 3, 5, 7, 9], 11)`|&#10132;&#160;`-1`

### Notes
- If the item is not present, return `-1`.
- The given array is ordered.

&#160;

# Add the Index

Given an array of numbers, create a function which returns the same array but with **each element's index in the array added to itself**. This means you add *0 to the number at index 0, add 1 to the number at index 1, etc...*

### Examples
addIndexes(arr)|Expected
-|-
`addIndexes([0, 0, 0, 0, 0])`|&#10132;&#160;`[0, 1, 2, 3, 4]`
`addIndexes([1, 2, 3, 4, 5])`|&#10132;&#160;`[1, 3, 5, 7, 9]`
`addIndexes([5, 4, 3, 2, 1])`|&#10132;&#160;`[5, 5, 5, 5, 5]`

### Notes
- You'll only get numbers in the array.

&#160;

# Reverse an Array

Write a function to reverse an array.

### Examples
reverse(arr)|Expected
-|-
`reverse([1, 2, 3, 4])`|&#10132;&#160;`[4, 3, 2, 1]`
`reverse([9, 9, 2, 3, 4])`|&#10132;&#160;`[4, 3, 2, 9, 9]`
`reverse([])`|&#10132;&#160;`[]`

### Notes
- Don't forget to `return` the result.

&#160;

# Get the Sum of All Array Elements

Create a function that takes an array and returns the sum of all numbers in the array.

### Examples
getSumOfItems(arr)|Expected
-|-
`getSumOfItems([2, 7, 4])`|&#10132;&#160;`13`
`getSumOfItems([45, 3, 0])`|&#10132;&#160;`48`
`getSumOfItems([-2, 84, 23])`|&#10132;&#160;`105`

### Notes
- N/A

&#160;

# Less Than 100  Array Remix

Given an array of numbers, return `true` if the sum of the array is less than 100; otherwise return `false`.

### Examples
arrayLessThan100(arr)|Expected
-|-
`arrayLessThan100([5, 57])`|&#10132;&#160;`true`
`arrayLessThan100([77, 30])`|&#10132;&#160;`false`
`arrayLessThan100([0])`|&#10132;&#160;`true`

### Notes
- N/A

&#160;

# Sum Greater Than Five

Write a function that returns the sum of elements greater than 5, in the given array .

### Examples
sumFive(arr)|Expected
-|-
`sumFive([1, 5, 20, 30, 4, 9, 18])`|&#10132;&#160;`77`
`sumFive([1, 2, 3, 4])`|&#10132;&#160;`0`
`sumFive([10, 12, 28, 47, 55, 100])`|&#10132;&#160;`252`

### Notes
- Find all the elements **greater than 5**, not the elements greater than or equal to 5.

&#160;

# Multiply Every Array Item by Two

Create a function that takes an array with numbers and return an array with the elements multiplied by two.

### Examples
getMultipliedArr(arr)|Expected
-|-
`getMultipliedArr([2, 5, 3])`|&#10132;&#160;`[4, 10, 6]`
`getMultipliedArr([1, 86, -5])`|&#10132;&#160;`[2, 172, -10]`
`getMultipliedArr([5, 382, 0])`|&#10132;&#160;`[10, 764, 0]`

### Notes
- N/A

&#160;
