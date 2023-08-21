"use strict";
const personName = "Khan";
console.log("The Lowercase is: ", personName.toLowerCase());
console.log("The Uppercase is: ", personName.toUpperCase());
const toTitleCase = (khan) => khan.replace(/\b\w/g, char => char.toUpperCase());
