'use strict';

//-------------------------create bones-------------------------------------------------------------------------------//

(function () {
    var boneScenes = document.querySelectorAll('.header__nav-bone');
    for (var i = 0; i < boneScenes.length; i++) {
        var bone = document.createElement('div');
        bone.classList.add('bone');
        boneScenes[i].appendChild(bone);
    }

    var bones = document.querySelectorAll('.bone');

    for (var _i = 0; _i < boneScenes.length; _i++) {
        for (var j = 0; j < 6; j++) {
            var boneFace = document.createElement('div');
            boneFace.classList.add('bone-face');
            bones[_i].appendChild(boneFace);
        }
    }
})();

//---------------------------------title operations-------------------------------------------------------------------//


var stitle = document.querySelector('title');
var title2Interval = void 0;
// let titleText = stitle.innerText;
// let textArr = titleText.split('');
// let textArrSlice = textArr.slice(0, 3);
// console.log(textArrSlice);

var titleInterval = setInterval('stitle.innerText = \'(-).(o)\'', 2000);
setTimeout(function () {
    title2Interval = setInterval('stitle.innerText = \'(o).(-)\'', 2000);
    return title2Interval;
}, 1000);

setTimeout(function () {
    clearInterval(titleInterval);
    clearInterval(title2Interval);
    stitle.innerText = 'Веб-разработчиик';
}, 5500);

//---------------------------------footer linkBleach-------------------------------------------//

function linkBleach() {
    var footerLinks = document.querySelectorAll('.footer__section-link');

    footerLinks.forEach(function (item, i) {

        function changeColor(color, timeout) {
            setTimeout(function () {
                item.style.color = color;
            }, i * timeout);
        }

        changeColor('white', 150);
        setTimeout(changeColor, 300, '', 150);
    });
}

linkBleach();

var linkBleachInt = setInterval(linkBleach, 12000);

//----------------------------mobile menu------------------------------------------------------//

var mobileMenu = document.querySelector('.mobile-menu');
var headerNav = document.querySelector('.header__nav');

mobileMenu.onclick = function () {
    mobileMenu.classList.toggle('active');
    headerNav.classList.toggle('active');
    mobileMenu.classList.contains('active') ? mobileMenu.innerHTML = 'закрыть' : mobileMenu.innerHTML = 'МЕНЮ';
};