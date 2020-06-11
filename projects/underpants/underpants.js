// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
  //if the value is a array print array
     if (Array.isArray(value)){
       return "array";
   }
  //if the value is stricktly equal to null return null
   else if (value === null){
       return "null";
   }
   //if the valuse is strictly equal to undefined return undefined
   else if (value === undefined){
       return "undefined";
   } 
   //if value is equal to a number return number
   else if (typeof value === "number"){
       return "number";
   } 
   //if value is false or true return a boolean
   else if (value === false || value === true){
       return "boolean";
   }
   //if the value thats passed is a functuion return function 
    else if (value instanceof Function){
       return "function";
    }
    // if value is a object return object
    else if ( typeof value === "object"){
       return "object"; 
        
    }
     // if nothing else passes return string
     else { 
           return "string";
      }
      
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
    // if the array value is not a array then return a empty array 
    if(!Array.isArray(array)){
        return [];
    }
   //if number is left null or number isnt a number return the first index in the array
    else if(number === null || !number){
        return array[0];
    }
   // if the number is greater than the array return the whole array to that given number
    else {
     return array.splice(0, number);
    }
   
    
   

};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    // if the array value is not a array then return a empty array 
    if(!Array.isArray(array)){
        return [];
    }
   //if number is left null or number isnt a number return the last index
    else if(!number){
        return array[array.length -1];
    }
   // if the number is greater than the array return the whole array 
   else if((number > array.length)){
       return array;
   }
    //
    else {
      return array.slice(array.length - number, number + 1 );
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    //looping over a arrays length
    for(var i = 0 ; i < array.length;i++){
        //if value thats passed through increment i 
        if(array[i] === value){
            return i;
        }
    }
    return -1; // if value is not in array return this 
};
  

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array ,value){
return (array.includes(value) ? true : false);
};
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function (collection, action) {
   // conditional to see if the collection is a array
    if(Array.isArray(collection)) {
        //looping over the collection
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection); //getting the arrays element index and the whole array
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);//getting the object value key and the whole object
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
   //creating a array litteral to store the numbers without ther duplicates
    var newArr = [];
 //looping over the array 
  for(var i = 0; i < array.length; i++){
    //using index of to see if the new array already has a index of a number and if not it adds it to the array
    if(_.indexOf(newArr,array[i]) === - 1){
        newArr.push(array[i]);//pushing the indexes that are not inside the array already
    }
}
    return newArr;//returning new array
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array,action){
//creating a array to hold the each function values
 var filtered = [];
 //calls the each array that loops through a array allowing us to manipulate strings
 _.each(array,function(e, i, a) {
     //check if action returns true
     if(action(e, i, a)){
         filtered.push(e);//pushes the element into the array
     }
    
 });
 return filtered;//return filtered array
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
    
    //set up container for failed values
    const failed = [];
    
    //loop through array 
    for(var i = 0; i < array.length; i++){
        
        //if the filter does not include the value at the specific index
        if(!(_.filter(array, func).includes(array[i]))){
            
            //push the new values into the new array 
            failed.push(array[i]);
            
        }
        
    }
    
    return failed; //return the array 
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array,action){
   const arr = [];//making a array to hold sub arrays
   arr[0] = _.filter(array,action);//calling the filter function to then add the truthy values to the first index of the array
   arr[1] = _.reject(array,action);//calling the reject function to the add the falsy value to the second index of the array
   return arr;//return the array with the first index containg a array with truthy values and second index contaning falsy value 
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection,action){
    var newArr = [];//creating a array to hold values of the function
     //each checks if the function its passes contain a array or object 
     _.each(collection, function(e, i, a){
         newArr.push(action(e, i, a));//if its one or the other it pushes that collection with its element index and the collection
         
     });

     return newArr;//returns the collection into the array
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arr, prop){
    //array litteral contaning values of property on the array
    var plucked = [];
    //calling the map function with the pramaters of a array and a function
    _.map(arr,function(e, i, a){
        plucked.push(e[prop]);//pushing the value of e to the array
    });
    return plucked;//return the array
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection,func){
   var results = [];
   //array to hold a collection
        if(!func){//if a function is not provided
            //looping over the collection 
            for(let i = 0; i < collection.length; i++){
                if(collection[i]){//if the return value is true 
                    return true;//return true
                } else {
                    return false;//return false 
                }
            }
        }
       //calling th each function if function is provided
        _.each(collection, function(e,i,c){
            results.push(func(e,i,c));//pushing the collection with its values to the array
        });
        if (results.includes(false)){//if the resutls array includes false 
            return false;//return false 
        } else {
            return true;//retunrn fasle 
        }
};
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
 
 _.some = function(collection,fun){
 var results = [];//array to hold a collection
    if(!fun)//if function is not provided
   //loop over the collection array
   for(var i = 0; i < collection.length; i++) {
        if(collection[i]){//if the return value is true 
            return true; //retunr true 
        }
        else{
            return false;//return false 
        }
    } 
   //calling the each function if function is provided 
    _.each(collection, function(e,i,c){
            results.push(fun(e,i,c));//pushing the collecting to the array
        });
        if (results.includes(true)){//if results array has true 
            return true;//return true
        } else {
            return false;//else return false 
        }
 };

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
 var seedIs = arguments.length < 3;//returns true or false if the argument has less than 3
  _.each(array, function(elem, index, list){
    if(seedIs) {//if seedIs true
      seedIs = false;//if seed is false
      seed = elem; //sets seed to element
    } else seed = func(seed, elem, index, list);//passes seed at its first elemnt
  });
  return seed;//returns seed 
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(){
var args = arguments; //makes the argument function a value
    //using the for loop to see how many arguments there are 
    for(let i = 1; i < arguments.length; i++){
        //looping over each object and get the key
        for(var key in args[i]){
           //adding each objects key to the first object 
            args[0][key] = args[i][key];
        }
    }
    return args[0]; //retrning the first object
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
