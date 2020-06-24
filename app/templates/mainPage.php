<main class="main">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" href="styles/main.css">
    <div class="main__header">
        <div class="wrapper">
            <div class="main__header-content">
                <div class="main__header-logo"></div>
                <div class="main__header-nav">
                    <a href="#" class="main__header-nav-item">начало</a>
                    <a href="#" class="main__header-nav-item">слайдеры</a>
                    <a href="#" class="main__header-nav-item">анимация</a>
                    <a href="#" class="main__header-nav-item">книга</a>
                    <a href="#" class="main__header-nav-item">кнопки</a>
                    <a href="#" class="main__header-nav-item">видео</a>
                    <a href="#" class="main__header-nav-item">меню</a>
                    <a href="#" class="main__header-nav-item">контакты</a>
                    <div class="main__header-nav-line"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="main__flag">
        <h2 class="main__flag-title">
            Рад приветствовать Вас на моём сайте!
        </h2>
        <p class="main__flag-description">
            &nbsp; На этой странице собраны элементы которые показались мне интересными.<br/>
            Возможно вы захотите использовать некоторые из них на Вашем сайте<br/>
            В любом случае желаю Вам приятного просмотра!
        </p>
    </div>

    <div class="main__content">

        <!--        slider    -->

        <section class="main__slick">
            <div class="wrapper_full">
                <h2 class="main__slick-title">Слайдер slick</h2>
                <div class="main__slick-container">
                    <div class="main__slick-container-wrapper"></div>
                    <div class="main__slick-slider">
                        <div class="main__slick-item">
                            <img src="../img/main/slider1/corvett.jpg" alt="CAR" class="main__slick-pic">
                        </div>
                        <div class="main__slick-item">
                            <img src="../img/main/slider1/pirelli.jpg" alt="CAR" class="main__slick-pic">
                        </div>
                        <div class="main__slick-item">
                            <img src="../img/main/slider1/corvett2.jpg" alt="CAR" class="main__slick-pic">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--        animations     -->

        <section class="main__animation">
            <h2 class="main__animation-title">Анимация</h2>
            <div class="main__animation-items">
                <div class="main__animation-item">
                    <div class="animation-item__cover">
                        <h3 class="animation-item__title">
                            Модель планеты<br/>

                        </h3>
                        <p class="animation-item__desc">Three.js</p>
                        <div class="animation-item__cover-button">ОТКРЫТЬ</div>
                    </div>
                    <div class="animation-item__scene earth-scene">
                        <div class="replay"></div>
                        <div class="fullScreen">
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                        </div>
                    </div>

                </div>
                <div class="main__animation-item">
                    <div class="animation-item__cover">
                        <h3 class="animation-item__title">
                            Старинные часы<br/>
                        </h3>
                        <p class="animation-item__desc">CSS only</p>
                        <div class="animation-item__cover-button">ОТКРЫТЬ</div>
                    </div>
                    <div class="animation-item__scene">
                        <div class="animation-clock active">
                            <div class="animation-clock__body"></div>
                            <div class="animation-clock__back"></div>
                            <div class="animation-clock__ticker"></div>
                            <div class="animation-clock__h-arrow"></div>
                            <div class="animation-clock__m-arrow"></div>
                        </div>
                        <div class="replay replay_watch"></div>
                        <div class="fullScreen">
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                        </div>
                    </div>
                </div>
                <div class="main__animation-item">
                    <div class="animation-item__cover">
                        <h3 class="animation-item__title">
                            3D модель черепа<br/>
                        </h3>
                        <p class="animation-item__desc">three.js</p>
                        <div class="animation-item__cover-button">ОТКРЫТЬ</div>
                    </div>
                    <div class="animation-item__scene scull-scene">
                        <div class="replay"></div>
                        <div class="fullScreen">
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                        </div>
                    </div>
                </div>
                <div class="main__animation-item">
                    <div class="animation-item__cover">
                        <h3 class="animation-item__title">
                            Стальной шар<br/>
                        </h3>
                        <p class="animation-item__desc">Three.js + orbitControl</p>
                        <div class="animation-item__cover-button ball__cover-button">ОТКРЫТЬ</div>
                    </div>
                    <div class="animation-item__scene ball-scene">
                        <div class="replay"></div>
                        <div class="fullScreen">
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                            <div class="fullScreen-frame"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--        book     -->

        <section class="book">

        </section>
    </div>

    <script src="../libs/three.min.js"></script>
    <script src="../libs/GLTFLoader.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="../scripts/main.js"></script>
    <script type="module" src="../scripts/dalt4444.module.js"></script>
</main>