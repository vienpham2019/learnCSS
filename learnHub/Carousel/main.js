const carousel = document.querySelector('.slides')
const slides = Array.from(carousel.children);
const nextButton = document.querySelector('.slide-next');
const prevButton = document.querySelector('.slide-prev');
const dotsContainer = document.querySelector(".dots");
const dots = Array.from(dotsContainer.children);

let currentI = 0;

window.message = function () {
    alert('hi');
};

const setSlidePosition = () => {
    let slideWidth = slides[0].getBoundingClientRect().width;
    carousel.style.transform = "translateX(-" + (slideWidth * currentI) + "px)";
    dots.forEach((dot, i) => {
        if (i === currentI) dot.classList.add("selected");
        else dot.classList.remove("selected");
    })
}

nextButton.addEventListener('click', () => {
    if (currentI === slides.length - 1) return;
    currentI++;
    setSlidePosition();
})

prevButton.addEventListener('click', () => {
    if (currentI <= 0) return
    currentI--;
    setSlidePosition();
})

dotsContainer.addEventListener("click", (e) => {
    let target = e.target.closest(".dot");
    if (!target) return;
    currentI = dots.findIndex(child => child === target);
    setSlidePosition();
})