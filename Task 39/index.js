"use strict";
/*
Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/
const city_country = (city, country) => `"${city} , ${country}"`;
console.log(city_country('Peshawar', 'Pakistan'));
console.log(city_country('London', 'USA'));
console.log(city_country('Tokyo', 'Japan'));
