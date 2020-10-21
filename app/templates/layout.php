<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Веб-разработчик</title>
    <meta name="description"
          content="Сайты под ключ. Редизайн, сопровождение и продвижение сайтов. Создание веб-анимации."/>
    <meta name="keywords"
          content="web programming,
          сопровождение сайта,
          ведение сайта,
          администрирование сайта,
          поддержка сайта компании,
          поддержка веб сайта,
          создание и сопровождение сайтов,
          услуги по обслуживанию сайта,
          комплексное обслуживание сайта,
          Василий Аникин,
          Василий Аникин разработка сайтов,
          Василий Аникин сопровождение сайтов,
          адаптивная верстка,
          сайт разработка,
          продвижение и создание сайтов,
          разработка и продвижение сайта компании,
          разработка индивидуальных сайтов,
          разработка сайта индивидуально,
          раскрутка сайта и создание,
          услуги доработки сайтов "/>
    <link rel="stylesheet" href="../styles/layout.css">
</head>
<body>
<?= $page === 'order' ? '' : '<a href="order.php" class="orderForever">сделать заказ</a>' ?>
<a href="" class="mobile__scroll-up js-scroll"></a>
<header class="header">
    <div class="wrapper">
        <div class="header__content">
            <div class="header__intro">
                <h1 class="header__intro-title">ВАСИЛИЙ АНИКИН</h1>
                <div class="header__intro-description"><span>создание и сопровождение сайтов</span></div>
            </div>
            <nav class="header__nav">
                <div class="heder__nav-item button">
                    <a href="/" class="header__nav-link">ГЛАВНАЯ</a>
                    <div class="header__nav-bone <?= $page === 'main' ? '' : 'hide' ?>"></div>
                </div>
                <div class="heder__nav-item button">
                    <a href="portfolio.php" class="header__nav-link">ПОРТФОЛИО</a>
                    <div class="header__nav-bone <?= $page === 'portfolio' ? '' : 'hide' ?>"></div>
                </div>
                <div class="heder__nav-item button">
                    <a href="certificates.php" class="header__nav-link">СЕРТИФИКАТЫ</a>
                    <div class="header__nav-bone <?= $page === 'certificates' ? '' : 'hide' ?>"></div>
                </div>
                <div class="heder__nav-item button">
                    <a href="about.php" class="header__nav-link">ОБО МНЕ</a>
                    <div class="header__nav-bone <?= $page === 'about' ? '' : 'hide' ?>"></div>
                    <div class="maitres2"></div>
                </div>
                <div class="heder__nav-item button" style="position:relative;">
                    <a href="order.php" class="header__nav-link">ЗАКАЗАТЬ</a>
                    <div class="header__nav-bone <?= $page === 'order' ? '' : 'hide' ?>"></div>
                    <div class="maitres"></div>
                </div>
            </nav>
        </div>
    </div>
    <div class="mobile-menu">МЕНЮ</div>
</header>
<?= $pageContent ?>
<footer class="footer" id="footer">
    <div class="wrapper">
        <div class="footer-content">
            <section class="footer__section">
                <h3 class="footer__section-title">фреймворки & библиотеки</h3>
                <a target="blank" href="https://jquery.com/" class="footer__section-link">jQuery</a>
                <a target="blank" href="https://jqueryui.com/" class="footer__section-link">jQuery UI</a>
                <a target="blank" href="https://kenwheeler.github.io/slick/" class="footer__section-link">Slick
                    Slider</a>
                <a target="blank" href="http://vodkabears.github.io/vide/" class="footer__section-link">VIDE</a>
                <a target="blank" href="http://www.turnjs.com/" class="footer__section-link">Turn.js</a>
                <a target="blank" href="https://threejs.org/" class="footer__section-link">Three.js</a>
            </section>
            <section class="footer__section">
                <h3 class="footer__section-title">источники изображений</h3>
                <a target="blank" href="https://www.shutterstock.com/" class="footer__section-link">Shutterstock</a>
                <a target="blank" href="https://unsplash.com/" class="footer__section-link">Unsplash</a>
                <a target="blank" href="https://www.pexels.com/ru-ru/" class="footer__section-link">Pexels</a>
                <a target="blank" href="https://pixabay.com/ru/" class="footer__section-link">Pixabay</a>
                <a target="blank" href="https://coverr.co/" class="footer__section-link">Coverr</a>
                <a target="blank" href="https://sketchfab.com/" class="footer__section-link">Sketchfab</a>
            </section>
            <section class="footer__section">
                <h3 class="footer__section-title">партнеры</h3>
                <a target="blank" href="https://eternalhost.net/?from=1496" class="footer__section-link">Eternalhost</a>
                <a target="blank" href="https://www.reg.ru/?rlink=reflink-5507651"
                   class="footer__section-link">REG.RU</a>
                <a target="blank" href="https://www.templatemonster.com/?aff=dalt4" class="footer__section-link">Templatemonster</a>
                <a target="blank" href="https://promopult.ru/ref/bd52438a3a35206d" class="footer__section-link">PromoPult</a>
            </section>
            <section class="footer__section">
                <h3 class="footer__section-title">контакты</h3>
                <a target="blank" href="mailto:dalt4444@gmail.com" class="footer__section-link">почта
                    dalt4444@gmail.com</a>
                <a target="blank" href="https://freelancehunt.com/freelancer/dalt4.html?r=0GLzn"
                   class="footer__section-link">аккаунт freelancehunt</a>
                <a target="blank" href="https://t.me/powerwebb" class="footer__section-link">Telegram</a>
                <a target="blank" href="https://join.skype.com/invite/ahdA8dVSuVmG"
                   class="footer__section-link">Skype</a>
                <a target="blank" href="https://vasiliyanikin.com/" class="footer__section-link">vasiliyanikin.com</a>
            </section>
        </div>
    </div>
</footer>
<script src="../scripts/layout.js"></script>
<!-- Yandex.Metrika counter -->
<script>
    (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () {
            (m[i].a = m[i].a || []).push(arguments)
        };
        m[i].l = 1 * new Date();
        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
    })
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(57289888, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
    });
</script>
<noscript>
    <div><img src="https://mc.yandex.ru/watch/57289888" style="position:absolute; left:-9999px;" alt=""/></div>
</noscript>
<!-- /Yandex.Metrika counter -->
</body>
</html>