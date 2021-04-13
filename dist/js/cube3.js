
const wrapper = document.getElementById('cube');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  35, wrapper.offsetWidth / wrapper.offsetHeight,
  1, 1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(wrapper.offsetWidth, wrapper.offsetHeight);
renderer.setClearColor( 0xffffff, 0);
wrapper.appendChild(renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;
if($(window).width() > 576) {
  camera.position.set( 5, -3, 11 );
} else {
  camera.position.set( 5, -3, 19 );
}
camera.lookAt(scene.position);
controls.enableZoom = false;
controls.enablePan = false;
const pointLight = new THREE.PointLight(0xffffff, 0.15, 400, 2);
pointLight.position.set(1, 3, 3);
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
};

const lang = $(wrapper).attr('data-lang');

let myText1, myText2, myText3, button;

if(lang === 'en') {
  /*myText1 = new SpriteText('Skills →', '0.23', '#81ad00');
  myText2 = new SpriteText('Mobile App →', '0.23', '#81ad00');
  myText3 = new SpriteText('Portfolio →', '0.23', '#81ad00');*/
  const text1BorderLoader = new THREE.TextureLoader().load( '../img/cube3/eng/Skills_link.png' );
  const text1Border = new THREE.SpriteMaterial({map: text1BorderLoader});
  myText1 = new THREE.Sprite(text1Border);
  // myText1 = new SpriteText('Accounts →', '0.23', '#1e4ea7');
  const text2BorderLoader = new THREE.TextureLoader().load( '../img/cube3/eng/Mobile_App_link.png' );
  const text2Border = new THREE.SpriteMaterial({map: text2BorderLoader});
  myText2 = new THREE.Sprite(text2Border);
  // myText2 = new SpriteText('Licenses →', '0.23', '#1e4ea7');
  const text3BorderLoader = new THREE.TextureLoader().load( '../img/cube3/eng/Portfolio_link.png' );
  const text3Border = new THREE.SpriteMaterial({map: text3BorderLoader});
  myText3 = new THREE.Sprite(text3Border);

  button = new SpriteText('START TODAY', '0.2', '#cf093c');
}

if(lang === 'ru') {
  /*myText1 = new SpriteText('Возможности →', '0.23', '#81ad00'); 
  myText2 = new SpriteText('Мобильные приложения →', '0.23', '#81ad00');
  myText3 = new SpriteText('Портфолио →', '0.23', '#81ad00');*/
  const text1BorderLoader = new THREE.TextureLoader().load( '../img/cube3/ru/Skills_link.png' );
  const text1Border = new THREE.SpriteMaterial({map: text1BorderLoader});
  myText1 = new THREE.Sprite(text1Border);
  // myText1 = new SpriteText('Accounts →', '0.23', '#1e4ea7');
  const text2BorderLoader = new THREE.TextureLoader().load( '../img/cube3/ru/Mobile_App_link.png' );
  const text2Border = new THREE.SpriteMaterial({map: text2BorderLoader});
  myText2 = new THREE.Sprite(text2Border);
  // myText2 = new SpriteText('Licenses →', '0.23', '#1e4ea7');
  const text3BorderLoader = new THREE.TextureLoader().load( '../img/cube3/ru/Portfolio_link.png' );
  const text3Border = new THREE.SpriteMaterial({map: text3BorderLoader});
  myText3 = new THREE.Sprite(text3Border);

  button = new SpriteText('НАЧНИТЕ СЕЙЧАС', '0.2', '#cf093c');
}

if(lang === 'ar') {
  /*myText1 = new SpriteText(
    'المهارات →', 
    '0.23', 
    '#81ad00'); 
  myText2 = new SpriteText(
    'تطبيق الهاتف المحمول →',
   '0.23', '#81ad00');
  myText3 = new SpriteText(
    'الملف →', 
    '0.23', 
    '#81ad00');*/
  const text1BorderLoader = new THREE.TextureLoader().load( '../img/cube3/ar/Skills_link.png' );
  const text1Border = new THREE.SpriteMaterial({map: text1BorderLoader});
  myText1 = new THREE.Sprite(text1Border);
  // myText1 = new SpriteText('Accounts →', '0.23', '#1e4ea7');
  const text2BorderLoader = new THREE.TextureLoader().load( '../img/cube3/ar/Mobile_App_link.png' );
  const text2Border = new THREE.SpriteMaterial({map: text2BorderLoader});
  myText2 = new THREE.Sprite(text2Border);
  // myText2 = new SpriteText('Licenses →', '0.23', '#1e4ea7');
  const text3BorderLoader = new THREE.TextureLoader().load( '../img/cube3/ar/Portfolio_link.png' );
  const text3Border = new THREE.SpriteMaterial({map: text3BorderLoader});
  myText3 = new THREE.Sprite(text3Border);
  button = new SpriteText(
    'إبدأ اليوم', 
    '0.2', 
    '#cf093c');
}

if(lang === 'es') {
  /*myText1 = new SpriteText('Возможности →', '0.23', '#81ad00'); 
  myText2 = new SpriteText('Мобильные приложения →', '0.23', '#81ad00');
  myText3 = new SpriteText('Портфолио →', '0.23', '#81ad00');*/
  const text1BorderLoader = new THREE.TextureLoader().load( '../img/cube3/es/Skills_link.png' );
  const text1Border = new THREE.SpriteMaterial({map: text1BorderLoader});
  myText1 = new THREE.Sprite(text1Border);
  // myText1 = new SpriteText('Accounts →', '0.23', '#1e4ea7');
  const text2BorderLoader = new THREE.TextureLoader().load( '../img/cube3/es/Mobile_App_link.png' );
  const text2Border = new THREE.SpriteMaterial({map: text2BorderLoader});
  myText2 = new THREE.Sprite(text2Border);
  // myText2 = new SpriteText('Licenses →', '0.23', '#1e4ea7');
  const text3BorderLoader = new THREE.TextureLoader().load( '../img/cube3/es/Portfolio_link.png' );
  const text3Border = new THREE.SpriteMaterial({map: text3BorderLoader});
  myText3 = new THREE.Sprite(text3Border);

  button = new SpriteText('COMIENCE HOY', '0.2', '#cf093c');
}

// const myText1 = new SpriteText('Skills →', '0.23', '#81ad00');
myText1.strokeWidth = 0.15;
myText1.strokeColor = '#81ad00';
myText1.name = 'link1';
myText1.position.x = -0.8;
myText1.position.y = 0;
myText1.position.z = 1;
// myText1.scale.set(2, 0.75, 1.5);

// const myText2 = new SpriteText('Mobile App →', '0.23', '#81ad00');
myText2.strokeColor = '#81ad00';
myText2.strokeWidth = 0.15;
myText2.name = 'link2';
myText2.position.x = -0.3;
myText2.position.y = -1;
myText2.position.z = 0.5;
// myText2.scale.set(2.5, 0.75, 1.5);

// const myText3 = new SpriteText('Portfolio →', '0.23', '#81ad00');
myText3.strokeColor = '#81ad00';
myText3.strokeWidth = 0.15;
myText3.name = 'link3';
myText3.position.x = 0.7;
myText3.position.y = 1;
myText3.position.z = 0;
// myText3.scale.set(2, 0.75, 1.5);

// const button = new SpriteText('START TODAY', '0.2', '#cf093c');
button.strokeColor = '#cf093c';
button.strokeWidth = 0.2;
button.position.x = 1.5;
button.position.y = 0;
button.position.z = 0;
button.name = 'button';

if(lang === 'en') {
  myText1.scale.set(2, 0.75, 1.5);
  myText2.scale.set(2, 0.75, 1.5);
  myText3.scale.set(2, 0.75, 1.5);
}
if(lang === 'ru') {
  myText1.scale.set(2.3, 0.75, 1.5);
  myText2.scale.set(2.9, 0.75, 1.5);
  myText3.scale.set(2, 0.75, 1.5);
}
if(lang === 'ar') {
  myText1.scale.set(2, 0.75, 1.5);
  myText2.scale.set(2.9, 0.75, 1.5);
  myText3.scale.set(2, 0.75, 1.5);
}
if(lang === 'es') {
  myText1.scale.set(2, 0.75, 1.5);
  myText2.scale.set(2.5, 0.75, 1.5);
  myText3.scale.set(2, 0.75, 1.5);
}

const map = new THREE.TextureLoader().load( '../img/border4.png' );
const border = new THREE.SpriteMaterial({map: map, sizeAttenuation: true});

const borderSprite = new THREE.Sprite(border);
borderSprite.name = 'link4';
borderSprite.position.x = 1.5;
borderSprite.position.y = 0;
borderSprite.position.z = 0;
borderSprite.scale.set(2, 0.75, 1.0)

// Cubes
const geometry = new THREE.CubeGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({color: 0xdbdbdb});

const cubes = [];

for(i=0; i<27; i++) {
  cubes.push(new THREE.Mesh(geometry, material));
}

const loader = new THREE.TextureLoader();
// cube12
loader.load('../img/cube3/iconfinder.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material12 = [ 
      new THREE.MeshPhongMaterial({color:0x85435f, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x85435f, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xc5471a6, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xc5471a6, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}), 
      new THREE.MeshPhongMaterial({color:0x8660ad, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube12 = new THREE.Mesh(geometry, material12);
    cube12.position.set(-1.1, 1.1, 1.1);
    cube12.name = 'cube12';
    scene.add(cube12);
    cube12.add(myText1);
  }
);
// cube14
loader.load('../img/cube3/api.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material14 = [ 
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x5471a6, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x5471a6, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}), 
      new THREE.MeshPhongMaterial({color:0x8660ad, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube14 = new THREE.Mesh(geometry, material14);
    cube14.position.set(0, -1.1, 1.1);
    cube14.name = 'cube14';
    scene.add(cube14);
    cube14.add(myText2);
  }
);
// cube10
loader.load('../img/cube3/content.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material10 = [ 
      new THREE.MeshPhongMaterial({color:0xb9a82b2, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xb9a82b2, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xcdb343, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xcdb343, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}), 
      new THREE.MeshPhongMaterial({color:0x8660ad, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube10 = new THREE.Mesh(geometry, material10);
    cube10.position.set(1.1, 1.1, 1.1);
    cube10.name = 'cube10';
    scene.add(cube10);
    cube10.add(myText3);
  }
);
// cube15
loader.load('../img/cube2/payment.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
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
loader.load('../img/cube3/research.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material24 = [ 
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0x846f98, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x85435f, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x85435f, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube24 = new THREE.Mesh(geometry, material24);
    cube24.position.set(1.1, 0, -1.1);
    cube24.name = 'cube24';
    scene.add(cube24);
    cube24.add(button);
    cube24.add(borderSprite);
  }
);
// cube8
loader.load('../img/cube2/location.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
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
loader.load('../img/cube2/location.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
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
loader.load('../img/cube2/payment.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
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
loader.load('../img/cube2/payment.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
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
  findCubes(['cube10', 'cube15', 'cube24', 'cube8', 'cube1', 'cube5', 'cube13', 'cube19', 'cube22'], 'group1');
  let group = scene.children.filter(el => el.name === 'group1');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },2000)
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
  let group = scene.children.filter(el => el.name === 'group2');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: (Math.PI / 2)
    },2000)
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
  let group = scene.children.filter(el => el.name === 'group3');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },2000)
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
  let group = scene.children.filter(el => el.name === 'group4');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: -(Math.PI / 2)
    },2000)
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
  let group = scene.children.filter(el => el.name === 'group5');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },2000)
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
  let group = scene.children.filter(el => el.name === 'group6');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },2000)
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
  let group = scene.children.filter(el => el.name === 'group7');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },2000)
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
  let group = scene.children.filter(el => el.name === 'group8');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },2000)
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
  let group = scene.children.filter(el => el.name === 'group9');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: (Math.PI / 2)
    },2000)
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
  let group = scene.children.filter(el => el.name === 'group10');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },2000)
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
  let group = scene.children.filter(el => el.name === 'group11');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: -(Math.PI / 2)
    },2000)
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
  let group = scene.children.filter(el => el.name === 'group12');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },2000)
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
      animation1();
    })
    .start()
}

setTimeout(() => {
  animation1()
}, 1000);

window.addEventListener( 'pointerdown', onMouseClick, false );

function onMouseClick(event) {
  const objects = scene.children.filter(obj => obj.name.includes('cube') || obj.name.includes('group'));
  // console.log("TCL: scene", link1.children[0].name)

  mouse.x = ( ( event.clientX - renderer.domElement.getBoundingClientRect().left ) / renderer.domElement.clientWidth ) * 2 - 1;
  mouse.y = - ( ( event.clientY - renderer.domElement.getBoundingClientRect().top ) / renderer.domElement.clientHeight ) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects, true);
  if (intersects.length > 0) {
    let targetLink = intersects[0].object.name;
    if(targetLink === 'link1') {
      $('html, body').animate({
        scrollTop: $('#development-1').offset().top
      }, 500);
    }
    if(targetLink === 'link2') {
      $('html, body').animate({
        scrollTop: $('#development-1').offset().top
      }, 500);
    }
    if(targetLink === 'link3') {
      $('html, body').animate({
        scrollTop: $('#development-2').offset().top
      }, 500);
    }
    if(targetLink === 'link4') {
      $('#form').modal('show');
    }
  }
}

window.addEventListener('mousemove', onMouseHover, false)

function onMouseHover(event){
  const objects = scene.children.filter(obj => obj.name.includes('cube') || obj.name.includes('group'));
  // console.log("TCL: scene", link1.children[0].name)

  mouse.x = ( ( event.clientX - renderer.domElement.getBoundingClientRect().left ) / renderer.domElement.clientWidth ) * 2 - 1;
  mouse.y = - ( ( event.clientY - renderer.domElement.getBoundingClientRect().top ) / renderer.domElement.clientHeight ) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects, true);
  if (intersects.length > 0) {
    let targetLink = intersects[0].object.name;
    let linksArr = ["link1", "link2", "link3", "link4", "link5", "button"]
    if(linksArr.includes(targetLink)){
      $('html,body').css('cursor', 'pointer');
    }
    else{
      $('html,body').css('cursor', 'default');
    }
  }
  else{
    $('html,body').css('cursor', 'default');
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

