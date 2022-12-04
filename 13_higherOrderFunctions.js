// This file explains the use of following inbuilt higher order functions of JavaScript:
// map(), forEach(), filter(), reduce(), find(), findIndex(), some(), every(), 


let simpleArray = [100, 300, -50, 500, 600, -300]

// map function
// It takes a function as an argument and maps each element of the given array
// based on the provided callback function and returns an array.
let squareNum = n => {
    return n**2
}
let squaredArray = simpleArray.map(squareNum)

console.log('This demonstrates the use of map function: ')
console.log(squaredArray)

// forEach function
// It's the same as map function except for it does not return array
let cubeNum = n => {
    console.log(n**3)
}
console.log('This demonstrates the use of forEach function: ')
simpleArray.map(cubeNum)

// filter function
// filters the array based on the provided callback function and returns array
let isPositive = n => {
    return n > 0
}
let positiveArray = simpleArray.filter(isPositive)
console.log('This demonstrates the use of filter function: ')
console.log(positiveArray)

// reduce function
// It reduces the given array values to one based on the logic of the callback function.
// The callback function has two params -> accumulator and value
let arraySum = (accumulator,n) => {
    return accumulator + n
}
let sum = simpleArray.reduce(arraySum, 0) // 0 is the initial value of accumulator
console.log('This demonstrates the use of reduce function: ')
console.log(sum)

// some function
// returns true even if one of the array value satisfies the logic of callback function
// We shall use the isPositive function to demonstrate this
let resultSome = simpleArray.some(isPositive)
console.log('This demonstrates the use of some function: ')
console.log(resultSome)

// every function
// returns true even if all of the array values satisfies the logic of callback function
// We shall use the isPositive function to demonstrate this
let resultEvery = simpleArray.every(isPositive)
console.log('This demonstrates the use of every function: ')
console.log(resultEvery)

// find function
// returns the first value that satisfies the logic of the callback function
// We shall use the isPositive function to demonstrate this
let resultFind = simpleArray.find(isPositive)
console.log('This demonstrates the use of find function: ')
console.log(resultFind)

// find function
// returns the index of the first value that satisfies the logic of the callback function
// We shall use the isPositive function to demonstrate this
let resultFindIndex = simpleArray.findIndex(isPositive)
console.log('This demonstrates the use of findIndex function: ')
console.log(resultFindIndex)