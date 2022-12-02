// This file shows the use of simple conditional statements in JavaScript along with logical `and`

var score = 40

if (score >= 90){
    console.log('Congratulations! Your Grade is A+')
}
else if(score<90 && score>=75){
    console.log('Congratulations! Your Garde is A')
}
else if(score<75 && score>=60){
    console.log('Great! Your Grade is B')
}
else if(score< 60 && score>=40){
    console.log('You managed to pass!')
}
else{
    console.log('Unfortunately you failed!')
}
