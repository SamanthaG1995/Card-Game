//asks player 1 to enter their name
let player1 = prompt('Player 1: Enter your name:');

//if nothing is entered they will be asked a second time to input their name
if (player1 == '') {
  console.log('That is an invalid input');
  player1 = prompt('Player 1: Enter your name:');
}



//asks player 2 to enter their name
let player2 = prompt('Player 2: Enter your name:');

//if nothing is entered they will be asked a second time to input their name
if (player2 == '') {
  console.log('That is an invalid input');
  player2 = prompt('Player 2: Enter your name:');
}



//welcomes the users to the game
console.log('Welcome ' + player1 + ' and ' + player2 + ' to the Card Guessing Game!');



//setting each variable with a starting point/number
let swap = 3;
let livesP1 = 0;
let livesP2 = 0;
let round = 0;
let pointP1 = 0;
let pointP2 = 0;
let card = ['an Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'a Jack', 'a Queen', 'a King'];



//asks the users how many lives they would like to play with
let lives = prompt('How many lives should each player have?')

//boundaries for their input
while ((isNaN(lives)) || (lives < 1) || (lives > 10) || (lives == null) || (lives == ' ') || (lives % 1 != 0)) {

  // if the user inputs out of the bounrdries they will be asked again
  console.log('That is not a valid number. Please enter a number from 1-10');
  lives = prompt('How many lives should each player have?');
}



//asks the user how many rounds they want to play
let playerRound = prompt('How many rounds would you like to play?');

//the boundaries for their input
while ((isNaN(playerRound)) || (playerRound < 1) || (playerRound > 10) || (playerRound == null) || (playerRound == ' ') || (playerRound % 1 != 0)) {

  //asks the user to enter a number again incase of an invalid number
  console.log('That is not a valid number. Please enter a number from 1-10');
  playerRound = prompt('How many rounds would you like to play?');
}



//starts a do loop
do {
  //randomises a number
  numberP1 = Math.floor(Math.random() * card.length + 0);
  randomP1 = card[numberP1];
  numberP2 = Math.floor(Math.random() * card.length + 0);
  randomP2 = card[numberP2];
  let swapleft = swap - 1
  //prints the random card
  console.log('The starting card is ' + randomP1 + '!');

if (swap == 0){
let reset = prompt('You have no more swaps left. Would you like to use a point each to reset all 3 swaps? if not the game ends.')

  while (reset != 'yes' && reset != 'no') {
    console.log('That is an invalid input please enter yes or no');
    swaping = prompt('Would you like to use 1 point each to reset all your swaps? If not the game ends (+3 swaps)');
  }
if (reset == 'yes'){
  swap = swap + 3
  swapleft = swapleft + 3
  pointP1--
  pointP2--
}else if (reset == 'no'){
  console.log('Ok, Game Over')
  break;
}
}
  //asks the users if they would like to swap their card
  let swaping = prompt('Would you like to swap the card? Remember you only get the chance to swap 3 cards. You have ' + swap + ' swaps left!');

  //if 'yes' or 'no' is not entered it will keep asking this question
  while (swaping != 'yes' && swaping != 'no') {
    console.log('That is an invalid input please enter yes or no');
    swaping = prompt('Would you like to swap the card?');
  }

  //randomises a random card again if they want to swap the card
  
  if (swaping == 'yes') {
    numberP1 = Math.floor(Math.random() * card.length + 0);
    randomP1 = card[numberP1];
    console.log('Ok, you have ' + swapleft + ' swaps left')
    console.log('Your new card is ' + randomP1);
    swap--

  }

  //asks the player if they think the following card is going to be higher or lower
  let guessP1 = prompt(player1 + ' do you think the next card is higher or lower?');
  //if 'higher' or 'lower' is not entered it will keep showing this message
  while (guessP1 != 'higher' && guessP1 != 'lower') {
    console.log('That is an invalid guess please enter higher or lower');
    guessP1 = prompt(player1 + ' do you think the next card is higher or lower than the previous card?')
  }

  //asks the player if they think the following card is going to be higher or lower
  let guessP2 = prompt(player2 + ' do you think the next card is higher or lower?');
  //if 'higher' or 'lower' is not entered it will keep showing this message
  while (guessP2 != 'higher' && guessP2 != 'lower') {
    console.log('That is an invalid guess please enter higher or lower');
    guessP2 = prompt(player2 + ' do you think the next card is higher or lower than the starting card?');
  }

  console.log('The new card is ' + randomP2 + '!');

  //compares the two cards to see if each player for the correct answer
  if (numberP2 > numberP1) {
    console.log('The new card was higher!');
  }

  if (numberP2 > numberP1) {
    if (guessP1 == 'higher') {
      console.log(player1 + ' was correct!');





      pointP1++
    } else if (guessP1 == 'lower') {
      console.log(player1 + ' was incorrect!');
      livesP1++
    }
  }


  if (numberP1 > numberP2) {
    console.log('The new card was lower!')
  }

  if (numberP2 > numberP1) {


    if (guessP2 == 'higher') {
      console.log(player2 + ' was correct!');


 
      pointP2++
    } else if (guessP2 == 'lower') {
      console.log(player2 + ' was incorrect!');
      livesP2++
    }
  }


  if (numberP1 > numberP2) {
    if (guessP1 == 'lower') {
      console.log(player1 + ' was correct!');



      pointP1++
    } else if (guessP1 == 'higher') {
      console.log(player1 + ' was incorrect!');
      livesP1++
    }
  }
  if (numberP1 > numberP2) {
    if (guessP2 == 'lower') {
      console.log(player2 + ' was correct!');


      pointP2++
    } else if (guessP2 == 'higher') {
      console.log(player2 + ' was incorrect!');
      livesP2++
    }
  }
  if (numberP1 == numberP2) {
    console.log('The card was the same! Game Over!')
    break;
  }


  if (livesP1 == lives && livesP2 == lives){
    console.log('You both ran out of lives. The game continues until the next player looses a life')
    livesP1--
    livesP2--
  }
  //stops the game if there is no more lives
  if (livesP1 == lives){
    console.log(player1 + ' ran out of lives')
  }
  if (livesP2 == lives){
    console.log(player2 + ' ran out of lives')
  }
  if (livesP1 == lives){
    break;
  }
  if (livesP2 == lives){
    break;
  }

  

  //adds round
  round++
      //calculates the amount of swaps

  //stops the game if the users round is reached
}while (round < playerRound)


  //displays the amount of points each player has
  console.log(player1 + ' has ' + pointP1 + ' points!');
  console.log(player2 + ' has ' + pointP2 + ' points!');
  //compares everyones points to see who the winner is
  if (pointP1 > pointP2) {
    console.log(player1 + ' won the game!')
  } else if (pointP1 < pointP2) {
    console.log(player2 + ' won the game!')
  } else {
    console.log("It's a tie! You both have " + pointP1 + ' points!')
  }
