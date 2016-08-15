"use strict";
// import Rx from './common/rx.all.js'
var Rx = require('rx');
// note how 2nd arg is a function to do a map!
Rx.Observable.from([1, 2, 3], x => x + x).subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted')
);
