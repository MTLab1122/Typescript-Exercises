"use strict";
const personNamewithSpaces = "\t\n     Khan     \t\n";
console.log(`Name with White Spaces,${personNamewithSpaces} `);
const personNamewithoutSpaces = personNamewithSpaces.trim();
console.log(`Name without White Spaces ,\n${personNamewithoutSpaces}`);
