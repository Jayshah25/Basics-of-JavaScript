// The file explains the concept of `for in` and `for of` loop.
// It explains the use of for loop with string, array and object.
// It demonstrates the use of `entries` array method with for loop.


// A simple casual use of for loop.
console.log('Use of simple for loop!')
for(var i=1; i<=10; i++){
    console.log(i)
}

// Use of for in loop with array
// Printing indices and the corresponding elements
console.log('Use of `for in` loop with array.')
var simpleArray = ['Element 1','Element 2','Element 3','Element 4']
for(var i in simpleArray){
    console.log('Index '+i+' -> '+simpleArray[i])
}

// Use of for of loop with array 
// Direct Access of elements
console.log('Use of `for of` loop with array.')
var simpleArray = ['Element 1','Element 2','Element 3','Element 4']
for(var i of simpleArray){
    console.log(i)
}
// Accessing index and elements using entries method
console.log('See the magic of entries method below!')
for(var [index,element] of simpleArray.entries()){
    console.log(index+' -> '+element)
}

// Use of for loop with object
var simpleObject = {
    key1 : 'Value1',
    key2 : 'Value2',
    key3 : 'Value3'
}
// access key and value pair using for in loop
console.log('Use of for loop with object')
for(var i in simpleObject){
    console.log(i+' -> '+simpleObject[i])
}


// Use of for loop with string
// String is just an array of characters. Therefore, the behaviour of `for in` and `for of` loops is with strings is the same as that with Array.

var simpleString = 'JavaScript'
console.log('Use of for loop with string!')
for(var character of simpleString){
    console.log(character)
}