interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow additional properties
}

function createCar(manufacturer: string, model: string, kwargs: Record<string, any>): Car {
    const carInfo: Car = {
        manufacturer,
        model,
        ...kwargs
    };

    return carInfo;
}

// Call the function with required information and additional properties
const car = createCar('Toyota', 'Camry', { color: 'blue', optionalFeature: 'sunroof' });

// Print the returned car object
console.log(car);
