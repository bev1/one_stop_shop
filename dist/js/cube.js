
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
camera.position.set( 6, -3, 8 );
camera.lookAt(scene.position);
controls.enableZoom = false;
controls.enablePan = false;
// controls.update();
const pointLight = new THREE.PointLight(0xffffff, 0.15, 400, 2);
pointLight.position.set(3, 3, 3);
const lightHolder = new THREE.Group();
pointLight.castShadow = true;
lightHolder.add(pointLight);
scene.add(lightHolder);
scene.add(new THREE.AmbientLight(0xffffff, 0.95));
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const quaternion = new THREE.Quaternion()
window.addEventListener( 'resize', onWindowResize, false ); 
function onWindowResize() {
  camera.aspect = wrapper.offsetWidth / wrapper.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( wrapper.offsetWidth, wrapper.offsetHeight );
}
const target = new THREE.Vector3();
var clickInicial = new THREE.Vector2();
// x - horisontal
// y - vertical
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
    cube24.position.set(4, 0, -4);
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
    cube8.position.set(4, -4, 0);
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
    cube26.position.set(0, 4, -4);
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
    cube20.position.set(0, 4, -4);
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
    cube2.position.set(-4, 0, 0);
    cube2.name = 'cube2';
    scene.add(cube2);
  }
);


cubes.forEach((cube, i)=> {
  if(i != 12 && i != 10 && i != 14 && i != 15 && i != 24 && i != 8) {
    cube.name = `cube${i}`;
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);
  }
  switch(i) {
    case 1:
      cube.position.set(4, 0, 0);
      break;
    // case 2:
    //   cube.position.set(-4, 0, 0);
    //   break;
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
    // case 8:
    //   cube.position.set(4, -4, 0);
    //   break;
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
    // case 20:
    //   cube.position.set(-4, -4, -4);
    //   break;
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
    // case 26:
    //   cube.position.set(0, 4, -4);
    //   break;
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
  };

  setTimeout(() => {
    const cubes = scene.children.filter(cube => cube.name.includes('cube'));
    const selectedCubeName = '';
    const selectedCubeSide = null;

    renderer.domElement.addEventListener('pointerdown', onMouseDown, false);

    function onMouseDown(event) {

      mouse.x = ( ( event.clientX - renderer.domElement.getBoundingClientRect().left ) / renderer.domElement.clientWidth ) * 2 - 1;
      mouse.y = - ( ( event.clientY - renderer.domElement.getBoundingClientRect().top ) / renderer.domElement.clientHeight ) * 2 + 1;

      clickInicial.x = mouse.x;
      clickInicial.y = mouse.y;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(cubes);
      if (intersects.length > 0) {
        // selectedCubeName = intersects[0].object.name;
        // selectedCubeSide = Math.floor( intersects[0].faceIndex / 2 );
        // if(intersects[0].object.name === 'cube10') {
        //   if
        // }
        window.addEventListener( 'pointermove', onMouseMove, false );
      }

    }
    function onMouseMove(event) {
      const group = scene.children[scene.children.length - 1]
      mouse.x = ( ( event.clientX - renderer.domElement.getBoundingClientRect().left ) / renderer.domElement.clientWidth ) * 2 - 1;
      mouse.y = - ( ( event.clientY - renderer.domElement.getBoundingClientRect().top ) / renderer.domElement.clientHeight ) * 2 + 1;
      const path = new THREE.Vector2();
      const ray = new THREE.Raycaster();
      ray.setFromCamera(mouse, camera);
      path.x = mouse.x - clickInicial.x;
      path.y = mouse.y - clickInicial.y;
      const normal = new THREE.Vector3();
      const nextRay = new THREE.Raycaster();
      nextRay.setFromCamera(normal, camera);
      console.log("onMouseMove -> normal", nextRay)

      
      if (path.y > 0.01 || path.y < -0.01) {

        if (selectedCubeName === 'cube10') {
          if(selectedCubeSide === 4) {

          }
        }
        
        const rotationGroup = new THREE.Group();
        rotationGroup.updateMatrixWorld( true )
        cubes.forEach(el => {
          if(el.position.x > 1) {
            rotationGroup.add(el)
          }
        });
        scene.add(rotationGroup);
        // console.log("onMouseMove -> rotationGroup", scene)
        group.rotation.z = path.y
        // new TWEEN.Tween(rotationGroup.rotation)
        // .to( {
        //         z: THREE.Math.degToRad(90)
        //     },300)
        //     .onComplete(function() {
        //       const pos = []
        //       rotationGroup.children.forEach(el => {
        //         let rotation = new THREE.Euler()
        //         el.getWorldQuaternion(quaternion)
        //         rotation.setFromQuaternion(quaternion)
        //         pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}, {rotation: rotation._z}))
        //       })
        //       for(let i=0;i<9; i++) {
        //         rotationGroup.children[0].position.x = pos[i].x;
        //         rotationGroup.children[0].position.y = pos[i].y;
        //         rotationGroup.children[0].position.z = pos[i].z;
        //         rotationGroup.children[0].rotation.z = pos[i].rotation;
        //         scene.add(rotationGroup.children[0]);
        //       }
        //       scene.remove(rotationGroup);
        //     })
        // .start();
      }
      if (path.x > 0.01 || path.x < -0.01) {
      }

      // window.addEventListener( 'pointerup', onMouseUp, false );


      const projector = new THREE.Projector();
      const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const mv = new THREE.Vector3(
        ( ( event.clientX - renderer.domElement.getBoundingClientRect().left ) / renderer.domElement.clientWidth ) * 2 - 1,
        - ( ( event.clientY - renderer.domElement.getBoundingClientRect().top ) / renderer.domElement.clientHeight ) * 2 + 1,
          0 );
      // const raycaster = projector.pickingRay(mv, camera);
      // const pos = raycaster.ray.intersectPlane(planeZ);
      // raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cubes);
      if (intersects.length > 0) {
        controls.enableRotate = false;
        // console.log(scene)
      } else {
        controls.enableRotate = true;
      }
    }

    function onMouseUp(event) {
      renderer.domElement.removeEventListener('pointerdown', onMouseDown, false);
      window.removeEventListener( 'pointermove', onMouseMove, false );
      const group = scene.children[scene.children.length - 1];
      new TWEEN.Tween(group.rotation)
      .to( {
              z: THREE.Math.degToRad(group.rotation.z > 0 ? 90 : -90)
          },300)
          .onComplete(function() {
            const pos = []
            group.children.forEach(el => {
              let rotation = new THREE.Euler()
              el.getWorldQuaternion(quaternion)
              rotation.setFromQuaternion(quaternion)
              pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}, {rotation: rotation._z}))
            })
            for(let i=0;i<9; i++) {
              group.children[0].position.x = pos[i].x;
              group.children[0].position.y = pos[i].y;
              group.children[0].position.z = pos[i].z;
              group.children[0].rotation.z = pos[i].rotation;
              scene.add(group.children[0]);
            }
            scene.remove(group);
            console.log(".onComplete -> scene", scene);
            renderer.domElement.addEventListener('pointerdown', onMouseDown, false);
            window.addEventListener( 'pointermove', onMouseMove, false );
          })
      .start();
    }
    
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
  }, 1500);

  setTimeout(() => {
    build();
  }, 1000);



function animate() {
  requestAnimationFrame( animate );
  lightHolder.quaternion.copy(camera.quaternion);
	controls.update();
  renderer.render( scene, camera );
  TWEEN.update();
  
}

animate();