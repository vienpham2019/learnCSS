
const clocks = document.getElementsByClassName('clock');
let timesArr = [0, 0, 0, 0, 0, 0, 2, 5, 9]

let clockArr;
let myInterval = null;
function init() {
    clockArr = [];
    for (let i = 0; i < clocks.length; i++) {
        let clock = clocks[i];
        let type = clock.dataset.type;
        for (let j = 0; j < clock.children.length; j++) {
            let maxNumber = 9;
            let numDiff = -1;
            let index = clockArr.length;
            let currentNum = timesArr[index];
            let nextNum;
            if (type === "seconds" || type === "minutes") {
                if (j === 0) maxNumber = 5;
                else numDiff = -1;
            }

            if (type === "hours") {
                if (j === 0) maxNumber = 2;
            }

            nextNum = decNum(currentNum, { maxNumber, numDiff });

            // this just reset all addEventListener 
            clock.children[j].replaceWith(clock.children[j].cloneNode(true));
            let card = clock.children[j];

            let clockE = {
                card,
                topCard: card.children[0],
                bottomCard: card.children[1],
                time: {
                    currentNum,
                    nextNum,
                    maxNumber,
                    numDiff,
                    nextFlipNum: 0
                },
                index,
                clockOrder: j,
                type
            }

            clockArr.push(clockE)
            animateTime(clockE)
            setElementNumber({ ...clockE, num: clockE.time.currentNum })
        }
    }

    myInterval = setInterval(() => {
        if (clockArr.map(e => e.time.currentNum).reduce((a, b) => a + b, 0) > 0)
            clockArr[clockArr.length - 1].card.dataset.flip = "true";
        else {
            clearInterval(myInterval);
        }
    }, 1)
}

function setElementNumber({ card, topCard, bottomCard, num }) {
    topCard.innerHTML = num;
    card.dataset.numbertop = num;
    card.dataset.numberbottom = num;
    bottomCard.innerHTML = num
}

function updateMaxNumByType(clock) {
    let { type, index, clockOrder, time } = clock;
    if (type === "hours") {
        if (clockOrder === 1) {
            if (clockArr[index - 1].time.currentNum === 0) {
                time.maxNumber = 3;
            } else {
                time.maxNumber = 9;
            }
        }
    }
}

function animateTime(cardElement) {
    let { card, topCard, bottomCard, time, index } = cardElement;
    card.addEventListener("animationstart", () => {
        let { currentNum, nextNum, numDiff } = time;
        if (card.dataset.flipcount === "1") {
            if (currentNum === currentNum % numDiff && index != 0) {
                clockArr[index - 1].card.dataset.flip = "true";
            }
            topCard.innerHTML = nextNum;
            card.dataset.numbertop = currentNum;
            card.dataset.numberbottom = currentNum;
            bottomCard.innerHTML = currentNum
        }
    })

    card.addEventListener("animationend", () => {
        let { nextNum } = time;
        if (card.dataset.flipcount === "1") {
            card.dataset.numbertop = nextNum;
            card.dataset.numberbottom = nextNum;
            card.dataset.flipcount = "2";
        } else if (card.dataset.flipcount === "2") {
            bottomCard.innerHTML = nextNum;
            card.dataset.flipcount = "1";
            card.dataset.flip = "false";
            updateMaxNumByType(cardElement);
            setNum(time);
        }
    })

}

function setNum(time) {
    time.currentNum = decNum(time.currentNum, time);
    time.nextNum = decNum(time.nextNum, time);
}

function decNum(num, time) {
    let { maxNumber, numDiff } = time;
    num += numDiff;
    if (num < 0) {
        num = maxNumber + num + 1;
    }
    return num;
}

document.querySelector("#button").addEventListener("click", () => {
    clearInterval(myInterval);
    init();
})



