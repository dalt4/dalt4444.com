'use strict';

var body = document.querySelector('body');
var indexHeader = document.querySelector('.header');
var header__intro = document.querySelector('.header__intro');

//------------------------------------------------mobil header--------------------------------------------------------//

body.style.paddingTop = window.innerWidth <= 767 ? indexHeader.clientHeight + 'px' : '';

//-----------------------------------------------main header and flag-------------------------------------------------//

var mainSections = document.querySelectorAll('main section');
var mainHeader = document.querySelector('.main__header');
var mainFlag = document.querySelector('.main__flag');
var navLine = document.querySelector('.main__header-nav-line');
var scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);

pageYOffset > 0 ? mainFlag.classList.add('active') : '';

window.onscroll = function () {
    mainSections.forEach(function (item, i, arr) {
        item.getBoundingClientRect().top < 200 && item.getBoundingClientRect().top > 0 ? navLine.style.width = (i + 1) * 15 + '%' : '';
    });

    pageYOffset > scrollHeight - document.documentElement.clientHeight - 20 ? navLine.style.width = '100%' : '';

    pageYOffset > 100 ? mainHeader.classList.add('active') : mainHeader.classList.remove('active');
    pageYOffset > 0 ? mainFlag.classList.add('active') : mainFlag.classList.remove('active');
};

// Scroll to anchors
(function () {

    var smoothScroll = function smoothScroll(targetEl, duration) {
        var headerElHeight = document.querySelector('.main__header').clientHeight;
        var target = document.querySelector(targetEl);
        var targetPosition = target.getBoundingClientRect().top - headerElHeight;
        var startPosition = window.pageYOffset;
        var startTime = null;

        var ease = function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        var animation = function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    var scrollTo = function scrollTo() {
        var links = document.querySelectorAll('.js-scroll');
        links.forEach(function (each) {
            each.addEventListener('click', function () {
                var currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
})();

//--------------------------------------------------slick-------------------------------------------------------------//

$('.main__slick-slider').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    easing: 'easy-in-out',
    dots: true,
    speed: 2000,
    arrows: false
});

//--------------------------------------------------animation-------------------------------------------------------------//

var animationItems = document.querySelectorAll('.main__animation-item');
var animationCovers = document.querySelectorAll('.animation-item__cover');
var animationCoverButtons = document.querySelectorAll('.animation-item__cover-button');
var fullScreenButtons = document.querySelectorAll('.fullScreen');

animationItems.forEach(function (item, i) {
    item.onmouseleave = function () {
        return animationCovers[i].style.top = '0';
    };
});

animationCovers.forEach(function (item) {
    item.style.top = '0';
});

animationCoverButtons.forEach(function (item, i) {
    item.onclick = function () {
        animationCovers[i].style.top = '';
        i === 0 ? function () {
            var earthCanvas = document.querySelector('.earth-scene canvas');
            earthCanvas ? earthCanvas.remove() : '';
            setTimeout(animation1, 10);
        }() : i === 2 ? function () {
            var scullCanvas = document.querySelector('.scull-scene canvas');
            scullCanvas ? scullCanvas.remove() : '';
            setTimeout(animation3, 10);
        }() : '';
    };
});

fullScreenButtons.forEach(function (item, i) {
    item.onclick = function () {
        animationItems[i].classList.toggle('active');
        body.classList.toggle('active');
        i === 0 ? function () {
            var earthCanvas = document.querySelector('.earth-scene canvas');
            earthCanvas ? earthCanvas.remove() : '';
            setTimeout(animation1, 10);
        }() : i === 2 ? function () {
            var scullCanvas = document.querySelector('.scull-scene canvas');
            scullCanvas ? scullCanvas.remove() : '';
            setTimeout(animation3, 10);
        }() : '';
    };
});

//--------------------------------------------------animation 1-------------------------------------------------------------//

function animation1() {

    var earthScene = document.querySelector('.earth-scene');
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(earthScene.offsetWidth, earthScene.offsetHeight);
    earthScene.appendChild(renderer.domElement);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(20, earthScene.offsetWidth / earthScene.offsetHeight, .1, 5000);

    camera.position.set(100, 250, 2000);
    camera.rotation.y = 0;
    camera.rotation.z = 0;
    camera.rotation.x = 0;

    var light1 = new THREE.AmbientLight(0xffffff, .1);
    scene.add(light1);

    var light = new THREE.PointLight(0xffffff, 1);
    light.position.set(380, 250, 500);
    scene.add(light);

    var textureLoader = new THREE.TextureLoader();
    var geometry = new THREE.SphereBufferGeometry(300, 50, 50);
    var material = new THREE.MeshPhongMaterial({
        shininess: 5,
        map: textureLoader.load('../img/main/animation1/earth_atmos_2048.jpg'),
        specularMap: textureLoader.load('../img/main/animation1/earth_specular_2048.jpg'),
        normalMap: textureLoader.load('../img/main/animation1/earth_normal_2048.jpg'),
        normalScale: new THREE.Vector2(0.85, 0.85)
    });
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    var geometry2 = new THREE.SphereBufferGeometry(305, 50, 50);
    var material2 = new THREE.MeshPhongMaterial({
        transparent: true,
        map: textureLoader.load('../img/main/animation1/earth_clouds_2048.png')
    });
    var mesh2 = new THREE.Mesh(geometry2, material2);
    scene.add(mesh2);

    var loop = function loop() {
        camera.position.z > 500 ? camera.position.z-- : '';
        mesh.rotation.y += -.0005;
        mesh2.rotation.y += -.0005;
        mesh2.rotation.x += -.00005;
        mesh2.rotation.z += -.00005;
        renderer.render(scene, camera);
        requestAnimationFrame(function () {
            loop();
        });
    };

    loop();
}

var replay1 = document.querySelector('.earth-scene .replay');
replay1.onclick = function () {
    var earthCanvas = document.querySelector('.earth-scene canvas');
    earthCanvas.remove();
    setTimeout(animation1, 10);
};

//---------------------------------------------animation2 watch-------------------------------------------------------//

var replay2 = document.querySelector('.replay_watch');
var animationClock = document.querySelector('.animation-clock');

replay2.onclick = function () {
    animationClock.classList.remove('active');
    setTimeout(function () {
        return animationClock.classList.add('active');
    }, 10);
};

//---------------------------------------------animation3 scull-------------------------------------------------------//

function animation3() {
    var scullScene = document.querySelector('.scull-scene');
    var scene = void 0,
        camera = void 0,
        renderer = void 0,
        light = void 0,
        controls = void 0,
        car = void 0,
        light2 = void 0,
        light3 = void 0;

    function init() {

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        camera = new THREE.PerspectiveCamera(40, scullScene.offsetWidth / scullScene.offsetHeight, 1, 5000);
        camera.rotation.x = -3.14 / 12;
        camera.position.x = 0;
        camera.position.y = 200;
        camera.position.z = 500;

        light = new THREE.PointLight(0xFAEBD7, 1);
        light.position.set(-100, 100, 100);
        scene.add(light);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(scullScene.offsetWidth, scullScene.offsetHeight);
        scullScene.appendChild(renderer.domElement);

        var loader = new THREE.GLTFLoader();
        loader.load('../img/main/animation3/scull/scene.gltf', function (gltf) {
            car = gltf.scene.children[0];
            car.position.x = 0;
            car.position.y = 0;
            car.position.z = 0;
            car.rotation.y = 0;

            scene.add(gltf.scene);
            animate();
        });
    }

    function animate() {
        renderer.render(scene, camera);

        car.rotation.z += .01;
        requestAnimationFrame(animate);
    }

    init();
}

var replay3 = document.querySelector('.scull-scene .replay');
replay3.onclick = function () {
    var scullCanvas = document.querySelector('.scull-scene canvas');
    scullCanvas.remove();
    setTimeout(animation3, 10);
};

//---------------------------------------------book-------------------------------------------------------------------//

var bookItem = document.querySelector('.book-item');
var bookScene = document.querySelector('.book-scene');
var bookItemFront = document.querySelector('.book-item__front');

function createFlipbook() {
    var flipTemplate = document.querySelector('#flip-template');
    var clone = document.importNode(flipTemplate.content, true);
    bookItemFront.appendChild(clone);
    $('#flipbook').turn();
    bookScene.onmouseleave = function () {
        $('#flipbook').turn('page', 1);
        bookItem.style.left = '';
    };
    $("#flipbook").bind("turned", function (event, page) {
        bookItem.style.left = page === 1 ? '' : function () {
            return window.innerWidth <= 767 ? '20vw' : '10vw';
        }();
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

var button10 = $('.buttons__item10');
button10.mousemove(function (e) {
    var x = e.pageX - button10.offset().left;
    var y = e.pageY - button10.offset().top;
    button10.css('--x', x + 'px');
    button10.css('--y', y + 'px');
});

//---------------------------------------------menu1-------------------------------------------------------------------//


(function () {
    var circleMaxItem = 5;
    var circleMenu = $('.menu__item1');

    function createCircleMenuItem() {
        for (var i = 1; i <= circleMaxItem; i++) {
            var itemClass = 'ic' + i;
            circleMenu.append('<div class="' + itemClass + '"><span>option<br> ' + i + '</span></div>');
            $('.' + itemClass).css({
                'transform': ' rotateZ(' + 360 / circleMaxItem * (i - 1) + 'deg) skewX(' + (90.1 - 360 / circleMaxItem) + 'deg)'
            });
            itemClass === 'ic1' ? $('.ic1').addClass('active') : '';
        }

        circleMenu.css({
            'transform': 'translateX(-50%) translateY(-50%)' + 'rotateZ(' + -360 / circleMaxItem / 2 + 'deg)'
        });
    }

    createCircleMenuItem();

    $('.menu__item1 div').on('click', function () {

        $('.menu__item1 div').removeClass('active');

        $(this).addClass('active');

        circleMenu.css({
            'transform': 'translateX(-50%) translateY(-50%)' + 'rotateZ(' + (-360 / circleMaxItem / 2 - (parseInt(this.innerText.slice(-1)) - 1) * (360 / circleMaxItem)) + 'deg)'
        });
    });

    //    menu2

    var burger2 = document.querySelector('.menu__item2-burger'),
        menuLinkContainer = document.querySelector('.menu__item2-links'),
        menuLiksArr = document.querySelectorAll('.menu__item2-link');

    burger2.onclick = function () {
        burger2.classList.toggle('active');
        menuLinkContainer.classList.toggle('active');
        setTimeout(function () {
            menuLiksArr.forEach(function (item) {
                return item.classList.toggle('active');
            });
        }, 600);
    };

    //    menu3

    var menu3Links = document.querySelectorAll('.menu__item3-link');

    menu3Links[0].onclick = function () {
        menu3Links.forEach(function (i) {
            return i.classList.toggle('active');
        });
        menu3Links[0].classList.contains('active') ? menu3Links[0].innerHTML = '<i class="fas fa-times"></i>' : menu3Links[0].innerHTML = '<i class="fas fa-align-justify"></i>';
    };
})();