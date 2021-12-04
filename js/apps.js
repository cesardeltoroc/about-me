'use strict';
function userName(){

  let intro = prompt('Please enter your name:');
  alert('Thanks for visiting the site ' + intro);
  alert('For these Questions please answer y or n'); 
}
userName();

let correctNumber = 0;
// Question 1
function questionOne() {

  let userAnswer1 = prompt('Am I from the west coast?').toLowerCase();
  if (userAnswer1 === 'y' || userAnswer1 === 'yes'){
    alert('Correct, I am from the west coast!');
    correctNumber++ ;
  }else if(userAnswer1 === 'n' || userAnswer1 === 'no'){

    alert('Wrong, I actually am from the west coast');
  }
}
questionOne();

// askQuestions 2
function questionTwo(){
  let userAnswer2 = prompt('Did I go to college?').toLowerCase();
  if(userAnswer2 === 'y' || userAnswer2 ==='yes'){
    alert('Correct, I did go to college');
    correctNumber++ ;
  }else if(userAnswer2 === 'n' || userAnswer2 === 'no'){
    alert('Wrong, I actually did go to college');
  }
}
questionTwo();

//askQuestions 3
function questionThree(){

  let userAnswer3 = prompt('Did I join the military').toLowerCase();
  if(userAnswer3 === 'y' || userAnswer3 === 'yes'){
    alert('Correct, I did join the military');
    correctNumber++ ;
  } else if( userAnswer3 === 'n' || userAnswer3 === 'no'){
    alert('Wrong, I did join the military');
  }
}
questionThree();

//askQuestions 4
function questionFour(){
  let userAnswer4 = prompt('Is blue my favorite color?').toLowerCase();
  if(userAnswer4 === 'y' || userAnswer4 ==='yes'){
    alert('Wrong, its Sky blue');
  }else if(userAnswer4 === 'n' || userAnswer4 ==='no'){

    alert('Correct, its Sky Blue..');
    correctNumber++ ;
  }
}
questionFour();

// askQuestions 5
function questionFive(){
  let userAnswer5 = prompt('Do I like the dish chicken Tikka Masala?').toLowerCase();
  if(userAnswer5 === 'y' || userAnswer5 === 'yes'){
    alert('Correct, That is one of my favorite dishes!');
    correctNumber++ ;
  }else if(userAnswer5 === 'n' || userAnswer5 === 'no'){
    alert('Wrong, it actually is one of my favorite dishes.');
  }
}
questionFive();

// Number Guessing Game
function questionSix(){

  let numberQuestion = prompt('Welcome to my guessing game. Guess a number from 1-10');
  let correctAnswer = 4;
  let tries = 4;
  
  for(let i = 0; i < tries; i++){
    // eslint-disable-next-line eqeqeq
    if( numberQuestion == correctAnswer){
      alert('CONGRATS THATS CORRECT');
      correctNumber++ ;
      break;
    }
    else if( numberQuestion > correctAnswer){
      numberQuestion = prompt('Too High Please Try Again');
    }
    else if (numberQuestion < correctAnswer){
      numberQuestion= prompt('Too Low Please Try Again');
    }
    if (i === 3){
      alert('You have reached the ammount of tries the correct answer was ' + correctAnswer);
    }
  }
}
questionSix();

//Question Seven
function questionSeven(){

  let colorArray = ['flour', 'sugar', 'baking soda', 'extract', 'pan', 'mixer'];
  let colorGame = prompt('What are some items needed to bake');
  let triess = 6;
  
  for( let i = 0; i < triess; i++){
    if(colorGame === colorArray[1]){
      alert('Congrats that was the correct Answer');
      correctNumber++ ;
      alert('These were all of the options that were listed inside of the array ' + colorArray);
      break;
    }else if(colorGame !== colorArray[1]){
      colorGame = prompt('Thats not quite right try again');
    }if(i === 5){
      alert(`Attempts are up the correct answer was  ${colorArray[1]}. These were all of the options that were listed inside of the array  ${colorArray} `);
    }
  }
}
questionSeven();

alert('You got ' + correctNumber + ' of my COMPLEX questions correct');

