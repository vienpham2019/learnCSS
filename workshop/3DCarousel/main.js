const carousel = document.querySelector(".carousel");
let child = Array.from(carousel.children);
let orders = [child.length - 2, child.length - 1, 0, 1, 2];
let className = ['left2', 'left1', 'main', 'right1', 'right2'];

const setClassName = (funcType) => {
    orders.forEach((order, i) => {
        if (funcType === "add") child[order].classList.add(className[i]);
        else if (funcType === "remove") child[order].classList.remove(className[i]);
    })
}

const incIndex = (index) => {
    index++;
    if (index > child.length - 1) index = 0;
    return index;
}

setClassName('add');

carousel.addEventListener('click', () => {
    setClassName('remove');
    orders.forEach((e, i) => orders[i] = incIndex(e))
    setClassName('add');
})