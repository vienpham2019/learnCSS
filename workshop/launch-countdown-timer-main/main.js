
const card = document.querySelector(".main__clock-card");
const topCard = document.querySelector(".main__clock-card-top");
const bottomCard = document.querySelector(".main__clock-card-bottom");

console.log(card)

function animateTime() {
    card.addEventListener("animationstart", () => {
        if (card.dataset.flipcount === "1") {
            topCard.innerHTML = nextTime;
            card.dataset.numbertop = currentTime;
            card.dataset.numberbottom = currentTime;
            bottomCard.innerHTML = currentTime
        }

    })

    card.addEventListener("animationend", () => {
        if (card.dataset.flipcount === "1") {
            card.dataset.numbertop = nextTime;
            card.dataset.numberbottom = nextTime;
            card.dataset.flipcount = "2";
        } else if (card.dataset.flipcount === "2") {
            bottomCard.innerHTML = nextTime;
            card.dataset.flipcount = "1";
            card.dataset.flip = "false";
        }
    })

}

let time = 9;
let currentTime, nextTime
animateTime()

setInterval(() => {
    if (time === 0) time = 9;
    currentTime = time;
    nextTime = time - 1;
    card.dataset.flip = "true";
    time--;
}, 1000)
