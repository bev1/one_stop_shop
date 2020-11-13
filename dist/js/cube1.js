
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
// controls.autoRotate = true;
controls.autoRotateSpeed = 5;
camera.position.set( 6, -3, 8 );
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
    cube.castShadow = true;
    cube.receiveShadow = true;
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


function animation1() {
  const rotationGroup1 = new THREE.Group();
  const cubes = scene.children.filter(cube => cube.name.includes('cube'));
  cubes.forEach(el => {
    if(el.name === 'cube10' || 
    el.name === 'cube15' || 
    el.name === 'cube24' || 
    el.name === 'cube8' || 
    el.name === 'cube1' || 
    el.name === 'cube5' || 
    el.name === 'cube13' || 
    el.name === 'cube19' || 
    el.name === 'cube22') {
      rotationGroup1.add(el)
    }
  });
  scene.add(rotationGroup1)
  console.log("animation1 -> rotationGroup1", rotationGroup1)
    rotationGroup1.updateMatrixWorld()
      rotationGroup1.getWorldPosition(target)
      console.log(".onComplete -> rotationGroup1", rotationGroup1)
  // new TWEEN.Tween(rotationGroup1.rotation)
  // .to({
  //     x: THREE.Math.degToRad(-90)
  //   },1000)
  //   .onComplete(function() {
  //     let position = new THREE.Vector3(0, 0, 0)
  //     // rotationGroup1.getWorldPosition(position)
  //     console.log(".onComplete -> rotationGroup1", rotationGroup1)
  //     // let quaternion1 = new THREE.Quaternion()
  //     // rotationGroup1.getWorldQuaternion(quaternion1)
  //     rotationGroup1.children.forEach(el => {
  //       // el.position.copy(position)
  //       // el.setRotationFromQuaternion(quaternion1)
  //       // console.log(".onComplete -> el", el)
  //       // let rotation = new THREE.Euler()
  //       // rotation.setFromQuaternion(quaternion)
  //       // pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}, {rotation: rotation._x}))
  //     })
  //     for(let i=0;i<9; i++) {
  //       // rotationGroup1.children[0].position.x = pos[i].x;
  //       // rotationGroup1.children[0].position.y = pos[i].y;
  //       // rotationGroup1.children[0].position.z = pos[i].z;
  //       // rotationGroup1.children[0].rotation.x = pos[i].rotation;
  //       // scene.add(rotationGroup1.children[0]);
  //     }
  //   })
  //   .start()
}
function animation2() {
  const rotationGroup2 = new THREE.Group();
  const cubes = scene.children.filter(cube => cube.name.includes('cube'));
  cubes.forEach(el => {
    if(el.name === 'cube13' || 
    el.name === 'cube17' || 
    el.name === 'cube12' || 
    el.name === 'cube15' || 
    el.name === 'cube3' || 
    el.name === 'cube7' || 
    el.name === 'cube10' || 
    el.name === 'cube21' || 
    el.name === 'cube26') {
      rotationGroup2.add(el)
    }
  });
  console.log("animation2 -> rotationGroup2", rotationGroup2)
  // scene.add(rotationGroup2)
  // new TWEEN.Tween(rotationGroup2.rotation)
  // .to({
  //     y: THREE.Math.degToRad(90)
  //   },1000)
  //   .onComplete(function() {
  //         const pos = []
  //         rotationGroup2.children.forEach(el => {
  //           let rotation = new THREE.Euler()
  //           el.getWorldQuaternion(quaternion)
  //           rotation.setFromQuaternion(quaternion)
  //           pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}, {rotation: rotation._y}))
  //         })
  //         for(let i=0;i<9; i++) {
  //           rotationGroup2.children[0].position.x = pos[i].x;
  //           rotationGroup2.children[0].position.y = pos[i].y;
  //           rotationGroup2.children[0].position.z = pos[i].z;
  //           rotationGroup2.children[0].rotation.y = pos[i].rotation;
  //           scene.add(rotationGroup2.children[0]);
  //         }
  //   })
  //   .start()
}
setTimeout(() => {
  animation1()
}, 1000);
setTimeout(() => {
  // animation2()
}, 2000);

function build() {
  const rotationGroup = new THREE.Group();
  const cubes = scene.children.filter(cube => cube.name.includes('cube'));
  cubes.forEach(el => {
    if(el.position.x > 1) {
      rotationGroup.add(el)
    }
  });
  scene.add(rotationGroup);

  new TWEEN.Tween(rotationGroup.rotation)
  .to({
      x: THREE.Math.degToRad(-90)
    },1000)
    .delay(2000)
    // .onComplete(function() {
    //   setTimeout(() => {
    //     const pos = []
    //     rotationGroup.children.forEach(el => {
    //       let rotation = new THREE.Euler()
    //       el.getWorldQuaternion(quaternion)
    //       rotation.setFromQuaternion(quaternion)
    //       pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}, {rotation: rotation._x}))
    //     })
    //     console.log(".onComplete -> rotationGroup.children[000000000]", rotationGroup.children[1].getWorldPosition(target))
    //     for(let i=0;i<9; i++) {
    //       rotationGroup.children[i].worldToLocal( target )
    //       console.log(".onComplete -> rotationGroup.children[i]", rotationGroup.children[i].position)
    //       // rotationGroup.children[0].position.x = pos[i].x;
    //       // rotationGroup.children[0].position.y = pos[i].y;
    //       // rotationGroup.children[0].position.z = pos[i].z;
    //       // rotationGroup.children[0].rotation.x = pos[i].rotation;
    //       // scene.add(rotationGroup.children[0]);
    //     }
    //     cubes.forEach(el => {
    //       if(el.position.x > 1) {
    //         rotationGroup.add(el)
    //       }
    //     });
    //     new TWEEN.Tween(rotationGroup.rotation)
    //     .to({
    //         x: THREE.Math.degToRad(-90)
    //       },1000)
    //       .delay(5000)
    //       .onComplete(function() {
    //       })
        
    //   }, 1000);
    // })
  .start();
}

setTimeout(() => {
  // build()
}, 500);

$('.cube-link-2').mouseover(() => {
    controls.autoRotate = false;
    new TWEEN.Tween(camera.position)
      .to( {
              x: 6
          },300)
      .start();
    // camera.position.set( 6, -3, 8 );
})
.mouseout(() => {
    // controls.autoRotate = true;
})

// window.addEventListener( 'pointermove', onMouseMove, false );

function onMouseMove(event) {
  const cubes = scene.children.filter(cube => cube.name.includes('cube'));

  mouse.x = ( ( event.clientX - renderer.domElement.getBoundingClientRect().left ) / renderer.domElement.clientWidth ) * 2 - 1;
  mouse.y = - ( ( event.clientY - renderer.domElement.getBoundingClientRect().top ) / renderer.domElement.clientHeight ) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(cubes);
  if (intersects.length > 0) {
    $('.name').text(intersects[0].object.name)
    console.log("onMouseMove -> intersects[0]", intersects[0].object)
    intersects[ 0 ].object.rotation.x = 10
    // selectedCubeName = intersects[0].object.name;
    // selectedCubeSide = Math.floor( intersects[0].faceIndex / 2 );
    // if(intersects[0].object.name === 'cube10') {
    //   if
    } else {
      scene.children.forEach(el => {
        el.rotation.x = 0
      })
    }
}



function animate() {
  requestAnimationFrame( animate );
  lightHolder.quaternion.copy(camera.quaternion);
  controls.update();
  renderer.render( scene, camera );
  TWEEN.update();
  
}

animate();