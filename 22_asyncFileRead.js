// This file demonstrates async execution of JS

const fs = require('fs')


console.log('This is first line!')

callBack = function(err, data){
    if(err){
        console.log(err) // If there's any error in reading file, we print it
    }
    else{
        console.log('File 1 data -> '+data) // else we print data of the file
    }
}

callBack2 = function(err, data){
    if(err){
        console.log(err) // If there's any error in reading file, we print it
    }
    else{
        console.log('File 2 data -> '+data) // else we print data of the file
    }
}


fs.readFile('file1.txt', callBack)
fs.readFile('file2.txt', callBack2)


console.log('This is last line!')

console.log('\n')
