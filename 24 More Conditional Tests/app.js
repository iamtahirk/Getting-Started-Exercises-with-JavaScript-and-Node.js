/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

let guestList = ['Satoshi Nakamoto', 'Zia Khan', 'Daniyal Nagori', 'Imran Khan', 'Jack Ma'];
let car = 'Subaru';
let num = 27;

console.log('\n\n********** Tests for equality and inequality with strings **********');
console.log("\nIs car == 'subaru'? I predict False.");
console.log(car == 'subaru');
console.log("\nIs car != 'Subaru'? I predict False.");
console.log(car != 'Subaru');

console.log('\n\n********** Tests using the lower case function **********');
console.log("\nIs car == car.toLowerCase()? I predict False.");
console.log(car == car.toLowerCase());


console.log('\n\n********** Numerical tests **********');
console.log("\nIs num == 27? I predict True.");
console.log(num == 27);
console.log("\nIs num !== 27? I predict False.");
console.log(num !== 27);
console.log("\nIs num > 26? I predict True.");
console.log(num > 26);
console.log("\nIs num < 26? I predict False.");
console.log(num < 26);
console.log("\nIs num >= 26? I predict True.");
console.log(num >= 26);
console.log("\nIs num <= 26? I predict False.");
console.log(num <= 26);


console.log('\n\n********** Tests using "and" and "or" operators **********');
console.log("\nIs num <= 26 && car == 'BMW'? I predict False.");
console.log(num <= 26 && car == 'BMW');
console.log("\nIs num < 26 || car == 'Subaru'? I predict True.");
console.log(num < 26 || car == 'Subaru');


console.log('\n\n********** Test whether an item is in array **********');
console.log(guestList.includes("Daniyal Nagori"));

console.log('\n\n********** Test whether an item is not in array **********');
console.log(guestList.includes("Daniyaal Nagori"));