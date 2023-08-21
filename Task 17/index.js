"use strict";
var guestsName = ['Shakir', 'Ali', 'Khan', 'Talha', 'Jan', 'Abdullah', 'Mustafa'];
console.log(`Original Guest List is: ${guestsName}`);
console.log(`We can invite only two person at the dinner\n`);
while (guestsName.length > 2) {
    let a = guestsName.pop();
    console.log(`Sorry ${a} you are not invited to dinner`);
}
console.log(`\n${guestsName[0]} you are still invited to the dinner `);
console.log(`${guestsName[1]} you are still invited to the dinner `);
guestsName.pop();
guestsName.pop();
console.log(`\nFinal Guest List is: ${guestsName}[]`);
