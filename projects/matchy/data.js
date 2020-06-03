/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating a object litteral
var animal = {};
animal.species = "bird"; // adding a key named spicies
animal["name"] = "Larry"; //adding a key named name
animal.noises = [];//adding a nosies key with a enmpty array 
console.log(animal)
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];//empty array thats called noises
noises[0] = "chirp";//adding chrip to the zero inex of the array
noises.push("tweet");//pushing tweet to the end 
noises.unshift("skwak");//adds skwak to the front 
noises[noises.length] = "sing";//adds sing the the back 
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// adding the noises array into the animals object
animal.noises = noises;
noises[noises.length] = "twitter";//adding twitter to the back of the noises array
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// creating a var with a array litteral
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var dog = {species: 'dog', name: 'Steve', noises: ['bark', 'woof', 'howl']};
animals.push(dog);
var cat = {species: 'cat', name: 'John', noises: ['purr', 'meow']};
animals.push(cat);
//creating and pushing our variables to the animals array 



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
// array is the best to use to hold a list of items 
function getRandom(animals){
  //will return a random whole number  
    return Math.floor(Math.random());
}
animal.friends = friends;//adds a friends key to our animals
friends.push(animals[getRandom(animal)].name);//pushing our random animal to the friend key
console.log(friends);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}