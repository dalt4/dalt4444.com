import * as THREE from '../../libs/three.module.js';
import {OrbitControls} from '../../libs/OrbitControls.js';

var ballCoverButton = document.querySelector('.ball__cover-button');
var ballScene = document.querySelector('.ball-scene');
var ballReplay = document.querySelector('.ball-scene .replay');
var ballFullScreen = document.querySelector('.ball-scene .fullScreen');

var camera, scene, renderer;
var cameraCube, sceneCube;
var controls, textureCube;
var cubeMesh, sphereMesh;
var sphereMaterial;

function init() {
    // CAMERAS
    camera = new THREE.PerspectiveCamera(70, ballScene.offsetWidth / ballScene.offsetHeight, 1, 100000);
    camera.position.set(0, 500, 2000);
    cameraCube = new THREE.PerspectiveCamera(70, ballScene.offsetWidth / ballScene.offsetHeight, 1, 100000);
    // SCENE
    scene = new THREE.Scene();
    sceneCube = new THREE.Scene();
    // Lights
    var ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);

    var sidePath = "../img/main/animation4/";
    var urls = [
        sidePath + "red1.jpg",
        sidePath + "red3.jpg",
        sidePath + "red5.jpg",
        sidePath + "red6.jpg",
        sidePath + "red4.jpg",
        sidePath + "red2.jpg"
    ];
    textureCube = new THREE.CubeTextureLoader().load(urls);
    textureCube.format = THREE.RGBFormat;
    textureCube.mapping = THREE.CubeReflectionMapping;
    textureCube.encoding = THREE.sRGBEncoding;


    var cubeShader = THREE.ShaderLib["cube"];
    var cubeMaterial = new THREE.ShaderMaterial({
        fragmentShader: cubeShader.fragmentShader,
        vertexShader: cubeShader.vertexShader,
        uniforms: cubeShader.uniforms,
        depthWrite: false,
        side: THREE.BackSide
    });
    cubeMaterial.uniforms["tCube"].value = textureCube;
    Object.defineProperty(cubeMaterial, 'map', {
        get: function () {
            return this.uniforms.tCube.value;
        }
    });
    // Skybox
    cubeMesh = new THREE.Mesh(new THREE.BoxBufferGeometry(100, 100, 100), cubeMaterial);
    sceneCube.add(cubeMesh);
    //
    var geometry = new THREE.SphereBufferGeometry(400.0, 48, 24);
    sphereMaterial = new THREE.MeshLambertMaterial({envMap: textureCube});
    sphereMesh = new THREE.Mesh(geometry, sphereMaterial);
    scene.add(sphereMesh);
    //
    renderer = new THREE.WebGLRenderer();
    renderer.autoClear = false;
    renderer.setPixelRatio(window.devicePixelRatio * 2);
    renderer.setSize(ballScene.offsetWidth, ballScene.offsetHeight);
    ballScene.appendChild(renderer.domElement);
    renderer.gammaOutput = true;
    //
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1000;
    controls.maxDistance = 3000;
}

function onWindowResize() {
    camera.aspect = ballScene.offsetWidth / ballScene.offsetHeight;
    camera.updateProjectionMatrix();
    cameraCube.aspect = ballScene.offsetWidth / ballScene.offsetHeight
    cameraCube.updateProjectionMatrix();
    renderer.setSize(ballScene.offsetWidth, ballScene.offsetHeight);
}

//
function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    camera.lookAt(scene.position);
    cameraCube.rotation.copy(camera.rotation);
    renderer.render(sceneCube, cameraCube);
    renderer.render(scene, camera);
}

ballCoverButton.addEventListener('click', () => start());

ballFullScreen.addEventListener('click', () => onWindowResize());

ballReplay.addEventListener('click', () => start());

function start() {
    var ballCanvas = document.querySelector('.ball-scene canvas');
    ballCanvas ? ballCanvas.remove() : '';
    init();
    animate();
}