const personNamewithSpaces:string="\t\n     Khan     \t\n";
console.log(`Name with White Spaces,${personNamewithSpaces} `);

const personNamewithoutSpaces:string=personNamewithSpaces.trim();
console.log(`Name without White Spaces ,\n${personNamewithoutSpaces}`);