"use strict";

// definerer fire variabler: min og max til at holde det aktuelle interval for, hvor computeren skal gætte, guess til computerens aktuelle gæt og guessCount til at tælle antallet af gæt

let min, max, guess, guessCount;

//start spillet knap
const startButton = document.getElementById("startButton");

//for højt knap
const toHighButton = document.getElementById("toHighButton");

//for lav knap
const toLowButton = document.getElementById("toLowButton");

//korrekt knap
const correctButton = document.getElementById("correctButton");

//Computerens gæt
const guessDisplay = document.getElementById("guessDisplay");

//Hvor mange gæt computeren har brugt
const guessCountDisplay = document.getElementById("guessCountDisplay");

//funktion som udfører computerens gæt
function makeGuess() {
  guess = Math.floor((min + max) / 2); //gør at computeren gætter på 50 ((0+100)/2) = 50
  guessDisplay.textContent = `Computeren gætter: ${guess}`; //viser computerens gæt
  guessCount++; //øger guessCount, så der bliver talt, hvor mange gæt computeren har brugt
  guessCountDisplay.textContent = `Antal gæt: ${guessCount}`; //viser antal gæt
}

startButton.addEventListener("click", () => {
  min = 0;
  max = 100;
  guessCount = 0;
  makeGuess(); //kaldes for at lave computerens første gæt

  toHighButton.disabled = false;
  toLowButton.disabled = false;
  correctButton.disabled = false;
});

toHighButton.addEventListener("click", () => {
  max = guess - 1; //ny øvre grænse sættes til guess - 1 - altså én mindre end computerens gæt
  makeGuess(); //kaldes igen for at lave et nyt gæt inden for det opdaterede interval.
});

toLowButton.addEventListener("click", () => {
  min = guess + 1; //ny nedre grænse sættes til guess + 1 - altså én mere end computerens gæt
  makeGuess(); //kaldes igen for at lave et nyt gæt inden for opdaterede interval
});

correctButton.addEventListener("click", () => {
  guessDisplay.textContent = `Ja tak! Så fik jeg endelig gættet dit tal 🖕🏻 Tallet var ${guess} og jeg brugte kun ${guessCount} gæt!`;

  //spillet nulstilles og kan spilles
  toHighButton.disabled = true;
  toLowButton.disabled = true;
  correctButton.disabled = true;
});
