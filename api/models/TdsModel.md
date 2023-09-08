
# <code>class <b>TdsModel</b></code> :id=TdsModel

> :construction: :hammer: Under construction! :hammer: :construction:

Defines the `<lume-3ds-model>` element, for loading 3D
models in the 3DS format (.3ds files). It is similar to an `<img>` tag, but for 3D.

HTML Example:

```html
<lume-scene webgl>
  <lume-3ds-model src="path/to/model.3ds"></lume-3ds-model>
</lume-scene>
```

JavaScript Example:

```js
const scene = new Scene
document.body.append(scene)
const model = new TdsModel
model.src = 'path/to/model.3ds'
scene.add(model)
```












        