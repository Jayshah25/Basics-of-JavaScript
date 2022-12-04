// The file explains the use of callback functions.
// A function that is passed as an argument to another function is called call back function

// In the example below, the functions firstName and lastName are call functions
// The function fullName is an example of Higher Order Functions.

let firstName = (firstName)=> console.log(firstName)

let lastName = (lastName) => console.log(lastName)

let fullName = function(firstName,lastName){
    firstName('Jay')
    lastName('Shah')
}

fullName(firstName, lastName)