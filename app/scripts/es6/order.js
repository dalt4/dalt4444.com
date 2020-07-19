const order__navItem = document.querySelectorAll('.order__nav-item');
const order__list = document.querySelectorAll('.order__list');
const order__closeItem = document.querySelectorAll('.order__close-item');


order__navItem.forEach((item, i) => {
    item.onclick = () => order__list[i].classList.add('active')
})

order__closeItem.forEach((item, i) => {
    item.onclick = () => order__list[i].classList.remove('active')
})

