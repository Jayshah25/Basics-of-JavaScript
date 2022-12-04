// This file defines a bunch of functions that can are used directly in the main file.
// This demonstartes the use of modularity

function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    return a-b
}

let mul = (a,b) => {
    return a*b
}

let div = function(a,b){
    return a/b
}

module.exports = {
    addition: add,
    subtraction: sub,
    multiplication: mul,
    division: div
}