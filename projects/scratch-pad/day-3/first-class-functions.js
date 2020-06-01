// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // creating a functiin with a parameter of value that will be tested if its greater than the base parameter that is passed through
    return function (value){
        if (value > base){
            return true;
        } else { return false; 
            
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // creating a functiin with a parameter of value that will be tested if its less than the base parameter that is passed through
     return function (value){
        if (value < base){
            return true;
        } else { return false;
            
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // creating a function to pass in a string and compare its first letter to another strings first letter
  return  function (string){
        if(string[0].toLowerCase()=== startsWith.toLowerCase()){
            return true;
        } else {
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // creating a function to pass in a string and compare its last letter to another strings last letter
    return  function (string){
        if(string[string.length - 1].toLowerCase() === endsWith[endsWith.length - 1].toLowerCase()){
            return true; 
        } else {
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
//  creating a array litteral to store the modified string
var arr = [];
    // using a for loop to itterate over a array then pushing it to my array litteral modified
    for (var i = 0; i < strings.length;i++){
         arr.push(modify(strings[i]));
    }
    return arr;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // looping over a array of strings 
    for (var i = 0; i < strings.length;i++){
    // using a if statement to test the string and if one of them are false it will return false
    if (test(strings[i]) === false){
        return false ;
    }
   
    
    
        
    }
    //if the if statment is true this will allow the function to return true
     return true;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}