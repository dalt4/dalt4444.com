<main class="main">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css" media="all" rel="stylesheet"
          id="font-awesome-5-kit-css">
    <link href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css" media="all"
          rel="stylesheet" id="font-awesome-5-kit-css">
    <link href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all" rel="stylesheet"
          id="font-awesome-5-kit-css">
    <link rel="stylesheet" href="../styles/main.css">
    <div class="main__header">
        <div class="wrapper">
            <div class="main__header-content">
                <div class="main__header-logo"></div>
                <div class="main__header-nav">
                    <a href="#main__content" class="main__header-nav-item js-scroll">начало</a>
                    <a href="#main__slick" class="main__header-nav-item js-scroll">слайдер</a>
                    <a href="#main__animation" class="main__header-nav-item js-scroll">анимация</a>
                    <a href="#book" class="main__header-nav-item js-scroll">книга</a>
                    <a href="#video" class="main__header-nav-item js-scroll">видео</a>
                    <a href="#buttons" class="main__header-nav-item js-scroll">кнопки/меню</a>
                    <a href="#footer__contacts" class="main__header-nav-item js-scroll">контакты</a>
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
            &nbsp;Возможно вы захотите использовать некоторые из них на Вашем собственном сайте<br/><br/>
            В любом случае желаю Вам приятного просмотра!
        </p>
    </div>

    <div class="main__content">

        <!-- dot for smoothScroll -->

        <div id="main__content"></div>
        <div id="footer__contacts"></div>

        <!--        slider    -->

        <section class="main__slick" id="main__slick">
            <div class="wrapper_full">
                <h2 class="main__slick-title section-title">Слайдер slick</h2>
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

        <section class="main__animation" id="main__animation">
            <h2 class="main__animation-title  section-title">Анимация</h2>
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

        <section class="book" id="book">

            <h2 class="section-title">Книга</h2>
            <div class="wrapper">
                <div class="book-scene">
                    <div class="book-item">
                        <div class="book-item__front">
                            <template id="flip-template" class="book-item__flipbook">
                                <div id="flipbook" class="book-item__flipbook">
                                    <div class="hard flipbook__page1">
                                        <div class="book__emblem">
                                            <img src="../img/main/book/emblem.png" alt="" class="book__emblem-pic">
                                        </div>
                                        <p class="flipbook-title">
                                            История<br/>
                                            Chevrolet Corvette<br/>
                                            <span>1953 - 2020</span>
                                        </p>
                                    </div>
                                    <div class="hard  flipbook__page2"></div>
                                    <div class="flipbook__page3">
                                        <div class="page__content"></div>
                                    </div>
                                    <div class="flipbook__page4">
                                        <div class="page__content"></div>
                                    </div>
                                    <div class="flipbook__page5">
                                        <div class="page__content">
                                            <p class="book-contents">Оглавление</p>
                                            <ul class="book-contents-items">
                                                <li class="book-contents-item">
                                                    <span>первое поколение</span>
                                                    <span>стр2</span>
                                                </li>
                                                <li class="book-contents-item">
                                                    <span>второе поколение</span>
                                                    <span>стр3</span>
                                                </li>
                                                <li class="book-contents-item">
                                                    <span>третье поколение</span>
                                                    <span>стр4</span>
                                                </li>
                                                <li class="book-contents-item">
                                                    <span>четвертое поколение</span>
                                                    <span>стр5</span>
                                                </li>
                                                <li class="book-contents-item">
                                                    <span>пятое поколение</span>
                                                    <span>стр6</span>
                                                </li>
                                                <li class="book-contents-item">
                                                    <span>шестое поколение</span>
                                                    <span>стр7</span>
                                                </li>
                                                <li class="book-contents-item">
                                                    <span>седьмое поколение</span>
                                                    <span>стр8</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="flipbook__page6">
                                        <div class="page__content">
                                            <p>ПЕРВОЕ ПОКОЛЕНИЕ</p>
                                            <p>1953 - 1962</p>
                                            <img src="../img/main/book/corvette-c1-1960-1.jpg" alt="1960">
                                        </div>
                                    </div>
                                    <div class="flipbook__page7">
                                        <div class="page__content">
                                            <p>ВТОРОЕ ПОКОЛЕНИЕ</p>
                                            <p>1963 - 1967</p>
                                            <img src="../img/main/book/chevrolet-1963-1.jpg" alt="1966">
                                        </div>
                                    </div>
                                    <div class="flipbook__page8">
                                        <div class="page__content">
                                            <p>ТРЕТЬЕ ПОКОЛЕНИЕ</p>
                                            <p>1968 - 1982</p>
                                            <img src="../img/main/book/stingray-1.jpg" alt="1966">
                                        </div>
                                    </div>
                                    <div class="flipbook__page9">
                                        <div class="page__content">
                                            <p>ЧЕТВЕРТОЕ ПОКОЛЕНИЕ</p>
                                            <p>1983 - 1996</p>
                                            <img src="../img/main/book/1987-1.jpg" alt="1966">
                                        </div>
                                    </div>
                                    <div class="flipbook__page10">
                                        <div class="page__content">
                                            <p>ПЯТОЕ ПОКОЛЕНИЕ</p>
                                            <p>1997 - 2004</p>
                                            <img src="../img/main/book/chevrolet_corvette_2000-1.jpg" alt="1966">
                                        </div>
                                    </div>
                                    <div class="flipbook__page11">
                                        <div class="page__content">
                                            <p>ШЕСТОЕ ПОКОЛЕНИЕ</p>
                                            <p>2005 - 2013</p>
                                            <img src="../img/main/book/2010-corvette-1.jpg" alt="1966">
                                        </div>
                                    </div>
                                    <div class="flipbook__page12">
                                        <div class="page__content">
                                            <p>СЕДЬМОЕ ПОКОЛЕНИЕ</p>
                                            <p>2013 - НВ</p>
                                            <img src="../img/main/book/2020-corvette-stingray-1.jpg" alt="1966">
                                        </div>
                                    </div>
                                    <div class="flipbook__page13">
                                        <div class="page__content"></div>
                                    </div>
                                    <div class="flipbook__page14">
                                        <div class="page__content"></div>
                                    </div>
                                    <div class="hard flipbook__page15">
                                    </div>
                                    <div class="hard flipbook__page16">
                                    </div>
                                </div>
                            </template>
                        </div>
                        <div class="book-item__side">шевроле корвет</div>
                        <div class="book-item__bottom"></div>
                    </div>
                </div>
            </div>
        </section>

        <!--        video       -->

        <section class="video" id="video">
            <h2 class="section-title">Видео бэкграунд</h2>
            <div class="video__background"></div>
            <h3 class="video-title">Vasiliy Anikin</h3>
        </section>

        <!--        buttons & menues         -->

        <section class="buttons" id="buttons">
            <h2 class="section-title">Мелочи - интересные кнопки и меню</h2>
            <div class="wrapper">
                <div class="buttons__content">
                    <div class="buttons__box">
                        <div class="buttons__item buttons__item1">BUTTON</div>
                    </div>
                    <div class="buttons__box">
                        <div class="buttons__item buttons__item2">BUTTON</div>
                    </div>
                    <div class="buttons__box">
                        <div class="buttons__item buttons__item3">BUTTON</div>
                    </div>
                    <div class="buttons__box">
                        <div class="buttons__item buttons__item4">BUTTON</div>
                    </div>
                    <div class="buttons__box">
                        <div class="buttons__item buttons__item5">BUTTON</div>
                    </div>
                    <div class="buttons__box">
                        <div class="buttons__item buttons__item6">BUTTON</div>
                    </div>
                    <div class="buttons__box">
                        <div class="buttons__item buttons__item7">BUTTON</div>
                    </div>
                    <div class="buttons__box">
                        <div class="buttons__item buttons__item8">BUTTON</div>
                    </div>
                    <div class="buttons__box">
                        <div class="buttons__item buttons__item9">BUTTON</div>
                    </div>
                    <div class="buttons__box">
                        <div class="buttons__item buttons__item10"></div>
                    </div>
                    <div class="buttons__line"></div>
                    <div class="menu__box">
                        <div class="menu__item menu__item1"></div>
                        <div class="menu__item1-shadow">
                            <div class="menu__item1-arrow">&#9658;</div>
                        </div>
                    </div>
                    <div class="menu__box menu__box_mobile">
                        <div class="menu__item menu__item2">
                            <div class="menu__item2-burger">
                                X
                            </div>

                            <div class="menu__item2-links">
                                <div class="menu__item2-link">ГЛАВНАЯ</div>
                                <div class="menu__item2-link">ПОРТФОЛИО</div>
                                <div class="menu__item2-link">ОБО МНЕ</div>
                                <div class="menu__item2-link">ЗАКАЗАТЬ</div>
                            </div>
                        </div>
                    </div>
                    <div class="menu__box">
                        <div class="menu__item menu__item3">
                            <div class="menu__item3-link">
                                <i class="fas fa-align-justify"></i>
                            </div>
                            <div class="menu__item3-link">
                                <i class="fas fa-home"></i>
                            </div>
                            <div class="menu__item3-link">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="menu__item3-link">
                                <i class="far fa-address-card"></i>
                            </div>
                            <div class="menu__item3-link">
                                <i class="fas fa-briefcase"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <script src="../libs/three.min.js"></script>
    <script src="../libs/GLTFLoader.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="../libs/jquery.vide.min.js"></script>
    <script src="../libs/turn.min.js"></script>
    <script src="../scripts/main.js"></script>
    <script type="module" src="../scripts/modules/dalt4444.module.js"></script>
</main>