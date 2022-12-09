// This file demonstartes the method of storing a custom function into special constructor prototype object.

function constructUser(_email, _password){
    this.email = _email
    this.password = _password

}

// storing method in constructor prototype
constructUser.prototype.getCredentials = function(){
    return [this.email, this.password]
}

let user1 = new constructUser('javascript@es6','password')

console.log(user1.getCredentials())