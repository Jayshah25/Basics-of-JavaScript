// The file explains the use of functions, anonymous functions and hoisting


// declare a function
function simpleFunc(name){
    console.log(name+', this is a call from simpleFunc')
}
simpleFunc('Jay') // invoking a declared function


// declare anonymous function and store in a variable
// This is analogous to anonymous function lambda in python
var simpleVar = function(name){
    console.log(name+', this is a call from simpleVar')
}
simpleVar('Jay')

// Hoisting
// Calling an anonymous function before declaration results in error. However, doing the same with a casual function works perfectly fine. 
// This is the concept of Hoisting in simple words. It is explained in detail in the README file of this repository.
// Try this:
// call simpleVar and simpleFunc before declaration.
// simpleFunc will work fine.
// simpleVar will throw error.