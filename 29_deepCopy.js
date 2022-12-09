// This file demonstrates deep copy 


let simpleObject1 = {
    name : 'Jay',
    age : 22,
    address : {
        country : 'India'
    }
}

let simpleObject2 = JSON.parse(JSON.stringify(simpleObject1)) 

simpleObject2.address.country = 'Australia'

console.log(simpleObject1)
console.log(simpleObject2)