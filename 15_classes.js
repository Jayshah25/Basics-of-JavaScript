// This demonstrates the use of classes is JS.
// This was introduced in JS to make it familiar to the people working with C++, Java, etc.

class Employee {

    constructor(_name, _age, _salary){
        this.name = _name

        this.age = _age

        this.salary = _salary

    }

    // method inside class
    thankYou(){
        console.log(this.name+', thank you for joining us!')
}
}

let employee1 = new Employee('Jay', 22, 25000)

console.log(employee1)

employee1.thankYou()