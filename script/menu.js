const btnActive = document.querySelector(".icon__active");
const btnClose = document.querySelector(".close");
const menu = document.querySelector(".menu");
const link = document.querySelectorAll(".link");

btnActive.addEventListener("click", function () {
  menu.classList.toggle("active");
});

btnClose.addEventListener("click", function () {
  menu.classList.toggle("active");
});

link[0].addEventListener("click", function () {
  menu.classList.toggle("active");
});

link[1].addEventListener("click", function () {
  menu.classList.toggle("active");
});
link[2].addEventListener("click", function () {
  menu.classList.toggle("active");
});
link[3].addEventListener("click", function () {
  menu.classList.toggle("active");
});
