//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  return Object.values(object);//returns teh object as a araray
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

    return Object.keys(object).join(" ");//returns object as a stirngs in a array
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
   
   var values = Object.values(object);//gets the objest as a array
   
   var str = [];// creating a array litteral
   //loops over the object that was created in a array
   for (var i = 0; i <= values.length; i++){
  
  if(typeof values[i] === 'string'){
      str.push(values[i]);
  }
  
}
   return str.join(" ");
   } 


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (collection instanceof Array){
        return 'array';
    } 
    if (collection instanceof Object){
        return 'object';
    }
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
 //spilt the string so each letter has a specific index
  string = string.split(" ");
 //looping through each letter of the string 
 for (let i = 0; i < string.length; i++){
 //capitilize each words first letter
 string[i] = string[i][0].toUpperCase() + string[i].slice(1);
     
 }
 return string.join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//return objectss name at the end of the weclome statement
var introduction = object.name.charAt(0).toUpperCase() + object.name.slice(1) ;
return "Welcome " + introduction + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var name = object.name.charAt(0).toUpperCase() + object.name.slice(1);//getting the name and making the first letter uppercased
var species = object.species.charAt(0).toUpperCase() + object.species.slice(1);//getting species and making the first letter uppercased
return name + " is a " + species;// concates the name and species with a is a

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
// if noises thats found in the object is a array and that array is not empty return the array as a string
if (object.noises instanceof Array && object.noises.length > 0){
    return object.noises.join(" ");//returning the array as a string
} else {
    return "there are no noises";//if array isnt found or empy run this 
}

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
if(string.includes(word)){// seeing if a string has a specific word
    
    return true;//if word does exist return true 
}else { 
    return false;// if word does not exist return false 
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
   object.friends.push(name); // pushes a name to the back of the friend array in the object
  
   return object;//returns the object with the new friends name 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
 if(Object.keys(object).length > 0 ){ //looking to see if the array in the object is not empty
    return object.friends.includes(name) ;// checking to see if the friends key has names in it 
 }
 else{
     return false;//if the object is empty return false 
 }
} 

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

 var people = [];//creating a empty array to hold names 
    var result = [];//creating a empty to hold the names of non friends 
    var current = null;// creating a variable with null
    // looping throught the array of names 
    for(let i = 0; i < array.length; i++){
        // checking to see if the name is already in the array of names 
        if(name === array[i].name){
            current = array[i];//if names is already in the array return null
        }else{
            people.push(array[i].name);//if names isnt in the array push that name to the array
        }
    
    }
//now looping through the people array
    for(let i = 0; i < people.length; i++){
        //checking to see if a person has no friend in the array
        if(current.friends.indexOf(people[i]) == -1){
            result.push(people[i]); 
        }
    }

    return result;//return the result array with people who are not friends with someone 
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value;
// changes the key and value in the object or adds one if its not there 
return object;
//return new object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//looping through the array to get its values 
for(let i = 0; i < array.length; i++){
    
    if(object.hasOwnProperty(array[i])){//seeing if the array corresponds with the objects key
        
        delete object[array[i]];
        //deleting the key from the object 
    }
}

    
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
 let uniqueArray = [...new Set(array)];//removes the duplicates from the array 
 return uniqueArray; //return the array with no duplicates
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}