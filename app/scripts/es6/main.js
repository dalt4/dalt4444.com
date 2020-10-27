//--------------------------preloader---------------------//

window.onload = () => {
    const mainPagePreloader = document.querySelector('.mainPage__preloader')
    setTimeout(() => mainPagePreloader.classList.add('active'), 100)
    setTimeout(() => mainPagePreloader.remove(), 700)
}

particlesJS("particles-js", {
    "particles": {
        "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#f50000"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#000000"},
            "polygon": {"nb_sides": 5},
            "image": {"src": "img/github.svg", "width": 100, "height": 100}
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
        },
        "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
        "line_linked": {"enable": true, "distance": 150, "color": "#fc0000", "opacity": 0.4, "width": 1},
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "repulse"},
            "onclick": {"enable": true, "mode": "push"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": true
});


const body = document.querySelector('body');
const indexHeader = document.querySelector('.header');
const header__intro = document.querySelector('.header__intro');

//------------------------------------------------mobil header--------------------------------------------------------//

body.style.paddingTop = window.innerWidth <= 767 ? indexHeader.clientHeight + 'px' : '';


//-----------------------------------------------main header and flag-------------------------------------------------//

const mainSections = document.querySelectorAll('main section')
const mainHeader = document.querySelector('.main__header');
const mainFlag = document.querySelector('.main__flag');
const navLine = document.querySelector('.main__header-nav-line');
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

pageYOffset > 0 ? mainFlag.classList.add('active') : '';

window.onscroll = () => {
    mainSections.forEach((item, i, arr) => {
        item.getBoundingClientRect().top < 200 && item.getBoundingClientRect().top > 0 ? navLine.style.width = (i + 1) * 15 + '%' : '';
    })

    pageYOffset > (scrollHeight - document.documentElement.clientHeight) - 20 ? navLine.style.width = '100%' : '';

    pageYOffset > 100 ? mainHeader.classList.add('active') : mainHeader.classList.remove('active');
    pageYOffset > 0 ? mainFlag.classList.add('active') : mainFlag.classList.remove('active');
}

mainFlag.onclick = () => {
    mainFlag.classList.add('active')
}

// Scroll to anchors
(() => {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.main__header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
})();

//--------------------------------------------------slick-------------------------------------------------------------//

const sliderPictures = document.querySelectorAll('.main__slick-pic');
const srcArray = [
    "../img/main/slider1/corvette-mob1-1.jpg",
    "../img/main/slider1/corvette-mob2-1.jpg",
    "../img/main/slider1/corvette-mob3-1.jpg"
]

window.innerWidth <= 767 ? sliderPictures.forEach((item, i) => {
    item.setAttribute('src', srcArray[i])
}) : '';

$('.main__slick-slider').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    easing: 'easy-in-out',
    dots: true,
    speed: 2000,
    arrows: false
});


//---------------------------------------------animation2 watch-------------------------------------------------------//

const replay2 = document.querySelector('.replay_watch');
const animationClock = document.querySelector('.animation-clock');

replay2.onclick = () => {
    animationClock.classList.remove('active');
    setTimeout(() => animationClock.classList.add('active'), 10)
}




//---------------------------------------------book-------------------------------------------------------------------//

let bookItem = document.querySelector('.book-item');
let bookScene = document.querySelector('.book-scene');
let bookItemFront = document.querySelector('.book-item__front');

function createFlipbook() {
    let flipTemplate = document.querySelector('#flip-template');
    let clone = document.importNode(flipTemplate.content, true);
    bookItemFront.appendChild(clone);
    $('#flipbook').turn();
    bookScene.onmouseleave = function () {
        $('#flipbook').turn('page', 1);
        bookItem.style.left = '';
    };
    $("#flipbook").bind("turned", function (event, page) {
        bookItem.style.left = (page === 1) ? '' : (() => {
            return window.innerWidth <= 767 ? '20vw' : '10vw';
        })()
    });
}

createFlipbook();

window.onresize = function () {
    $("#flipbook").turn("destroy").remove();
    createFlipbook();
};

//---------------------------------------------video-bg-------------------------------------------------------------------//

$('.video__background').vide({
    mp4: '../img/main/video/mountain.mp4',
    poster: '../img/main/video/mountain.jpg'
}, {
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    position: '50% 50%', // Similar to the CSS `background-position` property.
    posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
    resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
    bgColor: 'transparent', // Allow custom background-color for Vide div,
    className: '' // Add custom CSS class to Vide div
});

//---------------------------------------------button10-------------------------------------------------------------------//

const button10 = $('.buttons__item10');
button10.mousemove(function (e) {
    let x = e.pageX - button10.offset().left;
    let y = e.pageY - button10.offset().top;
    button10.css('--x', x + 'px');
    button10.css('--y', y + 'px');
});

//---------------------------------------------menu1-------------------------------------------------------------------//


(() => {
    let circleMaxItem = 5;
    const circleMenu = $('.menu__item1');

    function createCircleMenuItem() {
        for (let i = 1; i <= circleMaxItem; i++) {
            let itemClass = 'ic' + i;
            circleMenu.append('<div class="' + itemClass + '"><span>option<br> ' + i + '</span></div>');
            $('.' + itemClass).css({
                'transform': ' rotateZ(' + (360 / circleMaxItem) * (i - 1) + 'deg) skewX(' + (90.1 - 360 / circleMaxItem) + 'deg)'
            });
            itemClass === 'ic1' ? $('.ic1').addClass('active') : '';
        }

        circleMenu.css({
            'transform':
                'translateX(-50%) translateY(-50%)' +
                'rotateZ(' + (-360 / circleMaxItem / 2) + 'deg)'
        })
    }

    createCircleMenuItem();

    $('.menu__item1 div').on('click', function () {

        $('.menu__item1 div').removeClass('active');

        $(this).addClass('active');

        circleMenu.css({
            'transform':
                'translateX(-50%) translateY(-50%)' +
                'rotateZ(' + ((-360 / circleMaxItem / 2) - (parseInt(this.innerText.slice(-1)) - 1) * (360 / circleMaxItem)) + 'deg)'
        });
    });

//    menu2

    const burger2 = document.querySelector('.menu__item2-burger'),
        menuLinkContainer = document.querySelector('.menu__item2-links'),
        menuLiksArr = document.querySelectorAll('.menu__item2-link');

    burger2.onclick = () => {
        burger2.classList.toggle('active');
        menuLinkContainer.classList.toggle('active');
        setTimeout(() => {
            menuLiksArr.forEach((item) => item.classList.toggle('active'))
        }, 600)
    }

//    menu3

    const menu3Links = document.querySelectorAll('.menu__item3-link');

    menu3Links[0].onclick = () => {
        menu3Links.forEach((i) => i.classList.toggle('active'));
        menu3Links[0].classList.contains('active') ? menu3Links[0].innerHTML = '<i class="fas fa-times"></i>' :
            menu3Links[0].innerHTML = '<i class="fas fa-align-justify"></i>';
    }

})()