const menu = document.querySelector(".menu");
const body = document.body;
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    body.classList.remove("no-scroll");
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    body.classList.add("no-scroll");
    closeIcon.style.display = "block";
    closeIcon.style.position = "fixed";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
