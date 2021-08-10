//asks player 1 to enter their name
let player1 = prompt('Player 1: Enter your name:');

//if nothing is entered they will be asked a second time to input their name
if(player1 == ''){
  console.log('That is an invalid input');
  player1 =  prompt('Player 1: Enter your name:');
}

//asks player 2 to enter their name
let player2  = prompt('Player 2: Enter your name:');

//if nothing is entered they will be asked a second time to input their name
if(player2 == ''){
  console.log('That is an invalid input');
  player2 = prompt('Player 2: Enter your name:');
}

//welcomes the users to the game
console.log('Welcome ' + player1 + ' and ' + player2 + ' to the Card Game!');

let livesP1 = 0;
let livesP2 = 0;
let round = 0;
let pointP1 = 0;
let pointP2 = 0;
let card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];




//asks the users how many lives they would like to play with
let lives = prompt('How many lives should each player have?')
//boundaries for their input
while((isNaN(lives))||(lives < 1)||(lives > 5)||(lives == null)||(lives == ' ')||(lives % 1 != 0)){
  // if the user inputs out of the bounrdries they will be asked again
  console.log('That is not a valid number. Please enter a number from 1-5');
  lives = prompt('How many lives should each player have?');
}



//asks the user how many rounds they want to play
let playerRound = prompt('How many rounds would you like to play?');

//the boundaries for their input
while((isNaN(playerRound))||(playerRound < 1)||(playerRound > 10)||(playerRound == null)||(playerRound==' ')||(playerRound % 1 != 0)){
  //asks the user to enter a number again incase of an invalid number
  console.log('That is not a valid number. Please enter a number from 1-10');
  playerRound = prompt('How many rounds would you like to play?');
}




do{
numberP1 = Math.floor(Math.random() * card.length + 0);
randomP1 = card[numberP1];
numberP2 = Math.floor(Math.random() * card.length + 0);
randomP2 = card[numberP2];

console.log('The starting card is ' + randomP1 + '!');


let swap = prompt('Would you like to swap the card? Remember you only get the chance to swap 3 cards');


while(swap != 'yes' && swap != 'no'){
  console.log('That is an invalid input please enter yes or no');
  swap = prompt('Would you like to swap the card?');
}


if (swap == 'yes'){
numberP1 = Math.floor(Math.random() * card.length + 0);
randomP1 = card[numberP1];
  console.log('Ok your new card is ' + randomP1);
}


let guessP1 = prompt(player1 + ' do you think the next card is higher or lower?');
while (guessP1 != 'higher' && guessP1 != 'lower') {
  console.log('That is an invalid guess please enter higher or lower');
  guessP1 = prompt(player1 + ' do you think the next card is higher or lower than the previous card?')
}


let guessP2 = prompt(player2 + ' do you think the next card is higher or lower?');
while (guessP2 != 'higher' && guessP2 != 'lower') {
  console.log('That is an invalid guess please enter higher or lower');
  guessP2 = prompt(player2 + ' do you think the next card is higher or lower than the previous card?');
}

console.log('The next card is ' + randomP2 + '!');


if(numberP2 > numberP1){
  console.log('The new card was higher!');
if (guessP1 == 'higher'){
  console.log(player1 + ' was correct!');
  pointP1++
  }else if(guess == 'lower'){
  console.log(player1 + ' was incorrect!');
  livesP1++
  }
}else if(numberP1 > numberP2){
  console.log('The new card was higher!');
if (guessP2 == 'higher'){
  console.log(player2 + ' was correct!');
  pointP2++
  }else if(guess == 'lower'){
  console.log(player2 + ' was incorrect!');
  livesP2++
  }
}else if(numberP1 < numberP2){
  console.log('The new card was lower!');
if (guessP1 == 'lower'){
  console.log(player1 + ' was correct!');
  pointP1++
  }else if(guessP1 == 'higher'){
  console.log(player1 + ' was incorrect!');
  livesP1++
  }
}else if(numberP2 < numberP1){
  console.log('The new card was lower!');
if (guessP2 == 'lower'){
  console.log(player2 + ' was correct!');
  pointP2++
  }else if(guess == 'higher'){
  console.log(player2 + ' was incorrect!');
  livesP2++
  }
}else{
  console.log('The card was the same! No one gets a point');
}


if (livesP1 == lives){
  console.log(player1 + ' ran out of lives')
}else if (livesP2 == lives){
  console.log(player2 + ' ran out of lives')
}

round++
}while(round < playerRound)


console.log(player1 + ' has ' + pointP1 + ' points!');
console.log(player2 + ' has ' + pointP2 + ' points!');