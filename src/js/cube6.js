
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
  camera.position.set( 5, -3, 8 );
} else {
  camera.position.set( 5, -3, 15 );
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
  myText1 = new SpriteText('IT →', '0.23', '#8d385c');
  myText2 = new SpriteText('Gambling →', '0.23', '#8d385c');
  myText3 = new SpriteText('FinTech →', '0.23', '#8d385c');
  myText4 = new SpriteText('Team of lawyers →', '0.23', '#8d385c');
  button = new SpriteText('START TODAY', '0.2', '#cf093c');
}

if(lang === 'ru') {
  myText1 = new SpriteText('IT →', '0.23', '#8d385c'); 
  myText2 = new SpriteText('Азартные игры →', '0.23', '#8d385c');
  myText3 = new SpriteText('FinTech →', '0.23', '#8d385c');
  myText4 = new SpriteText('Команда юристов →', '0.23', '#8d385c');
  button = new SpriteText('НАЧНИТЕ СЕЙЧАС', '0.2', '#cf093c');
}

if(lang === 'ar') {
  myText1 = new SpriteText(
    'تكنولوجيا المعلومات →', 
    '0.23', 
    '#8d385c'); 
  myText2 = new SpriteText(
    'القمار →',
   '0.23', '#8d385c');
  myText3 = new SpriteText(
    'التكنولوجيا المالية →', 
    '0.23', 
    '#8d385c');
  myText4 = new SpriteText(
    'فريق من المحامين →', 
    '0.23', 
    '#8d385c');
  button = new SpriteText(
    'إبدأ اليوم', 
    '0.2', 
    '#cf093c');
}

// const myText1 = new SpriteText('IT →', '0.23', '#8d385c');
myText1.strokeWidth = 0.15;
myText1.strokeColor = '#8d385c';
myText1.name = 'link1';
myText1.position.x = -0.8;
myText1.position.y = 0;
myText1.position.z = 1;

// const myText2 = new SpriteText('Gambling →', '0.23', '#8d385c');
myText2.strokeColor = '#8d385c';
myText2.strokeWidth = 0.15;
myText2.name = 'link2';
myText2.position.x = -0.3;
myText2.position.y = -1;
myText2.position.z = 0.5;

// const myText3 = new SpriteText('FinTech →', '0.23', '#8d385c');
myText3.strokeColor = '#8d385c';
myText3.strokeWidth = 0.15;
myText3.name = 'link3';
myText3.position.x = 0.7;
myText3.position.y = 1;
myText3.position.z = 0;

// const myText4 = new SpriteText('Team of lawyers →', '0.23', '#8d385c');
myText4.strokeColor = '#8d385c';
myText4.strokeWidth = 0.15;
myText4.name = 'link5';
myText4.position.x = 0.7;
myText4.position.y = -1;
myText4.position.z = 0.5;

// const button = new SpriteText('START TODAY', '0.2', '#cf093c');
button.strokeColor = '#cf093c';
button.strokeWidth = 0.2;
button.position.x = 1.5;
button.position.y = 0;
button.position.z = 0;
button.name = 'button';

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
loader.load('../img/cube6/permission.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material12 = [ 
      new THREE.MeshPhongMaterial({color:0x89a33f, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x89a33f, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xccdb343, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xccdb343, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}), 
      new THREE.MeshPhongMaterial({color:0xab8796, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube12 = new THREE.Mesh(geometry, material12);
    cube12.position.set(-1.1, 1.1, 1.1);
    cube12.name = 'cube12';
    scene.add(cube12);
    cube12.add(myText1);
  }
);
// cube14
loader.load('../img/cube6/law.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material14 = [ 
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x5471a6, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x5471a6, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}), 
      new THREE.MeshPhongMaterial({color:0x85435f, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube14 = new THREE.Mesh(geometry, material14);
    cube14.position.set(0, -1.1, 1.1);
    cube14.name = 'cube14';
    scene.add(cube14);
    cube14.add(myText2);
  }
);
// cube10
loader.load('../img/cube6/hammer.png',
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
loader.load('../img/cube2/research.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material24 = [ 
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0x846f98, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x89a33f, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x89a33f, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}), 
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
loader.load('../img/cube6/api.png',
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
// cube13
loader.load('../img/cube6/content.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material13 = [ 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube13 = new THREE.Mesh(geometry, material13);
    cube13.position.set(1.1, -1.1, 1.1);
    cube13.name = 'cube13';
    scene.add(cube13);
    cube13.add(myText4);
  }
);


cubes.forEach((cube, i)=> {
  if(i != 12 && i != 10 && i != 14 && i != 15 && i != 24 && i != 8 && i != 26 && i != 20 && i != 2 && i != 13) {
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
      animation1()
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
        scrollTop: $('#legal-2').offset().top
      }, 500);
    }
    if(targetLink === 'link2') {
      $('html, body').animate({
        scrollTop: $('#legal-3').offset().top
      }, 500);
    }
    if(targetLink === 'link3') {
      $('html, body').animate({
        scrollTop: $('#legal-4').offset().top
      }, 500);
    }
    if(targetLink === 'link5') {
      $('html, body').animate({
        scrollTop: $('#legal-5').offset().top
      }, 500);
    }
    if(targetLink === 'link4') {
      $('#form').modal('show');
    }
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