#!/usr/bin/env node

// // Övning - dependencies
// const clc = require("cli-color");
// for (let i = 0; i <= 100; i += 1) {
//   if (i % 2 === 0) {
//     console.log(clc.blue(i));
//   } else {
//     console.log(clc.red(i));
//   }
// }

//Övning - Publicera ett paket till npm
const clc = require("cli-color");
if (process.argv[2] === undefined) {
  console.log("No Argument");
} else {
console.log(clc.bold.red(process.argv[2])); 
}
