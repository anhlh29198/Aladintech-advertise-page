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


hamburgerMenu.addEventListener("click", () => {
    const hamburgerLine = document.querySelectorAll(".hamburger span");
    hamburgerLine.forEach((line) => {
        line.classList.toggle("active");
    });
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");

    const main = document.querySelectorAll("main, footer");
    main.forEach(section => {
        section.classList.toggle("active");
    });
    console.log(main);

});


