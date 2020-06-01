/*
*
* Functions
*
* functions are statements that preform a task or to calculate values
* you must define the function somewhere in the scope from where you call it
*/

// 1. the two phases are declaring the function then calling that function 
function multiply(number1,number2) { //declaring the function and parameters
  return number1 * number2; ///multiplying first number by second number
}
multiply(5,5)//calling the function passing in 5 and 5 as parameters

// 2. the diffrence between the functions parameters and arguments are that the parameters are placehodlers for values you give it  and the arguments are the acual values
// that you want to pass in the function
function multiply(number1,number2) { // number1 and number 2 are placeholders for a value to be multiplied together
  return number1 * number2; 
}
multiply(5,5)//passing 5 and 5 into number 1 and two so that it will mutiply those two numbers together

// 3. named function syntax
function name(prameter){
    //what you want to return
}

// 4. how to assing a function to a variable
var fun = function name(prameter){
    //what you want to return
}

// 5.Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
function optional() { //functions dont have to have parameters they are optional
  return "returning the messeage"; } // the function also has the option to return a signular value
  
// 6. Functions can see and modify variables in parent or global scopes 
function scope(param1){
    var name = "nateryder"
 return param1 + name
}
console.log(name)// will say name is not defined becasue it is outside the scope of the function 

// 7.the function stores another function in memory so that when you call the function again it remembers the number where it left off at
var add = (function () {
  var num = 2;
  return function () {num += 2; 
  return num}
})();

add();//adds 2 to 2
add();//adds 2 to the stored 4
add();//adds 2 to the stored 6
//this will return 8