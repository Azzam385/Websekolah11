let music;

function startMusic() {

if (!music) {

music = new Audio("music.mp3");

music.loop = true;

let savedTime =
localStorage.getItem("musicTime");

if (savedTime) {

music.currentTime = savedTime;

}

music.play();

setInterval(() => {

localStorage.setItem(
"musicTime",
music.currentTime
);

}, 100);

}

}

function start() {
  document.querySelector("button").style.display = "none";
  document.getElementById("loadingBox").style.display = "block";

  let bar = document.getElementById("bar");
  let percent = document.getElementById("percent");

  let i = 0;

  let load = setInterval(() => {
    i++;
    bar.style.width = i + "%";
    percent.innerText = i + "%";

    if (i >= 100) {
      clearInterval(load);

      setTimeout(() => {
        document.querySelector(".container").style.display = "none";
        document.getElementById("editor").style.display = "block";
      }, 500);
    }
  }, 30);
}