// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
// using a for loop to print one to one hundred
for (var i=1; i <= 100; i++){
    //if its a multiple of 3 and five which is 15 it will print fizz buzz 
    if (i % 15 == 0){ 
    console.log("FizzBuzz");
    } 
    // if  the number is a multiple of 3 it will print fizz
    else if (i % 3 == 0){ 
    console.log("Fizz");
    } 
    // if the number is a multiple of 5 it will print buzz
    else if (i % 5 == 0){ 
    console.log("Buzz");
    } 
    // if its nat a multiple of 5 3 or 15 it will log the number
    else { 
    console.log(i);
    }
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}