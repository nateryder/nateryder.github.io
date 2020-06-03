/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(array,string){
    // looping through the array to see if the animal exits
    for(let i = 0; i < array.length; i++ ){
        // if the stirng thats passed through is the same as a name in the array 
        if (array[i].name.toLowerCase() === string.toLowerCase()){
            // return that animlas object
            return array[i];
        }
        }
    return null; //if not found in the array return nothing
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
   //looping throught the array to see if the animals names exist
    for(let i = 0; i < animals.length; i++ ){
        // if the name exists in the array
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
           //replace that animal with the new object
           return animals[i] = replacement;
        }
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
   //looping through the array of animals 
    for(let i = 0; i < animals.length; i++){
        //if statment to see if the animal matches name remove that name 
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
             return animals.splice(i);//deletes the name 
        } 
        
    } 
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
  //if name and species are not empty
   if (animal.name.length > 0 && animal.species.length > 0){
     //looping throug the array of animals checking if names exist 
     for(let i = 0; i < animals.length; i++){
         // if animal name and species are not in the array add the animal object 
          if (animals[i].name.toLowerCase() === animal.name.toLowerCase()){
               return null;
           }
       } animals.push(animal);//push new animal to the array
   }
}
    

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
