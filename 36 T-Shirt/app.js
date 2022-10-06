/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/

const makeShirt = (size, message) => {
    console.log (`\nYour selected shirt size is '${size}' and the desired message is: '${message}'.`);
}

makeShirt('M', 'Dream Big');