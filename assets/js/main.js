const hamburguer = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav__menu");
const header = document.querySelector("header");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
    
})

document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click",() => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
}))