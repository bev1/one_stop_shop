
const wrapper = document.getElementById('cube');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  35, wrapper.offsetWidth / wrapper.offsetHeight,
  1, 1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(wrapper.offsetWidth, wrapper.offsetHeight);
renderer.setClearColor( 0xffffff, 0);
wrapper.appendChild(renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 22;
camera.position.set( 5, -3, 8 );
camera.lookAt(scene.position);
controls.enableZoom = false;
controls.enablePan = false;
const pointLight = new THREE.PointLight(0xffffff, 0.15, 400, 2);
pointLight.position.set(3, 3, 3);
const lightHolder = new THREE.Group();
pointLight.castShadow = true;
lightHolder.add(pointLight);
scene.add(lightHolder);
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const quaternion = new THREE.Quaternion();
const target = new THREE.Vector3();
scene.add(new THREE.AmbientLight(0xffffff, 0.95));


window.addEventListener( 'resize', onWindowResize, false ); 
function onWindowResize() {
  camera.aspect = wrapper.offsetWidth / wrapper.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( wrapper.offsetWidth, wrapper.offsetHeight );
}

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
    cube12.position.set(-1.1, 1.1, 1.1);
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
    cube14.position.set(0, -1.1, 1.1);
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
    cube10.position.set(1.1, 1.1, 1.1);
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
    cube15.position.set(1.1, 0, 1.1);
    cube15.name = 'cube15';
    scene.add(cube15);
  }
);
// cube24
loader.load('../img/cube1/youtube.png',
  function(texture) {
    const material24 = [ 
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x7a9c16, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x7a9c16, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x2e5398, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x2e5398, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube24 = new THREE.Mesh(geometry, material24);
    cube24.position.set(1.1, 0, -1.1);
    cube24.name = 'cube24';
    scene.add(cube24);
  }
);
// cube8
loader.load('../img/cube1/location.png',
  function(texture) {
    const material8 = [ 
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube8 = new THREE.Mesh(geometry, material8);
    cube8.position.set(1.1, -1.1, 0);
    cube8.name = 'cube8';
    scene.add(cube8);
  }
);
// cube26
loader.load('../img/cube1/location.png',
  function(texture) {
    const material26 = [ 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}),
    ];
    const cube26 = new THREE.Mesh(geometry, material26);
    cube26.position.set(0, 1.1, -1.1);
    cube26.name = 'cube26';
    scene.add(cube26);
  }
);
// cube20
loader.load('../img/cube1/payment.png',
  function(texture) {
    const material20 = [ 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}),
    ];
    const cube20 = new THREE.Mesh(geometry, material20);
    cube20.position.set(-1.1, -1.1, -1.1);
    cube20.name = 'cube20';
    scene.add(cube20);
  }
);
// cube2
loader.load('../img/cube1/payment.png',
  function(texture) {
    const material2 = [ 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube2 = new THREE.Mesh(geometry, material2);
    cube2.position.set(-1.1, 0, 0);
    cube2.name = 'cube2';
    scene.add(cube2);
  }
);


cubes.forEach((cube, i)=> {
  if(i != 12 && i != 10 && i != 14 && i != 15 && i != 24 && i != 8 && i != 26 && i != 20 && i != 2) {
    cube.name = `cube${i}`;
    scene.add(cube);
  }
  switch(i) {
    case 1:
      cube.position.set(1.1, 0, 0);
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
    case 9:
      cube.position.set(0, 0, 1.1);
      break;
    case 11:
      cube.position.set(-1.1, -1.1, 1.1);
      break;
    case 13:
      cube.position.set(1.1, -1.1, 1.1);
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
    case 21:
      cube.position.set(-1.1, 1.1, -1.1);
      break;
    case 22:
      cube.position.set(1.1, -1.1, -1.1);
      break;
    case 23:
      cube.position.set(0, -1.1, -1.1);
      break;
    case 25:
      cube.position.set(-1.1, 0, -1.1);
      break;
  }
});

function findCubes(cubesNames, name) {
  let rotationGroup = new THREE.Group();
  rotationGroup.name = name;
  const sceneCubes = scene.children.filter(cube => cube.name.includes('cube'));
  const sceneGroups = scene.children.filter(cube => cube.name.includes('group'));
  sceneCubes.forEach(el => {
    if(cubesNames.includes(el.name)) {
      rotationGroup.add(el)
    }
  });
  if(sceneGroups.length) {
    sceneGroups.forEach(group => {
      group.children.forEach(el => {
        if(cubesNames.includes(el.name)) {
          rotationGroup.add(el)
        }
      })
    });
  }
  scene.add(rotationGroup)
};


function animation1() {
  controls.enableDamping = false;
  findCubes(['cube10', 'cube15', 'cube24', 'cube8', 'cube1', 'cube5', 'cube13', 'cube19', 'cube22'], 'group1');
  const group = scene.children.filter(el => el.name === 'group1');
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);

        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}));
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        // group[0].children[0].rotation.x = pos[i].rotation;
        scene.add(group[0].children[0]);
      }
      animation2()
    })
    .start()
}
function animation2() {
  findCubes(['cube3', 'cube7', 'cube13', 'cube17', 'cube21', 'cube12', 'cube15', 'cube26', 'cube10'], 'group2');
  const group = scene.children.filter(el => el.name === 'group2');
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: (Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}));
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        // group[0].children[0].rotation.y = pos[i].rotation;
        scene.add(group[0].children[0]);
      }
      animation3()
    })
    .start()
}
function animation3() {
  findCubes(['cube3', 'cube4', 'cube7', 'cube9', 'cube18', 'cube23', 'cube14', 'cube0', 'cube15'], 'group3');
  const group = scene.children.filter(el => el.name === 'group3');
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        // group[0].children[0].rotation.x = pos[i].rotation;
        scene.add(group[0].children[0]);
      }
      animation4()
    })
    .start()
}
function animation4() {
  findCubes(['cube0', 'cube1', 'cube3', 'cube4', 'cube5', 'cube16', 'cube25', 'cube2', 'cube8'], 'group4');
  const group = scene.children.filter(el => el.name === 'group4');
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: -(Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation5();
    })
    .start()
}
function animation5() {
  findCubes(['cube0', 'cube1', 'cube7', 'cube9', 'cube18', 'cube23', 'cube2', 'cube15', 'cube14'], 'group5');
  const group = scene.children.filter(el => el.name === 'group5');
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation6();
    })
    .start()
}
function animation6() {
  findCubes(['cube12', 'cube24', 'cube4', 'cube5', 'cube13', 'cube17', 'cube19', 'cube22', 'cube25'], 'group6');
  const group = scene.children.filter(el => el.name === 'group6');
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation7();
    })
    .start()
}
function animation7() {
  findCubes(['cube0', 'cube1', 'cube7', 'cube9', 'cube18', 'cube23', 'cube2', 'cube15', 'cube14'], 'group7');
  const group = scene.children.filter(el => el.name === 'group7');
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation8();
    })
    .start()
}
function animation8() {
  findCubes(['cube12', 'cube24', 'cube4', 'cube5', 'cube13', 'cube17', 'cube19', 'cube22', 'cube25'], 'group8');
  const group = scene.children.filter(el => el.name === 'group8');
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation9();
    })
    .start()
}
function animation9() {
  findCubes(['cube0', 'cube1', 'cube3', 'cube4', 'cube5', 'cube16', 'cube25', 'cube2', 'cube8'], 'group9');
  const group = scene.children.filter(el => el.name === 'group9');
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: (Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation10();
    })
    .start()
}
function animation10() {
  findCubes(['cube3', 'cube4', 'cube7', 'cube9', 'cube18', 'cube23', 'cube14', 'cube0', 'cube15'], 'group10');
  const group = scene.children.filter(el => el.name === 'group10');
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        // group[0].children[0].rotation.x = pos[i].rotation;
        scene.add(group[0].children[0]);
      }
      animation11();
    })
    .start()
}
function animation11() {
  findCubes(['cube3', 'cube7', 'cube13', 'cube17', 'cube21', 'cube12', 'cube15', 'cube26', 'cube10'], 'group11');
  const group = scene.children.filter(el => el.name === 'group11');
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: -(Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}));
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        // group[0].children[0].rotation.y = pos[i].rotation;
        scene.add(group[0].children[0]);
      }
      animation12()
    })
    .start()
}
function animation12() {
  findCubes(['cube10', 'cube15', 'cube24', 'cube8', 'cube1', 'cube5', 'cube13', 'cube19', 'cube22'], 'group12');
  const group = scene.children.filter(el => el.name === 'group12');
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },200)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);

        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}));
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      new TWEEN.Tween(camera.position)
        .to( {
                x: 5,
                y: -3,
                z: 8
            },200)
        .start();
      controls.autoRotate = false;
      controls.enableDamping = true;
      setTimeout(() => {
        $('.cube-button').fadeIn(1000)
        $('.cube-link').each(function() {
          $(this).fadeIn(1000)
        })        
      }, 100);
    })
    .start()
}

setTimeout(() => {
  animation1()
}, 2000);

function animateCube(cubeName) {
  const cube = scene.children.filter(el => el.name === cubeName)[0];
  if(cube.name === 'cube12') {    
    new TWEEN.Tween(cube.position)
      .to( {
        y: 1.2,
        z: 1.6
      },200)
      .start();  
  }
  if(cube.name === 'cube10') {    
    new TWEEN.Tween(cube.position)
      .to( {
        x: 1.3,
        y: 1.3
      },200)
      .start();  
  }
  if(cube.name === 'cube14') {    
    new TWEEN.Tween(cube.position)
      .to( {
        y: -1.4,
        z: 1.4
      },200)
      .start();  
  }
  if(cube.name === 'cube24') {    
    new TWEEN.Tween(cube.position)
      .to( {
        x: 1.4,
      },200)
      .start();  
  }
}
function hideCube(cubeName) {
  const cube = scene.children.filter(el => el.name === cubeName)[0];
  if(cube.name === 'cube12') {    
    new TWEEN.Tween(cube.position)
      .to( {
        y: 1.1,
        z: 1.1
      },200)
      .start();  
  }
  if(cube.name === 'cube10') {    
    new TWEEN.Tween(cube.position)
      .to( {
        x: 1.1,
        y: 1.1
      },200)
      .start();  
  }
  if(cube.name === 'cube14') {    
    new TWEEN.Tween(cube.position)
      .to( {
        y: -1.1,
        z: 1.1
      },200)
      .start();  
  }
  if(cube.name === 'cube24') {    
    new TWEEN.Tween(cube.position)
      .to( {
        x: 1.1,
      },200)
      .start();  
  }
}

$('.cube-link-1').mouseenter(() => {
    controls.autoRotate = false;
    new TWEEN.Tween(camera.position)
      .to( {
        x: 5,
        y: -3,
        z: 8
      },200)
      .onComplete(function() {
        animateCube('cube10')            
      })
      .start();      
})
.mouseleave(() => {
  setTimeout(() => {
    hideCube('cube10')    
  }, 300);
});

$('.cube-link-2').mouseenter(() => {
    controls.autoRotate = false;
    new TWEEN.Tween(camera.position)
      .to( {
        x: 5,
        y: -3,
        z: 8
      },200)
      .onComplete(function() {
        animateCube('cube12')            
      })
      .start();      
})
.mouseleave(() => {
  setTimeout(() => {
    hideCube('cube12')    
  }, 300);
});

$('.cube-link-3').mouseenter(() => {
    controls.autoRotate = false;
    new TWEEN.Tween(camera.position)
      .to( {
        x: 5,
        y: -3,
        z: 8
      },200)
      .onComplete(function() {
        animateCube('cube14')            
      })
      .start();      
})
.mouseleave(() => {
  setTimeout(() => {
    hideCube('cube14')    
  }, 300);
});

$('.cube-button').mouseenter(() => {
    controls.autoRotate = false;
    new TWEEN.Tween(camera.position)
      .to( {
        x: 5,
        y: -3,
        z: 8
      },200)
      .onComplete(function() {
        animateCube('cube24')            
      })
      .start();      
})
.mouseleave(() => {
  setTimeout(() => {
    hideCube('cube24')    
  }, 300);
})

// window.addEventListener( 'pointermove', onMouseMove, false );

// function onMouseMove(event) {
//   const cubes = scene.children.filter(cube => cube.name.includes('cube'));

//   mouse.x = ( ( event.clientX - renderer.domElement.getBoundingClientRect().left ) / renderer.domElement.clientWidth ) * 2 - 1;
//   mouse.y = - ( ( event.clientY - renderer.domElement.getBoundingClientRect().top ) / renderer.domElement.clientHeight ) * 2 + 1;

//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObjects(cubes);
//   if (intersects.length > 0) {
//     $('.name').text(intersects[0].object.name)
//     console.log("onMouseMove -> intersects[0]", intersects[0].object)
//     intersects[ 0 ].object.rotation.x = 10
//     // selectedCubeName = intersects[0].object.name;
//     // selectedCubeSide = Math.floor( intersects[0].faceIndex / 2 );
//     // if(intersects[0].object.name === 'cube10') {
//     //   if
//     } else {
//       scene.children.forEach(el => {
//         el.rotation.x = 0
//       })
//     }
// }



function animate() {
  requestAnimationFrame( animate );
  lightHolder.quaternion.copy(camera.quaternion);
  controls.update();
  renderer.render( scene, camera );
  TWEEN.update();
  
}

animate();