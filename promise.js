// ES6 running on node
"use strict";
let fs = require('fs');
function resolve(arg) {
  console.log(arg)
}
function reject(arg) {
  console.log(arg)
}
console.log('read file');
const text =
  new Promise(function (resolve, reject) {
    fs.readFile('text.txt', function (err, text) {
      if (err)
        reject(err);
      else
        resolve(text.toString());
    })
  })
  .then(resolve, reject);
