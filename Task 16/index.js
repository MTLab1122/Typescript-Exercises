"use strict";
const guestList = ['Abdullah', 'Khizar', 'Mustafa', 'Shakir',];
const guestList2 = ['Muhammad', 'Ali', 'Jan'];
console.log('We find a bigger dinner table');
function list(person) {
    console.log(`Dear ${person} , \nYou are invited to dinner\n`);
}
guestList.unshift('Muhammad');
guestList.splice(guestList.length / 2, 0, 'Ali');
guestList.push('Jan');
guestList.forEach(list);
