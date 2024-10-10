const button = document.querySelector("button");
const body = document.querySelector("body");

let mouseMoved = false;

document.addEventListener("mousemove", theEventhandler);
document.addEventListener("click", theEventhandler);
button.addEventListener("animationend", theEventhandler);

function theEventhandler(evt) {
  console.log(evt.type);
  if (evt.type === "mousemove") {
    mouseMoved = true;
  }
  if (evt.type === "animationend") {
    console.log(mouseMoved);
    if (mouseMoved === false) {
      action();
    }
  }
  if (evt.type === "click") {
    action();
  }
}

function action() {
  body.style.backgroundColor = "pink";
}
