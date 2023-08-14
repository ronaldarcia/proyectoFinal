const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(function (item) {
item.addEventListener("click", function (e) {
const activeItem = document.querySelector(".active");
activeItem.classList.remove("active");
e.target.classList.add("active");
});
});

const modoOscuroToggle = document.getElementById("modoOscuro");
modoOscuroToggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});

const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", function () {
const mobileNav = document.querySelector("#mobile-nav");
mobileNav.classList.toggle("show");

const menuIcon = document.querySelector("#menu-icon");
menuIcon.src = menuIcon.src.includes("openIcon")
? "./img/closeIcon.svg"
: "./img/openIcon.svg";
});

const menuBtnMobile = document.querySelectorAll(".menu-item-mobile");
menuBtnMobile.forEach(function (item) {
item.addEventListener("click", function () {
const mobileNav = document.querySelector("#mobile-nav");
mobileNav.classList.remove("show");
    
const menuIcon = document.querySelector("#menu-icon");
menuIcon.src = "./img/openIcon.svg";
});
});
