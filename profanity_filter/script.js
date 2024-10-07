const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const updateTextButton = document.getElementById("update-button");

let textElement = document.getElementById("text");

function updateText() {
  let text = textElement.textContent;

  curseWords.forEach((element) => {
    // text = text.split(element.bad).join(element.good); //begge metoder kan bruges
    text = text.replaceAll(element.bad, `<span>${element.good}</span>`); //begge metoder kan bruges
  });

  textElement.innerHTML = text;
}

updateTextButton.addEventListener("click", updateText);

// let theText = document.querySelector("p").textContent;
// document.querySelector("button").addEventListener("click", replaceBadWords);

// function replaceBadWords() {
//   curseWords.forEach((curseWord) => {
//     theText = theText.replaceAll(curseWord.bad, curseWord.good);
//   });
// }

// function isItSafe() {
//   return false;
// }
