// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // using array.isarray method to test of the value thats passed is a array
 return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // if the value that is pased and not a array and the value is not equal to null and the value is not a date the return a object
    return (typeof value === "object" && !Array.isArray(value) && value !== null && !(value instanceof Date));
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
 // if the value that is pased and not a array and the value is not equal to null and the value is not a date the return a object or a array
    return (typeof value === "object" && !Array.isArray(value) && value !== null && !(value instanceof Date)||Array.isArray(value));
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // using a if statement to go through each value thats inputted and if its true then return the value as a string 
   
     if (Array,isArray(value)){
       return "array";
   }else if ( value === "object"){
       return "object";
   }else if (value === undefined){
       return "undefined";
   } else if (typeof value === "number"){
       return "number";
   } else if (value instanceof Boolean){
       return "boolean";
   } else if (value === null){
       return "null";
       } else if (value instanceof Function){
       return "function";
       } else if (value instanceof Date){
       return "date";
       } else { return "string";
      }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
