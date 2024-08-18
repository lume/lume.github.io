
# <code>class <b>TdsModel</b> extends [Model](Model.md)</code> :id=TdsModel

Defines the `<lume-3ds-model>` element, short for `<lume-element3d
has="3ds-model">`, for loading 3D models in the 3DS format (`.3ds`
files).

See [`TdsModelBehavior`](../behaviors/mesh-behaviors/models/TdsModelBehavior)
for attributes/properties available on this element.

HTML Example:

```html
<lume-scene webgl>
  <lume-3ds-model id="myModel" src="path/to/model.3ds"></lume-3ds-model>
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
const model = new TdsModel
model.src = 'path/to/model.3ds'
model.addEventListener('load', () => console.log('loaded'))
scene.add(model)
```

## Properties

Inherits properties from [Model](Model.md).


### <code>.<b>threeModel</b></code> :id=threeModel

The loaded 3DS model, or null when
not loaded or while loading.

`signal`
        



Inherits methods from [Model](Model.md).


        