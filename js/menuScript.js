const $icon = document.querySelector(".icon");
const $nav = document.querySelector(".nav__ul");

$icon.addEventListener("click", () =>{
    $nav.classList.toggle("nav__ul-activate");
    $nav.classList.toggle("nav__ul");
});

window.addEventListener("resize", function(){
    if(this.window.matchMedia("(min-width: 1200px)").matches){
        $nav.classList.remove("nav__ul-activate");
        $nav.classList.add("nav__ul");
    }
})