const Panorama1 = new PANOLENS.ImagePanorama('assets/1.jpg');
const Panorama2 = new PANOLENS.ImagePanorama('assets/2.jpg');
const Panorama3 = new PANOLENS.ImagePanorama('assets/3.1.jpg');
const Panorama4 = new PANOLENS.ImagePanorama('assets/3.2.jpg');
const Panorama5 = new PANOLENS.ImagePanorama('assets/4.1.jpg');
let imageContainer = document.querySelector('.panorama__container');

let SpotPositions = [
       // x y z
    new THREE.Vector3(700, 0, -1400),
    new THREE.Vector3(-2200, 100, 300),
    new THREE.Vector3(-300, 0, -1000),
    new THREE.Vector3(-1500, 0, 1000),
    new THREE.Vector3(100, 0, -1500),
    //обратно
    new THREE.Vector3(1900, 0, -600),
    new THREE.Vector3(-300, 0, -1300),
    new THREE.Vector3(-1600, 0, 300),
    new THREE.Vector3(1200, 0, -1000),
    ]

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
    autoRotate: true,
    autoRotateSpeed: 0.4,
    cameraFov: 100
});
// начало
Panorama1.link(Panorama2, SpotPositions[0]);
Panorama1.link(Panorama3, SpotPositions[1]);
Panorama3.link(Panorama4, SpotPositions[2]);
Panorama4.link(Panorama5, SpotPositions[3]);
Panorama2.link(Panorama4, SpotPositions[4]);
Panorama3.link(Panorama1, SpotPositions[5]);
Panorama4.link(Panorama3, SpotPositions[6]);
Panorama2.link(Panorama1, SpotPositions[7]);
Panorama5.link(Panorama4, SpotPositions[8]);

viewer.add(Panorama1, Panorama2, Panorama3, Panorama4, Panorama5);
