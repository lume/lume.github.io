
# <code>class <b>GltfModel</b></code> :id=GltfModel

Defines the `<lume-gltf-model>` element, short for `<lume-element3d
has="gltf-model">`, for loading 3D models in the glTF format (`.gltf` or
`.glb` files).

See [`GltfModelBehavior`](../behaviors/mesh-behaviors/models/GltfModelBehavior)
for attributes/properties available on this element.

HTML Example:

```html
<lume-scene webgl>
  <lume-gltf-model id="myModel" src="path/to/model.gltf"></lume-gltf-model>
</lume-scene>
<script>
  myModel.on('MODEL_LOAD', () => console.log('loaded'))
</script>
```

JavaScript Example:

```js
const scene = new Scene
scene.webgl = true
document.body.append(scene)
const model = new GltfModel
model.src = 'path/to/model.gltf'
model.on('MODEL_LOAD', () => console.log('loaded'))
scene.add(model)
```












        