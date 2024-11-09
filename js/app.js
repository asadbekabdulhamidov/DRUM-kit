const btns = document.querySelectorAll(".drum");

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    pressed(item.textContent);
    play(item.textContent);
  });
});

const pressed = (item) => {
  let pressBtn = document.querySelector(`.${item}`);
  pressBtn.classList.add("pressed");

  setTimeout(() => {
    pressBtn.classList.remove("pressed");
  }, 300);
};

const play = (item) => {
  let audio;
  switch (item) {
    case "w":
      audio = new Audio("../sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("../sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("../sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("../sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("../sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("../sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("../sounds/tom-4.mp3");
      break;
  }
  if (audio) audio.play();
};

// const play = (item) => {
//   let audio;
//   if (item == "w") {
//     audio = new Audio("./sounds/crash.mp3");
//   } else if (item == "a") {
//     audio = new Audio("./sounds/kick-bass.mp3");
//   } else if (item == "s") {
//     audio = new Audio("./sounds/snare.mp3");
//   } else if (item == "d") {
//     audio = new Audio("./sounds/tom-1.mp3");
//   } else if (item == "j") {
//     audio = new Audio("./sounds/tom-2.mp3");
//   } else if (item == "k") {
//     audio = new Audio("./sounds/tom-3.mp3");
//   } else if (item == "l") {
//     audio = new Audio("./sounds/tom-4.mp3");
//   }
//   audio.play();
// };

document.addEventListener("keydown", (e) => {
  if ("wasdjkl".includes(e.key)) {
    play(e.key);
    pressed(e.key);
  }
});
