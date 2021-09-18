const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let currentIndex = 0;
const playIcon = $(".fa-play");
const pauseIcon = $(".fa-pause");
const audioMusic = Array.from($$(".audio"));
const listMusic = Array.from($$(".music__item"));

playIcon.onclick = () => {
    pauseIcon.style.display = "block";
    playIcon.style.display = "none";
    pauseIcon.setAttribute("currentIndex", currentIndex);
    const index = playIcon.getAttribute("currentIndex");
    if(index) {

    } else {
        audioMusic[0].play();
    }
}

pauseIcon.onclick = () => {
    pauseIcon.style.display = "none";
    playIcon.style.display = "block";
    playIcon.setAttribute("currentIndex", currentIndex);
    const index = pauseIcon.getAttribute("currentIndex");

    if(index) {

    } else {
        audioMusic[0].pause();
    }
}

