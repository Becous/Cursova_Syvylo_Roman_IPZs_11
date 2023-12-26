let swiper = new Swiper(".swiper", {
  // Optional parameters

  autoplay: {
    delay: 3000,
  },
  nextButton: ".move-box__button-left",
  prevButton: ".move-box__button-right",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let current = document.querySelector(".testimonial__count");
let allside = document.querySelector(".testimonial__count-all");

allside.innerHTML = "0" + swiper.slides.length;

swiper.on("slideChange", function () {
  let currentSlide = ++swiper.realIndex;
  current.innerHTML = "0" + currentSlide;
});
