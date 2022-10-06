/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

let magicians = ['David Copperfield', 'Doug Henning', 'Siegfried and Roy', 'Lance Burton'];

const showMagicians = (el) => {
    el.forEach(arr => {
        console.log(arr);
    });
}

showMagicians(magicians);