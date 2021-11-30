// var swiper = new Swiper(".swiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
var swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const bars = document.querySelector(".nav-bar");
const ul = document.querySelector("ul");
const i = document.querySelector("nav i");
bars.addEventListener("click", () => {
  ul.classList.toggle("width");
  document.body.classList.toggle("no-scroll");
  if (bars.classList.contains("fa-bars")) {
    bars.setAttribute("class", "fas fa-times");
  } else {
    bars.setAttribute("class", "fas fa-bars");
  }
});
