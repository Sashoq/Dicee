let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let changeImg = document.querySelector("img");
if (randomNumber1 === 1) {
  changeImg.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
  changeImg.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  changeImg.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  changeImg.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  changeImg.setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 6) {
  changeImg.setAttribute("src", "images/dice6.png");
}


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let changeImg2 = document.querySelector(".img2");
if (randomNumber2 === 1) {
  changeImg2.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
  changeImg2.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
  changeImg2.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
  changeImg2.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
  changeImg2.setAttribute("src", "images/dice5.png");
} else if (randomNumber2 === 6) {
  changeImg2.setAttribute("src", "images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}
