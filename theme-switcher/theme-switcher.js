"use strict";

let theme = document.getElementById("theme-switcher");

theme.addEventListener("change", function (event) {
  const selectTheme = event.target.value;
  document.body.setAttribute("data-theme", selectTheme);
});
