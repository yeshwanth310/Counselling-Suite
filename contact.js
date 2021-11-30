const bars = document.querySelector(".nav-bar");
const ul = document.querySelector("ul");
const i = document.querySelector("nav i");
bars.addEventListener("click", () => {
  ul.classList.toggle("width");

  if (bars.classList.contains("fa-bars")) {
    bars.setAttribute("class", "fas fa-times");
  } else {
    bars.setAttribute("class", "fas fa-bars");
  }
});
