"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

let locale = "da";

function updateText() {
  texts[locale].texts.forEach((element) => {
    document.querySelector(element.location).textContent = element.text;
  });
}

updateText();

let language = document.querySelector(".language");

language.addEventListener("change", (event) => {
  locale = event.target.value;
  updateText();
});

// let header = document.querySelector(".header");
// let footer = document.querySelector(".footer");

// if (locale === "da") {
//   console.log("Sproget er sat til dansk");
//   header.textContent = texts.da.texts[0].text;
//   footer.textContent = texts.da.texts[1].text;
// } else {
//   console.log("Sproget er sat til tysk");
//   header.textContent = texts.de.texts[0].text;
//   footer.textContent = texts.de.texts[1].text;
// }
