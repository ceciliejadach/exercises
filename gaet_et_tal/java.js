"use strict";
// Generér et tilfældigt tal mellem 0 og 100
let randomNumber = Math.floor(Math.random() * 101);

function checkGuess() {
  const userGuess = Number(document.getElementById("userGuess").value);
  const resultatElement = document.getElementById("resultat");

  // Sammenlign brugerens gæt med det tilfældige tal
  if (userGuess < randomNumber) {
    resultatElement.textContent = "Tallet er for lavt!";
  } else if (userGuess > randomNumber) {
    resultatElement.textContent = "Tallet er for højt!";
  } else {
    resultatElement.textContent = "Du har gættet rigtigt!";

    // Udløs konfetti-animationen
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.7 },
    });
  }
}
