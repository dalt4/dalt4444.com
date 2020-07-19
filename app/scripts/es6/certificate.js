$(window).on('scroll', function () {
    let scroll = $(this).scrollTop();
    let width = $(this).outerWidth();
    let heightContent = $('.content').outerHeight();
    let heightParallax = $('.parallax').outerHeight();
    let percentScroll = scroll / heightContent * 100;
    let percentScrollParallax = scroll / heightParallax * 100;
    let opacity = 1 - 1 / 100 * percentScrollParallax;
    let zoom1 = 1 + (width / 10000 * percentScrollParallax);
    let zoom2 = 1 + (width / 5000000 * percentScroll);
    let zoom3 = 1 + (width / 500000 * percentScrollParallax);
    let zoom4 = 1 + (width / 100000 * percentScrollParallax);
    let slide1 = width / 2000 * percentScrollParallax;
    let slide2 = width / 1500 * percentScrollParallax;
    let header = $('header');
    let footer = $('footer');

    if (window.innerWidth > 767) {
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
            footer.addClass('zoomInDown')
        } else if (scroll === 0 && footer.hasClass('zoomInDown')) {
            footer.removeClass('zoomInDown')
        }
    } else {
        pageYOffset > 0 ? $('.aboutCert').addClass('zoomOut_0') : $('.aboutCert').removeClass('zoomOut_0');
    }

    $('.fog').css({'transform': 'scale(' + zoom1 + ')', 'opacity': opacity});
    $('.montain1').css('transform', 'scale(' + zoom2 + ')');
    $('.montain2').css('transform', 'translateX(' + slide1 + 'px) scale(' + zoom3 + ')');
    $('.montain3').css('transform', 'translateX(' + slide2 + 'px) scale(' + zoom4 + ')');

});

window.onscroll = () => {
    let cert = document.querySelectorAll('.cert');
    const montain = document.querySelector('.montain')
    cert.forEach((item, i) => {
        item.getBoundingClientRect().top < montain.clientHeight / 2 && item.getBoundingClientRect().top > montain.clientHeight / 20 ?
            item.classList.add('active') : item.classList.remove('active');
    })
}

const aboutCertSpans = document.querySelectorAll('.aboutCert span');

let getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
};

let spanInterval = setInterval(() => {
    aboutCertSpans[getRandomInt(4)].classList.toggle('active')
}, 200)