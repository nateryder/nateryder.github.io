/*
*
* Scope
*
* Scope determins the accesability of variables 
*
*/

// 1. there are two diffrent kinds of scopes which are local and global
var variable = " strting"; // this variable is global, it has aceess to everything
function myFun (){
    //code here
}

 // this variable is global, it has aceess to everything
function myFun (){
    var variable = "string";// this varibale is local scoped it is only recognized inside this function 
}

// 2. different variables have different scopes 

var variable = "String"; // var is globally scoped 

let name = "String";// let is block scoped 

const always = "String";// const is blocked scoped like let

// 3. what happens when your function has the same name as your variable

var season = "summer";//declaring season as summer
function time(season){
  season = "winter";// wanting the function to change the season to winter
  }


