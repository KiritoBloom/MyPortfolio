const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const anchors = document.querySelectorAll("nav a");
const name = document.getElementById("text-container");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    name.style.color = "black";
    anchors.forEach((anchor) => {
      anchor.style.color = "black";
    });
    body.style.transition = "1s ease-out";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    name.style.color = "white";
    anchors.forEach((anchor) => {
      anchor.style.color = "white";
    });
    body.style.transition = "1s ease-out";
  }
});
