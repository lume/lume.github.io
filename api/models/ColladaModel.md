
# <code>class <b>ColladaModel</b> extends [Element3D](../core/Element3D.md)</code> :id=ColladaModel

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
  myModel.on('MODEL_LOAD', () => console.log('loaded'))
</script>
```

JavaScript Example:

```js
const scene = new Scene
scene.webgl = true
document.body.append(scene)
const model = new ColladaModel
model.src = 'path/to/model.dae'
model.on('MODEL_LOAD', () => console.log('loaded'))
scene.add(model)
```



Inherits properties from [Element3D](../core/Element3D.md).





Inherits methods from [Element3D](../core/Element3D.md).


        