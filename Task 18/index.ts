const placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Rome", "Bali"];

// Print original order
console.log("Original Order:            ", placesToVisit);

// Print alphabetical order without modifying the original array
console.log("Alphabetical Order:        ", [...placesToVisit].sort());

// Print the array in original order
console.log("Original Order (still):    ", placesToVisit);

// Print reverse alphabetical order without modifying the original array
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Print the array in original order
console.log("Original Order (still):    ", placesToVisit);

// Reverse the order of the array
placesToVisit.reverse();
console.log("Reversed Order:            ", placesToVisit);

// Reverse the order again to get back to original
placesToVisit.reverse();
console.log("Back to Original Order:    ", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted Alphabetical Order: ", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.reverse();
console.log("Sorted Reverse Alphabetical Order:", placesToVisit);
