/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let currentUsers = ['admin', 'Eric', 'Samantha', 'Steve', 'Alex', 'Jeff', 'Ron'];
let newUsers = ['StEve', 'Akhtar', 'Ahmad', 'JeFF'];

newUsers.forEach(el => {
    let name = el.toLowerCase();

    if (currentUsers.map(lowerCase => lowerCase.toLowerCase()).includes(name)) {
        console.log(`${el} User name already been taken. Please choose another!!`)
    } else {
        console.log(`${el} User name is available!!`)
    }
});