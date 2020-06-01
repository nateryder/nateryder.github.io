/*
*
*Loops
*
*loops are used to execute a block of code multiple times
* 
* for loops -  loops through a block of code a number of times
* for in loops - loops through the properties of an object
* while loops - loops through a block of code while a specified condition is true
*/

// 1. for loops
for (let i = 0; i <= 5; i++) {
  console.log(i)//would print 0-5
}

for (let i = 5; i >= 0; i--) {
  console.log(i)//would print 5-0
}

// 2. for in loops
var person = {
  firstName:"Nate",
   lastName:"Ryder", 
   age:18};

var text = " ";
for (let key in person) {
  text += person[key];
}//will print NateRyder18

// 3. while loops
var drinks = ["coke","pepsi","rootbeer"]
var i = 0
while ( i < drinks.length){
  console.log(i++)
    
}//will print 0-2