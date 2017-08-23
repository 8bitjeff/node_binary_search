/**
* @author Jeff Fulton
/*
The basic premise of a binary search is this: given sorted array, 
a particular value can be found by starting in the middle. 
of the sought-after value is greater than the middle value, 
look in the middle of the second half of the array. 
If it’s less, look in the middle of the first half of the array. 

**usage**
**usage**
var bsearch=require('./bsearch.js');
var result=bsearch(numberArray, numToFind); The [] should be sorted,
*/

'use strict';

module.exports = function(numberArray=[],numToFind=0, recursion=true) {
    var numberArray=numberArray;
    var numToFind=numToFind;
    var recursion=recursion;
    var location;
    if (recursion) {
        console.log("calling recursive version");
        location = arraySearch(numToFind, numberArray, 0, numberArray.length - 1);
        
    }else{
       console.log("calling non-recursive version");
       location = arraySearchIteration(numToFind, numberArray, 0, numberArray.length - 1);
    }
   

    return location;
}

//recursive version
function arraySearch(numToFind, numberArray, first, last){
    
    var middle = Math.floor((last + first)/2);
    console.log("first", first);
    console.log("last", last);
    console.log("arraySearch: middle=", middle);
    
    if (first > last) { 
        console.log(" error: first > last");
        // check for error in data passed in
        return -1; 
    } else if (numberArray[middle] > numToFind) {
        return arraySearch(numToFind, numberArray, first, middle-1);
    } else if (numberArray[middle] < numToFind) {
        return arraySearch(numToFind, numberArray, middle+1, last);
    } else {
        return middle;
    }
    
}

//non-recursive version
function arraySearchIteration(numToFind, numberArray, first, last) {
    var middleFound = false;
    var middle=0;
   
    while (!middleFound) {
        middle = Math.floor((last + first) / 2); 
        console.log("arraySearchIteration: middle=", middle);
        if (numToFind == numberArray[middle] || first > last) {
            middleFound = true;
        }else if (numToFind > numberArray[middle]) {
            first++;
        }else {
            last = middle-1;
        }
    }
    return(middle);
}
