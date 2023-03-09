//Canvas
var myCanvas = document.getElementById('mycanvas');

//Scene
var scene = new THREE.Scene();

//Camera
var height = window.innerHeight;
var width = window.innerWidth;
var distance = 50000;
var diag = Math.sqrt((height * height) + (width * width))
var fov = 2 * Math.atan((diag) / (1 * distance)) * (180 / Math.PI); //Field of View
var camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, distance);
camera.position.set(0, 100, -500);

//Renderer
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xefefff, 5);
dirLight.position.set(10, 10, 10);
scene.add(dirLight);

var renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: myCanvas,
    alpha: true
});

//renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.antialias = true;
document.body.appendChild(renderer.domElement);

//LIGHTS
var light = new THREE.AmbientLight(0xffffff, 3);
light.power = 6640;  // GE Lumens @ 60W incade.
light.decay = 2;
light.distance = Infinity;
light.position.set(0, 80, 0);
light.castShadow = true;
light.shadowCameraVisible = true;
scene.add(light);

//OrbitControls
orbit = new THREE.OrbitControls(camera, renderer.domElement);
orbit.maxPolarAngle = Math.PI / 2;
orbit.update();

// Instantiate a loader
var loader = new THREE.GLTFLoader();
loader.load('Huakaʻi_Campus Render1.glb', handle_load);

var mesh;

function handle_load(gltf) {
    mesh = gltf.scene;
    scene.add(mesh);
}

//Render loop
render();

var delta = 0;
var prevTime = Date.now();

function render() {
    //exposure
    renderer.toneMappingExposure = Math.pow(0.7, 5.0);  // -> exposure: 0.168
    renderer.render(scene, camera);

    requestAnimationFrame(render);
}
