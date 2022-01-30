// let btn = document.querySelector('.infoHTML');
// let text = document.querySelector('.information');
// let nameBloks = document.querySelector('.name');

// btn.addEventListener('click', () =>{
//     btn.style.display = 'none';
//     text.style.display = 'block';
//     text.classList.add('animation-show');
//     nameBloks.classList.add('animation-hide');
//     // nameBloks.setsetTimeout(()=>{
//     //     nameBloks.style.display = 'none';
//     // },2000);
// });


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
    btnHello.addEventListener('click', () =>{
        infoHello.classList.add('infoHelloAnimation');
        infoHello.style.display = 'block';
        names.classList.add('infoHelloAnimation');
        names.style.display = 'block';
        demoNames.style.display = 'none';


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