const hamburger = document.querySelector(".hamburger");
const list = document.querySelectorAll(".container-list-hamburger");

hamburger.addEventListener("click", function () {
  list.forEach(function(item) {
    item.classList.add("is-active");
  });
});
