const showData = document.querySelector(".show_data");

async function showNumber() {
  const dataViz = await fetch("https://kea-alt-del.dk/kata-distortion/").then((res) => res.json());
  console.log(dataViz);
  showData.textContent = dataViz.inQueue;
}

showNumber();

setInterval(showNumber, 10000);
