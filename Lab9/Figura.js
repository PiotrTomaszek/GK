// Piotr Tomaszek
// Informatyka/4 semestr
// 22.05.2020


var glCanvas = document.getElementById("glcanvas");
var scena = new THREE.Scene({color: 0xffffff});
var perspCamera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);

var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Funkcja odpowiedzialna za wyświetlanie naszych elementów na scenie.
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scena, perspCamera);
}

// Światło które będzie padać na naszą figurę.
var dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-15, 10, 9);
perspCamera.add(dirLight);
scena.add(perspCamera);

// Kolor całej figury.
kolorFigury = new THREE.MeshPhongMaterial({color: 0x080808,});

// Podstawa - 1 grupa.
postawaCylinder1 = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 100);
podstawaDol = new THREE.Mesh(postawaCylinder1, kolorFigury);

postawaCylinder2 = new THREE.CylinderGeometry(0.65, 0.7, 0.10, 100);
podstawaGora = new THREE.Mesh(postawaCylinder2, kolorFigury);

podstawaGora.position.y = 0.15;

segment1_podstawa = new THREE.Group();
segment1_podstawa.add(podstawaDol);
segment1_podstawa.add(podstawaGora);

segment1_podstawa.position.set(0, -3.75, 0);
segment1_podstawa.scale.set(3,2,2);

size = 0.2;

// Człon - 2 grupa
czlonCylinder1 = new THREE.CylinderGeometry(1.1, 1.6, 2, 100);
czlonDol = new THREE.Mesh(czlonCylinder1, kolorFigury);

czlonDol.position.set(0, -2, -0);

czlonCylinder2 = new THREE.CylinderGeometry(0.85, 1.09, 2, 100);
czlonGora = new THREE.Mesh(czlonCylinder2, kolorFigury);

var segment2_czlon = new THREE.Group();
segment2_czlon.add(czlonDol);
segment2_czlon.add(czlonGora);

// Obręcz - 3 grupa
obreczCylinder1 = new THREE.CylinderGeometry(1.5, 1.5, 0.25, 100);
obreczDol = new THREE.Mesh(obreczCylinder1, kolorFigury);

obreczCylinder2 = new THREE.CylinderGeometry(0.8, 0.8, 1.5, 100);
obreczGora = new THREE.Mesh(obreczCylinder2, kolorFigury);

segment3_obrecz = new THREE.Group();
segment3_obrecz.add(obreczDol);
segment3_obrecz.add(obreczGora);

segment3_obrecz.position.set(0, 1, 0);

// Główka - 4 grupa
glowkaSphere = new THREE.SphereGeometry(Math.PI / 2.1, 100, 100, Math.PI,  2*Math.PI, 0, 0.75 * Math.PI);
kolorFigury.side = THREE.DoubleSide;
glowka = new THREE.Mesh(glowkaSphere, kolorFigury);
glowka.position.set(0, 1.5, 0);
glowka.scale.set(1,-0.75,-1);

segment4_glowka = new THREE.Group();
segment4_glowka.add(glowka);
segment4_glowka.position.set(0,0.75,0);

calaFigura = new THREE.Group();

calaFigura.add(segment1_podstawa, segment2_czlon, segment3_obrecz, segment4_glowka);
scena.add(calaFigura);

perspCamera.position.z = 5;

animate();
