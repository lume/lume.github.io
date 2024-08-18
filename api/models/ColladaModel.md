
# <code>class <b>ColladaModel</b> extends [Model](Model.md)</code> :id=ColladaModel

Defines the `<lume-collada-model>` element, short for `<lume-element3d
has="collada-model">`, for loading 3D models in the Collada format (`.dae`
files).

See [`ColladaModelBehavior`](../behaviors/mesh-behaviors/models/ColladaModelBehavior)
for attributes/properties available on this element.

HTML Example:

```html
<lume-scene webgl>
  <lume-collada-model id="myModel" src="path/to/model.dae"></lume-collada-model>
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
const model = new ColladaModel
model.src = 'path/to/model.dae'
model.addEventListener('load', () => console.log('loaded'))
scene.add(model)
```

## Properties

Inherits properties from [Model](Model.md).


### <code>.<b>threeModel</b></code> :id=threeModel

The loaded Collada model, or null
when not loaded or while loading.

`signal`
        



Inherits methods from [Model](Model.md).


        