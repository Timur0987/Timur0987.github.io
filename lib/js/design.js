"use strict";

//Hello
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