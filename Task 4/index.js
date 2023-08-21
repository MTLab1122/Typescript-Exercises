"use strict";
const personName = "Khan";
console.log("In Lower Case : ", personName.toLowerCase());
console.log("In Upper Case : ", personName.toUpperCase());
const titleCase = personName.replace(/\b\w/g, (match) => match.toUpperCase());
console.log("In Title Case :", titleCase);
