
const clocks = document.getElementsByClassName('clock');
const info = document.getElementsByClassName('info__content');
let timesArr = [0, 0, 0, 0, 0, 0, 0, 1, 2];
let isReset = false;

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
    }, 1000)
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
            if (isReset) isResetClock();
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
    time.currentNum = time.nextNum;
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

function isResetClock() {
    clearInterval(myInterval);
    init();
    clockArr.forEach((e, i) => {
        e.card.dataset.flip = "true";
        e.time.nextNum = timesArr[i];
    });
    isReset = false;
}

init();
document.querySelector("#button").addEventListener("click", () => {
    let validateNum = {
        "days": 999,
        "hours": 23,
        "minutes": 60,
        "seconds": 60,
    }
    let isValid = true;
    let sum = 0;
    let arr = [];
    for (let child of info) {
        let type = child.dataset.type;
        if (child.querySelector('input').value === "") child.querySelector('input').value = "0";
        let val = parseInt(child.querySelector('input').value);
        sum += val;
        isValid = isValid && (validateNum[type] >= val || 0 >= val);
        let length = 2, estimateLength;
        if (type === "days") {
            length = 3;
        }
        estimateLength = arr.length + length;
        for (let i = 1; i <= length; i++) {
            let num = val % 10;
            arr[estimateLength - i] = num;
            val = parseInt(val / 10);
        }
        child.querySelector('input').value = "0";
    }
    let minArr = [0, 9, 9, 2, 3, 5, 9, 5, 9];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === 4 && arr[i - 1] === 2) minArr[i] = 9;
        if (arr[i] === 0) arr[i] = minArr[i];
        else { arr[i] -= 1; break };
    }

    timesArr = arr;

    isReset = isValid && sum;
    if (isReset && clockArr[clockArr.length - 1].card.dataset.flip === "false") {
        clockArr[clockArr.length - 1].card.dataset.flip = "true";
    }
})



