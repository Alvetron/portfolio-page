const pageEl = document.querySelector('.page');

const startScreen = document.querySelector('.start-screen');
const starsCanvas = document.querySelector('.stars-canvas');
const gustImg = document.querySelector('.start-screen__img'); 

const stars = (amount = 70) => {
    for(let i = 0; i < amount; i++ ) {
        const star = document.createElement('span');
        star.classList.add('stars-canvas__star');
    
        const starPosX = Math.random() * starsCanvas.offsetWidth; 
        const starSize = getRandomInt(2, 5);
        const animDuration = getRandomInt(20, 40);
        const animDelay = getRandomInt(0, -20);

        star.style.width = `${starSize}px`;
        star.style.height = `${starSize}px`;
        star.style.left = `${starPosX}px`;
        star.style.animationDuration = `${animDuration}s`;
        star.style.animationDelay = `${animDelay}s`;

        starsCanvas.appendChild(star);
    };
};

const getRandomInt = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

const eye = document.querySelector('.eye');
const eyeInner = document.querySelector('.eye__inner');

document.addEventListener('mousemove', e => {
    console.log(e)
    if(e.target.classList.contains('eye')) return false;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rect= eye.getBoundingClientRect();
    const eyeX = rect.left + eye.clientWidth / 2;
    const eyeY = rect.top + eye.clientHeight / 2;

    const radian = Math.atan2(eyeX - mouseX, eyeY - mouseY);
    
    const rotateDeg = radian * 180 / Math.PI * -1 - 45;
    
    eye.style.transform =  `rotate(${rotateDeg}deg)`;

});

const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav__open-btn');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('opened');
})

stars();
