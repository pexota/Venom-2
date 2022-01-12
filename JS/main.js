const menuButton = document.querySelector(".menu_button");
const menu = document.querySelector(".nav_menu");
const menuClouseButton = document.querySelector(".menu_close");

menuButton.addEventListener("click",() => {
   menu.classList.add("is_active");
   menuClouseButton.classList.add("is_active");
});
menuClouseButton.addEventListener("click",() => {
     menu.classList.remove("is_active");
     menuClouseButton.classList.remove("is_active");
})