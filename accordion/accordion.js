const content = [
  {
    title: "Her er første titel",
    body: "Her skal der være en masse fed tekst til første titel",
  },
  {
    title: "Her er anden titel",
    body: "Her skal være en masse fed tekst til anden titel",
  },
  {
    title: "Her er tredje titel",
    body: "Her skal være en masse fed tekst til tredje titel",
  },
];

const accordion = document.querySelectorAll(".accordion");
const accordionText = document.querySelectorAll(".text ");

content.forEach((element, index) => {
  accordion[index].textContent = element.title;
  accordionText[index].textContent = element.body;

  accordionText[index].classList.add("hidden");
});

accordion.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    accordionText[index].classList.toggle("hidden");
  });
});
