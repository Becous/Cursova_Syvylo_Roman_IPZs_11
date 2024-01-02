let swiper = new Swiper(".swiper", {
  // Optional parameters

  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,

  navigation: {
    nextEl: ".move-box__button-right",
    prevEl: ".move-box__button-left",
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    position: "right",
  },
});

let current = document.querySelector(".testimonial__count");
let allside = document.querySelector(".testimonial__count-all");

allside.innerHTML = "0" + swiper.slides.length;

swiper.on("slideChange", function () {
  let currentSlide = ++swiper.realIndex;
  current.innerHTML = "0" + currentSlide;
});
