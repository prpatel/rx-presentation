// import React from 'react';

var Rx = require('rx');
let count = 0;
const nameInput = document.querySelector('#nameInput');
const nameOutput = document.getElementById('nameOutput');
Rx.Observable.fromEvent(nameInput, 'input')
// we want event.target.value
.pluck('target', 'value')
.map(item => item.toUpperCase())
.subscribe(function(e) {
  // console.log(e);
  nameOutput.innerHTML=e;
});

const buttonCount = document.querySelector('#buttonCount');
const counter = document.getElementById('counter');
Rx.Observable.fromEvent(buttonCount, 'click')
.subscribe(function(e) {
  // console.log(e);
  count++;
  counter.innerHTML=count;
});

const nameInputdebounced = document.querySelector('#nameInputdebounced');
const nameOutputdebounced = document.getElementById('nameOutputdebounced');
Rx.Observable.fromEvent(nameInputdebounced, 'input')
// we want event.target.value
.pluck('target', 'value')
.debounce(1000)
.subscribe(function(e) {
  nameOutputdebounced.innerHTML=e;
});
