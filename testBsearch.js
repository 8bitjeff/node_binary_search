/*
**usage**
var bsearch=require('./bsearch.js');
var result=bsearch(numberArray, numToFind); The [] should be sorted,
*/
'use strict';

var numToFind = 55;
var numberArray = [1, 2, 3, 4, 5, 6, 10, 21, 32, 33, 34, 41, 47, 51, 52, 53, 54, 55, 66, 69, 71, 73, 76,90];

// calling a procedure like this in node will block io
var bsearch=require('./bsearch.js');

console.log("number arrary",numberArray );
console.log("number to find", numToFind);

var result=bsearch(numberArray, numToFind, true);

console.log ("result=", result);
