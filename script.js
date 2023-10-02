const content = document.querySelectorAll(".slideProduct");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");

let i = 0;

function nextSlide() {
    content[i].classList.remove("current");
    (i < content.length - 1) ? i++ : i = 0;
    content[i].classList.add("current");
}

function previousSlide() {
    content[i].classList.remove("current");
    (i > 0) ? i-- : i = content.length - 1;
    content[i].classList.add("current");
}

window.onload = nextSlide;
let slideInterval = setInterval(nextSlide, 6000);

arrowLeft.addEventListener("click", () => {
    previousSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 6000);
});

arrowRight.addEventListener("click", () => {
    nextSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 6000);
});

const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerLine = document.querySelectorAll(".hamburger span");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelectorAll("main, footer");

hamburgerMenu.addEventListener("click", () => {
    hamburgerLine.forEach((line) => {
        line.classList.toggle("active");
    });
    sidebar.classList.toggle("active");
    main.forEach(section => {
        section.classList.toggle("active");
    });
});



