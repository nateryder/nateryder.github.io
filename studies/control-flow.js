/*
* Control Flow
*
* Use if to specify a block of code to be executed, if a specified condition is true
* Use else to specify a block of code to be executed, if the same condition is false
* Use else if to specify a new condition to test, if the first condition is false
* Use switch to specify many alternative blocks of code to be executed
*/

// 1. if statement
// we use the if statement to specify a block of javascript code to be executed if a condition is true
if ( 10 === 10){
    "this was true"
}

// 2.else if 
//  the else if statement is to specify a new condition if the first condition is false
if (10 === 5){
    "this was true"
} else if (10 === 10){
    "the second one was true"// this will print 
}

// 3. else 
//  the else statement to specify a block of code to be executed if the condition is false
if (10 === 5){
    "this was true"
} else if (10 === 12){
    "the second one was true"
} else {
    "none were true"//this will print
}

// 4. switch
// switch statement is used to perform different actions based on different conditions.
var fruit = "Pineapple"

switch(fruit) {
  case "Mango":
    "It's a Mango!"
    break;
  case "Pineapple":
    "It's a Pineapple"//will return this
    break;
  default:
  "Not the fruit on this list"
}