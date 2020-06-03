/*
*
* Hoisting
* 
*
* JavasScripts default behavior of moving declaration to the top
*
*/

// 1. how variables are hoisted in JS
console.log(declaredAfter)// this wll print undefined

var declaredAfter = 1 // var declaredAfter is hoisted to the top

console.log(declaredAfter)//prints 1


 console.log(someThing);//will throw a ref errror both let and cont have to be declared on or after the let or cont variable is used
 let someThing = "hello";
 
  let someOtherThing = "hello";
 console.log(someOtherThing);//will print hello

// 2. functions hoisted 

// Outputs: "Definition hoisted!"
hoisted();

// TypeError: undefined is not a function
notHoisted();
//function declerations will be hoisted 
function hoisted() {
    console.log("hoisted!");
}
// function expressions will not be hoisted 
var notHoisted = function () {
    console.log("not hoisted!");
};


