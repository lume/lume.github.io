
# <code>class <b>ObjModel</b> extends [Model](Model.md)</code> :id=ObjModel

Defines the `<lume-obj-model>` element, short for `<lume-element3d
has="obj-model">`, for loading 3D models in the OBJ format (`.obj` files
paired with `.mtl` files).

HTML Example:

```html
<lume-scene>
  <lume-obj-model id="myModel" obj="path/to/model.obj" mtl="path/to/model.mtl"></lume-obj-model>
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
const model = new ObjModel
model.obj = 'path/to/model.obj'
model.mtl = 'path/to/model.mtl'
model.addEventListener('load', () => console.log('loaded'))
scene.add(model)
```

## Properties

Inherits properties from [Model](Model.md).


### <code>.<b>threeModel</b></code> :id=threeModel

The loaded OBJ model, or null when
not loaded or while loading.

`signal`
        



Inherits methods from [Model](Model.md).


        