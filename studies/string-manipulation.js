/*
* String Manipulation
*
* Strings have methods that allow you to work with them and change them 
*
*1. first is string minipulation with operators 
*
*2. second there is string manipulation with string methods
*/
 
//  1. string manipulation with operators
var name = "nate" 
// you can add on to the string with the += operator 
name += "ryder"
// you can also concatonate trings 
var greeting = "hello " + name //prints "hello nate ryder"

// 2. string methods
// length property returns the length of a string
var string = "hello world";
console.log(string.length)//print how long the string is 
// index of returns the position of where a certain specified text is 
var string = "hello world";
console.log(string.indexOf("hello"))//will return 0
// returns the index of the last occurrence of a specified text in a string
var string = "hello world";
console.log(string.lastIndexOf("world"))//will return 6
// toUpperCase will make all the letters in the string in CAPS and toLowerCase will do the opposite
var string = "hello world";
console.log(string.toUpperCase())//returns "HELLO WORLD"

