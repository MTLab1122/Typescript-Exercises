"use strict";
const names = ['Ali', 'Khan', 'Jan', 'Ahmad', 'Shakir'];
for (const name of names) {
    if (name == "Khan") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
}
