# Autolayout (declarative)

<live-code class="full" mode="html>iframe">
  <template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <style>
      body, html {
          width: 100%; height: 100%;
          margin: 0; padding: 0;
          overflow: hidden;
          touch-action: none; /* prevent touch drag from scrolling */
      }
  </style>

  <lume-scene id="scene" webgl style="display: none">
      <lume-ambient-light intensity="0.1"></lume-ambient-light>
      <lume-point-light
          id="light"
          color="white"
          position="300 300 120"
          size="0 0 0"
          cast-shadow="true"
          intensity="0.5"
          shadow-radius="2"
          distance="800"
          shadow-bias="-0.01"
          >
          <lume-mesh
              has="sphere-geometry basic-material"
              size="10 10 10"
              color="white"
              receive-shadow="false"
              cast-shadow="false"
              mount-point="0.5 0.5 0.5"
              style="pointer-events: none"
              >
          </lume-mesh>
      </lume-point-light>
      <lume-autolayout
          id="layout"
          size="100 100 0" TODO="why do we need Z size 0 here, but not in the imperative example?"
          position="0 0 0"
          align-point=" 0.5 0.5 0"
          mount-point=" 0.5 0.5 0"
          visual-format="
              V:|-[child1(child3)]-[child3]-|
              V:|-[child2(child4)]-[child4]-|
              V:[child5(child4)]-|
              |-[child1(child2)]-[child2]-|
              |-[child3(child4,child5)]-[child4]-[child5]-|
          "
          style="background: rgba(0,0,0,0.3)"
      >
          <lume-mixed-plane size="1 1 0" color="deeppink" class="child1">This is a paragraph of text to show that it reflows when the size of the layout changes size so that the awesomeness can be observed in its fullness.</lume-mixed-plane>
          <lume-mixed-plane size="1 1 0" color="deeppink" class="child2">This is a paragraph of text to show that it reflows when the size of the layout changes size so that the awesomeness can be observed in its fullness.</lume-mixed-plane>
          <lume-mixed-plane size="1 1 0" color="deeppink" class="child3">This is a paragraph of text to show that it reflows when the size of the layout changes size so that the awesomeness can be observed in its fullness.</lume-mixed-plane>
          <lume-mixed-plane size="1 1 0" color="deeppink" class="child4">This is a paragraph of text to show that it reflows when the size of the layout changes size so that the awesomeness can be observed in its fullness.</lume-mixed-plane>
          <lume-mixed-plane size="1 1 0" color="deeppink" class="child5">This is a paragraph of text to show that it reflows when the size of the layout changes size so that the awesomeness can be observed in its fullness.</lume-mixed-plane>
      </lume-autolayout>
  </lume-scene>

  <script type="module">
      import 'lume'

      // unhide the scene once we've loaded Lume
      scene.removeAttribute('style')

      const layout = document.querySelector('#layout')
      layout.size = (x,y,z,t) => [600+200*Math.sin(t/1000),400+200*Math.sin(t/1000),z]

      const light = document.querySelector('#light')

      document.addEventListener('pointermove', function(e) {
          e.preventDefault()
          light.position.x = e.clientX
          light.position.y = e.clientY
      })

      const vfl1 = `
          //viewport aspect-ratio:3/1 max-height:300
          H:|-[row:[child1(child2,child5)]-[child2]-[child5]]-|
          V:|-[row]-|
      `
      const vfl2 = `
          V:|-[child1(child3)]-[child3]-|
          V:|-[child2(child4)]-[child4]-|
          V:[child5(child4)]-|
          |-[child1(child2)]-[child2]-|
          |-[child3(child4,child5)]-[child4]-[child5]-|
      `

      let lastSize = 'big'
      let size = 'big' // or 'small'

      layout.addEventListener('sizechange', ({target: {calculatedSize: {x, y, z}}}) => {
          if (x <= 600) size = 'small'
          else size = 'big'

          if (lastSize !== size) {
              if (size === 'small') layout.visualFormat = vfl1
              else layout.visualFormat = vfl2
          }

          lastSize = size
      })
  </script>
  </template>
</live-code>
