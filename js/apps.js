'use strict';

let intro = prompt('Please enter your name:');
// console.log('Ok welcome ' + name);
alert('Thanks for visiting the site ' + intro);

alert('For these Questions please answer y or n');


// Question 1
let userAnswer1 = prompt('Am I from the west coast?').toLowerCase();
// console.log('It worked')

if (userAnswer1 === 'y' || userAnswer1 === 'yes'){
  // console.log('Wow you actually read it!');
  alert('Correct, I am from the west coast!');
}else if(userAnswer1 === 'n' || userAnswer1 === 'no'){
  // console.log();
  alert('Wrong, I actually am from the west coast');
}

// askQuestions 2
let userAnswer2 = prompt('Did I go to college?').toLowerCase();
// console.log('I did go to college');

if(userAnswer2 === 'y' || userAnswer2 ==='yes'){
  // console.log('Ok I did go to college')
  alert('Correct, I did go to college');
}else if(userAnswer2 === 'n' || userAnswer2 === 'no'){
  // console.log('It worked')
  alert('Wrong, I actually did go to college');
}

//askQuestions 3
let userAnswer3 = prompt('Did I join the military').toLowerCase();
// console.log('It worked');
if(userAnswer3 === 'y' || userAnswer3 === 'yes'){
  // console.log()
  alert('Correct, I did join the military');
} else if( userAnswer3 === 'n' || userAnswer3 === 'no'){
  alert('Wrong, I did join the military');
}

//askQuestions 4
let userAnswer4 = prompt('Is blue my favorite color?').toLowerCase();
// console.log('It worked');
if(userAnswer4 === 'y' || userAnswer4 ==='yes'){
  // console.log()
  alert('Wrong, its Sky blue');
}else if(userAnswer4 === 'n' || userAnswer4 ==='no'){
  // console.log();
  alert('Correct, its Sky Blue..');
}

// askQuestions 5
let userAnswer5 = prompt('Do I like the dish chicken Tikka Masala?').toLowerCase();
// console.log();
if(userAnswer5 === 'y' || userAnswer5 === 'yes'){
  // console.log();
  alert('Correct, That is one of my favorite dishes!');
}else if(userAnswer5 === 'n' || userAnswer5 === 'no'){
  // console.log();
  alert('Wrong, it actually is one of my favorite dishes.');
}

// Number Guessing Game
let numberQuestion = prompt('Welcome to my guessing game. Guess a number from 1-10');
let correctAnswer = 4;
let tries = 4;

for(let i = 1; i < tries; i++){
  if( numberQuestion === correctAnswer){
    alert('CONGRATS THATS CORRECT');
    break;
  }
  else if( numberQuestion > correctAnswer){
    numberQuestion = prompt('Too High Please Try Again');
  }
  else if (numberQuestion < correctAnswer){
    numberQuestion= prompt('Too Low Please Try Again');
  }
  if (i === tries-1){
    alert('You have reached the ammount of tries the correct answer was ' + correctAnswer);
  }
}
let colorArray = ['blue', 'sky blue', 'pink', 'purple', 'black', 'green'];
let colorGame = prompt('What is my favorite color');
let triess = 6;
let answerCorrectly = false;

// for( let i = 0; i < triess; i++)
while(!answerCorrectly){
  if( colorArray[1]== colorGame){
    alert('Congrats that was correct!');
    break; }
  else if(colorGame !== colorArray[1]){
    colorGame = prompt('Incorrect, try again you have 5 more attempts');}
}

