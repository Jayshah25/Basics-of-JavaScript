// This file demonstrates shallow copy using spread operator

let simpleObject1 = {
    name : 'Jay',
    age : 22
}

let simpleObject2 = {...simpleObject1} // ... -> Spread Operator

simpleObject2.name = 'Adam'

console.log(simpleObject1)
console.log(simpleObject2)