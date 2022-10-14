console.clear();

let myString = "je suis a mondmoaselle, qui mange le chocolat et le croissant";
let muString2 = "je vis dans mexique";

console.log(muString2);

let doubleQuotes = 'j\'aime la "danse" tahitianne';
let doubleQuotes2 = "j'aime les 'hommes' tahitianne";

console.log(doubleQuotes);
console.log(doubleQuotes2);

//returns the lenght of the string
console.log(muString2.length);
//find index of a string inside another string
console.log(muString2.indexOf("a"));
//find LAST index of a string inside another string
console.log(myString.lastIndexOf("qui"));
//get a part of our string slice (start, end)
console.log(myString.slice(1, 9));
console.log(myString.slice(-9));
//get sub string function -substr(startPos, length)
console.log(myString.substr(0, 4));
console.log(myString.substr(2, 8));
//toUpperCase() it converts our string -> uppercase characters
console.log(myString.toUpperCase());
//toLowerCase() it converts our string -> lowercase characters
console.log(muString2.toLowerCase());
//concat() - it merges two or more strings
console.log(myString.concat(muString2));
// can also use '+' to concat two of more strings
console.log(myString + " lamour " + muString2);
//trim() it removes extra spaces
let space = "     my chambre est belle    ";
console.log(space.trim());
//charAt() this take a position as an arg and returns the character at that position
console.log(muString2.charAt(9));
//split() splits our string on the basis of the arguments passed
console.log(myString.split(","));
