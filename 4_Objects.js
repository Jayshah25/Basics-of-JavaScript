// This file explains the concept of Objects in JavScript
// You can think of it like Python Dictionary.
// It is unordered key-value pair data structure offered by JavaScript.
// Keys are numbers or strings
// Values can be numbers, string, array or function


// declare object
var person = {

    firstName: 'Jay',
    lastName: 'Shah',
    gender: 'Male',
    Age: 22,
    isMarried: false,
    hobbies: ['Writing poems, fiction and non-fiction','working on Quantum Computing and Artificial Inteligence','Cooking'],
    livesIn: {
        country: 'India',
        state: 'Maharashtra',
        city: 'Mumbai'
    }

}

console.log('This is the original created object: ')
console.log(person)

// accessing the values with dot 
console.log('Accessing the using using dot method: ')
console.log('IsMarried: ',person.isMarried)
// accessing the values with brackets
console.log('Accessing the keys using brackets: ')
console.log('IsMarried: ',person['isMarried'])

// modifying the values of object
person.Age = 22.5
person.hobbies.push('Playing Cricket')
console.log('This is the modified array: ')
console.log(person)

// creating an empty object and using it thereafter
var naruto = {}                     // declare empty object
naruto.title = 'Naruto'                    
naruto.genre = 'Anime'              // addition of key-value pair using dot method
naruto.mangaBased = true
naruto['protagonist'] = 'Naruto'    // addition of key-value pair using brackets
naruto['antagonist'] = 'Black Zetsu' 
naruto.isHokage = true              // You can also become the Hokage of your dreams :)

console.log('This is another way of creating object: ')
console.log(naruto)