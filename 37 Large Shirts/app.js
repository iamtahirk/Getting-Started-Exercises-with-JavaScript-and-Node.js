/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

const makeShirt = (message, size='L') => {
    console.log (`\nYour selected shirt size is '${size}' and the desired message is: '${message}'.`);
}

makeShirt('I love JavaScript');