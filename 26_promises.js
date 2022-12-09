// This file demonstrates promises

let simplePromise = new Promise(function(resolve,reject){
    const a = 4
    const b = 4
    if(a===b){
        resolve('Numbers are equal!')
    }
    else{
        reject('Numbers are not equal!')
    }
})

console.log(simplePromise)


simplePromise.then(function(result){
    console.log('\n')
    console.log('This comes from then')
    console.log(result)
})

simplePromise.catch(function(result){
    console.log('\n')
    console.log('This comes from catch')
    console.log(result)
})
