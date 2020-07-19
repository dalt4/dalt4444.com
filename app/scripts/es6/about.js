//-----------------------------------------------------greetings mech-------------------------------------------------//

checkTime();

function checkTime() {
    const about__resumeTitle = document.querySelector('.about__resume-title');
    const tm = new Date();
    let h = tm.getHours();
    h >= 5 && h < 11 ? about__resumeTitle.textContent = 'Доброе утро!' :
        h >= 11 && h < 18 ? about__resumeTitle.textContent = 'Добрый день!' :
            h >= 18 && h < 22 ? about__resumeTitle.textContent = 'Добрый вечер!' :
                about__resumeTitle.textContent = 'Доброй ночи!';

    setTimeout(checkTime, 60000);
}

//-----------------------------------------------------timer mech-------------------------------------------------//

const itStart = 1395770400000;
const webStart = 1543907725000;
const about__resume_timerIt = document.querySelector('.about__resume_timer-it span');
const about__resume_timerWeb = document.querySelector('.about__resume_timer-web span');

function getElapsedTime(timer, start) {

    let timerValue = Math.floor(new Date().getTime()) - start;
    let mseconds = Math.floor(new Date().getMilliseconds() / 10);
    let seconds = Math.floor((timerValue / 1000) % 60);
    let minutes = Math.floor((timerValue / 1000 / 60) % 60);
    let hours = Math.floor((timerValue / (1000 * 60 * 60)) % 24);
    let days = Math.floor((timerValue / (1000 * 60 * 60 * 24)) % 365);
    let years = Math.floor(timerValue / (1000 * 60 * 60 * 24 * 365));

    mseconds = checkNull(mseconds);
    seconds = checkNull(seconds);
    minutes = checkNull(minutes);
    hours = checkNull(hours);

    function checkNull(i) {
        if (i < 10) i = '0' + i;
        return i
    }

    timer.innerText = years + (years < 5 && years > 1 ? ' года ' : years < 2 ? ' год ' : ' лет ') + days
        + (days.toString().slice(-1) < 5 && days.toString().slice(-1) > 1 ? ' дня ' : days.toString().slice(-1) < 2 ? ' день ' : ' дней ')
        + hours + ':' + minutes + ':' + seconds + '::' + mseconds;

}

setInterval(() => {
    getElapsedTime(about__resume_timerIt, itStart);
    getElapsedTime(about__resume_timerWeb, webStart)
}, 10)

const resumeDescription__age = document.querySelector('.resume-description__age');
resumeDescription__age.innerText = Math.floor((Math.floor(new Date().getTime()) - 178466400000) / (1000 * 60 * 60 * 24 * 365));

//-----------------------------------------------------coin animate-------------------------------------------------//

const about__scillsItem = document.querySelectorAll('.about__scills-item');
let weight = 10;

about__scillsItem.forEach((item, i) => {
    item.onmouseenter = () => {
        !item.classList.contains('animate2') ? (() => {
            item.classList.add('animate2');
            let coinTimeout = setTimeout(() => {
                item.classList.remove('animate2');
            }, 3000)
        })() : '';
    }
    item.classList.add('animate');
    setTimeout(() => {
        item.classList.remove('animate');
    }, 3000)
    for (let i = 0; i <= weight; i++) {
        let new_layer = document.createElement('div');
        new_layer.style.transform = 'translateZ(-' + (weight - i) + 'px)';
        item.appendChild(new_layer);
    }
})

setInterval(() => {
    let randomId = Math.floor(Math.random() * Math.floor(7));
    !about__scillsItem[randomId].classList.contains('animate2') ? (() => {
        about__scillsItem[randomId].classList.add('animate2');
        let coinTimeout = setTimeout(() => about__scillsItem[randomId].classList.remove('animate2'), 3000)
    })() : '';
}, 10000)
