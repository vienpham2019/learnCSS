const card = document.querySelector("#card");
const button = document.querySelector("#button");
const numbers = document.getElementsByClassName("card__front-number");
const ratting = document.querySelector("#card__back-ratting");

let ratting_num = 5;
button.addEventListener("click", () => {
    card.dataset.display = "back";
    ratting.innerHTML = `You selected ${ratting_num} out of 5`;
})


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        ratting_num = parseInt(numbers[i].dataset.ratingvalue);
        for (let i = 0; i < numbers.length; i++) {
            numbers[i].dataset.select = ratting_num == numbers[i].dataset.ratingvalue;

        }
    })
};


