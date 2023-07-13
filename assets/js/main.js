const hamburguer = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav__menu");
const navBar = document.querySelector(".navbar");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBar.classList.toggle("active");
    
})

document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click",() => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
    navBar.classList.remove("active");
}))