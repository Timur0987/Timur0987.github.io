const helloCalories = document.querySelector('.helloCalories')
const content = document.querySelector('.calculating')
const submit = document.querySelector('#submit'),
    surname = document.querySelector('#surname'),
    names = document.querySelector('#name'),
    divInput = document.querySelector('.divInput');
const token = '5281526738:AAG329-wUWs8qwmS83euaB9kY4hBRGCftDM';
const chat_id = '1875576355'
const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=зашёл на сайт ${names.value} ${surname.value}`

function sendMessage() {
    let xttp = new XMLHttpRequest();
    xttp.open("GET", `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=зашёл на сайт ${names.value} ${surname.value}`, true);
    xttp.send()
}
submit.addEventListener('click', (e) => {
    if(surname.value === '' && names.value === ''){
        names.placeholder = 'ведите имя'
        surname.placeholder = 'ведите фамилию'
        names.style.borderColor = 'red'
        surname.style.borderColor = 'red'
        e.preventDefault()
    } else{
        e.preventDefault()
        sendMessage()
        divInput.style.display = 'none'
        helloCalories.style.display = 'block'
    }
})



helloCalories.addEventListener('click', () => {
    helloCalories.style.display = 'none';
    content.style.display = 'block'
})





const result = document.querySelector('.calculating__result span');

let sex, height, weight, age, ratio;


if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
} else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
}

if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
} else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
}

function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
        result.textContent = '____';
        return;
    }
    if (sex === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        // output = result
        // let a = document.createElement('div');
        // console.log(a.appendChild(output))
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}

calcTotal();

function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
        elem.classList.remove(activeClass);
        if (elem.getAttribute('id') === localStorage.getItem('sex')) {
            elem.classList.add(activeClass);
        }
        if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            elem.classList.add(activeClass);
        }
    });
}

initLocalSettings('#gender div', 'calculating__choose-item_active');
initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));
            }

            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);

            calcTotal();
        });
    });
}

getStaticInformation('#gender div', 'calculating__choose-item_active');
getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {
        if (input.value.match(/\D/g)) {
            input.style.border = "1px solid red";
        } else {
            input.style.border = 'none';
        }
        switch (input.getAttribute('id')) {
            case "height":
                height = +input.value;
                break;
            case "weight":
                weight = +input.value;
                break;
            case "age":
                age = +input.value;
                break;
        }

        calcTotal();
    });
}
getDynamicInformation('#height');
getDynamicInformation('#weight');
getDynamicInformation('#age');
