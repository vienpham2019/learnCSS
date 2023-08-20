let accordionPannels = document.getElementsByClassName("accordion-panel");

for (let accordionPannel of accordionPannels) {
    accordionPannel.addEventListener('click', () => {
        for (let e of accordionPannels) {
            e.setAttribute("aria-expanded", false);
        };
        accordionPannel.setAttribute("aria-expanded", true);
    })
}