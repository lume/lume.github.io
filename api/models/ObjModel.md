
# <code>class <b>ObjModel</b></code> :id=ObjModel

Defines the `<lume-obj-model>` element, which is short for `<lume-element3d has="obj-model">`.

HTML Example:

```html
<lume-scene>
  <lume-obj-model obj="path/to/model.obj" mtl="path/to/model.mtl"></lume-obj-model>
</lume-scene>
```

JavaScript Example:

```js
const scene = new Scene
document.body.append(scene)
const model = new ObjModel
model.obj = 'path/to/model.obj'
model.mtl = 'path/to/model.mtl'
scene.add(model)
```












        