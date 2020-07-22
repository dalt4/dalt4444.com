<link rel="stylesheet" href="../styles/order.css">
<main class="main">
    <div class="order__nav">
        <div class="wrapper">
            <div class="order__nav-items">
                <div class="order__nav-item">сайт под ключ</div>
                <div class="order__nav-item">сопровождение</div>
                <div class="order__nav-item">анимация</div>
            </div>
        </div>
        <div class="order__list">
            <div class="order__close-item"></div>
            <h2 class="order__list-title">Заявка на создание сайта</h2>
            <p class="order__list-description">все поля необязательны к заполнению кроме <span>email</span></p>
            <form action="#" class="order__form order__form-site">

                <!-- Hidden Required Fields -->
                <input type="hidden" name="project_name" value="ЗАКАЗ!">
                <input type="hidden" name="form_subject" value="сайт под ключ">
                <!-- END Hidden Required Fields -->

                <!--                <fieldset>-->
                <!--                    <legend>Выберите то, что нужно сделать</legend>-->
                <!--                    <label>-->
                <!--                        дизайн-->
                <!--                        <input type="checkbox">-->
                <!--                    </label>-->
                <!--                    <label>-->
                <!--                        наполнение (изображения и тексты)-->
                <!--                        <input type="checkbox">-->
                <!--                    </label>-->
                <!--                    <label>-->
                <!--                        CMS (система управления сайтом)-->
                <!--                        <input type="checkbox">-->
                <!--                    </label>-->
                <!--                </fieldset>-->

                <label>
                    Ваше имя
                    <input type="text" name="имя">
                </label>
                <label>
                    Ваш email <sup>*</sup>
                    <input type="email" name="почта">
                </label>

                <label>
                    <p>Ваши пожелания:</p>
                    <textarea class="order__form-wishes" name="пожелания"></textarea>
                </label>

                <input type="submit" value="отправить заявку">

            </form>
        </div>
        <div class="order__list">
            <div class="order__close-item"></div>
            <h2 class="order__list-title">Заявка на сопровождение сайта</h2>
            <p class="order__list-description">все поля необязательны к заполнению кроме <span>email</span></p>
            <form action="#" class="order__form  order__form-maintence">

                <!-- Hidden Required Fields -->
                <input type="hidden" name="project_name" value="ЗАКАЗ!">
                <input type="hidden" name="form_subject" value="сопровождение">
                <!-- END Hidden Required Fields -->

                <!--                <fieldset>-->
                <!--                    <legend>Выберите то, что нужно сделать</legend>-->
                <!--                    <label>-->
                <!--                        редизайн-->
                <!--                        <input type="checkbox">-->
                <!--                    </label>-->
                <!--                    <label>-->
                <!--                        изменение наполнения (изображения и тексты)-->
                <!--                        <input type="checkbox">-->
                <!--                    </label>-->
                <!--                    <label>-->
                <!--                        поисковое продвижение-->
                <!--                        <input type="checkbox">-->
                <!--                    </label>-->
                <!--                </fieldset>-->
                <label>
                    Ваше имя
                    <input type="text" name="имя">
                </label>
                <label>
                    Ваш email <sup>*</sup>
                    <input type="email" name="почта">
                </label>

                <label>
                    <p>Ваши пожелания:</p>
                    <textarea class="order__form-wishes" name="пожелания"></textarea>
                </label>

                <input type="submit" value="отправить заявку">

            </form>
        </div>
        <div class="order__list">
            <div class="order__close-item"></div>
            <h2 class="order__list-title">Заявка на создание web-анимации</h2>
            <p class="order__list-description">все поля необязательны к заполнению кроме <span>email</span></p>
            <form action="#" class="order__form   order__form-animation">

                <!-- Hidden Required Fields -->
                <input type="hidden" name="project_name" value="ЗАКАЗ!">
                <input type="hidden" name="form_subject" value="анимация">
                <!-- END Hidden Required Fields -->

                <!--                <fieldset>-->
                <!--                    <legend>Выберите то, что нужно сделать</legend>-->
                <!--                    <label>-->
                <!--                        2D-->
                <!--                        <input type="checkbox" name="2D">-->
                <!--                    </label>-->
                <!--                    <label>-->
                <!--                        3D-->
                <!--                        <input type="checkbox" name="3D">-->
                <!--                    </label>-->
                <!--                    <label>-->
                <!--                        количество элементов-->
                <!--                        <input type="number" name="количество" placeholder="0">-->
                <!--                    </label>-->
                <!--                </fieldset>-->
                <label>
                    Ваше имя
                    <input type="text" name="имя">
                </label>
                <label>
                    Ваш email <sup>*</sup>
                    <input type="email" name="почта">
                </label>

                <label>
                    <p>Ваши пожелания:</p>
                    <textarea class="order__form-wishes" name="пожелания"></textarea>
                </label>

                <input type="submit" value="отправить заявку">

            </form>
        </div>
    </div>
</main>
<script src="../libs/jquery.min.js"></script>
<script src="../scripts/order.js"></script>
