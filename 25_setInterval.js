// setInterval will keep running async code (provided callback function) after every specified time interval.

console.log('First Line!')

function greet(){

    console.log('Greetings from setInterval')

}

let timer = setInterval(greet, 1000) // 1000 milli seconds

// how to stop setInterval?
setTimeout(function(){
    clearInterval(timer)
}, 5000) // stop setInterval after 5000 milli seconds

console.log('Last Line!')