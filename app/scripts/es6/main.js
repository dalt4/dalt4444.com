const body = document.querySelector('body');

//-----------------------------------------------main header and flag-------------------------------------------------//

const mainHeader = document.querySelector('.main__header');
const mainFlag = document.querySelector('.main__flag');
const navLine = document.querySelector('.main__header-nav-line');

window.onscroll = () => {
    // console.log(pageYOffset);
    pageYOffset > 100 ? mainHeader.classList.add('active') : mainHeader.classList.remove('active');
    pageYOffset > 50 ? mainFlag.classList.add('active') : mainFlag.classList.remove('active');
    pageYOffset >= 100 && pageYOffset < 500 ? navLine.style.width = '20%' :
        pageYOffset >= 500 && pageYOffset < 1200 ? navLine.style.width = '32%' : navLine.style.width = ''
}

//--------------------------------------------------slick-------------------------------------------------------------//

$('.main__slick-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    easing: 'easy-in-out',
    dots: true,
    speed: 2000,
    arrows: false
});

//--------------------------------------------------animation-------------------------------------------------------------//

const animationItems = document.querySelectorAll('.main__animation-item');
const animationCovers = document.querySelectorAll('.animation-item__cover');
const animationCoverButtons = document.querySelectorAll('.animation-item__cover-button');
const fullScreenButtons = document.querySelectorAll('.fullScreen');

animationItems.forEach((item, i) => {
    item.onmouseleave = () => animationCovers[i].style.top = '0';
});

animationCovers.forEach((item) => {
    item.style.top = '0';
});

animationCoverButtons.forEach((item, i) => {
    item.onclick = () => {
        animationCovers[i].style.top = '';
        i === 0 ? (() => {
                const earthCanvas = document.querySelector('.earth-scene canvas');
                earthCanvas ? earthCanvas.remove() : '';
                setTimeout(animation1, 10)
            })() :
            i === 2 ? (() => {
                const scullCanvas = document.querySelector('.scull-scene canvas');
                scullCanvas ? scullCanvas.remove() : '';
                setTimeout(animation3, 10)
            })() : '';
    }
})

fullScreenButtons.forEach((item, i) => {
    item.onclick = () => {
        animationItems[i].classList.toggle('active');
        body.classList.toggle('active');
        i === 0 ? (() => {
                const earthCanvas = document.querySelector('.earth-scene canvas');
                earthCanvas ? earthCanvas.remove() : '';
                setTimeout(animation1, 10)
            })() :
            i === 2 ? (() => {
                const scullCanvas = document.querySelector('.scull-scene canvas');
                scullCanvas ? scullCanvas.remove() : '';
                setTimeout(animation3, 10)
            })() : '';
    }
})

//--------------------------------------------------animation 1-------------------------------------------------------------//

function animation1() {

    const earthScene = document.querySelector('.earth-scene');
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(earthScene.offsetWidth, earthScene.offsetHeight);
    earthScene.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, earthScene.offsetWidth / earthScene.offsetHeight, .1, 5000);

    camera.position.set(100, 250, 2000);
    camera.rotation.y = 0;
    camera.rotation.z = 0;
    camera.rotation.x = 0;

    const light1 = new THREE.AmbientLight(0xffffff, .1);
    scene.add(light1);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(380, 250, 500);
    scene.add(light);

    const textureLoader = new THREE.TextureLoader();
    const geometry = new THREE.SphereBufferGeometry(300, 50, 50);
    const material = new THREE.MeshPhongMaterial({
        shininess: 5,
        map: textureLoader.load('../img/main/animation1/earth_atmos_2048.jpg'),
        specularMap: textureLoader.load('../img/main/animation1/earth_specular_2048.jpg'),
        normalMap: textureLoader.load('../img/main/animation1/earth_normal_2048.jpg'),
        normalScale: new THREE.Vector2(0.85, 0.85)
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const geometry2 = new THREE.SphereBufferGeometry(305, 50, 50);
    const material2 = new THREE.MeshPhongMaterial({
        transparent: true,
        map: textureLoader.load('../img/main/animation1/earth_clouds_2048.png'),
    });
    const mesh2 = new THREE.Mesh(geometry2, material2);
    scene.add(mesh2);

    const loop = () => {
        camera.position.z > 500 ? camera.position.z-- : '';
        mesh.rotation.y += -.0005;
        mesh2.rotation.y += -.0005;
        mesh2.rotation.x += -.00005;
        mesh2.rotation.z += -.00005;
        renderer.render(scene, camera);
        requestAnimationFrame(() => {
            loop()
        })
    };

    loop();
}

const replay1 = document.querySelector('.earth-scene .replay');
replay1.onclick = () => {
    const earthCanvas = document.querySelector('.earth-scene canvas');
    earthCanvas.remove();
    setTimeout(animation1, 10)
};

//---------------------------------------------animation2 watch-------------------------------------------------------//

const replay2 = document.querySelector('.replay_watch');
const animationClock = document.querySelector('.animation-clock');

replay2.onclick = () => {
    animationClock.classList.remove('active');
    setTimeout(() => animationClock.classList.add('active'), 10)
}

//---------------------------------------------animation3 scull-------------------------------------------------------//

function animation3() {
    const scullScene = document.querySelector('.scull-scene');
    let scene, camera, renderer, light, controls, car, light2, light3;

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

        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(scullScene.offsetWidth, scullScene.offsetHeight);
        scullScene.appendChild(renderer.domElement);

        let loader = new THREE.GLTFLoader();
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

const replay3 = document.querySelector('.scull-scene .replay');
replay3.onclick = () => {
    const scullCanvas = document.querySelector('.scull-scene canvas');
    scullCanvas.remove();
    setTimeout(animation3, 10)
};


//---------------------------------------------animation ball-------------------------------------------------------//

