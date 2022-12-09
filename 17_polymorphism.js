// The file demonstartes the concept of polymorphism

class Indian {

    religion(){ // method name same as the other class methods
        console.log(`You can choose any religion!`)
    }
}

class Hindu{

    religion(){ // method name same as the other class methods
        console.log(`You chose Hinduism!`)
    }
}

class Muslim{

    religion(){ // method name same as the other class methods
        console.log('You chose Islam!')
    }
}

indian = new Indian()

hinduPerson = new Hindu()

muslimPerson = new Muslim()

// same method name with different outputs
indian.religion()
hinduPerson.religion()
muslimPerson.religion()