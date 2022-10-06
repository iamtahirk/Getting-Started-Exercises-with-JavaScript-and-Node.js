/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

let magicians = ['David Copperfield', 'Doug Henning', 'Siegfried and Roy', 'Lance Burton'];
let greatMagicians = [];

const showMagicians = (el) => {
    el.forEach(arr => {
        console.log(arr);
        return arr;
    });
}

const makeGreat = (arr) => {
    arr.forEach(el => {
        greatMagicians.push(`The Great One ${el}`);
    });
    return greatMagicians;
}

showMagicians(magicians);
console.log(`\n\n`)
makeGreat(magicians);
showMagicians(greatMagicians);