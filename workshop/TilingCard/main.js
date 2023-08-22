const cardContainer = document.querySelector(".tiling-card-container");
const card = document.querySelector(".tiling-card-wrapper");
let angle = 15;

cardContainer.addEventListener("mouseover", (e) => {
    let { rotatex, rotatey } = e.target.dataset;
    card.style.setProperty('--_rotateX', angle * parseInt(rotatex) + "deg");
    card.style.setProperty('--_rotateY', angle * parseInt(rotatey) + "deg");
});

cardContainer.addEventListener("mouseout", () => {
    card.style.setProperty('--_rotateX', 0);
    card.style.setProperty('--_rotateY', 0);
});

