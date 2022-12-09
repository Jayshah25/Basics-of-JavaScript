// The file demonstartes the concept of classes and inheritance (attributes and methods) in JS.

class Indian {

    constructor(_name, _age){
        this.name = _name
        this.age = _age
        this.citizenship = 'Indian'
    }

    citizen(){
        console.log(`${this.name}, you are Indian!`)
    }
}

class Hindu extends Indian {
    constructor(_name, _age){ 
        super(_name,_age)      // demonstrates attribute inheritance
        this.religion = 'Hinduism'
    }

    hinduReligion(){
        super.citizen() // demonstrates method inheritance
        console.log(`${this.name}, you are a hindu!`)
    }
}

class Muslim extends Indian {
    constructor(_name, _age){
        super(_name,_age)  // demonstrates attribute inheritance
        this.religion = 'Islam'
    }

    islamReligion(){
        super.citizen() // demonstrates method inheritance
        console.log(`${this.name}, you are a muslim!`)
    }
}

hinduPerson = new Hindu('Jay',22)

muslimPerson = new Muslim('Fahim', 22)

console.log(hinduPerson)
console.log(muslimPerson)
hinduPerson.hinduReligion()
muslimPerson.islamReligion()