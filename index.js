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

// let livesP1 = 0;
// let livesP2 = 0;
let pointP1 = 0;
let pointP2 = 0;
let random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let length = random.length

// //asks the users how many lives they would like to play with
// let lives = prompt('How many lives should each player have?')
// //boundaries for their input
// while((isNaN(lives))||(lives < 1)||(lives > 5)||(lives == null)||(lives == ' ')||(lives % 1 != 0)){
//   // if the user inputs out of the bounrdries they will be asked again
//   console.log('That is not a valid number. Please enter a number from 1-5');
//   lives = prompt('How many lives should each player have?');
// }
do{
let cardP1 = Math.floor(Math.random() * length + 1);
let numberP1 = (random[cardP1]);
let cardP2 = Math.floor(Math.random() * length + 1);
let numberP2 = (random[cardP2]);

let drawP1 = prompt(player + ' would you like to draw a card?');
console.log(player1 ' your card is ' + cardP1 + '!');
console.log(player2 ' your card is ' + cardP2 + '!');
}