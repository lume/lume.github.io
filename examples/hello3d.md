# Hello 3D

<div id="example"></div>
<script type="application/javascript">
  new Vue({
    el: '#example',
    template: '<live-code class="full" :template="code" mode="html>iframe" :debounce="200" />',
    data: {
      code:
`
<base href="${host}" /><script src="./importmap.js"><\/script>

<lume-scene>
  <lume-element3d
    id="node"
    size="100 100"
    rotation="0 -70 0"
    align-point="0.5 0.5 0.5"
    mount-point="0.5 0.5 0.5"
  >
    <h3 align="center">Hello 3D world!</h3>
  </lume-element3d>
</lume-scene>

<style>
  html, body {
    margin: 0; padding: 0;
    height: 100%; width: 100%;
  }
  lume-scene {
    background: #333;
  }
  lume-element3d {
    background: deeppink;
    font-family: sans serif;
    border-radius: 5px;
  }
</style>

<script type="module">
  import 'lume'
  node.rotation = (x, y, z) => [x, ++y, z]
<\/script>

`
    },
  })
</script>
