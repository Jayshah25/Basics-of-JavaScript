// The file describes the concept of Arrays in JavaScript.

// The var keyword is used to define an array.
// Array can store multiple values of dissimilar data type.
// Indexing starts from zero.
// Array is also a JavaScript Object.
// You can think of JavaScript Arrays as Python Lists.

// define array
var simpleArray = [1, 2.5, 'Three', true]
console.log('This is the original Array: ',simpleArray)

// accessing array values with indexing
var firstElement = simpleArray[0]
console.log('This is the first element: ',firstElement)

// modifying the array
simpleArray[0] = 'One'
console.log('The First element is modified: ',simpleArray)

// length property of array
console.log('This is the length of the Array: ', simpleArray.length)

// pop method to delete the last element. It also returns the last element.
var lastElement = simpleArray.pop()
console.log('This is the last element: ',lastElement)
console.log('This is the Array after using pop: ',simpleArray)

// push method to append an element at the end
simpleArray.push(-1)
console.log('The value -1 is appended to array using push method: ',simpleArray)

// The first element is removed using Shift method
simpleArray.shift()
console.log('The first element is removed using shift method: ',simpleArray)

// appending a value at the beginning of an array using unshift method
simpleArray.unshift(0)
console.log('The value 0 is attached at beginning of array using unshift method: ',simpleArray)