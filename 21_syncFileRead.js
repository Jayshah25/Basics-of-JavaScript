const fs = require('fs')

console.log('This is first line')

let fileData = fs.readFileSync('file1.txt')
console.log('File Data -> '+fileData)

console.log('This is last line!')