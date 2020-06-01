/*
* OPERATORS
*
*0.operators are used to assing values, compare values, and preform arithmetic  operations
*
*1.different operators are Assignment operators
*Arithmetic operators
*Comparison operators
*Logical operators
*Unary operators (!, typeOf, -)
*Ternary operator (a ? b : c)
*/

// 1. assingment operators are used to assign values
//equals sign to assing a variable with a number
var x = 1
// += is used to add a nubmber and the assing it to a value 
var num = 3
var newNum = num += 3// would print 6
//-= is used to subtract a number and then assign it to a value
var num = 6
var newNum = num -= 3//print 3
//*= is used to multiply a number and then assign it to a value
var num = 2
var numNum = num *= 2// prints 4 
// /= is used to divide a number and then assign it to a value
var num = 4
var numNum = num /= 2// prints 2
//% is used to get the remainder a number and then assign it to a value
var num = 5 * 10
var newNum = num %= 5 //prints 5 

//2. arithemtic operators
// + adds two numbers together 
var num = 5+5//prints 10
// - subtracts two numbers together 
var num = 5-5//prints 0
// * multiplies two numbers together 
var num = 5*5//prints 15
// / divides two numbers 
var num = 10 / 5//prints 5
// % is the remainder of two numbers 
var num = 5 % 50//prints 5

// 3. comparison operators
// == equal tp a value
var num = 8 == 5 //false
// === equal value and type 
var num =8 === "8"//false
// != not equal
var num = 10 != 10 //false
// !==  not equal to value or type
var num = 10 !== "10" //true
//  one is greater than the other 
var num = 10 > 5// true
//  one is less than the other
var num = 10 < 5 //false 
//  one is greater or equal than the other 
var num = 10 >= 10// true
//  one is less or equal than the other 
var num = 10 <= 10// true

// 4. logical operators
// if one both of the expressions are true returns true otherwise it returns false 
(10 === 10 && 9===9)//returns true
// if one or the other expression are true returns true otherwise returns false 
(10 === 10 || 4 === 5)//returns true
// ! makes a expression fasle if it true or true if its false
!(10===10)//returns false

//5. ternary operators 
// a condition followed by a question mark, then an expression to execute if the condition is truthy followed by a colon, and finally the expression to execute if the condition is falsy
function cupOfCoffe(Big) {
  return (Big ? '$10.00' : '$4.00');
}

console.log(cupOfCoffe(true));
// expected output: "$10.00"

console.log(cupOfCoffe(false));
// expected output: "$4.00"

console.log(cupOfCoffe(1));
// expected output: "$10.00"\

// 6.urnary operators 
// typeof returns a string indicating the type of the unevaluated operand
typeof 24//retunrs "number
//  delete operator removes a property from an object
var name = {
  firstName: 'Nate',
  lastName: 'Ryder'
};
//deleting a property
delete name.firstName
// void return undefined to a value
void (2 === 2)// return false