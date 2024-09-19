const hamurger = document.querySelector(".hamburger");

const mobileMenu = document.querySelector(".nav-list ul");

hamurger.addEventListener('click', () =>{
    hamurger.classList.toggle("active");
    mobileMenu.classList.toggle("active");

});