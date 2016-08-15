// ES6 running on node
"use strict";
let fs = require('fs');
console.log('read file');
// sync file read
try{
    const file = fs.readFileSync('textXYZ.txt');
    // logs only after above operation
    console.log('File i/o (read) operation complete');
    // finally print the results, in sync case this works!
    console.log(`Contents: ${file.toString()}`);
} catch (err) {
  console.log('whoops, looks like we tried to read an non-existent file!', err)
}
