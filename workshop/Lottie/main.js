const icon = document.querySelector(".icon");
const navBar = document.querySelector(".nav-bar");

lottie.loadAnimation({
    container: icon,
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'menu.json'
})

navBar.addEventListener("mouseenter", () => {
    // set the direction back to normal
    lottie.setDirection('1');
    lottie.play();
})

navBar.addEventListener("mouseleave", () => {
    // it will start at reverse a
    lottie.setDirection('-1');
    lottie.play();
})