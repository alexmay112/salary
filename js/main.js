"use strict"

const body = document.querySelector("body");
const actionBlock = document.querySelector(".action");
const btnYes = document.querySelector(".action__btn--yes");
const btnNo = document.querySelector(".action__btn--no");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal__btn");
const modalYes = document.querySelector(".modal--yes");
const modalNo = document.querySelector(".modal--no");
const resetBtn = document.querySelector(".modal__btn");
const errorFile = document.querySelector("#errorSound");
const successFile = document.querySelector("#successSound");
let count = 0;

const phraseArr = [
  "7 раз отмерь, один отрежь",
  "нормально же общались",
  "ну что ты начинаешь",
  "земли - крестьянам!",
  "Димам не положено",
  "Ленам не положено",
  "фабрики - рабочим!",
  "карантин!",
  "сходи покури",
  "выпей чаю",
  "может кофе?",
  "ты уроки сделал?",
  "ты серьезно?",
  "не в деньгах счастье",
  "COVID-19",
  "ну давай",
  "не бери тяжелого в руки",
  "не может быть",
  "сейчас повезет",
  "в другой раз",
  "подумай хорошо",
  "выше",
  "сколько волка не корми...",
  "сейчас точно",
  "оно тебе надо??",
  "теперь правее",
  "открой глаза",
  "отстань",
  "проспись",
  "отдохни",
  "остынь",
  "уже ближе",
  "немного левее",
  "ха-ха",
  "не попал",
  "тише",
  "2 * 2?",
  "сегодня не пятница?",
  "так близко",
  "как дела?",
  "давай уже после Пасхи",
  "давай с Нового года",
  "АААААА",
  "памагити",
  "та ладно..."
]

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function setShowDelay(elem, time) {
  setTimeout(function () {
    elem.classList.add("show");
  }, time);
}

function clickYes() {
  modalYes.classList.add("flex");
  successFile.play();
  setShowDelay(modalBtn, 2500);
}

function clickNo() {
  modalNo.classList.add("flex");
  errorFile.play();
}

function reset() {
  location.reload();
}

function mouseOverNo() {
  btnNo.textContent = phraseArr[randomInteger(0, phraseArr.length - 1)];
  let btnNoWidth = btnNo.offsetWidth;
  let btnNoHeight = btnNo.offsetHeight;
  let topPos = randomInteger(0, actionBlock.offsetHeight - btnNoHeight);
  let leftPos = randomInteger(0, actionBlock.offsetWidth - btnNoWidth);
  btnNo.style.transform = "none";
  btnNo.style.top = topPos + "px";
  btnNo.style.left = leftPos + "px";

  count += 5;

  if (btnYes.offsetWidth < actionBlock.offsetWidth && btnYes.offsetHeight < actionBlock.offsetHeight) {
    btnYes.classList.add("btn--master");
    btnYes.style.width = btnYes.offsetWidth + count + "px";
    btnYes.style.height = btnYes.offsetHeight + count + "px";
    btnYes.style.fontSize = 14 + count + "px";
  } else {
    count = 0;
    btnNo.style.display = "none";
    btnYes.style.animationDuration = "0.5s";
    btnYes.style.width = actionBlock.offsetWidth + "px";
    btnYes.style.height = actionBlock.offsetHeight + "px";
  }
}

if (document.documentElement.clientWidth < 1024) {
  body.classList.add("nophone");
  body.innerHTML = "только для Desktop";
} else {
  btnYes.addEventListener("click", clickYes);
  resetBtn.addEventListener("click", reset);
  btnNo.addEventListener("mouseover", mouseOverNo);
  btnNo.addEventListener("click", clickNo);
}