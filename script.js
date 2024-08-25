"use strict";
// Lazy loading all the image at once
const lazyLoad = function (image) {
  image.forEach((img) => {
    img.src = img.dataset.src;

    img.addEventListener("load", function () {
      img.classList.remove("lazy-img");
      const parent = img.parentNode;
      parent.classList.remove("lazy-img-container");
    });
  });
};

// Execute lazy loading once DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const parent = document.getElementById("main");
  const imgElements = parent.querySelectorAll("[data-lazy]");
  lazyLoad(imgElements);
});
