const body = document.querySelector("body");

document.addEventListener("mousemove", (event) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const xPos = event.clientX;
  const yPos = event.clientY;

  const lightness = (xPos / width) * 100;
  const saturation = (yPos / height) * 100;

  body.style.setProperty("--lightness", `${lightness}`);
  body.style.setProperty("--saturation", `${saturation}`);
});
