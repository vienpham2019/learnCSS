const container = document.querySelector(".container");
const contents = document.getElementsByClassName("content__info");

for (let content of contents) {
    content.addEventListener('mouseover', () => {
        container.classList.add('pause');
    })

    content.addEventListener('mouseout', () => {
        container.classList.remove('pause');
    })
}

