"use strict";

function genererTilfaeldigtTal() {
  const randomNumber = Math.floor(Math.random() * 100);
  document.getElementById("tal-udskrift").textContent = "Det tilfældige tal er: " + randomNumber;
  console.log("her et et random tal", randomNumber);
}
