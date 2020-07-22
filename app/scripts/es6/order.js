const order__navItems = document.querySelector('.order__nav-items');
const order__navItem = document.querySelectorAll('.order__nav-item');
const order__list = document.querySelectorAll('.order__list');
const order__closeItem = document.querySelectorAll('.order__close-item');


order__navItem.forEach((item, i) => {
    item.onclick = () => {
        order__list[i].classList.add('active');
        order__navItems.classList.add('active');
    }
})

order__closeItem.forEach((item, i) => {
    item.onclick = () => {
        order__list[i].classList.remove('active');
        order__navItems.classList.remove('active');
    };
})

//---------------------------------email------------------------//

const ajax_mail = (form) => {
    form.submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    })
};

ajax_mail($(".order__form-site"));
ajax_mail($(".order__form-maintence"));
ajax_mail($(".order__form-animation"));

