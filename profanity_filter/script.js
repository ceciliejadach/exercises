const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

//laver en konstant variabel for knappen
const updateTextButton = document.getElementById("update-button");

//laver en variabel for vores tekst
let textElement = document.getElementById("text");

//laver en funktion for opdatering af teksten
function updateText() {
  let text = textElement.textContent; //laver en variabel, så teksten bliver retuneret inden i funktionen

  //looper gennem array og tager fat i hvert element
  curseWords.forEach((element) => {
    text = text.split(element.bad).join(element.good); //splitter og fjerner teksten ved de dårlige ord og samler den med de gode
  });

  textElement.textContent = text; //udskriver den nye tekst
}

updateTextButton.addEventListener("click", updateText); //tilføjer eventlistner til knappen
