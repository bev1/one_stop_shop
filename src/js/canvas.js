
        var id = "rubik";
        var escena;
        var camara;
        var renderer;
        var controls;
        var webGLDisponible;
        var luzDireccional;
        var cubo;
        var centroCubo;
        var piezas;
        var lado;
        var eje;
        var giroAplicado;
        var giroRestante;
        var giroObjetivo;
        var getObjeto;
        var getNormal;
        var clickInicialGuardado;
        var raycaster;
        var winResize;
        var botonPlay;
        var botonRestart;
        var textInfo;
        var clockInfo;
        var marcoInfo;
        var direccion = "";
        var autoRotandoCara = false;
        var desordenando = false;
        var bloqueo = true;
        var rotandoCara = false;
        var rotandoEscena = false;
        var direccionSeleccionada = false;
        var caraSeleccionada = false;
        var pointer = false;
        var jugando = false;
        var caras = [false, false, false, false, false, false];
        var indiceDesorden = 0;
        var countDown = 6;
        var min = 0;
        var sec = 0;
        var mouse =  new THREE.Vector2();
        var clickInicial = new THREE.Vector2();
        var cara = new THREE.Object3D();
        var n = new THREE.Color(0x000000);
        var blanco = new THREE.Color(0xFFFFFF);
        var amarillo = new THREE.Color(0xAA8800);
        var rojo = new THREE.Color(0xCC0000);
        var naranja = new THREE.Color(0xBB0066);
        var azul = new THREE.Color(0x0044FF);
        var verde = new THREE.Color(0x00AA00);
        var buttonNormal = new THREE.Color(0x444444);
        var buttonHover = new THREE.Color(0xBBBBBB);
        var invertirGiro = [1,1,1,1,1,1];
        var distanciasIniciales = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var posicionesIniciales =
                [
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0)
                ];
        var rotacionesIniciales =
                [
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0)
                ];
        var rotacionesInicialesRelativas =
                [
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0),
                    new THREE.Vector3 (0,0,0), new THREE.Vector3 (0,0,0)
                ];

        detectarWebGL();
        iniciarApp();

        function detectarWebGL()
        {
            webGLDisponible = (Detector.webgl) ? true : false;
        }

        function iniciarApp()
        {
            if (webGLDisponible)
            {
                iniciarEscena();
                iniciarCubo();
                crearMenu();
                instanciarMensaje();
                instanciarReloj();
                animarEscena();
            }
            else alert("Su navegador no soporta WebGL");
        }

        function iniciarEscena()
        {
            renderer =  new THREE.WebGLRenderer({antialias: true, alpha: true });
            var canvasWidth = document.getElementById(id).offsetWidth; var canvasHeight = document.getElementById(id).offsetHeight;
            renderer.setSize(canvasWidth, canvasHeight);
            document.getElementById(id).appendChild(renderer.domElement);
            escena = new THREE.Scene();
            camara = new THREE.PerspectiveCamera(60, canvasWidth / canvasHeight, 0.1, 100);
            camara.position.set(-3, 3, 6);
            camara.lookAt(escena.position);
            var luzAmbiente = new THREE.AmbientLight(0xFFFFFF, 10.0);
            escena.add (luzAmbiente);
            var luzDireccional1 = new THREE.DirectionalLight(0xFFFFFF, 1);
            luzDireccional1.position.set (0,5,2);
            var luzDireccional2 = new THREE.DirectionalLight(0xFFFFFF, 4);
            luzDireccional2.position.set (10,3,2);
            var luzDireccional3 = new THREE.DirectionalLight(0xFFFFFF, 4);
            luzDireccional3.position.set (-10,3,2);
            camara.add(luzDireccional1);
            camara.add(luzDireccional2);
            camara.add(luzDireccional3);
            escena.add(camara);
            raycaster = new THREE.Raycaster();
            document.addEventListener("keydown", onDocumentKeyDown, false);
            window.addEventListener( "mousedown", onDocumentMouseDown, false );
            window.addEventListener( "mouseup", onDocumentMouseUp, false );
            controls = new THREE.OrbitControls( camara, renderer.domElement );
            controls.enablePan = false;
            controls.enableKeys = false;
            controls.enableZoom = false;
            winResize = new THREEx.WindowResize(renderer, camara);
            winResize.seleccionar(id);
        }

        function crearPieza(texturaColor, texturaBump, color1, color2, color3, color4, color5, color6, posicion, nombre)
        {
            var geometria = new THREE.BoxGeometry(1,1,1,10,10,10);
            var material = new THREE.MeshPhongMaterial({
                vertexColors:THREE.VertexColors,
                color:0x353535,
                map:texturaColor,
                bumpMap:texturaBump,
                bumpScale  :  0.02,
                shininess  :  24
            });
            var modifier = new THREE.SubdivisionModifier(1);
            modifier.modify(geometria);
            var pieza = new THREE.Mesh(geometria, material);
            corregirUVs (geometria, color1, color2, color3, color4, color5, color6);
            pieza.position.set(posicion.x, posicion.y, posicion.z);
            pieza.name = nombre;
            return pieza;
        }

        function corregirUVs ( geometry , color1 , color2, color3, color4, color5, color6 )
        {
            geometry.computeBoundingBox();
            var max     = geometry.boundingBox.max;
            var min     = geometry.boundingBox.min;
            var offset  = new THREE.Vector3(0 - min.x, 0 - min.y, 0 - min.z);
            var range   = new THREE.Vector3(max.x - min.x, max.y - min.y, max.z - min.z);
            geometry.faceVertexUvs[0] = [];
            var faces = geometry.faces;
            for (var i = 0; i < geometry.faces.length ; i++) {
                var v1 = geometry.vertices[faces[i].a];
                var v2 = geometry.vertices[faces[i].b];
                var v3 = geometry.vertices[faces[i].c];
                if (faces[i].normal.z <= -0.5)
                {
                    faces[i].vertexColors[0] = new THREE.Color(color1);
                    faces[i].vertexColors[1] = new THREE.Color(color1);
                    faces[i].vertexColors[2] = new THREE.Color(color1);
                    geometry.faceVertexUvs[0].push([

                        new THREE.Vector2(( v1.x + offset.x ) / range.x, ( v1.y + offset.y ) / range.y),
                        new THREE.Vector2(( v2.x + offset.x ) / range.x, ( v2.y + offset.y ) / range.y),
                        new THREE.Vector2(( v3.x + offset.x ) / range.x, ( v3.y + offset.y ) / range.y)
                    ]);
                }
                if (faces[i].normal.z >= 0.5)
                {
                    faces[i].vertexColors[0] = new THREE.Color(color2);
                    faces[i].vertexColors[1] = new THREE.Color(color2);
                    faces[i].vertexColors[2] = new THREE.Color(color2);
                    geometry.faceVertexUvs[0].push([
                        new THREE.Vector2(( v1.x + offset.x ) / range.x, ( v1.y + offset.y ) / range.y),
                        new THREE.Vector2(( v2.x + offset.x ) / range.x, ( v2.y + offset.y ) / range.y),
                        new THREE.Vector2(( v3.x + offset.x ) / range.x, ( v3.y + offset.y ) / range.y)
                    ]);
                }
                if (faces[i].normal.x <= -0.5)
                {
                    faces[i].vertexColors[0] = new THREE.Color(color3);
                    faces[i].vertexColors[1] = new THREE.Color(color3);
                    faces[i].vertexColors[2] = new THREE.Color(color3);
                    geometry.faceVertexUvs[0].push([
                        new THREE.Vector2(( v1.y + offset.y ) / range.y, ( v1.z + offset.z ) / range.z),
                        new THREE.Vector2(( v2.y + offset.y ) / range.y, ( v2.z + offset.z ) / range.z),
                        new THREE.Vector2(( v3.y + offset.y ) / range.y, ( v3.z + offset.z ) / range.z)
                    ]);
                }
                if (faces[i].normal.x >= 0.5)
                {
                    faces[i].vertexColors[0] = new THREE.Color(color4);
                    faces[i].vertexColors[1] = new THREE.Color(color4);
                    faces[i].vertexColors[2] = new THREE.Color(color4);
                    geometry.faceVertexUvs[0].push([
                        new THREE.Vector2( ( v1.y + offset.y ) / range.y ,  ( v1.z + offset.z ) / range.z),
                        new THREE.Vector2( ( v2.y + offset.y ) / range.y ,  ( v2.z + offset.z ) / range.z),
                        new THREE.Vector2( ( v3.y + offset.y ) / range.y ,  ( v3.z + offset.z ) / range.z)
                    ]);
                }
                if (faces[i].normal.y <= -0.5)
                {
                    faces[i].vertexColors[0] = new THREE.Color(color5);
                    faces[i].vertexColors[1] = new THREE.Color(color5);
                    faces[i].vertexColors[2] = new THREE.Color(color5);
                    geometry.faceVertexUvs[0].push([
                        new THREE.Vector2(( v1.x + offset.x ) / range.x, ( v1.z + offset.z ) / range.z),
                        new THREE.Vector2(( v2.x + offset.x ) / range.x, ( v2.z + offset.z ) / range.z),
                        new THREE.Vector2(( v3.x + offset.x ) / range.x, ( v3.z + offset.z ) / range.z)
                    ]);
                }
                if (faces[i].normal.y >= 0.5)
                {
                    faces[i].vertexColors[0] = new THREE.Color(color6);
                    faces[i].vertexColors[1] = new THREE.Color(color6);
                    faces[i].vertexColors[2] = new THREE.Color(color6);
                    geometry.faceVertexUvs[0].push([
                        new THREE.Vector2(( v1.x + offset.x ) / range.x, ( v1.z + offset.z ) / range.z),
                        new THREE.Vector2(( v2.x + offset.x ) / range.x, ( v2.z + offset.z ) / range.z),
                        new THREE.Vector2(( v3.x + offset.x ) / range.x, ( v3.z + offset.z ) / range.z)
                    ]);
                }
            }
            geometry.uvsNeedUpdate = true;
        }

        function iniciarCubo()
        {
            var texturaColor = new THREE.ImageUtils.loadTexture("img/pegatinaColor.png");
            var texturaBump = new THREE.ImageUtils.loadTexture("img/pegatinaBump.png");
            texturaColor.minFilter = THREE.LinearMipMapNearestFilter;
            texturaColor.magFilter = THREE.LinearMipMapNearestFilter;
            texturaBump.minFilter = THREE.LinearMipMapNearestFilter;
            texturaBump.magFilter = THREE.LinearMipMapNearestFilter;
            piezas =
                    [
                        crearPieza (texturaColor, texturaBump, n,       n,      azul,   n,      n,          blanco,     new THREE.Vector3 (-1, 1, 0), "arista BW"),

                        crearPieza (texturaColor, texturaBump, n,       n,      n,      n,      n,          blanco,     new THREE.Vector3 ( 0, 1, 0), "centro W"),
                        crearPieza (texturaColor, texturaBump, n,       n,      n,      n,      amarillo,   n,          new THREE.Vector3 ( 0,-1, 0), "centro Y"),
                        crearPieza (texturaColor, texturaBump, n,       rojo,   n,      n,      n,          n,          new THREE.Vector3 ( 0, 0, 1), "centro R"),
                        crearPieza (texturaColor, texturaBump, naranja, n,      n,      n,      n,          n,          new THREE.Vector3 ( 0, 0,-1), "centro O"),
                        crearPieza (texturaColor, texturaBump, n,       n,      azul,   n,      n,          n,          new THREE.Vector3 (-1, 0, 0), "centro B"),
                        crearPieza (texturaColor, texturaBump, n,       n,      n,      verde,  n,          n,          new THREE.Vector3 ( 1, 0, 0), "centro G"),

                        crearPieza (texturaColor, texturaBump, n,       rojo,   azul,   n,      n,          blanco,     new THREE.Vector3 (-1, 1, 1), "esquina RBW"),
                        crearPieza (texturaColor, texturaBump, naranja, n,      azul,   n,      n,          blanco,     new THREE.Vector3 (-1, 1,-1), "esquina OBW"),
                        crearPieza (texturaColor, texturaBump, n,       rojo,   n,      verde,  n,          blanco,     new THREE.Vector3 ( 1, 1, 1), "esquina RGW"),
                        crearPieza (texturaColor, texturaBump, naranja, n,      n,      verde,  n,          blanco,     new THREE.Vector3 ( 1, 1,-1), "esquina OGW"),
                        crearPieza (texturaColor, texturaBump, naranja, n,      azul,   n,      amarillo,   n,          new THREE.Vector3 (-1,-1,-1), "esquina OBY"),
                        crearPieza (texturaColor, texturaBump, n,       rojo,   azul,   n,      amarillo,   n,          new THREE.Vector3 (-1,-1, 1), "esquina RBY"),
                        crearPieza (texturaColor, texturaBump, n,       rojo,   n,      verde,  amarillo,   n,          new THREE.Vector3 ( 1,-1, 1), "esquina RGY"),
                        crearPieza (texturaColor, texturaBump, naranja, n,      n,      verde,  amarillo,   n,          new THREE.Vector3 ( 1,-1,-1), "esquina OGY"),

                        crearPieza (texturaColor, texturaBump, n,       n,      n,      verde,  n,          blanco,     new THREE.Vector3 ( 1, 1, 0), "arista GW"),
                        crearPieza (texturaColor, texturaBump, n,       rojo,   n,      n,      n,          blanco,     new THREE.Vector3 ( 0, 1, 1), "arista RW"),
                        crearPieza (texturaColor, texturaBump, naranja, n,      n,      n,      n,          blanco,     new THREE.Vector3 ( 0, 1,-1), "arista OW"),
                        crearPieza (texturaColor, texturaBump, n,       rojo,   azul,   n,      n,          n,          new THREE.Vector3 (-1, 0, 1), "arista RB"),
                        crearPieza (texturaColor, texturaBump, n,       rojo,   n,      verde,  n,          n,          new THREE.Vector3 ( 1, 0, 1), "arista RG"),
                        crearPieza (texturaColor, texturaBump, naranja, n,      n,      verde,  n,          n,          new THREE.Vector3 ( 1, 0,-1), "arista OG"),
                        crearPieza (texturaColor, texturaBump, naranja, n,      azul,   n,      n,          n,          new THREE.Vector3 (-1, 0,-1), "arista OB"),
                        crearPieza (texturaColor, texturaBump, n,       n,      azul,   n,      amarillo,   n,          new THREE.Vector3 (-1,-1, 0), "arista BY"),
                        crearPieza (texturaColor, texturaBump, n,       n,      n,      verde,  amarillo,   n,          new THREE.Vector3 ( 1,-1, 0), "arista GY"),
                        crearPieza (texturaColor, texturaBump, n,       rojo,   n,      n,      amarillo,   n,          new THREE.Vector3 ( 0,-1, 1), "arista RY"),
                        crearPieza (texturaColor, texturaBump, naranja, n,      n,      n,      amarillo,   n,          new THREE.Vector3 ( 0,-1,-1), "arista OY")
                    ];
            cubo = new THREE.Object3D();
            for (var i = 0; i < piezas.length; i++) {cubo.add(piezas[i]);}
            escena.add(cubo);
            guardarPosicionInicial();
        }

        function guardarPosicionInicial()
        {
            for (var i = 0; i < piezas.length; i++)
            {
                posicionesIniciales[i].x = piezas[i].position.x;
                posicionesIniciales[i].y = piezas[i].position.y;
                posicionesIniciales[i].z = piezas[i].position.z;
                rotacionesIniciales[i].x = piezas[i].rotation.x;
                rotacionesIniciales[i].y = piezas[i].rotation.y;
                rotacionesIniciales[i].z = piezas[i].rotation.z;
                distanciasIniciales[i] = distancia(piezas[0].position,piezas[i].position);
                rotacionesInicialesRelativas[i].x = (piezas[i].rotation.x - piezas[0].rotation.x)* 180 / Math.PI;
                rotacionesInicialesRelativas[i].y = (piezas[i].rotation.y - piezas[0].rotation.y)* 180 / Math.PI;
                rotacionesInicialesRelativas[i].z = (piezas[i].rotation.z - piezas[0].rotation.z)* 180 / Math.PI;
            }
        }

        function resetearCubo()
        {
            for (var i = 0; i < piezas.length; i++)
            {
                piezas[i].position.x = posicionesIniciales[i].x;
                piezas[i].position.y = posicionesIniciales[i].y;
                piezas[i].position.z = posicionesIniciales[i].z;
                piezas[i].rotation.x = rotacionesIniciales[i].x;
                piezas[i].rotation.y = rotacionesIniciales[i].y;
                piezas[i].rotation.z = rotacionesIniciales[i].z;
            }
            sec = 0;
            min = 0;
            actualizarReloj();
        }

        function girarCaraAutomaticamente(lado, direccion, rotacionInicial, duracion)
        {
            autoRotandoCara = true;
            var index = 0;
            caras = (lado == "M" || lado == "S" || lado == "E") ? [null, null, null, null, null, null, null, null] : [null, null, null, null, null, null, null, null, null];
            switch (lado) {
                case "F":direccion = -direccion;for (var f = 0; f < piezas.length; f++){ if (piezas[f].position.z >  0.5)                               {caras[index] = piezas[f];index++;}} break;
                case "B":                       for (var b = 0; b < piezas.length; b++){ if (piezas[b].position.z < -0.5)                               {caras[index] = piezas[b];index++;}} break;
                case "U":direccion = -direccion;for (var u = 0; u < piezas.length; u++){ if (piezas[u].position.y >  0.5)                               {caras[index] = piezas[u];index++;}} break;
                case "D":                       for (var d = 0; d < piezas.length; d++){ if (piezas[d].position.y < -0.5)                               {caras[index] = piezas[d];index++;}} break;
                case "R":direccion = -direccion;for (var r = 0; r < piezas.length; r++){ if (piezas[r].position.x >  0.5)                               {caras[index] = piezas[r];index++;}} break;
                case "L":                       for (var l = 0; l < piezas.length; l++){ if (piezas[l].position.x < -0.5)                               {caras[index] = piezas[l];index++;}} break;
                case "M":                       for (var m = 0; m < piezas.length; m++){ if (piezas[m].position.x > -0.5 && piezas[m].position.x < 0.5) {caras[index] = piezas[m];index++;}} break;
                case "S":direccion = -direccion;for (var s = 0; s < piezas.length; s++){ if (piezas[s].position.z > -0.5 && piezas[s].position.z < 0.5) {caras[index] = piezas[s];index++;}} break;
                case "E":direccion = -direccion;for (var e = 0; e < piezas.length; e++){ if (piezas[e].position.y > -0.5 && piezas[e].position.y < 0.5) {caras[index] = piezas[e];index++;}} break;
            }
            var nulo = new THREE.Object3D();
            for (var i = 0; i < caras.length; i++) {
                caras[i].updateMatrixWorld();
                THREE.SceneUtils.attach(caras[i], cubo, nulo);
            }
            var origen = {x:rotacionInicial,y:0};
            var destino = {x:direccion*90*Math.PI/180, y:0};
            var movimiento = new TWEEN.Tween(origen).to(destino,duracion);
            movimiento.onUpdate(function(){
                switch (lado) {
                    case "F": nulo.rotation.set(0,        0,        origen.x); break;
                    case "B": nulo.rotation.set(0,        0,        origen.x); break;
                    case "U": nulo.rotation.set(0,        origen.x, 0       ); break;
                    case "D": nulo.rotation.set(0,        origen.x, 0       ); break;
                    case "R": nulo.rotation.set(origen.x, 0,        0       ); break;
                    case "L": nulo.rotation.set(origen.x, 0,        0       ); break;
                    case "M": nulo.rotation.set(origen.x, 0,        0       ); break;
                    case "S": nulo.rotation.set(0,        0,        origen.x); break;
                    case "E": nulo.rotation.set(0,        origen.x, 0       ); break;
                }
            });
            movimiento.easing(TWEEN.Easing.Exponential.InOut);
            movimiento.start();
            movimiento.onComplete(function(){
                nulo.updateMatrixWorld();
                for (var i = 0; i < caras.length; i++) {
                    THREE.SceneUtils.detach(caras[i], nulo, cubo);
                    caras[i].updateMatrixWorld();
                }
                if (!desordenando)
                {
                    autoRotandoCara = false;
                    if (jugando)
                    {
                        if (chequearResuelto())
                        {
                            marcoInfo.material.opacity = 0.75;
                            var secText = (sec < 10) ? "0" + sec : "" + sec;
                            actualizarMensaje(+min + "'" + secText + "''", 0.3);
                            jugando = false;
                        }
                    }
                }
            });
            escena.add(nulo);
        }

        function ran(rango)
        {
            return Math.floor((Math.random() * rango) + 1);
        }

        function desordenar()
        {
            autoRotandoCara = true;
            desordenando = true;
            var tiempo = 200;
            indiceDesorden++;
            var aleatorio = ran(18);
            switch (aleatorio){
                case 1:  girarCaraAutomaticamente("R",-1,0,tiempo); break;
                case 2:  girarCaraAutomaticamente("U",-1,0,tiempo); break;
                case 3:  girarCaraAutomaticamente("F",-1,0,tiempo); break;
                case 4:  girarCaraAutomaticamente("B",-1,0,tiempo); break;
                case 5:  girarCaraAutomaticamente("L",-1,0,tiempo); break;
                case 6:  girarCaraAutomaticamente("D",-1,0,tiempo); break;
                case 7:  girarCaraAutomaticamente("M",-1,0,tiempo); break;
                case 8:  girarCaraAutomaticamente("S",-1,0,tiempo); break;
                case 9:  girarCaraAutomaticamente("E",-1,0,tiempo); break;
                case 10: girarCaraAutomaticamente("R", 1,0,tiempo); break;
                case 11: girarCaraAutomaticamente("U", 1,0,tiempo); break;
                case 12: girarCaraAutomaticamente("F", 1,0,tiempo); break;
                case 13: girarCaraAutomaticamente("B", 1,0,tiempo); break;
                case 14: girarCaraAutomaticamente("L", 1,0,tiempo); break;
                case 15: girarCaraAutomaticamente("D", 1,0,tiempo); break;
                case 16: girarCaraAutomaticamente("M", 1,0,tiempo); break;
                case 17: girarCaraAutomaticamente("S", 1,0,tiempo); break;
                case 18: girarCaraAutomaticamente("E", 1,0,tiempo); break;
            }
            if (indiceDesorden<19)
            {
                setTimeout (desordenar,270);
            }
            else
            {
                indiceDesorden = 0;
                setTimeout (terminarDesorden,270);
            }
        }

        function terminarDesorden()
        {
            autoRotandoCara = false;
            desordenando = false;
        }

        function selecccionarCara (pieza, normal, direccion)
        {
            var cuadrante = conocerCuadrante();
            var normalMatrix = new THREE.Matrix3().getNormalMatrix( pieza.matrixWorld );
            var worldNormal = normal.clone().applyMatrix3( normalMatrix ).normalize();
            var cara;
            if (pieza.position.x > 0.9 && pieza.position.y < 0.1 && pieza.position.y > -0.1 && pieza.position.z < 0.1 && pieza.position.z > -0.1 ) { //CARA VERDE
                if (worldNormal.x > 0.9) {
                    if (direccion == "H"){   eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "S"; }}
            }
            if (pieza.position.x < -0.9 && pieza.position.y < 0.1 && pieza.position.y > -0.1 && pieza.position.z < 0.1 && pieza.position.z > -0.1 ) { //CARA AZUL
                if (worldNormal.x < -0.9) {
                    if (direccion == "H"){   eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "S"; }}
            }
            if (pieza.position.x < 0.1 && pieza.position.x > -0.1 && pieza.position.y < 0.1 && pieza.position.y > -0.1 && pieza.position.z < -0.9) { //CARA NARANJA
                if (worldNormal.z < -0.9) {
                    if (direccion == "H"){   eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "M"; }}
            }
            if (pieza.position.x < 0.1 && pieza.position.x > -0.1 && pieza.position.y < 0.1 && pieza.position.y > -0.1 && pieza.position.z > 0.9) { //CARA ROJA
                if (worldNormal.z > 0.9) {
                    if (direccion == "H"){   eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "M"; }}
            }
            if (pieza.position.x < 0.1 && pieza.position.x > -0.1 && pieza.position.y < -0.9 && pieza.position.z < 0.1 && pieza.position.z > -0.1) { //CARA AMARILLA
                if (worldNormal.y < -0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "S"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "S"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "S"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "S"; }}}
            }
            if (pieza.position.x < 0.1 && pieza.position.x > -0.1 && pieza.position.y > 0.9 && pieza.position.z < 0.1 && pieza.position.z > -0.1) { //CARA BLANCA
                if (worldNormal.y > 0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "S"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "S"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "S"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "S"; }}}
            }
            if (pieza.position.x > 0.9 && pieza.position.y < 0.1 && pieza.position.y > -0.1 && pieza.position.z < -0.9) { //ARISTA NARANJA-VERDE
                if (worldNormal.x > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] =  1;   cara = "B"; }}
                if (worldNormal.z < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] =  1;   cara = "R"; }}
            }
            if (pieza.position.x > 0.9 && pieza.position.y < 0.1 && pieza.position.y > -0.1 && pieza.position.z > 0.9) { //ARISTA ROJA-VERDE
                if (worldNormal.x > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] =  1;   cara = "F"; }}
                if (worldNormal.z > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] = -1;   cara = "R"; }}
            }
            if (pieza.position.x < -0.9 && pieza.position.y < 0.1 && pieza.position.y > -0.1 && pieza.position.z < -0.9) { //ARISTA NARANJA-AZUL
                if (worldNormal.x < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] = -1;   cara = "B"; }}
                if (worldNormal.z < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] =  1;   cara = "L"; }}
            }
            if (pieza.position.x < -0.9 && pieza.position.y < 0.1 && pieza.position.y > -0.1 && pieza.position.z > 0.9) { //ARISTA ROJA-AZUL
                if (worldNormal.x < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] = -1;   cara = "F"; }}
                if (worldNormal.z > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "E"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] = -1;   cara = "L"; }}
            }
            if (pieza.position.x > 0.9 && pieza.position.y < -0.9 && pieza.position.z < 0.1 && pieza.position.z > -0.1) { //ARISTA VERDE-AMARILLA
                if (worldNormal.x > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] =  1;   cara = "S"; }}
                if (worldNormal.y < -0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "S"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "S"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "S"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "S"; }}}
            }
            if (pieza.position.x > 0.9 && pieza.position.y > 0.9 && pieza.position.z < 0.1 && pieza.position.z > -0.1) { //ARISTA VERDE-BLANCA
                if (worldNormal.x > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] =  1;   cara = "S"; }}
                if (worldNormal.y > 0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "S"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "S"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "S"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "S"; }}}
            }
            if (pieza.position.x < -0.9 && pieza.position.y < -0.9 && pieza.position.z < 0.1 && pieza.position.z > -0.1) { //ARISTA AZUL-AMARILLA
                if (worldNormal.x < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] = -1;   cara = "S"; }}
                if (worldNormal.y < -0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "S"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "S"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "S"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "S"; }}}
            }
            if (pieza.position.x < -0.9 && pieza.position.y > 0.9 && pieza.position.z < 0.1 && pieza.position.z > -0.1) { //ARISTA AZUL-BLANCA
                if (worldNormal.x < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] = -1;   cara = "S"; }}
                if (worldNormal.y > 0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "S"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "S"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "S"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "S"; }}}
            }
            if (pieza.position.x < 0.1 && pieza.position.x > -0.1 && pieza.position.y < -0.9 && pieza.position.z < -0.9) { //ARISTA NARANJA-AMARILLA
                if (worldNormal.y < -0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "B"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "B"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "B"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "B"; }}}
                if (worldNormal.z < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] =  1;   cara = "M"; }}
            }
            if (pieza.position.x < 0.1 && pieza.position.x > -0.1 && pieza.position.y > 0.9 && pieza.position.z < -0.9) { //ARISTA NARANJA-BLANCA
                if (worldNormal.y > 0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "B"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "B"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "B"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "B"; }}}
                if (worldNormal.z < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] =  1;   cara = "M"; }}
            }
            if (pieza.position.x < 0.1 && pieza.position.x > -0.1 && pieza.position.y < -0.9 && pieza.position.z > 0.9) { //ARISTA ROJA-AMARILLA
                if (worldNormal.y < -0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "F"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "F"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "F"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "F"; }}}
                if (worldNormal.z > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] = -1;   cara = "M"; }}
            }
            if (pieza.position.x < 0.1 && pieza.position.x > -0.1 && pieza.position.y > 0.9 && pieza.position.z > 0.9) { //ARISTA ROJA-BLANCA
                if (worldNormal.y > 0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "F"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "F"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "M"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "F"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "M"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "F"; }}}
                if (worldNormal.z > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] = -1;   cara = "M"; }}
            }
            if (pieza.position.x < -0.9 && pieza.position.y > 0.9 && pieza.position.z > 0.9) { //ESQUINA ROJA-AZUL-BLANCA
                if (worldNormal.x < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] = -1;   cara = "F"; }}
                if (worldNormal.y > 0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "F"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "F"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "F"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "F"; }}}
                if (worldNormal.z > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] = -1;   cara = "L"; }}
            }
            if (pieza.position.x < -0.9 && pieza.position.y < -0.9 && pieza.position.z > 0.9) { //ESQUINA ROJA-AZUL-AMARILLA
                if (worldNormal.x < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] = -1;   cara = "F"; }}
                if (worldNormal.y < -0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "F"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "F"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "F"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "F"; }}}
                if (worldNormal.z > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] = -1;   cara = "L"; }}
            }
            if (pieza.position.x > 0.9 && pieza.position.y > 0.9 && pieza.position.z > 0.9) { //ESQUINA ROJA-VERDE-BLANCA
                if (worldNormal.x > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] =  1;   cara = "F"; }}
                if (worldNormal.y > 0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "F"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "F"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "F"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "F"; }}}
                if (worldNormal.z > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] = -1;   cara = "R"; }}
            }
            if (pieza.position.x > 0.9 && pieza.position.y < -0.9 && pieza.position.z > 0.9) { //ESQUINA ROJA-VERDE-AMARILLA
                if (worldNormal.x > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] =  1;   cara = "F"; }}
                if (worldNormal.y < -0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "F"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "F"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "F"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "F"; }}}
                if (worldNormal.z > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] = -1;   cara = "R"; }}
            }
            if (pieza.position.x > 0.9 && pieza.position.y > 0.9 && pieza.position.z < -0.9) { //ESQUINA NARANJA-VERDE-BLANCA
                if (worldNormal.x > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] =  1;   cara = "B"; }}
                if (worldNormal.y > 0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "B"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "B"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "B"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "B"; }}}
                if (worldNormal.z < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] =  1;   cara = "R"; }}
            }
            if (pieza.position.x > 0.9 && pieza.position.y < -0.9 && pieza.position.z < -0.9) { //ESQUINA NARANJA-VERDE-AMARILLA
                if (worldNormal.x > 0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] =  1;   cara = "B"; }}
                if (worldNormal.y < -0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "B"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "B"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "R"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "B"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "R"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "B"; }}}
                if (worldNormal.z < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] =  1;   cara = "R"; }}
            }
            if (pieza.position.x < -0.9 && pieza.position.y > 0.9 && pieza.position.z < -0.9) { //ESQUINA NARANJA-AZUL-BLANCA
                if (worldNormal.x < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] = -1;   cara = "B"; }}
                if (worldNormal.y > 0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "B"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "B"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "B"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "B"; }}}
                if (worldNormal.z < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "U"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] =  1;   cara = "L"; }}
            }
            if (pieza.position.x < -0.9 && pieza.position.y < -0.9 && pieza.position.z < -0.9) { //ESQUINA NARANJA-AZUL-AMARILLA
                if (worldNormal.x < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "Z";  invertirGiro[4] = -1;   cara = "B"; }}
                if (worldNormal.y < -0.9) {
                    if (cuadrante == 1) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] = -1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] =  1;   cara = "B"; }}
                    if (cuadrante == 2) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] = -1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] = -1;   cara = "B"; }}
                    if (cuadrante == 3) {
                        if (direccion == "V"){   eje = "X";  invertirGiro[0] =  1;   cara = "L"; }
                        if (direccion == "H"){   eje = "Z";  invertirGiro[5] = -1;   cara = "B"; }}
                    if (cuadrante == 4) {
                        if (direccion == "H"){   eje = "X";  invertirGiro[1] =  1;   cara = "L"; }
                        if (direccion == "V"){   eje = "Z";  invertirGiro[4] =  1;   cara = "B"; }}}
                if (worldNormal.z < -0.9){
                    if (direccion == "H"){       eje = "Y";  invertirGiro[3] =  1;   cara = "D"; }
                    if (direccion == "V"){       eje = "X";  invertirGiro[0] =  1;   cara = "L"; }}
            }

            var index = 0;
            var caras = (cara == "M" || cara == "S" || cara == "E") ? [null, null, null, null, null, null, null, null] : [null, null, null, null, null, null, null, null, null];
            switch (cara) {
                case "F":for (var f = 0; f < piezas.length; f++){ if (piezas[f].position.z >  0.5)                              {caras[index] = piezas[f];index++;}} break;
                case "B":for (var b = 0; b < piezas.length; b++){ if (piezas[b].position.z < -0.5)                              {caras[index] = piezas[b];index++;}} break;
                case "U":for (var u = 0; u < piezas.length; u++){ if (piezas[u].position.y >  0.5)                              {caras[index] = piezas[u];index++;}} break;
                case "D":for (var d = 0; d < piezas.length; d++){ if (piezas[d].position.y < -0.5)                              {caras[index] = piezas[d];index++;}} break;
                case "R":for (var r = 0; r < piezas.length; r++){ if (piezas[r].position.x >  0.5)                              {caras[index] = piezas[r];index++;}} break;
                case "L":for (var l = 0; l < piezas.length; l++){ if (piezas[l].position.x < -0.5)                              {caras[index] = piezas[l];index++;}} break;
                case "M":for (var m = 0; m < piezas.length; m++){ if (piezas[m].position.x > -0.5 && piezas[m].position.x < 0.5){caras[index] = piezas[m];index++;}} break;
                case "S":for (var s = 0; s < piezas.length; s++){ if (piezas[s].position.z > -0.5 && piezas[s].position.z < 0.5){caras[index] = piezas[s];index++;}} break;
                case "E":for (var e = 0; e < piezas.length; e++){ if (piezas[e].position.y > -0.5 && piezas[e].position.y < 0.5){caras[index] = piezas[e];index++;}} break;
            }
            var nulo = new THREE.Object3D();

            for (var i = 0; i < caras.length; i++) {
                caras[i].updateMatrixWorld();
                THREE.SceneUtils.attach(caras[i], cubo, nulo);
            }
            escena.add(nulo);

            return nulo;
        }

        function conocerCuadrante()
        {
            var anguloCamara;
            var cuadrante;
            if (camara.position.x <  0 && camara.position.z >= 0) anguloCamara = Math.abs (Math.atan(camara.position.x / camara.position.z) * 180 / Math.PI);
            if (camara.position.x <  0 && camara.position.z  < 0) anguloCamara = Math.abs (Math.atan(camara.position.z / camara.position.x) * 180 / Math.PI) + 90;
            if (camara.position.x >= 0 && camara.position.z  < 0) anguloCamara = Math.abs (Math.atan(camara.position.x / camara.position.z) * 180 / Math.PI) + 180;
            if (camara.position.x >= 0 && camara.position.z >= 0) anguloCamara = Math.abs (Math.atan(camara.position.z / camara.position.x) * 180 / Math.PI) + 270;
            if (anguloCamara >= 315 || anguloCamara < 45 ) cuadrante = 1;
            if (anguloCamara >= 45  && anguloCamara < 135) cuadrante = 2;
            if (anguloCamara >= 135 && anguloCamara < 225) cuadrante = 3;
            if (anguloCamara >= 225 && anguloCamara < 315) cuadrante = 4;
            return (cuadrante);
        }

        function guardarClickInicial ()
        {
            if (!clickInicialGuardado)
            {
                clickInicialGuardado = true;
                clickInicial.x = mouse.x;
                clickInicial.y = mouse.y;
                bloqueo = false;
            }
        }

        function actualizarRotacionCara(cara, desplazamiento, eje, direccion)
        {
            if (!bloqueo)
            {
                switch (eje){
                    case "X" :
                        if (direccion == "V") {cara.rotation.x = desplazamiento.y*3*invertirGiro[0]; giroAplicado = desplazamiento.y*3*invertirGiro[0]*180/Math.PI; }
                        if (direccion == "H") {cara.rotation.x = desplazamiento.x*3*invertirGiro[1]; giroAplicado = desplazamiento.x*3*invertirGiro[1]*180/Math.PI; }
                        break;
                    case "Y" :
                        if (direccion == "V") {cara.rotation.y = desplazamiento.y*3*invertirGiro[2]; giroAplicado = desplazamiento.y*3*invertirGiro[2]*180/Math.PI; }
                        if (direccion == "H") {cara.rotation.y = desplazamiento.x*3*invertirGiro[3]; giroAplicado = desplazamiento.x*3*invertirGiro[3]*180/Math.PI; }
                        break;
                    case "Z" :
                        if (direccion == "V") {cara.rotation.z = desplazamiento.y*3*invertirGiro[4]; giroAplicado = desplazamiento.y*3*invertirGiro[4]*180/Math.PI; }
                        if (direccion == "H") {cara.rotation.z = desplazamiento.x*3*invertirGiro[5]; giroAplicado = desplazamiento.x*3*invertirGiro[5]*180/Math.PI; }
                        break;
                }
                giroAplicado = giroAplicado%360;
                if (giroAplicado >= -45 && giroAplicado <    45) giroObjetivo =    0;
                if (giroAplicado >=  45 && giroAplicado <   135) giroObjetivo =   90;
                if (giroAplicado >= 135 && giroAplicado <   225) giroObjetivo =  180;
                if (giroAplicado >= 225                        ) giroObjetivo =  360;
                if (giroAplicado <  -45 && giroAplicado >= -135) giroObjetivo =  -90;
                if (giroAplicado < -135 && giroAplicado >= -225) giroObjetivo = -180;
                if (giroAplicado < -225                        ) giroObjetivo = -360;
            }
        }

        function terminarGiro(inicio, fin)
        {
            var origen = {x:inicio*Math.PI/180,y:0};
            var destino = {x:fin*Math.PI/180, y:0};
            var movimiento = new TWEEN.Tween(origen).to(destino,Math.abs(Math.floor(600*((fin-inicio)/90))));
            movimiento.onUpdate(function(){
                switch (eje) {
                    case "X": cara.rotation.set(origen.x, 0,        0       ); break;
                    case "Y": cara.rotation.set(0,        origen.x, 0       ); break;
                    case "Z": cara.rotation.set(0,        0,        origen.x); break;
                }
            });
            movimiento.easing(TWEEN.Easing.Exponential.Out);
            movimiento.start();
            movimiento.onComplete(function(){
                lapsoDeSeguridad();
            });

        }

        function lapsoDeSeguridad()
        {
            setTimeout(restaurarCaras,1);
        }

        function restaurarCaras()
        {
            var array = [null, null, null, null, null, null, null, null, null];
            for (var i = 0; i < cara.children.length; i++) array[i] = cara.children[i];
            for (var u = 0; u < array.length; u++)
            {
                if (array[u] != null)
                {
                    THREE.SceneUtils.detach(array[u], cara, cubo);
                }

            }
            rotandoCara = false;
            clickInicialGuardado = false;
            if (jugando)
            {
                if (chequearResuelto())
                {
                    marcoInfo.material.opacity = 0.75;
                    var secText = (sec < 10) ? "0" + sec : "" + sec;
                    actualizarMensaje(+min + "'" + secText + "''", 0.3);
                    jugando = false;
                }
            }
        }

		function crearMenu()
        {
            var texturaColorPlay = new THREE.ImageUtils.loadTexture("img/pegatinaPlay.png");
            var texturaBumpPlay = new THREE.ImageUtils.loadTexture("img/pegatinaBump.png");
            var posicionPlay = new THREE.Vector3(0,0,0);
            botonPlay = crearPieza(texturaColorPlay, texturaBumpPlay, buttonNormal, buttonNormal, buttonNormal, buttonNormal, buttonNormal, buttonNormal, posicionPlay, "Play");
            escena.add(botonPlay);
            botonPlay.updateMatrixWorld();
            camara.updateMatrixWorld();
            THREE.SceneUtils.attach(botonPlay, escena, camara);
            botonPlay.scale.set(0.4,0.4,0.4);
            botonPlay.position.set(-1.7,0,-4);

            var texturaColorRestart = new THREE.ImageUtils.loadTexture("img/pegatinaRestart.png");
            var texturaBumpRestart = new THREE.ImageUtils.loadTexture("img/pegatinaBump.png");
            var posicionRestart = new THREE.Vector3(0,0,0);
            botonRestart = crearPieza(texturaColorRestart, texturaBumpRestart, buttonNormal, buttonNormal, buttonNormal, buttonNormal, buttonNormal, buttonNormal, posicionRestart, "Restart");
            escena.add(botonRestart);

            THREE.SceneUtils.attach(botonRestart, escena, camara);
            botonRestart.scale.set(0.4,0.4,0.4);
            botonRestart.position.set(1.7,0,-4);
        }
		
        function marcoMensaje()
        {
            var circuloGeometria = new THREE.Geometry();
            circuloGeometria.vertices.push(new THREE.Vector3(0.0,  0.0, 0.0));
            for (var i = 0; i<360; i++)
            {
                var posX = Math.sin(i*Math.PI/180)*0.8;
                var posY = Math.cos(i*Math.PI/180)*0.8;
                circuloGeometria.vertices.push(new THREE.Vector3(posX,  posY, 0.0));
                if (i != 0)
                {
                    (i != 359) ? circuloGeometria.faces.push(new THREE.Face3(0, i, i + 1)) : circuloGeometria.faces.push(new THREE.Face3(0, i, 1));
                }
            }
            var circuloMaterial = new THREE.MeshLambertMaterial({color:0x000000, transparent:true, opacity:0, side:THREE.DoubleSide});
            marcoInfo = new THREE.Mesh(circuloGeometria, circuloMaterial);
            escena.add(marcoInfo);
            THREE.SceneUtils.attach(marcoInfo, escena, camara);
            marcoInfo.position.set(0, 0, -4.1);
            marcoInfo.rotation.set(0, 0, 0);
            marcoInfo.name = "MARCO";
        }

        function instanciarMensaje()
        {
            marcoMensaje();
            var textGeometry = new THREE.TextGeometry ("");
            textInfo = new THREE.Mesh (textGeometry, new THREE.MeshBasicMaterial({color: 0xFFFFFF}));
            marcoInfo.add(textInfo);
        }

        function actualizarMensaje (mensaje, size)
        {
            var textGeometry = new THREE.TextGeometry (mensaje, {size:size, height:0.001});
            THREE.GeometryUtils.center(textGeometry);
            textInfo.geometry = textGeometry;
            textInfo.geometry.needsUpdate = true;
        }

        function instanciarReloj()
        {
            var secText = (sec < 10) ? "0" + sec : "" + sec;
            var textGeometry = new THREE.TextGeometry (min+"'"+" "+secText+"''", {size:0.1, height:0.001});
            clockInfo = new THREE.Mesh (textGeometry, new THREE.MeshBasicMaterial({color: 0xFFFFFF}));
            THREE.GeometryUtils.center(textGeometry);
            clockInfo.position.set(0,1.45,0);
            marcoInfo.add(clockInfo);
        }

        function actualizarReloj()
        {
            var secText = (sec < 10) ? "0" + sec : "" + sec;
            var textGeometry = new THREE.TextGeometry (min+"'"+" "+secText+"''", {size:0.1, height:0.001});
            THREE.GeometryUtils.center(textGeometry);
            clockInfo.geometry = textGeometry;
            clockInfo.geometry.needsUpdate = true;
        }

        function hacerCountDown()
        {
            jugando = false;
            sec = 0;
            min = 0;
            actualizarReloj();
            countDown --;
            if (desordenando)
            {
                setTimeout(hacerCountDown, (countDown > 0)?1000:500);
                actualizarMensaje((countDown > 0) ? ""+countDown : "GO!", (countDown > 0) ? 0.7 : 0.4);
                marcoInfo.material.opacity = 0.75;
            }
            else
            {
                actualizarMensaje("", 1);
                countDown = 6;
                marcoInfo.material.opacity = 0;
                jugando = true;
                setTimeout (crono, 500);
            }
        }

        function crono()
        {
            sec++;
            if (jugando)
            {
                setTimeout (crono, 1000)
            }
            else
            {
                sec = 0;
                min = 0;
            }
            if (sec == 60)
            {
                sec = 0;
                min ++;
            }
            actualizarReloj();
        }

        function distancia(vector1, vector2)
        {
            var d = Math.sqrt(Math.pow(vector1.x - vector2.x , 2) + Math.pow(vector1.y - vector2.y , 2));
            var D = Math.sqrt(Math.pow(d , 2) + Math.pow(vector1.z - vector2.z , 2));
            D = parseInt(D*1000);
            return D;
        }

        function chequearResuelto()
        {
            for (var i = 0; i < piezas.length; i++)
            {
                if (piezas[i].position.x < 0.5 && piezas[i].position.x > -0.5) piezas[i].position.x = 0;
                if (piezas[i].position.y < 0.5 && piezas[i].position.y > -0.5) piezas[i].position.y = 0;
                if (piezas[i].position.z < 0.5 && piezas[i].position.z > -0.5) piezas[i].position.z = 0;
                if (piezas[i].position.x > 0.5) piezas[i].position.x = 1;
                if (piezas[i].position.x < -0.5) piezas[i].position.x = -1;
                if (piezas[i].position.y > 0.5) piezas[i].position.y = 1;
                if (piezas[i].position.y < -0.5) piezas[i].position.y = -1;
                if (piezas[i].position.z > 0.5) piezas[i].position.z = 1;
                if (piezas[i].position.z < -0.5) piezas[i].position.z = -1;
                giroAplicado = giroAplicado%360;
                if (piezas[i].rotation.x * 180/Math.PI < -135 && piezas[i].rotation.x * 180/Math.PI > -225) piezas[i].rotation.x = (-180)*(Math.PI/180);
                if (piezas[i].rotation.x * 180/Math.PI <  -45 && piezas[i].rotation.x * 180/Math.PI > -135) piezas[i].rotation.x = (-90)*(Math.PI/180);
                if (piezas[i].rotation.x * 180/Math.PI <   45 && piezas[i].rotation.x * 180/Math.PI >  -45) piezas[i].rotation.x = (0)*(Math.PI/180);
                if (piezas[i].rotation.x * 180/Math.PI >   45 && piezas[i].rotation.x * 180/Math.PI <  135) piezas[i].rotation.x = (90)*(Math.PI/180);
                if (piezas[i].rotation.x * 180/Math.PI >  135 && piezas[i].rotation.x * 180/Math.PI <  225) piezas[i].rotation.x = (180)*(Math.PI/180);
                if (piezas[i].rotation.y * 180/Math.PI < -135 && piezas[i].rotation.y * 180/Math.PI > -225) piezas[i].rotation.y = (-180)*(Math.PI/180);
                if (piezas[i].rotation.y * 180/Math.PI <  -45 && piezas[i].rotation.y * 180/Math.PI > -135) piezas[i].rotation.y = (-90)*(Math.PI/180);
                if (piezas[i].rotation.y * 180/Math.PI <   45 && piezas[i].rotation.y * 180/Math.PI >  -45) piezas[i].rotation.y = (0)*(Math.PI/180);
                if (piezas[i].rotation.y * 180/Math.PI >   45 && piezas[i].rotation.y * 180/Math.PI <  135) piezas[i].rotation.y = (90)*(Math.PI/180);
                if (piezas[i].rotation.y * 180/Math.PI >  135 && piezas[i].rotation.y * 180/Math.PI <  225) piezas[i].rotation.y = (180)*(Math.PI/180);
                if (piezas[i].rotation.z * 180/Math.PI < -135 && piezas[i].rotation.z * 180/Math.PI > -225) piezas[i].rotation.z = (-180)*(Math.PI/180);
                if (piezas[i].rotation.z * 180/Math.PI <  -45 && piezas[i].rotation.z * 180/Math.PI > -135) piezas[i].rotation.z = (-90)*(Math.PI/180);
                if (piezas[i].rotation.z * 180/Math.PI <   45 && piezas[i].rotation.z * 180/Math.PI >  -45) piezas[i].rotation.z = (0)*(Math.PI/180);
                if (piezas[i].rotation.z * 180/Math.PI >   45 && piezas[i].rotation.z * 180/Math.PI <  135) piezas[i].rotation.z = (90)*(Math.PI/180);
                if (piezas[i].rotation.z * 180/Math.PI >  135 && piezas[i].rotation.z * 180/Math.PI <  225) piezas[i].rotation.z = (180)*(Math.PI/180);
            }
            var resuelto = true;
            for (var u = 1; u < piezas.length; u++) {
                piezas[u].updateMatrixWorld();

                if (u >=1 && u <=6)
                {
                    if (distancia(piezas[0].position,piezas[u].position) != distanciasIniciales[u])
                    {
                        resuelto = false;
                    }
                }
                else
                {
                    if (distancia(piezas[0].position,piezas[u].position) != distanciasIniciales[u] ||
                            ((piezas[0].rotation.x - piezas[u].rotation.x)* 180 / Math.PI )%360 != 0 ||
                            ((piezas[0].rotation.y - piezas[u].rotation.y)* 180 / Math.PI )%360 != 0 ||
                            ((piezas[0].rotation.z - piezas[u].rotation.z)* 180 / Math.PI )%360 != 0
                    )
                    {
                        resuelto = false;
                    }
                }
            }
            return resuelto;
        }

        function GUI()
        {
            var ray2 = new THREE.Raycaster();
            ray2.setFromCamera(mouse, camara);
            var intersects2 = ray2.intersectObjects(camara.children);
            if (intersects2.length > 0) {
                if (intersects2[0].object.name != "MARCO")
                {
                    intersects2[0].object.material.color = buttonHover;
                    document.getElementById(id).style.cursor = "pointer";
                }
                else
                {
                    botonPlay.material.color = buttonNormal;
                    botonRestart.material.color = buttonNormal;
                    if (!pointer) document.getElementById(id).style.cursor = "default";
                }
            }
            else
            {
                botonPlay.material.color = buttonNormal;
                botonRestart.material.color = buttonNormal;
                if (!pointer) document.getElementById(id).style.cursor = "default";
            }
        }

        function onDocumentMouseDown(event)
        {
            if ( event.button === THREE.MOUSE.LEFT) {
                event.preventDefault();
                mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1;

                clickInicial.x = mouse.x;
                clickInicial.y = mouse.y;

                if (!desordenando && !autoRotandoCara && !rotandoEscena && !rotandoCara) {
                    var ray = new THREE.Raycaster();
                    ray.setFromCamera(mouse, camara);
                    var intersects = ray.intersectObjects(cubo.children);
                    if (intersects.length > 0) {
                        bloqueo = rotandoCara;
                        rotandoCara = true;
                        direccionSeleccionada = false;
                        direccion = "";
                        caraSeleccionada = false;
                    }
                    var intersects2 = ray.intersectObjects(camara.children);
                    if (intersects2.length > 0)
                    {
                        if (intersects2[0].object.name == "Play")
                        {
                            desordenar();
                            hacerCountDown();
                        }
                        if (intersects2[0].object.name == "Restart")
                        {
                            resetearCubo();
                            actualizarMensaje ("",1);
                            marcoInfo.material.opacity = 0;
                            jugando = false;
                        }
                    }

                } else rotandoEscena = true;
            }
        }

        function onDocumentMouseMove(event)
        {
            if (event.button === THREE.MOUSE.LEFT)
            {
                var desplazamiento = new THREE.Vector2();
                mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1;
                var ray = new THREE.Raycaster();
                ray.setFromCamera(mouse, camara);
                var intersects = ray.intersectObjects(cubo.children);
                if (intersects.length > 0)
                {
                    getObjeto = intersects[0].object;
                    getNormal = intersects[0].face.normal;
                    document.getElementById(id).style.cursor = "pointer";
                    pointer = true;
                }
                else pointer = false;

                if (rotandoCara && !rotandoEscena && !bloqueo)
                {
                    desplazamiento.x = mouse.x - clickInicial.x;
                    desplazamiento.y = mouse.y - clickInicial.y;

                    if (!direccionSeleccionada)
                    {
                        if (desplazamiento.y > 0.01 || desplazamiento.y < -0.01)
                        {
                            direccionSeleccionada = true;
                            direccion = "V";
                            guardarClickInicial();
                        }
                        if (desplazamiento.x > 0.01 || desplazamiento.x < -0.01)
                        {
                            direccionSeleccionada = true;
                            direccion = "H";
                            guardarClickInicial();
                        }
                    }
                    else if (!caraSeleccionada)
                    {
                        caraSeleccionada = true;
                        cara = selecccionarCara(getObjeto, getNormal, direccion);
                    }
                    actualizarRotacionCara(cara, desplazamiento, eje, direccion);
                }
            }
            if (rotandoCara)
            {
                pointer = true;
            }
        }

        function onDocumentMouseUp(event)
        {
            if ( event.button === THREE.MOUSE.LEFT ) {
                document.getElementById(id).style.cursor = "default";
                if (rotandoCara && !bloqueo) {
                    bloqueo = true;
                    terminarGiro(giroAplicado, giroObjetivo);
                }
                else rotandoEscena = false;

            }
        }

        function onDocumentKeyDown(event)
        {
            var keyCode = event.which;
            if (!autoRotandoCara && !rotandoCara)
            {
                if (event.shiftKey)
                {
                    switch (keyCode)
                    {
                        case 82: girarCaraAutomaticamente("R",-1,0,500); break;
                        case 85: girarCaraAutomaticamente("U",-1,0,500); break;
                        case 70: girarCaraAutomaticamente("F",-1,0,500); break;
                        case 66: girarCaraAutomaticamente("B",-1,0,500); break;
                        case 76: girarCaraAutomaticamente("L",-1,0,500); break;
                        case 68: girarCaraAutomaticamente("D",-1,0,500); break;
                        case 77: girarCaraAutomaticamente("M",-1,0,500); break;
                        case 83: girarCaraAutomaticamente("S",-1,0,500); break;
                        case 69: girarCaraAutomaticamente("E",-1,0,500); break;
                    }
                }
                else
                {
                    switch (keyCode)
                    {
                        case 82: girarCaraAutomaticamente("R",1,0,500); break;
                        case 85: girarCaraAutomaticamente("U",1,0,500); break;
                        case 70: girarCaraAutomaticamente("F",1,0,500); break;
                        case 66: girarCaraAutomaticamente("B",1,0,500); break;
                        case 76: girarCaraAutomaticamente("L",1,0,500); break;
                        case 68: girarCaraAutomaticamente("D",1,0,500); break;
                        case 77: girarCaraAutomaticamente("M",1,0,500); break;
                        case 83: girarCaraAutomaticamente("S",1,0,500); break;
                        case 69: girarCaraAutomaticamente("E",1,0,500); break;
                        case 88:
                        {
                            desordenar();
                            hacerCountDown();
                        } break;
                    }
                }
            }
        }

        function animarEscena()
        {
            TWEEN.update();
            controls.enableRotate = bloqueo;
            controls.update();
            botonPlay.rotation.x += 0.01;
            botonPlay.rotation.y -= 0.015;
            botonPlay.rotation.z -= 0.01;
            botonRestart.rotation.x -= 0.01;
            botonRestart.rotation.y += 0.015;
            botonRestart.rotation.z += 0.01;
            GUI();
            requestAnimationFrame(animarEscena);
            renderizarEscena();
        }

        function renderizarEscena()
        {
            renderer.render(escena, camara);
        }

        window.addEventListener("mousemove", onDocumentMouseMove, false);
        window.requestAnimationFrame(renderizarEscena);
    