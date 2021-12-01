'use strict';

function user() {
let intro = prompt('Please enter your name:')
// console.log('Ok welcome ' + name);
alert('Thanks for visiting the site ' + intro);
document.write('Welcome: ' + intro);
}

function questions() {
// askQuestion 1
alert('For these Questions please answer y or n')
let userAnswer1 = prompt('Am I from the west coast?')
// console.log('It worked')

if (userAnswer1 == 'y'){
  // console.log('Wow you actually read it!');
  alert('Correct, I am from the west coast!')
}else if(userAnswer1 == "n"){
  // console.log();
  alert('Wrong, I actually am from the west coast')
}

// askQuestions 2
let userAnswer2 = prompt('Did I go to college?')
// console.log('I did go to college');

if(userAnswer2 == "y"){
  // console.log('Ok I did go to college')
  alert('Correct, I did go to college')
}else if(userAnswer2 == "n"){
  // console.log('It worked')
  alert('Wrong, I actually did go to college')
}

//askQuestions 3
let userAnswer3 = prompt('Did I join the military')
// console.log('It worked');
if(userAnswer3 == "y"){
  // console.log()
  alert('Correct, I did join the military')
} else if( userAnswer3 == "n"){
  alert('Wrong, I did join the military')
}

//askQuestions 4
let userAnswer4 = prompt('Is blue my favorite color?')
// console.log('It worked');
if(userAnswer4 == "y"){
  // console.log()
  alert('Wrong, its Sky blue')
}else if(userAnswer4 == "n"){
  // console.log();
  alert('Correct, its Sky Blue..')
}

// askQuestions 5
let userAnswer5 = prompt('Do I like the dish chicken Tikka Masala?')
// console.log();
if(userAnswer5 == "y"){
  // console.log();
  alert('Correct, That is one of my favorite dishes!')
}else if(userAnswer5 == "n"){
  // console.log();
  alert('Wrong, it actually is one of my favorite dishes.')
}

}

function guessingGame(){
  let userAnswer = prompt('Please Enter a Number 1-10');
  let correctAnswer = 7;
  let attemps = 4;


  for(let i = 1; i < attemps; i++){
      while(userAnswer < 1 || userAnswer > 10){
          userAnswer = prompt('Try Again! A number 1-10');

      }
      if(userAnswer == correctAnswer){
          alert('CORRECT! You got the right answer');
          break;
      }else if (userAnswer > correctAnswer){
          userAnswer = prompt('The number is TOO HIGH please try again');

      }else if (userAnswer < correctAnswer){
          userAnswer = prompt('The numer is TOO LOW please try again');
      
      }
    
      if(i == 3){
          alert('The correct answer was ' + correctAnswer);

      }
  }        
}
 
