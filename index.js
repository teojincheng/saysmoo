const cows = require("cows");
// alternative is const cows = require("cows")(); which immediaitely call it 
//so that later no need to have a definition of allCows
const allCows = cows();
//add another argument to the end of the function call. 

// creates a default value.
const index = process.argv[2] || 0;

console.log(allCows[index]);