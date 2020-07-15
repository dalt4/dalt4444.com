'use strict';

var porfolio__navLinks = document.querySelectorAll('.porfolio__nav-link'),
    portfolio__siteInfo = document.querySelector('.portfolio__site-info'),
    infoDescription = document.querySelector('.portfolio__site-info_description'),
    potfolio__siteLink = document.querySelector('.potfolio__site-link'),
    scene__deck = document.querySelector('.scene__deck'),
    portfolio__closeItem = document.querySelector('.portfolio__close-item'),
    portfolio__items = document.querySelectorAll('.portfolio__item');

var siteLinksArray = ['http://xn--80audjku.xn--p1acf/', 'https://avgm.kz/', 'https://odigo.sitetest.pro/', 'https://harley.sitetest.pro/', 'https://www.drumart.ee/'];

var descriptionSiteArray = ['Полный цикл разработки от дизайна до размещения на хостинге', 'Полный цикл разработки от дизайна до размещения на хостинге', 'Верстка макета главной страницы из Figma + адаптив', 'Верстка главной страницы из PSD макета', 'Полная переделка сайта с Adobe muse'];

potfolio__siteLink.onclick = function (e) {
    return !potfolio__siteLink.classList.contains('active') ? e.preventDefault() : '';
};

porfolio__navLinks.forEach(function (item, i) {
    item.onclick = function () {
        porfolio__navLinks.forEach(function (item) {
            return item.classList.remove('active');
        });
        item.classList.add('active');
        portfolio__siteInfo.classList.add('active');
        potfolio__siteLink.classList.add('active');
        potfolio__siteLink.setAttribute('href', siteLinksArray[i]);
        scene__deck.classList.add('active');
        scene__deck.style.transform = 'translateZ(-500px) rotateY(' + 72 * -i + 'deg)';
        portfolio__items.forEach(function (item) {
            return item.classList.remove('active');
        });
        portfolio__items[i].classList.add('active');
        infoDescription.textContent = descriptionSiteArray[i];
        setTimeout(function () {
            return portfolio__items[i].style.overflowY = 'auto';
        }, 900);
    };
});

portfolio__items.forEach(function (item, i) {
    item.onclick = function () {
        portfolio__items.forEach(function (item) {
            return item.classList.remove('active');
        });
        item.classList.add('active');
        portfolio__siteInfo.classList.add('active');
        potfolio__siteLink.classList.add('active');
        potfolio__siteLink.setAttribute('href', siteLinksArray[i]);
        scene__deck.classList.add('active');
        scene__deck.style.transform = 'translateZ(-500px) rotateY(' + 72 * -i + 'deg)';
        porfolio__navLinks.forEach(function (item) {
            return item.classList.remove('active');
        });
        porfolio__navLinks[i].classList.add('active');
        infoDescription.textContent = descriptionSiteArray[i];
        setTimeout(function () {
            return portfolio__items[i].style.overflowY = 'auto';
        }, 900);
    };
});

portfolio__closeItem.onclick = function () {
    porfolio__navLinks.forEach(function (item) {
        return item.classList.remove('active');
    });
    portfolio__items.forEach(function (item) {
        item.classList.remove('active');
        item.style.overflowY = '';
    });
    portfolio__siteInfo.classList.remove('active');
    potfolio__siteLink.classList.remove('active');
    scene__deck.classList.remove('active');
    scene__deck.style.transform = '';
    infoDescription.textContent = '';
};