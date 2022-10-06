/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

let magicians = ['David Copperfield', 'Doug Henning', 'Siegfried and Roy', 'Lance Burton'];

const showMagicians = (el) => {
    el.forEach(arr => {
        console.log(arr);
        return arr;
    });
}

const makeGreat = (arr) => {
    const dummyArray = [];
    arr.forEach(el => {
        dummyArray.push(`The Great One ${el}`);
    });
    console.log(dummyArray);
    return dummyArray;
}

showMagicians(magicians);
console.log(`\n\n`)
makeGreat(magicians);