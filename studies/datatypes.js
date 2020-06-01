/*
*DATA TYPES:
*
*Data types are able to operate on variable. Data types can hold many diffrent things like strings , numbers , objects and etc.
*/

//1. Numbers are any numeric value and can be used with a decimal
var num = 10;

//2. Strings are indexed based starting the first character of the string. Strings use " ".
var string = "stirng";

//3. Booleans are primitiv values created from literals 
var x = false;

//4. Arrays are used to store a list of datatypes
var array = [true, 12, "string"];

//5. Objects are containers that contain properties or methods
var fullName = {
    firstName: "Nate",
    lastName: "Ryder"
};

//6. Functions are a block of code made to preform a specific task and the function is executed when called
function add(num1,num2){
    return num1 + num2;
}
console.log(add(2,4));// calling the function

//7. Undefined happens when a variable doesnt have a assinged value 
var i;
console.log(i);

//8. NaN means not a number meaning. This indicated the property is not a legal number.
var Nan = 11 / "Yoda";
console.log(Nan);