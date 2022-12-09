// This file demonstrates the concept of Encapsulation with constructor and class in JS.

// Encapsulation with Constructor
function constructUser(_email, _password){
        let email = _email
        let password = _password


    this.getCredentials= function(){
        return [email, password]
    }
}

let user1 = new constructUser('javascript@es6','password')

console.log(user1.getCredentials())

// Encapsulation with Class
class classUser {

    constructor(_email, _password){
        let email = _email
        let password = _password

        this.getEmail = () => email
        this.getPassword = () => password
        }

    getCredentials(){
        let returnEmail = this.getEmail()
        let returnPassword = this.getPassword()
        return [returnEmail, returnPassword]
    }
}

let user2 = new classUser('javascript@es6','password')

console.log(user2.getCredentials())
