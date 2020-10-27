import * as THREE from './three.module.js';
import {GLTFLoader} from './GLTFLoader.js';
import {OrbitControls} from './OrbitControls.js';
import {Reflector} from './Reflector.js';

// function dumpObject(obj, lines = [], isLast = true, prefix = '') {
//     const localPrefix = isLast ? '└─' : '├─';
//     lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
//     const newPrefix = prefix + (isLast ? '  ' : '│ ');
//     const lastNdx = obj.children.length - 1;
//     obj.children.forEach((child, ndx) => {
//         const isLast = ndx === lastNdx;
//         dumpObject(child, lines, isLast, newPrefix);
//     });
//     return lines;
// }


//--------------------------------------------------animation-------------------------------------------------------------//

const animationItems = document.querySelectorAll('.main__animation-item');
const animationCovers = document.querySelectorAll('.animation-item__cover');
const animationCoverButtons = document.querySelectorAll('.animation-item__cover-button');
const fullScreenButtons = document.querySelectorAll('.fullScreen');
const replayButtons = document.querySelectorAll('.replay');
const animationsScenes = document.querySelectorAll('.animation-item__scene');
const animations = [
    animation1,
    '',
    animation3,
    animation4,
];

function reloadScene(index) {
    let itemCanvases = animationsScenes[index].querySelectorAll('canvas');
    itemCanvases ? itemCanvases.forEach(i => i.remove()) : '';
    setTimeout(animations[index], 10)
}

animationItems.forEach((item, i) => {
    item.onmouseleave = () => {
        animationCovers[i].style.top = '0';
        const canvas = item.querySelectorAll('canvas');
        canvas ? canvas.forEach(i => i.remove()) : '';
    };
});

animationCovers.forEach((item) => {
    item.style.top = '0';
});

animationCoverButtons.forEach((item, i) => {
    item.onclick = () => {
        animationCovers[i].style.top = '';
        reloadScene(i);
    }
})

fullScreenButtons.forEach((item, i) => {
    item.onclick = () => {
        animationItems[i].classList.toggle('active');
        body.classList.toggle('active');
        reloadScene(i);
    }
})

replayButtons.forEach((item, i) => {
    i !== 1 ? item.onclick = () => {
        reloadScene(i)
    } : '';
})

//--------------------------------------------------animation 1-------------------------------------------------------------//

function animation1() {

    const earthScene = document.querySelector('.earth-scene');

    let scene, camera, renderer, light, mesh, mesh2;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(15, earthScene.offsetWidth / earthScene.offsetHeight, .1, 10000);
    camera.position.set(100, 250, 2000);
    // camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(earthScene.offsetWidth, earthScene.offsetHeight);
    earthScene.appendChild(renderer.domElement);


    light = new THREE.PointLight(0xffffff, 1.2);
    light.position.set(100, 1000, 100);
    scene.add(light);

    let textureLoader = new THREE.TextureLoader();

    let geometry = new THREE.SphereBufferGeometry(300, 100, 100);
    let material = new THREE.MeshStandardMaterial({
        map: textureLoader.load('../img/main/animation1/earth_atmos_2048.jpg'),
        normalMap: textureLoader.load('../img/main/animation1/earth_normal_2048.jpg'),
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let geometry2 = new THREE.SphereBufferGeometry(305, 50, 50);
    let material2 = new THREE.MeshPhongMaterial({
        transparent: true,
        map: textureLoader.load('../img/main/animation1/earth_clouds_2048.png'),
        side: THREE.DoubleSide,
    });
    mesh2 = new THREE.Mesh(geometry2, material2);
    scene.add(mesh2);

    const animate = () => {
        camera.position.z > 500 ? camera.position.z-- : '';
        mesh.rotation.y += -.0005;
        mesh2.rotation.y += -.0005;
        mesh2.rotation.x += -.00005;
        mesh2.rotation.z += -.00005;
        renderer.render(scene, camera);
        requestAnimationFrame(animate)
    };

    animate();
}


//---------------------------------------------animation3 scull-------------------------------------------------------//

function animation3() {
    const scullScene = document.querySelector('.scull-scene');
    let scene, camera, renderer, ambientLight, light, controls, scull;


    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(40, scullScene.offsetWidth / scullScene.offsetHeight, .1, 1000);
    camera.position.x = 0;
    camera.position.y = 200;
    camera.position.z = 500;
    camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(scullScene.offsetWidth, scullScene.offsetHeight);
    scullScene.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateDirection = 'left';
    controls.autoRotateSpeed = 1;

    controls.minDistance = 300;
    controls.maxDistance = 700;
    controls.minPolarAngle = THREE.Math.degToRad(45);
    controls.maxPolarAngle = THREE.Math.degToRad(89);
    controls.enablePan = false;

    // controls.minAzimuthAngle 		 = THREE.Math.degToRad(-45);
    // controls.maxAzimuthAngle 		 = THREE.Math.degToRad(45);


    ambientLight = new THREE.AmbientLight(0xffffff, .1);
    scene.add(ambientLight);

    light = new THREE.PointLight(0xFAEBD7, 1);
    light.position.set(-100, 100, 100);
    scene.add(light);

    light = new THREE.PointLight(0xFAEBD7, 1);
    light.position.set(200, -200, -200);
    scene.add(light);


//-----------------------------------------------Mirror-------------------------------------------//

    let mirrorGeometry = new THREE.CircleGeometry(500, 500);
    let groundMirror = new Reflector(mirrorGeometry, {
        clipBias: 0.05,
        textureWidth: scullScene.offsetWidth * window.devicePixelRatio,
        textureHeight: scullScene.offsetHeight * window.devicePixelRatio,
        color: 0x777777,
        recursion: 1,
    });

    groundMirror.position.y = -50;
    groundMirror.rotateX(-Math.PI / 2);
    scene.add(groundMirror);

    let groundMaterial = new THREE.MeshLambertMaterial({
        color: 0x000000,
        transparent: true,
        opacity: .7
    });

    let ground = new THREE.Mesh(mirrorGeometry, groundMaterial);
    ground.position.y = -49;
    ground.rotateX(-Math.PI / 2);
    scene.add(ground);


    let loader = new GLTFLoader();
    loader.load('../img/main/animation3/scull/scene.gltf', function (gltf) {
        scull = gltf.scene;
        scull.position.x = 0;
        scull.position.y = -25;
        scull.position.z = 0;
        scull.rotation.y = THREE.Math.degToRad(90);
        let scullD = scull.getObjectByName('mesh_0');
        scullD.material.roughness = 1;
        scene.add(gltf.scene);
        // console.log(dumpObject(scull).join('\n'));
    });


    function animate() {
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(animate);
    }

    animate();
}


//-------------------------------------------------------------------anim4

function animation4() {
    const ballScene = document.querySelector('.ball-scene');
    let camera,
        scene,
        renderer,
        controls,
        textureCube,
        sphereMesh,
        sphereMaterial;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(70, ballScene.offsetWidth / ballScene.offsetHeight, .1, 10000);
    camera.position.z = 300;
    camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(ballScene.offsetWidth, ballScene.offsetHeight);
    renderer.autoClear = false;
    ballScene.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateDirection = 'left';
    controls.autoRotateSpeed = 1;

    controls.minDistance = 150;
    controls.maxDistance = 400;
    // controls.minPolarAngle = THREE.Math.degToRad(45);
    // controls.maxPolarAngle = THREE.Math.degToRad(89);
    controls.enablePan = false;

    // controls.minAzimuthAngle 		 = THREE.Math.degToRad(-45);
    // controls.maxAzimuthAngle 		 = THREE.Math.degToRad(45);


    let sidePath = "../img/main/animation4/";
    let urls = [
        sidePath + "px.jpg",
        sidePath + "nx.jpg",
        sidePath + "py.jpg",
        sidePath + "ny.jpg",
        sidePath + "pz.jpg",
        sidePath + "nz.jpg"
    ];
    textureCube = new THREE.CubeTextureLoader().load(urls);

    let sphereGeometry = new THREE.SphereBufferGeometry(100, 50, 50);
    sphereMaterial = new THREE.MeshBasicMaterial({
        envMap: textureCube
    })

    sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphereMesh);

    // let backGeometry = new THREE.BoxBufferGeometry(500, 500, 500);
    // let loader = new THREE.TextureLoader();
    // let backMaterial = [
    //     // new THREE.MeshBasicMaterial({map: loader.load(sidePath + "px.jpg"), side: THREE.BackSide}),
    //     // new THREE.MeshBasicMaterial({map: loader.load(sidePath + "nx.jpg"), side: THREE.BackSide}),
    //     new THREE.MeshBasicMaterial({map: loader.load(sidePath + "px.jpg"), side: THREE.BackSide}),
    //     new THREE.MeshBasicMaterial({map: loader.load(sidePath + "px.jpg"), side: THREE.BackSide}),
    //     new THREE.MeshBasicMaterial({map: loader.load(sidePath + "py.jpg"), side: THREE.BackSide}),
    //     new THREE.MeshBasicMaterial({map: loader.load(sidePath + "ny.jpg"), side: THREE.BackSide}),
    //     new THREE.MeshBasicMaterial({map: loader.load(sidePath + "px.jpg"), side: THREE.BackSide}),
    //     new THREE.MeshBasicMaterial({map: loader.load(sidePath + "px.jpg"), side: THREE.BackSide}),
    //     // new THREE.MeshBasicMaterial({map: loader.load(sidePath + "ny.jpg"), side: THREE.BackSide}),
    //     // new THREE.MeshBasicMaterial({map: loader.load(sidePath + "pz.jpg"), side: THREE.BackSide}),
    //     // new THREE.MeshBasicMaterial({map: loader.load(sidePath + "nz.jpg"), side: THREE.BackSide}),
    // ];
    //
    // let backMesh = new THREE.Mesh(backGeometry, backMaterial);
    // scene.add(backMesh)

    scene.background = textureCube;


    function animate() {
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(animate);
    }

    animate()

}




