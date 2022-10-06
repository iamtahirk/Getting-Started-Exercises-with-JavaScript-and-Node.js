/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

let mountainsList = ['Mount Fuji', 'Swiss Alps', 'The Himalayas', 'Mount Everest ', 'Nanga Parbat', 'Grand Teton'];


// Generating intentional error as wrong index results in undefined, so throwing a console error.
if (mountainsList[9] == undefined) {
    console.error('Array Index Error')
}

console.log(mountainsList);