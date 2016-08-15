"use strict";
const fs = require('fs');
function printContent (file) {
        try {
          return file.toString();
        } catch (TypeError) {
          return file;
        }
      }
console.log('Reading file . . . ');
console.log("======= starting file read");
let file;
try {
  fs.readFile('textXYZ.txt', function (err, contents) {
    file = contents;
    console.log( `Async Contents : ${ printContent(file) }`);
  });
  console.log("======= printing file contents");
  console.log(` Contents are: ${printContent(file)}`);
  console.log("======= finished program");
} catch (err) {
  console.log('whoops, looks like we tried to read an non-existent file!', err)
}
