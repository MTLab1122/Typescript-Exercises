"use strict";
;
function createLaptop(name, color, price) {
    return { name, color, price };
}
const laptops = [
    createLaptop("Apple", "White", 30000),
    createLaptop("Appl", "Whit", 20000),
    createLaptop("App", "Whi", 10000)
];
console.log(laptops);
