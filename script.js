const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const anchors = document.querySelectorAll("nav a");
const name = document.getElementById("text-container");
const about = document.getElementById("about-box");

toggle.addEventListener("click", function () {
  if (this.classList.contains("fa-moon")) {
    this.classList.remove("fa-moon");
    this.classList.add("fa-sun");
    body.style.background = "white";
    body.style.color = "black";
    name.style.color = "black";
    anchors.forEach((anchor) => {
      anchor.style.color = "black";
    });
    body.style.transition = "1s ease-out";
    about.style.background = "linear-gradient(to right, purple, crimson);";
    about.style.borderColor = "black";
  } else {
    this.classList.remove("fa-sun");
    this.classList.add("fa-moon");
    body.style.background = "black";
    body.style.color = "white";
    name.style.color = "white";
    anchors.forEach((anchor) => {
      anchor.style.color = "white";
    });
    body.style.transition = "1s ease-out";
    about.style.background = "linear-gradient(to right, purple, crimson);";
    about.style.borderColor = "white";
  }
});
