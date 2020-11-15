const hamburger = document.querySelector(".nav-icon")
const nav = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
})