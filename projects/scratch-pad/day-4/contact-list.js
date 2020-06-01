// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
 return {
    // making a key named id and the value the id thats passed through
     id: id,
    //  making a key named first name and the value the first name that is passed through
     nameFirst: nameFirst,
    //  making a key names name last and the value will be assinged to to last name passed through
     nameLast: nameLast
 };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */ 
    // creatung a array to hold the modified contacts
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // creating a function that will add any given contact to the array
        addContact: function(contact){
            contacts.push(contact);
        },
        // creating a function with the parameter fullname
        findContact: function(fullName){
            // splitting the full name of a contact into a array where the first and last name have their own indes
            var nameSplit = fullName.split(" ");
            // using a foor loop to go through each of the contacts in the array 
            for(var i = 0; i < contacts.length;i++){
            // comparing first and last name to see if they are in the contacts list and if not to return undefined  
           if(nameSplit[0].toLowerCase() === contacts[i].nameFirst.toLowerCase() || nameSplit[1] === contacts[i].nameFirst.toLowerCase()){
                return contacts[i];
            } else {
                return undefined;
            }
          }
        },
     removeContact: function(contact){
        // using a for loop to loop through the contacts array   
         for(var i = 0; i < contacts.length;i++){
            //  if the contact that passes through exists it will delete that contact
             if(contact === contacts[i]){
                //  i is the id of the contact and 1 is how many contacts you want to delete
                 contacts.splice(i,1);
             }
         }
        
    },
    printAllContactNames: function(){
        // creating a new string to hold the list of names 
        var string = "";
        // using a for loop to loop through the contacts array
        for(var i = 0; i < contacts.length;i++){
        // adding the full name of the contacts to a array 
          string += contacts[i].nameFirst +" " + contacts[i].nameLast ;
        //  if it is not the last line make a new line
         if(i < contacts.length - 1) {
            string += "\n";
         } 
        }
       
        
    
    return string;
    } 
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
