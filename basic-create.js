"use strict";
// import Rx from './common/rx.all.js'
var Rx = require('rx');
let observable = Rx.Observable.create(function(observer) {
  observer.onNext(101);
  observer.onNext(103);
  observer.onCompleted();
});
observable.subscribe(
   function(next){
      console.log("next " + next);
   },
   function(error) {
      console.log("error " + error)
   },
   function(){
      console.log("complete!");
   }
);
