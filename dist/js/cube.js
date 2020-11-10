
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
controls.enableDamping = true;
camera.position.set( 6, -3, 8 );
controls.enableZoom = false;
controls.enablePan = false;
controls.update();
const pointLight = new THREE.PointLight(0xffffff, 0.15, 400, 2);
pointLight.position.set(3, 3, 3);
const lightHolder = new THREE.Group();
pointLight.castShadow = true;
lightHolder.add(pointLight);
scene.add(lightHolder);
scene.add(new THREE.AmbientLight(0xffffff, 0.95));




// Cubes
const geometry = new THREE.CubeGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({color: 0xdbdbdb});

const cubes = []; 

for(i=0; i<27; i++) {
  cubes.push(new THREE.Mesh(geometry, material));
}

const loader = new THREE.TextureLoader();
// cube12
loader.load('../img/cube1/money.png',
  function(texture) {
    const material12 = [ 
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x7a9c16, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x7a9c16, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}), 
      new THREE.MeshPhongMaterial({color:0x2e5398, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube12 = new THREE.Mesh(geometry, material12);
    cube12.position.set(-4, 4, 4);
    cube12.name = 'cube12';
    scene.add(cube12);
  }
);
// cube14
loader.load('../img/cube1/ribbon.png',
  function(texture) {
    const material14 = [ 
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x7a9c16, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x7a9c16, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}), 
      new THREE.MeshPhongMaterial({color:0x2e5398, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube14 = new THREE.Mesh(geometry, material14);
    cube14.position.set(0, -4, 4);
    cube14.name = 'cube14';
    scene.add(cube14);
  }
);
// cube10
loader.load('../img/cube1/accept.png',
  function(texture) {
    const material10 = [ 
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x7a9c16, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x7a9c16, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}), 
      new THREE.MeshPhongMaterial({color:0x2e5398, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube10 = new THREE.Mesh(geometry, material10);
    cube10.position.set(4, 4, 4);
    cube10.name = 'cube10';
    scene.add(cube10);
  }
);
// cube15
loader.load('../img/cube1/payment.png',
  function(texture) {
    const material15 = [ 
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube15 = new THREE.Mesh(geometry, material15);
    cube15.position.set(4, 0, 4);
    cube15.name = 'cube15';
    scene.add(cube15);
  }
);
// cube24
loader.load('../img/cube1/location.png',
  function(texture) {
    const material24 = [ 
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube24 = new THREE.Mesh(geometry, material24);
    cube24.position.set(4, 0, -4);
    cube24.name = 'cube24';
    scene.add(cube24);
  }
);


cubes.forEach((cube, i)=> {
  if(i != 12 && i != 10 && i != 14) {
    cube.name = `cube${i}`;
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);
  }
  switch(i) {
    case 1:
      cube.position.set(4, 0, 0);
      break;
    case 2:
      cube.position.set(-4, 0, 0);
      break;
    case 3:
      cube.position.set(0, 4, 0);
      break;
    case 4:
      cube.position.set(0, -4, 0);
      break;
    case 5:
      cube.position.set(4, 4, 0);
      break;
    case 6:
      cube.position.set(-4, -4, 0);
      break;
    case 7:
      cube.position.set(-4, 4, 0);
      break;
    case 8:
      cube.position.set(4, -4, 0);
      break;
    case 9:
      cube.position.set(0, 0, 4);
      break;
    // case 10:
    //   cube.position.set(2, 2, 2);
    //   break;
    case 11:
      cube.position.set(-4, -4, 2);
      break;
    // case 12:
    //   cube.position.set(-4, 2, 2);
    //   break;
    case 13:
      cube.position.set(4, -4, 4);
      break;
    // case 14:
    //   cube.position.set(0, -4, 4);
    //   break;
    // case 15:
    //   cube.position.set(4, 0, 4);
    //   break;
    case 16:
      cube.position.set(-4, 0, 4);
      break;
    case 17:
      cube.position.set(0, 4, 4);
      break;
    case 18:
      cube.position.set(0, 0, -4);
      break;
    case 19:
      cube.position.set(4, 4, -4);
      break;
    case 20:
      cube.position.set(-4, -4, -4);
      break;
    case 21:
      cube.position.set(-4, 4, -4);
      break;
    case 22:
      cube.position.set(4, -4, -4);
      break;
    case 23:
      cube.position.set(0, -4, -4);
      break;
    // case 24:
    //   cube.position.set(2, 0, -4);
    //   break;
    case 25:
      cube.position.set(-4, 0, -4);
      break;
    case 26:
      cube.position.set(0, 4, -4);
      break;
  }
});

function build() {
  scene.children.forEach(cube => {
    switch(cube.name) {
      case 'cube1':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 1.1,            
                        y: 0,
                        z: 0            
                    },)
                .start();
        break;
      case 'cube2':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: -1.1,            
                        y: 0,
                        z: 0            
                    },)
                .start();
        break;
      case 'cube3':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 0,            
                        y: 1.1,
                        z: 0            
                    },)
                .start();
        break;
      case 'cube4':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 0,            
                        y: -1.1,
                        z: 0            
                    },)
                .start();
        cube.position.set(0, -1.1, 0);
        break;
      case 'cube5':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 1.1,            
                        y: 1.1,
                        z: 0            
                    },)
                .start();
        break;
      case 'cube6':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: -1.1,            
                        y: -1.1,
                        z: 0            
                    },)
                .start();
        break;
      case 'cube7':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: -1.1,            
                        y: 1.1,
                        z: 0            
                    },)
                .start();
        break;
      case 'cube8':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 1.1,            
                        y: -1.1,
                        z: 0            
                    },)
                .start();
        break;
      case 'cube9':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 0,            
                        y: 0,
                        z: 1.1            
                    },)
                .start();
        break;
      case 'cube10':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 1.1,            
                        y: 1.1,
                        z: 1.1            
                    },)
                .start();
        break;
      case 'cube11':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: -1.1,            
                        y: -1.1,
                        z: 1.1            
                    },)
                .start();
        break;
      case 'cube12':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: -1.1,            
                        y: 1.1,
                        z: 1.1            
                    },)
                .start();
        break;
      case 'cube13':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 1.1,            
                        y: -1.1,
                        z: 1.1            
                    },)
                .start();
        break;
      case 'cube14':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 0,            
                        y: -1.1,
                        z: 1.1            
                    },)
                .start();
        break;
      case 'cube15':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 1.1,            
                        y: 0,
                        z: 1.1            
                    },)
                .start();
        break;
      case 'cube16':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: -1.1,            
                        y: 0,
                        z: 1.1            
                    },)
                .start();
        break;
      case 'cube17':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 0,            
                        y: 1.1,
                        z: 1.1            
                    },)
                .start();
        break;
      case 'cube18':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 0,            
                        y: 0,
                        z: -1.1            
                    },)
                .start();
        break;
      case 'cube19':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 1.1,            
                        y: 1.1,
                        z: -1.1            
                    },)
                .start();
        break;
      case 'cube20':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: -1.1,            
                        y: -1.1,
                        z: -1.1            
                    },)
                .start();
        break;
      case 'cube21':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: -1.1,            
                        y: 1.1,
                        z: -1.1            
                    },)
                .start();
        break;
      case 'cube22':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 1.1,            
                        y: -1.1,
                        z: -1.1            
                    },)
                .start();
        break;
      case 'cube23':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 0,            
                        y: -1.1,
                        z: -1.1            
                    },)
                .start();
        break;
      case 'cube24':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 1.1,            
                        y: 0,
                        z: -1.1            
                    },)
                .start();
        break;
      case 'cube25':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: -1.1,            
                        y: 0,
                        z: -1.1            
                    },)
                .start();
        break;
      case 'cube26':
        new TWEEN.Tween(cube.position)
                .to( {
                        x: 0,            
                        y: 1.1,
                        z: -1.1            
                    },)
                .start();
        break;
    }
  })
  }
  setTimeout(() => {
    build();
    const dragsCubes =scene.children.filter(cube => cube.name.includes('cube'))
    // const dragControls = new THREE.DragControls( dragsCubes, camera, renderer.domElement );
    
    // dragControls.addEventListener("hoveron", function () {
    //   controls.enabled = false;
    // });
    // dragControls.addEventListener("hoveroff", function () {
    //   controls.enabled = true;
    // });
    
    // dragsCubes.forEach(cube => {
    //   window.addEventListener('keydown', function (event) {
    //     console.log("event", event)
    //     switch (event.key) {
    //         case "g":
    //             transformControls.setMode("translate")
    //             break
    //         case "r":
    //             transformControls.setMode("rotate")
    //             break
    //         case "s":
    //             transformControls.setMode("scale")
    //             break
    //     }
    // })
    //   const transformControls = new THREE.TransformControls(camera, renderer.domElement);
    //   transformControls.attach(cube);
    //   transformControls.setMode("rotate")
    //   transformControls.axis = 'Y'
    //   // transformControls.showX = false;
    //   transformControls.showY = false;
    //   // transformControls.showZ = false;
    //   transformControls.space = 'local'
    //   // transformControls.size = 0.000000001
    //   scene.add(transformControls);

    //   // transformControls.addEventListener("hoveron", function () {
    //   //   controls.enabled = false;
    //   // });

    //   transformControls.addEventListener('dragging-changed', function (event) {
    //     controls.enabled = !event.value
    //   })
    // })
    
    
  }, 1000);

  var axis = new THREE.Vector3(4, 5, 7).normalize();
var speed = 0.01;


// dragControls.addEventListener('dragstart', function (event) {
//   event.object.material.opacity = 0.33
// })
// dragControls.addEventListener('dragend', function (event) {
//   event.object.material.opacity = 1
// })

function animate() {
  requestAnimationFrame( animate );
  lightHolder.quaternion.copy(camera.quaternion);
	controls.update();
  renderer.render( scene, camera );
  TWEEN.update();
  if (scene.children[5]) {
    scene.children[5].rotateOnAxis(axis, speed);
}
  
}

animate();