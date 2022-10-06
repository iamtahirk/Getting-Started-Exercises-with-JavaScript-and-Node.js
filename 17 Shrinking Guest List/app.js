/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

let guestList = ['Satoshi Nakamoto', 'Zia Khan', 'Daniyal Nagori', 'Imran Khan', 'Jack Ma']; // Initialized Array

guestList.forEach(el => { console.log(`I would love to have you Sir ${el} at my dinner party.`); });

console.log(`\nSir ${guestList[4]} can't make it to the party.\n\n` );

guestList.pop();
guestList.push('Elon Musk');


guestList.forEach(el => { console.log(`It will be an honor for me to have you Sir ${el} at my dinner party.`); });

console.log(`\n\nGood news for everyone. I have just found a bigger dinner table.\n\n`);

guestList.unshift('Jeff Bezos');            //Add one new guest to the beginning of your array.
guestList.splice(3, 0, 'Lionel Messi');    //Add one new guest to the middle of your array. 
guestList.push('Mark Zuckerberg');        //Add one new guest to the end of your list

guestList.forEach(el => { console.log(`It will be an honor for me to have you Sir ${el} at my dinner party.`); });

console.log(`\n\nBad News!! New dinner table won't arrive in time and I only can two guests at the moment.\n\n`);

console.log(`I'm really sorry ${guestList.pop()}. I can't invite you for the dinner.`);
console.log(`I'm really sorry ${guestList.pop()}. I can't invite you for the dinner.`);
console.log(`I'm really sorry ${guestList.pop()}. I can't invite you for the dinner.`);
console.log(`I'm really sorry ${guestList.pop()}. I can't invite you for the dinner.`);
console.log(`I'm really sorry ${guestList.pop()}. I can't invite you for the dinner.`);
console.log(`I'm really sorry ${guestList.pop()}. I can't invite you for the dinner.\n\n`);

guestList.forEach(el => { console.log(`It will be an honor for me to have you Sir ${el} at my dinner party.`); });

guestList.pop();
guestList.pop();

console.log(guestList);