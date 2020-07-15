'use strict';

$(window).on('scroll', function () {
    var scroll = $(this).scrollTop();
    var width = $(this).outerWidth();
    var heightContent = $('.content').outerHeight();
    var heightParallax = $('.parallax').outerHeight();
    var percentScroll = scroll / heightContent * 100;
    var percentScrollParallax = scroll / heightParallax * 100;
    var opacity = 1 - 1 / 100 * percentScrollParallax;
    var zoom1 = 1 + width / 10000 * percentScrollParallax;
    var zoom2 = 1 + width / 5000000 * percentScroll;
    var zoom3 = 1 + width / 500000 * percentScrollParallax;
    var zoom4 = 1 + width / 100000 * percentScrollParallax;
    var slide1 = width / 2000 * percentScrollParallax;
    var slide2 = width / 1500 * percentScrollParallax;
    var header = $('header');
    var footer = $('footer');

    if (scroll > 0 && !header.hasClass('zoomIn')) {
        $('.fog2').addClass('hide');
        header.addClass('zoomIn');
        $('.aboutCert').addClass('zoomOut_0');
    } else if (scroll === 0 && header.hasClass('zoomIn')) {
        header.removeClass('zoomIn');
        $('.aboutCert').removeClass('zoomOut_0');
        $('.fog2').removeClass('hide');
    }

    if (scroll > 0 && !footer.hasClass('zoomInDown')) {
        footer.addClass('zoomInDown');
    } else if (scroll === 0 && footer.hasClass('zoomInDown')) {
        footer.removeClass('zoomInDown');
    }

    $('.fog').css({ 'transform': 'scale(' + zoom1 + ')', 'opacity': opacity });
    $('.montain1').css('transform', 'scale(' + zoom2 + ')');
    $('.montain2').css('transform', 'translateX(' + slide1 + 'px) scale(' + zoom3 + ')');
    $('.montain3').css('transform', 'translateX(' + slide2 + 'px) scale(' + zoom4 + ')');
});

window.onscroll = function () {
    var cert = document.querySelectorAll('.cert');
    var montain = document.querySelector('.montain');
    cert.forEach(function (item, i) {
        item.getBoundingClientRect().top < montain.clientHeight / 2 && item.getBoundingClientRect().top > montain.clientHeight / 20 ? item.classList.add('active') : item.classList.remove('active');
    });
};

var aboutCertSpans = document.querySelectorAll('.aboutCert span');

var getRandomInt = function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

var spanInterval = setInterval(function () {
    aboutCertSpans[getRandomInt(4)].classList.toggle('active');
}, 200);