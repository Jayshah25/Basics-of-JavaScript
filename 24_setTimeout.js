// setTimeout will make async code (provided callback function) wait for specified time

console.log('First Line!')

function greet(){

    console.log('Greetings from setTimeout')

}

setTimeout(greet, 5000) // 5000 milli seconds

console.log('Last Line!')