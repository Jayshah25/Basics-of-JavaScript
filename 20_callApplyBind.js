// This file demonstrates call, apply and bind methods.

simpleObj1 = {
    key1 : 'val1',
    key2 : 'val2',

    printDetails : function(){
        console.log(`Vals -> ${this.key1} ${this.key2}`)
    } 
}

simpleObj2 = {
    key1 : 'val3',
    key2 : 'val4',

}

// call method using an object's method
simpleObj1.printDetails.call(simpleObj2)


let printParams = function(param1, param2){
    console.log(`${param1} ${param2}`)
}
// call method using global method
printParams.call(simpleObj2,'param1','param2')



// apply method
// If any inputs, apply method requires that you pass it as an array.
simpleObj1.printDetails.apply(simpleObj2)
printParams.apply(simpleObj2,['param1','param2'])

// Bind Method
// It helps to bind a function and an object and store the function in a variable.
let bind1 = printParams.bind(simpleObj2,'param1','param2')
console.log('Bind Output:')
bind1()