
# <code>class <b>ColladaModel</b></code> :id=ColladaModel

> :construction: :hammer: Under construction! :hammer: :construction:

Defines the `<lume-collada-model>` element, for loading 3D
models in the Collada format (.dae files). It is similar to an `<img>` tag, but for 3D.

HTML Example:

```html
<lume-scene webgl>
  <lume-collada-model src="path/to/model.dae"></lume-collada-model>
</lume-scene>
```

JavaScript Example:

```js
const scene = new Scene
document.body.append(scene)
const model = new ColladaModel
model.src = 'path/to/model.dae'
scene.add(model)
```












        