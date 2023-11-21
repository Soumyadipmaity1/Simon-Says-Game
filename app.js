let gameSeq = [];
let userSeq = [];

let btns = ["pink", "blue", "green", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("touchstart", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 200);
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function levelUp() {
userSeq=[];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
         setTimeout(levelUp,500);
    }
  } else {
    h2.innerHTML = ` Game over ! Your Score is <b>${level}</b> <br> Press any Key / Tap to restart.`;
    document.querySelector("body").style.backgroundImage = ("url('./bg2.jpg')");
    setTimeout(function(){
      document.querySelector("body").style.backgroundImage = ("url('./bg.jpg')");

    },300);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}


let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}

function reset()
{
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}