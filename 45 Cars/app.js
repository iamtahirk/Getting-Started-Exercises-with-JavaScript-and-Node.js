/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

const cars = (manufacturer, model, ...options) => {
    const item = {
        manufacturer: manufacturer,
        model: model,
        ...options
    }
    return item;
}

console.log(cars('Toyota', 'Prius PHV', make=2020, color='White', milage=27200));

