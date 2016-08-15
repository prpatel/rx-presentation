import {   expect  } from 'chai';
import Rx from '../common/rx.all.js'

describe('basic Rx.JS', () => {
  it('Observable.create', () => {
    // expect('').to.equal('Queen');
    expect(true).to.be.true;

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
  });

  it('Observable.just', () => {
    // expect('').to.equal('Queen');
    expect(true).to.be.true;
    let someValue = 'lunch';
    var obs = Rx.Observable.just(someValue);
        obs.subscribe(
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
  });

  it('Observable.from', () => {
    // COLD
    expect(true).to.be.true;

    var array = [1,2,3,4,5];
    var obs = Rx.Observable.from(array);
        obs.subscribe(
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
  });

  it('Observable.from', () => {
    // expect('').to.equal('Queen');
    expect(true).to.be.true;

    var array = [1,2,3,4,5];
    var obs = Rx.Observable.from(array);
        obs.subscribe(
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
  });

});
