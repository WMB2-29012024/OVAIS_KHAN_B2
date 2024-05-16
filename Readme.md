# Loops, Conditionals and Functions

**Question:** Write a JavaScript function named **`findLargestNumber`** that finds the largest number in an array of numbers using a loop. The function should take one parameter:

- **`numbers`**: An array of numbers.

The function should iterate through the array using a loop and return the largest number found.

```jsx
findLargestNumber([10, 5, 20, 8, 15]);
// Output: 20
```

**Question:** Write a JavaScript function named **`countOccurrences`** that takes two parameters: a string **`str`** and a character **`char`**. The function should return the count of occurrences of the character **`char`** within the string **`str`**, utilizing a loop for the counting process. if not found return -1.

```jsx
// Example usage
console.log(countOccurrences("hello world", "o")); // Output: 2
console.log(countOccurrences("apple", "p")); // Output: 2
console.log(countOccurrences("banana", "a")); // Output: 3
```

**Question:** Write a JavaScript function named **`calculateLetterGrade`** that takes a numerical grade as input and returns a corresponding letter grade based on the following scale:

- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: 0-59

```jsx
console.log(calculateLetterGrade(95)); // Output: 'A'
console.log(calculateLetterGrade(78)); // Output: 'C'
console.log(calculateLetterGrade(60)); // Output: 'D'
```

**Question:** Write a JavaScript function named **`isPalindrome`** that takes a string as input and checks whether it is a palindrome or not using loop. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

For example:

- If the input string is **`"radar"`**, the function should return **`true`** since it reads the same forward and backward.
- If the input string is **`"hello"`**, the function should return **`false`** since it is not the same when read backward.

```jsx
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```