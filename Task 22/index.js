"use strict";
function create(name, color, price) {
    return { name, color, price };
}
const laptops = [
    create('Apple', 'Red', 30000),
    create('Lenovo', 'White', 25000),
    create('HP', 'Blue', 20000),
    create('Dell', 'Black', 15000),
];
laptops.forEach((laptop) => {
    console.log(`${laptop.name}: Color is: ${laptop.color} Price is: ${laptop.price}`);
});
