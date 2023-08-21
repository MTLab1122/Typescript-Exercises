"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];
for (const number of numbers) {
    let ordinal;
    switch (number) {
        case 1:
            ordinal = 'st';
            break;
        case 2:
            ordinal = 'nd';
            break;
        case 3:
            ordinal = 'rd';
            break;
        default:
            ordinal = 'th';
            break;
    }
    console.log(`${number}${ordinal}`);
}
