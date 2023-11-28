# External Assets

> :construction: :hammer: Under construction! :hammer: :construction:

LUME elements can load various types of external assets.

The following demo shows how to load a 3D model in OBJ format using the
`<obj-model>` element. It also shows how to use a `<lume-element3d>` element with an
`obj-model` [behavior](./element-behaviors). The `<obj-model>` element is a
shortcut for the equivalent of a `<lume-element3d has="obj-model">`.

<div id="objModel"></div>
<live-code>
  <template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <style>
      body, html {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #222;
          touch-action: none; /* prevent touch drag from scrolling */
          color: #ccc;
      }
      lume-scene { position: absolute!important; top: 0; left: 0; }
      lume-scene:nth-child(2) { pointer-events: none; }
      lume-element3d { padding: 15px; pointer-events: all; }
  </style>

  <!-- Use the enable-css attribute to disable CSS rendering so that only WebGL
  rendering is enabled (this saves CPU/Memory if you don't need CSS rendering).
  -->
  <lume-scene id="scene" webgl enable-css="false">
      <lume-ambient-light intensity="0.1"></lume-ambient-light>
      <lume-sphere
        id="stars"
        texture="/examples/hello-world/galaxy_starfield.png"
        receive-shadow="false"
        has="basic-material"
        sidedness="back"
        size="4000 4000 4000"
        mount-point="0.5 0.5 0.5"
        color="white"
      ></lume-sphere>
      <lume-point-light
          id="light"
          color="#ffe9ab"
          position="300 300 600"
          size="0 0 0"
          cast-shadow="true"
          >
          <lume-sphere
              has="basic-material"
              size="5 5 5"
              color="#ffe9ab"
              receive-shadow="false"
              cast-shadow="false"
              style="pointer-events: none"
              >
          </lume-sphere>
      </lume-point-light>
      <lume-element3d id="ship1Rotator" align-point="0.5 0.5 0" rotation="0 40 0">
          <!-- This is a lume-element3d element with an obj-model behavior. The
          obj-model behavior observes the obj and mtl attributes. -->
          <lume-element3d
              id="ship1"
              has="obj-model"
              size="0 0 0 "
              scale="200 200 200"
              position="0 -30 100"
              obj="/models/spaceship/ship.obj"
              mtl="/models/spaceship/ship.mtl"
          >
          </lume-element3d>
      </lume-element3d>
      <lume-element3d id="ship2Rotator" align-point="0.5 0.5 0" rotation="0 20 0">
          <!-- Alternatively, the lume-obj-model is an element that implicityly
          has an obj-model behavior. We've omitted the mtl attribute, so this
          model will by default have a plain random color. -->
          <lume-obj-model
              id="ship2"
              size="0 0 0"
              scale="200 200 200"
              position="0 30 210"
              obj="/models/spaceship/ship.obj"
              mtl="/models/spaceship/ship.mtl"
          >
          </lume-obj-model>
      </lume-element3d>
  </lume-scene>

  <!-- We're using two scenes, the next one for overlaid HTML/CSS-based UI, the previous one for WebGL content. -->

  <lume-scene id="scene">
      <lume-element3d size-mode="proportional literal" size="1 80">
          <!-- FIXME When toggling these too fast, the toggling breaks. Three.js Loader problem? -->
          <label><input id="objToggle" type="checkbox" checked /> Enable model on first ship.</label>
          <label><input id="matToggle" type="checkbox" checked /> Enable material on second ship.</label>
      </lume-element3d>
  </lume-scene>

  <script type="module">
      import { Motor, Events } from 'lume'

      document.addEventListener('pointermove', function(e) {
          e.preventDefault()
          light.position.x = e.clientX
          light.position.y = e.clientY
      })

      smooth(ship1)
      smooth(ship2)

      Motor.addRenderTask(() => {
          ship1Rotator.rotation.y -= 0.1
          ship2Rotator.rotation.y -= 0.4
      })

      function smooth(objModelElement) {
          // Use the 'MODEL_LOAD' event to work with the 'model' once loaded, if
          // needed. 'model' is an instance of THREE.Group containing THREE.Mesh
          // objects
          objModelElement.on(Events.MODEL_LOAD, ({ model }) => {
            console.log('%%%%%%%%%%%%%%%% modify geometry')
              centerAndSmoothGeometry(model)

              // we modified the internals the element, signal that it
              // needs an update on next render
              objModelElement.needsUpdate()
          })

      }

      function centerAndSmoothGeometry(obj) {

          // Use Three.js APIs to traverse obj's decendants.
          obj.traverse(node => {

              if ('geometry' in node) {

                  // Re-center the geometry around the local origin.
                  node.geometry.center()

                  // In case the model's shading looks flat on each polygon, this is a trick to
                  // make it look smooth. See https://discourse.threejs.org/t/5531
                  // TODO, when we upgrade to Three.js r125 or higher, use this
                  // approach instead: https://discourse.threejs.org/t/5531/10
                  // const tempGeometry = new THREE.Geometry().fromBufferGeometry( node.geometry );
                  // tempGeometry.mergeVertices();
                  // tempGeometry.computeVertexNormals();
                  // node.geometry = new THREE.BufferGeometry().fromGeometry( tempGeometry );

                  // IDEA: perhaps scale the geometry so it fits within the \`size\` of the node.

              }

          })

      }

      objToggle.addEventListener('click', () => {
          const objBehavior = ship1.behaviors.get('obj-model')
          if (objBehavior.obj) objBehavior.obj = ''
          else objBehavior.obj = '/models/spaceship/ship.obj'
      })

      matToggle.addEventListener('click', () => {
          const objBehavior = ship2.behaviors.get('obj-model')
          if (objBehavior.mtl) objBehavior.mtl = ''
          else objBehavior.mtl = '/models/spaceship/ship.mtl'
      })
  </script>
  </template>
</live-code>

The next example shows how to set a texture onto a mesh element. A texture is
loaded from an image file like a JPEG or PNG file using the `texture`
attribute. Similarly to `<obj-model>` being a shortcut for `<lume-element3d has="obj-model">`, the following `<lume-box>` element is a shortcut for
`<lume-mesh has="box-geometry phong-material">` which is a mesh element having both a geometry
behavior and a material behavior.

<div id="materialTexture"></div>
<live-code>
  <template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <style>
      body, html {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #191919;
          touch-action: none; /* prevent touch drag from scrolling */
          color: #ccc;
      }
      lume-scene { position: absolute!important; top: 0; left: 0; }
      lume-scene:nth-child(2) { pointer-events: none; }
      lume-element3d { padding: 15px; pointer-events: all; }
      label { padding-right: 10px; }
  </style>

  <lume-scene id="scene" webgl perspective="150">
      <lume-ambient-light intensity="0.3"></lume-ambient-light>
      <lume-point-light
          id="light"
          color="white"
          position="300 300 300"
          size="0 0 0"
          cast-shadow="true"
          intensity="0.8"
          >
      </lume-point-light>
      <!-- Specify a color otherwise the material will be tinted deeppink by default -->
      <lume-box id="model"
          rotation="40 40 0"
          align-point="0.5 0.5 0.5"
          mount-point="0.5 0.5 0.5"
          size="100 100 100"
          color="white"
          texture="/textures/cement.jpg"
      >
      </lume-box>
  </lume-scene>

  <lume-scene id="scene2">
      <lume-element3d size-mode="proportional literal" size="1 80">
          <!-- FIXME When toggling these too fast, the toggling breaks. Three.js Loader problem? -->
          <label>
              X size:
              <select id="sizeX">
                  <option value="50">50</option>
                  <option selected value="100">100</option>
                  <option value="150">150</option>
              </select>
          </label>
          <label>
              Y size:
              <select id="sizeY">
                  <option value="50">50</option>
                  <option selected value="100">100</option>
                  <option value="150">150</option>
              </select>
          </label>
          <label>
              Z size:
              <select id="sizeZ">
                  <option value="50">50</option>
                  <option selected value="100">100</option>
                  <option value="150">150</option>
              </select>
          </label>
          <label>
              Enable texture:
              <input type="checkbox" id="enableTex" checked />
          </label>
          <br />
          <label>
              Perspective <code id="perspectiveVal"></code>:
              <input id="perspective" type="range" min="75" max="250">
          </label>
      </lume-element3d>
  </lume-scene>

  <script type="module">
      import 'lume'

      const light = document.querySelector('#light')

      document.addEventListener('pointermove', event => {
          event.preventDefault()
          light.position.x = event.clientX
          light.position.y = event.clientY
      })

      const el = document.querySelector('#model')

      const rotate = (t) => 180 * Math.sin(0.0005 * t)
      el.rotation = (x, y, z, t) => [rotate(t/1.4), rotate(t/2.1), rotate(t/2.5)]

      // This shows three ways to update a node's properties.
      sizeX.addEventListener('change', event => el.size = {x: event.target.value})
      sizeY.addEventListener('change', event => el.size.y = event.target.value)
      sizeZ.addEventListener('change', event => el.behaviors.get('box-geometry').size = {z: event.target.value})

      enableTex.addEventListener('click', event => {
        el.setAttribute('texture', el.getAttribute('texture') ? '' : '/textures/cement.jpg')
      })

      perspectiveVal.innerHTML = '('+scene.perspective.toString().padStart(3).replace(' ', '&nbsp;')+'px)'
      perspective.value = scene.perspective

      const onPerspectiveChange = event => {
          scene.perspective = perspective.value
          perspectiveVal.innerHTML = '('+perspective.value.padStart(3).replace(' ', '&nbsp;')+'px)'
      }

      perspective.addEventListener('change', onPerspectiveChange)
      perspective.addEventListener('input', onPerspectiveChange)
  </script>
  </template>
</live-code>
