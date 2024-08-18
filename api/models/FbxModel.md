
# <code>class <b>FbxModel</b> extends [Model](Model.md)</code> :id=FbxModel

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
  myModel.addEventListener('load', () => console.log('loaded'))
</script>
```

JavaScript Example:

```js
const scene = new Scene
scene.webgl = true
document.body.append(scene)
const model = new FbxModel
model.src = 'path/to/model.fbx'
model.addEventListener('load', () => console.log('loaded'))
scene.add(model)
```

## Properties

Inherits properties from [Model](Model.md).


### <code>.<b>threeModel</b></code> :id=threeModel

The loaded FBX model, or null
when not loaded or while loading.

`signal`
        



Inherits methods from [Model](Model.md).


        