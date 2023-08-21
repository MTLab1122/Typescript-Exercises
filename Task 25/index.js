// Tests for equality and inequality with strings
let hello = 'hello';
console.log(hello === "world");
console.log(hello !== "world");
// Tests using the lower case function
console.log("HELLO".toLowerCase() === "hello");
console.log("Hello".toUpperCase() === "hello");
// Numerical tests
const a = 10;
console.log(a == 5); // Falses
console.log(a !== 5); // True
console.log(10 > 5); // True
console.log(10 < 5); // False
console.log(10 >= 5); // True
console.log(10 <= 5); // False
// Tests using "and" and "or" operators
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in an array
console.log([1, 2, 3, 4, 5].includes(5)); // True
// Test whether an item is not in an array
console.log(![1, 2, 3, 4, 5].includes(5)); // True
