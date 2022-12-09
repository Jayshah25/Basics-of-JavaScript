// The file demonstrated the use of `this` keyword to create a constructor function

// Constructor can be used as a blue print to create multiple objects that have similarities in common.

function createMarksheet(_studentName, _class, _grade){

    this.studentName = _studentName

    this.class = _class

    this.grade = _grade

    // method inside constructor
    this.slogan = function(){
        console.log(this.studentName+', learning never ends!')
    }
}

let marksheet1 = new createMarksheet('Jay', 'B Tech Final Year', 'A++')

let marksheet2 = new createMarksheet('Atharva', 'MS Final Year', 'A++')

console.log(marksheet1)

console.log(marksheet2)

marksheet2.slogan()