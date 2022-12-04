// This file shows how to destructure an array and an object.
// Destructuring => extracting elements out of a defined array


// destructuring an array
let simpleArray = [1,2, ,4] // space between two commas represents undefined element

let [element1, element2, element3, element4] = simpleArray

console.log(element1)
console.log(element2)
console.log(element3)
console.log(element4)

// destructuring an object
let simpleObject = {
    key1 : 'val1',
    key2 : 'val2',
    key3 : 'val3',
    nestedObj : {
        nestedKey1 : 'nestedVal1',
        nestedKey2 : 'nestedVal2'
    }
}

// The names of the keys should be exact
// The aliases a,b,c are optional
let {key1:a, key2:b, key3:c, nestedObj:{nestedKey1: n1, nestedKey2:n2}} = simpleObject

console.log(a)
console.log(b)
console.log(c)
console.log(n1)
console.log(n2)