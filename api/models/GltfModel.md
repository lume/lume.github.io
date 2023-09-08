
# <code>class <b>GltfModel</b></code> :id=GltfModel

> :construction: :hammer: Under construction! :hammer: :construction:

Defines the `<lume-gltf-model>` element, for loading 3D
models in the glTF format. It is similar to an `<img>` tag, but for 3D.

HTML Example:

```html
<lume-scene webgl>
  <lume-gltf-model src="path/to/model.gltf"></lume-gltf-model>
</lume-scene>
```

JavaScript Example:

```js
const scene = new Scene
document.body.append(scene)
const model = new GltfModel
model.src = 'path/to/model.gltf'
scene.add(model)
```












        