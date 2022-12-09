// This file demonstrates serial execution of async JS [callbacks]

const fs = require('fs')

console.log('This is serial execution of Async JS: ')


callBack3 = function(err, data){
    if(err){
        console.log(err) // If there's any error in reading file, we print it
    }
    else{
        console.log('File 3 data -> '+data) // else we print data of the file
    }

    fs.readFile('file4.txt', callBack4)
}

callBack4 = function(err, data){
    if(err){
        console.log(err) // If there's any error in reading file, we print it
    }
    else{
        console.log('File 4 data -> '+data) // else we print data of the file
    }
}

console.log('This is first line!')

fs.readFile('file3.txt', callBack3)

console.log('This is last line!')
