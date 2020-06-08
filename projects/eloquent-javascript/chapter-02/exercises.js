
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
for(var i = "#" ; i.length <= num; i += "#"){
console.log(i)
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
for(var i = 1 ; i <= 15; i++){
 if(i % 15 === 0){
   console.log("fizzbuzz");
 }
 else if (i % 3 === 0){
   console.log("fizz");
 }
 else if(i % 5 === 0){
   console.log("buzz");
 }
 else{
   console.log(i);
 }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
let size = num;

let board = "";
 
for(let i = 0; i < size; i++){
  for(let x = 0; x < size; x++){
    if((i + x) % 2 == 0){
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board)
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
