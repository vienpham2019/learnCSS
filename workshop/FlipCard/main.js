// let datetime = [];

// setInterval(() => {
//     let currentdate = new Date();
//     datetime = "Last Sync: " + currentdate.getDate() + "/"
//         + (currentdate.getMonth() + 1) + "/"
//         + currentdate.getFullYear() + " @ "
//         + currentdate.getHours() + ":"
//         + currentdate.getMinutes() + ":"
//         + currentdate.getSeconds();

//     console.log(datetime);
// }, 1000)
const card = document.querySelector(".card");
const topE = document.querySelector(".top");
const topFlip = document.querySelector(".top-flip");
const bottom = document.querySelector(".bottom");
const bottomFlip = document.querySelector(".bottom-flip");

function animateTime(time) {
    let currentTime = time;
    let nextTime = currentTime - 1;
    card.classList.add('flip');
    topFlip.addEventListener("animationstart", () => {
        setInnerHTML(topE, nextTime);
        setInnerHTML(topFlip, currentTime);
        setInnerHTML(bottom, currentTime);
        setInnerHTML(bottomFlip, currentTime);
    })

    topFlip.addEventListener("animationend", () => {
        setInnerHTML(topFlip, nextTime);
        setInnerHTML(bottomFlip, nextTime);
    })

    bottomFlip.addEventListener("animationend", () => {
        setInnerHTML(bottom, nextTime);
        card.classList.remove('flip');
    })
}

function setInnerHTML(e, value) {
    e.innerHTML = value > 9 ? value : "0" + value;
}

let time = 20;
setInterval(() => {
    animateTime(time--);
    if (time <= 0) time = 20;
}, 1000)
