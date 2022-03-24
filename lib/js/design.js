"use strict";

//Hello
var data = new Date();
var token = '5281526738:AAG329-wUWs8qwmS83euaB9kY4hBRGCftDM';
var chat_id = '1875576355';
var url = "https://api.telegram.org/bot".concat(token, "/sendMessage?chat_id=").concat(chat_id, "&text=\u0427\u0435\u043B\u043E\u0432\u0435\u043A \u0437\u0430\u0448\u0451\u043B \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432o ").concat(data.getMonth() + 1, " \u043C\u0435\u0441\u044F\u0446\u0435 ").concat(data.getDate(), " \u0447\u0438\u0441\u043B\u0430 \u0432 ").concat(data.getHours(), ":").concat(data.getMinutes(), " ");
var btnHello = document.querySelector('.helloBtnWhite');
var infoHello = document.querySelector('.infoHelloWhite');
var body = document.querySelector('.body');
var colorWhite = document.querySelector('.white');
var colorBlack = document.querySelector('.black');
var names = document.querySelector('.nameWhite');
var demoNames = document.querySelector('.demoName');
var ChooseName = document.querySelector('.ChooseNameWhite');
infoHello.style.display = 'none';
names.style.display = 'none';

function sendMessage() {
  var xttp = new XMLHttpRequest();
  xttp.open("GET", url, true);
  xttp.send();
}

window.addEventListener('DOMContentLoaded', sendMessage);
btnHello.addEventListener('click', function () {
  infoHello.classList.add('infoHelloAnimation');
  infoHello.style.display = 'block';
  names.classList.add('infoHelloAnimation');
  names.style.display = 'block';
  demoNames.style.display = 'none';
  setTimeout(function () {
    btnHello.innerHTML = '<a class="href" href="hello.html">Продолжить</a>';
  }, 3000);
});
localStorage.setItem('color', 'white');
colorBlack.addEventListener('click', function () {
  if (localStorage.getItem('color') === 'white') {
    body.classList.add('blackTheme');
    body.classList.remove('whiteTheme');
    localStorage.setItem('color', 'black');
    btnHello.classList.add('helloBtnBlack');
    btnHello.classList.remove('helloBtnWhite');
    infoHello.classList.add('infoHelloBlack');
    infoHello.classList.remove('infoHelloWhite');
    names.classList.add('nameBlack');
    names.classList.remove('nameWhite');
    ChooseName.classList.add('ChooseNameBlack');
    ChooseName.classList.remove('ChooseNameWhite');
  }
});
colorWhite.addEventListener('click', function () {
  if (localStorage.getItem('color') === 'black') {
    body.classList.add('whiteTheme');
    body.classList.remove('blackTheme');
    localStorage.setItem('color', 'white');
    btnHello.classList.remove('helloBtnBlack');
    btnHello.classList.add('helloBtnWhite');
    infoHello.classList.add('infoHelloWhite');
    infoHello.classList.remove('infoHelloBlack');
    names.classList.remove('nameBlack');
    names.classList.add('nameWhite');
    ChooseName.classList.remove('ChooseNameBlack');
    ChooseName.classList.add('ChooseNameWhite');
  }
});
var time = new Date().getHours();
console.log(time);

if (time >= 6 && time < 23) {
  btnHello.innerHTML = 'Добрый Вечер';
} else if (time >= 23 && time < 4) {
  btnHello.innerHTML = ' Доброй ночи';
} else if (time >= 4 && time < 12) {
  btnHello.innerHTML = 'Доброе утро';
} else if (time >= 12 && time < 6) {
  btnHello.innerHTML = 'Добрый день ';
}