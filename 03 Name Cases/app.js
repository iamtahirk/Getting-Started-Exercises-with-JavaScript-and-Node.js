/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in 
lowercase, uppercase, and titlecase.
*/

let name = "Muhammad tAhIr kHan";
console.log(`lowercase: ${name.toLowerCase()}
UPPERCASE:  ${name.toUpperCase()}
Title Case:  ${name
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ")}`);

// Split will split the whole name into seperate words (we are splitting it through space)
// Map will then map out each word's first character into Uppercase and the rest will be turned into lowercase using slice.
// At the end we will join all words with a space between using .join
