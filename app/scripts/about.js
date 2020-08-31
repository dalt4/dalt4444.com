'use strict';

//-----------------------------------------------------greetings mech-------------------------------------------------//

checkTime();

function checkTime() {
    var about__resumeTitle = document.querySelector('.about__resume-title');
    var tm = new Date();
    var h = tm.getHours();
    h >= 5 && h < 11 ? about__resumeTitle.textContent = 'Доброе утро!' : h >= 11 && h < 18 ? about__resumeTitle.textContent = 'Добрый день!' : h >= 18 && h < 22 ? about__resumeTitle.textContent = 'Добрый вечер!' : about__resumeTitle.textContent = 'Доброй ночи!';

    setTimeout(checkTime, 60000);
}

//-----------------------------------------------------timer mech-------------------------------------------------//

var itStart = 1395770400000;
var webStart = 1543907725000;
var about__resume_timerIt = document.querySelector('.about__resume_timer-it span');
var about__resume_timerWeb = document.querySelector('.about__resume_timer-web span');

function getElapsedTime(timer, start) {

    var timerValue = Math.floor(new Date().getTime()) - start;
    var mseconds = Math.floor(new Date().getMilliseconds() / 10);
    var seconds = Math.floor(timerValue / 1000 % 60);
    var minutes = Math.floor(timerValue / 1000 / 60 % 60);
    var hours = Math.floor(timerValue / (1000 * 60 * 60) % 24);
    var days = Math.floor(timerValue / (1000 * 60 * 60 * 24) % 365);
    var years = Math.floor(timerValue / (1000 * 60 * 60 * 24 * 365));

    mseconds = checkNull(mseconds);
    seconds = checkNull(seconds);
    minutes = checkNull(minutes);
    hours = checkNull(hours);

    function checkNull(i) {
        if (i < 10) i = '0' + i;
        return i;
    }

    timer.innerText = years + (years < 5 && years > 1 ? ' года ' : years === 1 ? ' год ' : ' лет ') + days + (days.toString().slice(-1) < 5 && days.toString().slice(-1) > 1 ? ' дня ' : days.toString().slice(-1) === '1' ? ' день ' : ' дней ') + hours + ':' + minutes + ':' + seconds + '::' + mseconds;
}

setInterval(function () {
    getElapsedTime(about__resume_timerIt, itStart);
    getElapsedTime(about__resume_timerWeb, webStart);
}, 10);

var resumeDescription__age = document.querySelector('.resume-description__age');
resumeDescription__age.innerText = Math.floor((Math.floor(new Date().getTime()) - 178416000000) / (1000 * 60 * 60 * 24 * 365.25));

//-----------------------------------------------------coin animate-------------------------------------------------//

var about__scillsItem = document.querySelectorAll('.about__scills-item');
var weight = 10;

about__scillsItem.forEach(function (item, i) {
    item.onmouseenter = function () {
        !item.classList.contains('animate2') ? function () {
            item.classList.add('animate2');
            var coinTimeout = setTimeout(function () {
                item.classList.remove('animate2');
            }, 3000);
        }() : '';
    };
    item.classList.add('animate');
    setTimeout(function () {
        item.classList.remove('animate');
    }, 3000);
    for (var _i = 0; _i <= weight; _i++) {
        var new_layer = document.createElement('div');
        new_layer.style.transform = 'translateZ(-' + (weight - _i) + 'px)';
        item.appendChild(new_layer);
    }
});

setInterval(function () {
    var randomId = Math.floor(Math.random() * Math.floor(7));
    !about__scillsItem[randomId].classList.contains('animate2') ? function () {
        about__scillsItem[randomId].classList.add('animate2');
        var coinTimeout = setTimeout(function () {
            return about__scillsItem[randomId].classList.remove('animate2');
        }, 3000);
    }() : '';
}, 10000);