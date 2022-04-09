

    //Hello
 const data = new Date()
 const token  = '5281526738:AAG329-wUWs8qwmS83euaB9kY4hBRGCftDM';
 const chat_id = '1875576355'
//  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=Человек зашёл на страницу вo ${data.getMonth() + 1} месяце ${data.getDate()} числа в ${data.getHours()}:${data.getMinutes()} `
 const btnHello  = document.querySelector('.helloBtnWhite');
 const infoHello = document.querySelector('.infoHelloWhite');
 const body = document.querySelector('.body');
 const colorWhite = document.querySelector('.white');
 const colorBlack = document.querySelector('.black');
 const names = document.querySelector('.nameWhite');
 const demoNames = document.querySelector('.demoName');
 const ChooseName = document.querySelector('.ChooseNameWhite');
 infoHello.style.display = 'none';
 names.style.display = 'none';
//  function sendMessage(){
//     let xttp = new XMLHttpRequest();
//     xttp.open("GET", url, true);
//     xttp.send()
// }
// // window.addEventListener('DOMContentLoaded', sendMessage)
 btnHello.addEventListener('click', () =>{
     infoHello.classList.add('infoHelloAnimation');
     infoHello.style.display = 'block';
     names.classList.add('infoHelloAnimation');
     names.style.display = 'block';
     demoNames.style.display = 'none';
     setTimeout(()=>{
         btnHello.innerHTML = '<a class="href" href="hello.html">Продолжить</a>';
     },3000)


 });
 localStorage.setItem('color', 'white');
 colorBlack.addEventListener('click', () =>{
     if(localStorage.getItem('color') === 'white'){
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

 colorWhite.addEventListener('click', () =>{
     if(localStorage.getItem('color') === 'black'){
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

    let time = new Date().getHours();
    console.log(time)
    if(time >= 6 && time < 23 ){
        btnHello.innerHTML = 'Добрый Вечер'
    }else if(time >= 23 && time < 4 ){
         btnHello.innerHTML = ' Доброй ночи'
    }else if(time >= 4 && time < 12){
        btnHello.innerHTML = 'Доброе утро'
    }else if(time >= 12 && time < 6){
        btnHello.innerHTML = 'Добрый день '
    }
