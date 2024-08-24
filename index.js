const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});
document.addEventListener("scroll", function () {
  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove("is-active");
  }
});
window.addEventListener("resize", function () {
  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove("is-active");
  }
});
