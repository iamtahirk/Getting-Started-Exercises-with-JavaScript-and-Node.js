/*
Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let locations = ['Paris', 'Rome', 'New York', 'Singapore', 'Blue Lake Luzern', 'Madrid', 'London', 'Niagara Falls', 'Istanbul']; // Initialized Array

let sortedAsc = [...locations].sort();
let locationsReversed = [...sortedAsc].reverse();

console.log(`\nOriginal Order:`);
console.table(locations);


console.log(`\nReverse Order:`);
console.table(locationsReversed);
console.log(`\nOriginal Order:`);
console.table(locations);

locations.reverse();
console.log(`\nOriginal Array Reversed:`);
console.table(locations);

locations.reverse();
console.log(`\nOriginal Array Back to normal from Reversed Stat:`);
console.table(locations);

locations.sort();
console.log(`\nOriginal Array in alphabetical order:`);
console.table(locations);

locations.reverse();
console.log(`\nOriginal Array in reverse alphabetical order:`);
console.table(locations);