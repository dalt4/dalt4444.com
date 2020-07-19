'use strict';

var order__navItem = document.querySelectorAll('.order__nav-item');
var order__list = document.querySelectorAll('.order__list');
var order__closeItem = document.querySelectorAll('.order__close-item');

order__navItem.forEach(function (item, i) {
    item.onclick = function () {
        return order__list[i].classList.add('active');
    };
});

order__closeItem.forEach(function (item, i) {
    item.onclick = function () {
        return order__list[i].classList.remove('active');
    };
});