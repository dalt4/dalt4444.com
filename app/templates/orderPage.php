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
            <form action="#" class="order__form">
                <fieldset>
                    <legend>Выберите то, что нужно сделать</legend>
                    <label>
                        дизайн
                        <input type="checkbox">
                    </label>
                    <label>
                        наполнение (изображения и тексты)
                        <input type="checkbox">
                    </label>
                    <label>
                        CMS (система управления сайтом)
                        <input type="checkbox">
                    </label>
                </fieldset>
                <label>
                    Ваше имя
                    <input type="text">
                </label>
                <label>
                    Ваш email <sup>*</sup>
                    <input type="email" required>
                </label>

                <label>
                    <p>Ваши пожелания:</p>
                    <textarea class="order__form-wishes"></textarea>
                </label>

                <input type="submit" value="отправить заявку">

            </form>
        </div>
        <div class="order__list">
            <div class="order__close-item"></div>
            <h2 class="order__list-title">Заявка на сопровождение сайта</h2>
            <p class="order__list-description">все поля необязательны к заполнению кроме <span>email</span></p>
            <form action="#" class="order__form">
                <fieldset>
                    <legend>Выберите то, что нужно сделать</legend>
                    <label>
                        редизайн
                        <input type="checkbox">
                    </label>
                    <label>
                        изменение наполнения (изображения и тексты)
                        <input type="checkbox">
                    </label>
                    <label>
                        поисковое продвижение
                        <input type="checkbox">
                    </label>
                </fieldset>
                <label>
                    Ваше имя
                    <input type="text">
                </label>
                <label>
                    Ваш email <sup>*</sup>
                    <input type="email" required>
                </label>

                <label>
                    <p>Ваши пожелания:</p>
                    <textarea class="order__form-wishes"></textarea>
                </label>

                <input type="submit" value="отправить заявку">

            </form>
        </div>
        <div class="order__list">
            <div class="order__close-item"></div>
            <h2 class="order__list-title">Заявка на создание web-анимации</h2>
            <p class="order__list-description">все поля необязательны к заполнению кроме <span>email</span></p>
            <form action="#" class="order__form">
                <fieldset>
                    <legend>Выберите то, что нужно сделать</legend>
                    <label>
                        2D
                        <input type="checkbox">
                    </label>
                    <label>
                        3D
                        <input type="checkbox">
                    </label>
                    <label>
                        количество элементов
                        <input type="number" placeholder="0">
                    </label>
                </fieldset>
                <label>
                    Ваше имя
                    <input type="text">
                </label>
                <label>
                    Ваш email <sup>*</sup>
                    <input type="email" required>
                </label>

                <label>
                    <p>Ваши пожелания:</p>
                    <textarea class="order__form-wishes"></textarea>
                </label>

                <input type="submit" value="отправить заявку">

            </form>
        </div>
    </div>
</main>
<script src="../scripts/order.js"></script>
