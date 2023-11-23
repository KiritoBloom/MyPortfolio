document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));

    if (targetElement) {
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.scrollY;

      anime({
        targets: document.documentElement,
        scrollTop: offsetTop,
        duration: 0, // Set a very low duration (adjust as needed)
        easing: "easeInOutQuad",
      });
    }
  });
});
