const hamburger = document.querySelector(".hamburger");
const list = document.querySelectorAll(".container-list-hamburger");

document.addEventListener("scroll", function () {
 
  list.forEach(function (item) {
    if (item.classList.contains("is-active")) {
      item.classList.remove("is-active");
      hamburger.classList.remove('is-active')
    }
  });
});
window.addEventListener('resize', function() {
  list.forEach(function (item) {
    if (item.classList.contains("is-active")) {
      item.classList.remove("is-active");
      hamburger.classList.remove('is-active')
    }
  });
});

hamburger.addEventListener("click", function () {
  list.forEach(function (item) {
    item.classList.toggle("is-active");
  });
  hamburger.classList.toggle("hamburger--collapse");
});
