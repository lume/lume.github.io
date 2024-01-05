
# <code>class <b>FbxModel</b></code> :id=FbxModel

Defines the `<lume-fbx-model>` element, short for `<lume-element3d
has="fbx-model">`, for loading 3D models in the FBX format (`.fbx`
files).

See [`FbxModelBehavior`](../behaviors/mesh-behaviors/models/FbxModelBehavior)
for attributes/properties available on this element.

HTML Example:

```html
<lume-scene webgl>
  <lume-fbx-model id="myModel" src="path/to/model.fbx"></lume-fbx-model>
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
const model = new FbxModel
model.src = 'path/to/model.fbx'
model.on('MODEL_LOAD', () => console.log('loaded'))
scene.add(model)
```












        