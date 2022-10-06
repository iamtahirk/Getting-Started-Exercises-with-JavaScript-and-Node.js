/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/

let guestList = ['Satoshi Nakamoto', 'Zia Khan', 'Daniyal Nagori', 'Imran Khan', 'Jack Ma']; // Initialized Array

guestList.forEach(el => { console.log(`I would love to have you Sir ${el} at my dinner party.`); });

console.log(`\nSir ${guestList[4]} can't make it to the party.\n\n` );

guestList.pop();
guestList.push('Elon Musk');


guestList.forEach(el => { console.log(`I would love to have you Sir ${el} at my dinner party.`); });