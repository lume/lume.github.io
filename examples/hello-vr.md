# Hello VR

<live-code class="full" :code="code" mode="html>iframe" :debounce="200">
  <template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <lume-scene webgl vr>
    <lume-box
        id="node"
        size="80 80 80"
        align-point="0.5 0.5 0.5"
        mount-point="0.5 0.5 0.5"
        position="0 0 -500"
        rotation="30 30 30"
        color="deeppink"
    ></lume-box>
    <lume-point-light
        align-point="0.5 0.5 0.5"
        mount-point="0.5 0.5 0.5"
        position="-200 0 0"
        color="white"
        intensity="1000"
    ></lume-point-light>
  </lume-scene>

  <style>
    html, body {
      margin: 0; padding: 0;
      height: 100%; width: 100%;
    }
    lume-scene {
      background: black;
    }
  </style>

  <script type="module">
    import 'lume'
    node.rotation = (x, y, z) => [x, ++y, z]
  </script>
  </template>
</live-code>
