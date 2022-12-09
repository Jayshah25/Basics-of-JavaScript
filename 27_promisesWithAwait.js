// This file demonstrates promises using async and await keywords.
function equalNumbers(){
return new Promise(function(resolve,reject){
    const a = 4
    const b = 4
    if(a===b){
        resolve('Numbers are equal!')
    }
    else{
        reject('Numbers are not equal!')
    }
})
}

function evenNumbers(){
    return new Promise(function(resolve,reject){
        const a = 4
        const b = 4
        if(a%2===0 && b%2==0){
            resolve('Numbers are even!')
        }
        else{
            reject('Numbers are not even!')
        }
    })
    }

async function checkPromises(){
    try {
        let isEqual = await equalNumbers()
        console.log(isEqual)
        let isEven = await evenNumbers() //await waits while promise function is completed
        console.log(isEven)
    } catch (error) {
        console.log(error)
    }
}

checkPromises()