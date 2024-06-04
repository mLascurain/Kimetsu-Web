const $icon = document.querySelector(".icon");
const $nav = document.querySelector(".nav__ul");

$icon.addEventListener("click", () =>{
    $nav.classList.toggle("nav__ul-activate");
    $nav.classList.toggle("nav__ul");
});