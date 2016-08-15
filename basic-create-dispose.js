"use strict";
// import Rx from './common/rx.all.js'
var Rx = require('rx');
const source = Rx.Observable.create(observer => {
  observer.onNext(42);
  // OH NO GOT AN ERROR, WHAT HAPPENS NOW?
  observer.onError(new Error('got an error!'));
  observer.onCompleted();
  return Rx.Disposable.create(() => console.log('disposed'));
});
source.subscribe(
  val => console.log('onNext:', val),
  error => console.log('onError:', error),
  () => console.log('onCompleted:')
);
