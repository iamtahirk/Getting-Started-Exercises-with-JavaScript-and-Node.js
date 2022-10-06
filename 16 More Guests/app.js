/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
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