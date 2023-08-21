"use strict";
function make_sandwich(...items) {
    console.log(`Your sandwich with ${items.join(', ')} is being prepared.`);
}
// Call the function with different numbers of arguments
make_sandwich('Turkey', 'Lettuce', 'Tomato', 'Mayo');
make_sandwich('Ham', 'Cheese');
make_sandwich('Chicken', 'Bacon', 'Avocado', 'Mustard', 'Pickles');
