document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const homeButton = document.getElementById("homeButton");

      if (entry.isIntersecting) {
        // Footer is visible, hide the "To Top" button
        homeButton.classList.add("hide");
        homeButton.classList.remove("shown");
      } else {
        // Footer is not visible, show the "To Top" button
        homeButton.classList.remove("hide");
        homeButton.classList.add("shown");
      }
    });
  });

  const footer = document.getElementById("footer");
  observer.observe(footer);
});
