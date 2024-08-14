let player = {
  name: "Hammad",
  chips: 200
}

let sum = 0;
let cards = [];

let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageBox = document.getElementById("message-box");
let sumBox = document.getElementById("sum-box");
let cardsBox = document.getElementById("cards-box");
let playerBox = document.getElementById("player-box");



playerBox.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10){
    return 10;
  }else if (randomNumber === 1){
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame(){
  cardsBox.textContent = "Cards: "

  for (let i = 0; i < cards.length; i++) {
    cardsBox.textContent += cards[i] + " ";
  }

  if (sum <= 20){
    message = "Do you want to draw a new card?";
  } else if (sum === 21){
    message = "You have got a black jack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageBox.textContent = message;
  sumBox.textContent = "Sum:" + sum;
}

function newCard(){
  

  if (isAlive === true && hasBlackJack === false){
    let cardNew = getRandomCard();
    sum += cardNew;
    cards.push(cardNew);
    renderGame();
  }
  
}