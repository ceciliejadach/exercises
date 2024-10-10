"use strict";

// const longLine =
//   "A very, very, very, very, VERY! long line of text, \
// that spans across the width of the editor!";
// console.log(longLine);

// const drink = "pepsi";
// const animalType = "dog";
// const animalName = "Mandu";

// const text = `Hey ${name} would you like a ${drink}?`;

// console.log(`My name is ${name}.
//     I have a ${animalType} called ${animalName}`);

// const len = name.length;
// const letter = name[29];

const fullname = "Albus Percival Wulfric Brian Dumbledore";
// const indexTwo = name[1];
// const indexSix = name[6];
// const total = name.length;
// const firstD = name.length - 10;
// const lastE = name.length - 1;
// console.log(`Total number of characters: ${total}`);
// console.log(`The character of index two: ${indexTwo}`);
// console.log(`The character of index six: ${indexSix}`);
// console.log(`The index of the first D in dumbledore: ${firstD}`);
// console.log(`The index of the last e in dumbledore: ${lastE}`);

const str1 = "  There is    space here \n   ";
const str2 = str1.trim();
console.log(str2);

const firstName = fullname.substring(0, 5);
const lastName = fullname.substring(29);
console.log(`_${firstName}_`);
console.log(lastName);
