let btn = document.querySelector('.infoHTML');
let text = document.querySelector('.information');

btn.addEventListener('click', () =>{
    btn.style.display = 'none';
    text.style.display = 'block';
    btn.classList.add('animation-hide');
    text.classList.add('animation-show');
});

//примеры 
//