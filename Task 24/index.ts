// Tests for equality and inequality with strings
let hello:string='hello';
console.log(hello === "world");
console.log(hello !== "world");

// Tests using the lower case function
console.log("HELLO".toLowerCase() === "hello");
console.log("Hello".toUpperCase() === "hello");

// Numerical tests
const a:number=10;
console.log(a == 5); 
console.log(a !== 5); 
console.log(10 > 5);   
console.log(10 < 5);   
console.log(10 >= 5);  
console.log(10 <= 5);  

// Tests using "and" and "or" operators
console.log(true && false); 
console.log(true || false); 

// Test whether an item is in an array
console.log([1, 2, 3, 4, 5].includes(5)); 

// Test whether an item is not in an array
console.log(![1, 2, 3, 4, 5].includes(5)); 
