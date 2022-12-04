// This file demonstrates the use of arrow functions

let greet = () => console.log('Greetings')  // function with no arguments

let printNum = (a) => console.log(a) // function with one argument

let addNum = (a, b) => {             // function with two argument
                                    // braces can be used in the previous two functions as well       
    console.log(a+b)
}

greet()

printNum(4)

addNum(2,4)