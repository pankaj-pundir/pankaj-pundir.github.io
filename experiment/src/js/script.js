import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const orbit = new OrbitControls(camera,renderer.domElement);


const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(5);
scene.add(gridHelper);


camera.position.set(0,2,5);

// add the box
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial({color: 0x0000FF});
const box =  new THREE.Mesh(boxGeometry,boxMaterial);
scene.add(box);

// add a sphere
const sphereGeometry = new THREE.SphereGeometry(2,50,50);
const sphereMaterial = new THREE.MeshStandardMaterial({color: 0x00FF00,wireframe : false});
const sphere =  new THREE.Mesh(sphereGeometry,sphereMaterial);
// sphere.position.x = 2
scene.add(sphere);

// add light source

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff,0.8);
scene.add(directionalLight);
directionalLight.position.set(-5,10,0);
directionalLight.castShadow = true;

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(directionalLightHelper);

// add GUI
const gui = new dat.GUI();
const options = {sphereColor:0x0000FF,wireframe:false,speed:0.01}

// set controls
gui.addColor(options,'sphereColor').onChange(function(e) {
    sphere.material.color.set(e);
})

gui.add(options,'wireframe').onChange(function(e) {
    sphere.material.wireframe = e;
})
gui.add(options,'speed',0,0.1);

scene.add(gui);


let step = 0;

function animate(time){
    box.rotation.x = time/1000;
    box.rotation.y = time/1000;

    step += options.speed;
    sphere.position.y = 6*Math.abs(Math.sin(step));

    renderer.render(scene,camera);
}
renderer.setAnimationLoop(animate);
