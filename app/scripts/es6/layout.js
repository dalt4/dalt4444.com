//-------------------------create bones-------------------------------------------------------------------------------//

(() => {
    const boneScenes = document.querySelectorAll('.header__nav-bone');
    for (let i = 0; i < boneScenes.length; i++) {
        const bone = document.createElement('div');
        bone.classList.add('bone');
        boneScenes[i].appendChild(bone);
    }

    const bones = document.querySelectorAll('.bone');

    for (let i = 0; i < boneScenes.length; i++) {
        for (let j = 0; j < 6; j++) {
            const boneFace = document.createElement('div');
            boneFace.classList.add('bone-face');
            bones[i].appendChild(boneFace);
        }
    }
})();


//---------------------------------title operations-------------------------------------------------------------------//


const stitle = document.querySelector('title');
let title2Interval;
// let titleText = stitle.innerText;
// let textArr = titleText.split('');
// let textArrSlice = textArr.slice(0, 3);
// console.log(textArrSlice);

let titleInterval = setInterval(`stitle.innerText = '(-).(o)'`, 2000);
setTimeout(() => {
    title2Interval = setInterval(`stitle.innerText = '(o).(-)'`, 2000)
    return title2Interval
}, 1000);

setTimeout(() => {
    clearInterval(titleInterval);
    clearInterval(title2Interval);
    stitle.innerText = 'Веб-разработчиик'
}, 5500)

//---------------------------------footer linkBleach-------------------------------------------//

function linkBleach() {
    const footerLinks = document.querySelectorAll('.footer__section-link');

    footerLinks.forEach((item, i) => {

        function changeColor(color, timeout) {
            setTimeout(() => {
                item.style.color = color;
            }, i * timeout);
        }

        changeColor('white', 150);
        setTimeout(changeColor, 300, '', 150)
    })
}

linkBleach()

let linkBleachInt = setInterval(linkBleach, 12000)


