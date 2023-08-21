"use strict";
// // First Method:
// const guestList:string[]=['Abdullah', 'Khizar', 'Mustafa', 'Shakir'];
// function list(person:string): void
// {
//     console.log(`Dear ${person} , \nYou are invited to dinner\n`);
// } 
// const guestWhoCantMakeIt= 'Abdullah';
// console.log(`${guestWhoCantMakeIt} cant come to the dinner`);
// const newGuest= 'Khan';
// const updatedGuestList: string[] = guestList.map((guest) => (guest == guestWhoCantMakeIt ? newGuest : guest));
// updatedGuestList.forEach(list);
// Second Method:
let guestsNames = ['Ali', 'Khan', 'Jan', 'Shakir'];
const a = 'Shakir';
console.log(`${a} can't come to the dinner`);
const b = a.replace('Shakir', 'Abdullah\nYou are invted to dinner.');
console.log(b);
guestsNames.pop();
for (let c of guestsNames) {
    console.log(`${c}\nYou are invited to dinner`);
}
