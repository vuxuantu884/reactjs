const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let currentIndex = 0;
const playIcon = $(".fa-play");
const pauseIcon = $(".fa-pause");
const nextIcon = $(".fa-step-backward");
const preIcon = $(".fa-step-forward");
const audioMusic = Array.from($$(".audio"));
const listMusic = Array.from($$(".music__item"));

listMusic.forEach((item, index) => {
    item.onclick = () => {
        audioMusic[currentIndex].pause();
        audioMusic[index].play();
        currentIndex = index;
        pauseIcon.setAttribute("currentIndex", currentIndex);
        pauseIcon.style.display = "block";
        playIcon.style.display = "none";
    }
});

playIcon.onclick = () => {
  pauseIcon.style.display = "block";
  playIcon.style.display = "none";
  const index = playIcon.getAttribute("currentIndex") || null;
  if (index) {
    audioMusic.forEach((item, indexItem) => {
      if (+index === indexItem) {
        item.play();
      }
    });
  } else {
    audioMusic[0].play();
  }
  pauseIcon.setAttribute("currentIndex", currentIndex);
};

pauseIcon.onclick = () => {
  pauseIcon.style.display = "none";
  playIcon.style.display = "block";
  const index = pauseIcon.getAttribute("currentIndex");

  if (index) {
    audioMusic.forEach((item, indexItem) => {
      if (+index === indexItem) {
        item.pause();
      }
    });
  } else {
    audioMusic[0].pause();
  }
  playIcon.setAttribute("currentIndex", currentIndex) || null;
};
preIcon.onclick = () => {

    audioMusic[currentIndex].pause();
    console.log(audioMusic[currentIndex]);
    if(currentIndex === audioMusic.length - 1) {
        currentIndex = 0;
        pauseIcon.setAttribute("currentIndex", currentIndex);
        pauseIcon.style.display = "block";
        playIcon.style.display = "none";
        audioMusic[0].play();
    } else {
        currentIndex = currentIndex + 1;
        pauseIcon.setAttribute("currentIndex", currentIndex);
        pauseIcon.style.display = "block";
        playIcon.style.display = "none";
        audioMusic[currentIndex].play();
    }
}