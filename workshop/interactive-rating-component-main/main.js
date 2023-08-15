const card = document.querySelector("#card");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    card.dataset.display = "back"
})