function createImageSlider(
  containerSelector,
  prevSelector,
  nextSelector,
  imageContainerSelector,
  imageSelector,
  imageWidth,
  delay
) {
  const $prev = document.querySelector(prevSelector);
  const $next = document.querySelector(nextSelector);
  const $imageContainer = document.querySelector(imageContainerSelector);
  const $images = document.querySelectorAll(
    `${imageContainerSelector} ${imageSelector}`
  );
  let currentImg = 1;
  let timeout;

  function updateImg() {
    if (currentImg > $images.length) {
      currentImg = 1;
    } else if (currentImg < 1) {
      currentImg = $images.length;
    }

    $imageContainer.style.transform = `translateX(-${
      (currentImg - 1) * imageWidth
    }px)`;

    timeout = setTimeout(() => {
      currentImg++;
      updateImg();
    }, delay);
  }

  $prev.addEventListener("click", () => {
    clearTimeout(timeout);
    currentImg--;
    updateImg();
  });

  $next.addEventListener("click", () => {
    clearTimeout(timeout);
    currentImg++;
    updateImg();
  });

  updateImg();
}

// Use the function for each slider
createImageSlider(
  "#slider1",
  "#slider1 .prev",
  "#slider1 .next",
  "#slider1 .image-container",
  "img",
  500,
  30000
);
createImageSlider(
  "#slider2",
  "#slider2 .prev",
  "#slider2 .next",
  "#slider2 .image-container",
  "img",
  500,
  30000
);
createImageSlider(
  "#slider3",
  "#slider3 .prev",
  "#slider3 .next",
  "#slider3 .image-container",
  "img",
  500,
  30000
);

createImageSlider(
  "#slider4",
  "#slider4 .prev",
  "#slider4 .next",
  "#slider4 .image-container",
  "img",
  500,
  30000
);
