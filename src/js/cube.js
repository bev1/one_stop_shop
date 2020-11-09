const wrapper = document.getElementById('cube');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  35, window.innerWidth / window.innerHeight,
  1, 1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(1000, 500);
renderer.setClearColor( 0xffffff, 0);
wrapper.appendChild(renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.set( 0, 0, 10 );
controls.enableZoom = false;
controls.enablePan = false;
controls.update();
// Cubes

const geometry = new THREE.CubeGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial({color: 0xdbdbdb});

const cubes = []; 

for(i=0; i<27; i++) {
  cubes.push(new THREE.Mesh(geometry, material));
}

const loader = new THREE.TextureLoader();

loader.load('../img/cube1/money.png',
  function(texture) {
    const material12 = [ 
      new THREE.MeshBasicMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshBasicMaterial({color:0x7a9c16, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({color:0x7a9c16, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshBasicMaterial({map: texture}), 
      new THREE.MeshBasicMaterial({color:0x2e5398, transparent:true, opacity:0.8, side: THREE.DoubleSide}), 
    ];
    const cube12 = new THREE.Mesh(geometry, material12);
    cube12.position.set(-1.1, 1.1, 1.1);
    scene.add(cube12);
  }
);


cubes.forEach((cube, i)=> {
  if(i===12) {
    // loader.load( '../img/cube1/money.png',
    //   function(texture) {
    //     const material12 = new THREE.MeshBasicMaterial( { map: texture } );
    //     const cube12 = new THREE.Mesh(geometry, material12);
    //     cube12.position.set(-1.1, 1.1, 1.1);
    //     scene.add(cube12);
    //   }
    // );
  } else {
    scene.add(cube);
  }
  switch(i) {
    case 1:
      cube.position.set(1.1, 0, 0);
      break;
    case 2:
      cube.position.set(-1.1, 0, 0);
      break;
    case 3:
      cube.position.set(0, 1.1, 0);
      break;
    case 4:
      cube.position.set(0, -1.1, 0);
      break;
    case 5:
      cube.position.set(1.1, 1.1, 0);
      break;
    case 6:
      cube.position.set(-1.1, -1.1, 0);
      break;
    case 7:
      cube.position.set(-1.1, 1.1, 0);
      break;
    case 8:
      cube.position.set(1.1, -1.1, 0);
      break;
    case 9:
      cube.position.set(0, 0, 1.1);
      break;
    case 10:
      cube.position.set(1.1, 1.1, 1.1);
      break;
    case 11:
      cube.position.set(-1.1, -1.1, 1.1);
      break;
    // case 12:
    //   cube.position.set(-1.1, 1.1, 1.1);
    //   break;
    case 13:
      cube.position.set(1.1, -1.1, 1.1);
      break;
    case 14:
      cube.position.set(0, -1.1, 1.1);
      break;
    case 15:
      cube.position.set(1.1, 0, 1.1);
      break;
    case 16:
      cube.position.set(-1.1, 0, 1.1);
      break;
    case 17:
      cube.position.set(0, 1.1, 1.1);
      break;
    case 18:
      cube.position.set(0, 0, -1.1);
      break;
    case 19:
      cube.position.set(1.1, 1.1, -1.1);
      break;
    case 20:
      cube.position.set(-1.1, -1.1, -1.1);
      break;
    case 21:
      cube.position.set(-1.1, 1.1, -1.1);
      break;
    case 22:
      cube.position.set(1.1, -1.1, -1.1);
      break;
    case 23:
      cube.position.set(0, -1.1, -1.1);
      break;
    case 24:
      cube.position.set(1.1, 0, -1.1);
      break;
    case 25:
      cube.position.set(-1.1, 0, -1.1);
      break;
    case 26:
      cube.position.set(0, 1.1, -1.1);
      break;
  }
});

// const light = new THREE.DirectionalLight(0xffffff, 1.0, 500);
// light.position.set( 1, 1, 1 );
// scene.add(light)


function animate() {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
}

animate();