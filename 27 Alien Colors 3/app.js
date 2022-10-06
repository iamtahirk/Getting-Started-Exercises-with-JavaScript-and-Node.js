/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

let alien_color = 'green';

// one version of this program with Green Alien results
if (alien_color == 'green') {
    console.log(`Congratulations: You've earned 5 points for shooting the Green alien.`);
} else if (alien_color == 'yellow'){
    console.log(`Congratulations: You've earned 10 points for shooting the Yellow alien.`);
} else if (alien_color == 'red'){
    console.log(`Congratulations: You've earned 15 points for shooting the Red alien.`);
}

alien_color = 'yellow';
// one version of this program with Yellow Alien results
if (alien_color == 'green') {
    console.log(`Congratulations: You've earned 5 points for shooting the Green alien.`);
} else if (alien_color == 'yellow'){
    console.log(`Congratulations: You've earned 10 points for shooting the Yellow alien.`);
} else if (alien_color == 'red'){
    console.log(`Congratulations: You've earned 15 points for shooting the Red alien.`);
}

alien_color = 'red';
// one version of this program with Red Alien results
if (alien_color == 'green') {
    console.log(`Congratulations: You've earned 5 points for shooting the Green alien.`);
} else if (alien_color == 'yellow'){
    console.log(`Congratulations: You've earned 10 points for shooting the Yellow alien.`);
} else if (alien_color == 'red'){
    console.log(`Congratulations: You've earned 15 points for shooting the Red alien.`);
}

