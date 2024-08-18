
# <code>class <b>GltfModel</b> extends [Model](Model.md)</code> :id=GltfModel

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
  myModel.addEventListener('load', () => console.log('loaded'))
</script>
```

JavaScript Example:

```js
const scene = new Scene
scene.webgl = true
document.body.append(scene)
const model = new GltfModel
model.src = 'path/to/model.gltf'
model.addEventListener('load', () => console.log('loaded'))
scene.add(model)
```

## Properties

Inherits properties from [Model](Model.md).


### <code>.<b>threeModel</b></code> :id=threeModel

The loaded GLTF model, or null when
not loaded or while loading.

`signal`
        



Inherits methods from [Model](Model.md).


        