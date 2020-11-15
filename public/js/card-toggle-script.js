let card = document.querySelectorAll(".card")[0];
let card2 = document.querySelectorAll(".card")[1];
let card3 = document.querySelectorAll(".card")[2];
let card4 = document.querySelectorAll(".card")[3];

card.addEventListener("click", () => {
    card.classList.toggle("toggle");
})

card2.addEventListener("click", () => {
    card2.classList.toggle("toggle");
})

card3.addEventListener("click", () => {
    card3.classList.toggle("toggle");
})

card4.addEventListener("click", () => {
    card4.classList.toggle("toggle");
})