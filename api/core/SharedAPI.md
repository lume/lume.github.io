
# <code>class <b>SharedAPI</b> extends [Settable](../utils/Settable.md), [Transformable](Transformable.md)</code> :id=SharedAPI

This is an abstract base class that provides common
properties and methods for the non-abstract [`Element3D`](./Element3D) and
[`Scene`](./Scene) custom element classes.

This class is not intended for extension by end users. You'll want to extend
from [`Scene`](./Scene) or [`Element3D`](./Element3D) (or their
subclasses) instead of this class.

For purposes of documentation it is still useful to know what properties and
methods subclasses inherit from here.

## Properties

Inherits properties from [Settable](../utils/Settable.md), [Transformable](Transformable.md).


### <code>.<b>isScene</b></code> :id=isScene

True if a subclass of this class is a Scene.
        


### <code>.<b>isElement3D</b></code> :id=isElement3D

True if a subclass of this class is an `Element3D`.
        


### <code>.<b>opacity</b></code> :id=opacity

*attribute*

Default: `1`

Set the object's opacity.

The value should be a number from `0` to `1`. `0` is fully transparent, and `1` is fully opaque.
        


### <code>.<b>glLoaded</b></code> :id=glLoaded

*readonly*, *reactive*

Returns a boolean indicating whether or not the WebGL rendering features
of a LUME element are loaded and ready.

All elements in a `<lume-scene>` have WebGL rendering disabled by
default.

If a `<lume-scene>` element has its `webgl` attribute set to
`"false"` (the default), then `glLoaded` will always return `false` for any LUME
elements in the scene.

If a `<lume-scene>` element has the `webgl` attribute set to
`"true"`, then `glLoaded` will return `true` for any LUME
elements in the scene *after* their WebGL APIs have been loaded
(`false` up until then).
        


### <code>.<b>cssLoaded</b></code> :id=cssLoaded

*readonly*, *reactive*

Returns a boolean indicating whether or not the CSS rendering features
of a LUME element are loaded and ready.

All elements in a `<lume-scene>` have CSS rendering enabled by
default.

If a `<lume-scene>` element has its `enable-css` attribute set to
`"false"`, then `cssLoaded` will always return `false` for any LUME
elements in the scene.

If a `<lume-scene>` element has its `enable-css` attribute set to
`"true"` (the default), then `cssLoaded` will return `true` for
any LUME elements in the scene *after* their CSS APIs have been loaded
('false' up until then).
        


### <code>.<b>scene</b></code> :id=scene

*reactive*, *readonly*

The `<lume-scene>` that the element is a child or grandchild of, `null`
if the element is not a descendant of a Scene, `null` if the child is a
descendant of a Scene that is not connected into the DOM, or `null` if
the element is a descendant of a connected Scene but the element is not
participating in the composed tree (i.e. the element is not distributed
to a `<slot>` element of a ShadowRoot of the element's parent).
        


### <code>.<b>three</b></code> :id=three

*readonly*

The WebGL rendering content of this element. Useful if you know Three.js
APIs. See
[`Object3D`](https://threejs.org/docs/index.html#api/en/core/Object3D).
        


### <code>.<b>threeCSS</b></code> :id=threeCSS

*readonly*

The CSS rendering content of this element. Useful if you know Three.js
APIs. See
[`THREE.Object3D`](https://threejs.org/docs/index.html#api/en/core/Object3D).
        


### <code>.<b>version</b></code> :id=version

`reactive`

Default: `0`

Incremented any time the element has been updated for rendering in an
animation frame. Any time this changes, it means the underlying Three.js
world matrices for this element and its sub tree have been calculated.
        

## Methods

Inherits methods from [Settable](../utils/Settable.md), [Transformable](Transformable.md).


### <code>.<b>recreateThree</b>(): void</code> :id=recreateThree

Replaces the current three object with a new
one, reconnecting it to the same parent and children. This can be useful
in scenarios where a property of a three object needs to be updated but the property
can only be updated via the constructor, requiring us to make a new object.
        


### <code>.<b>recreateThreeCSS</b>(): void</code> :id=recreateThreeCSS

Replaces the current threeCSS object with a new
one, reconnecting it to the same parent and children. This can be useful
in scenarios where a property of a threeCSS object needs to be updated but the property
can only be updated via the constructor, requiring us to make a new object.
        


### <code>.<b>needsUpdate</b>(): void</code> :id=needsUpdate

Schedules a rendering update for the element.
Usually you don't need to call this when using the outer APIs, as setting
attributes or properties will queue an update.

But if you're doing something special to an Element3D or a Scene, f.e.
modifying the [`.three`](#three) or [`.threeCSS`](#threeCSS) properties
whose updates are not tracked (are not reactive), you should call this so
that LUME will know to re-render the visuals for the element.

Example:

```js
const mesh = document.querySelector('lume-mesh')

// Custom modification of underlying Three.js objects:
mesh.three.material.transparent = true
mesh.three.material.opacity = 0.4
mesh.three.add(new THREE.Mesh(...))

// Tell LUME the elements needs to be re-rendered.
mesh.needsUpdate()
```
        


### <code>.<b>makeThreeObject3d</b>(): void</code> :id=makeThreeObject3d

*protected*

Creates a LUME element's Three.js object for
WebGL rendering. `<lume-mesh>` elements override this to create and return
[THREE.Mesh](https://threejs.org/docs/index.html?q=mesh#api/en/objects/Mesh) instances,
for example.
        


### <code>.<b>makeThreeCSSObject</b>(): void</code> :id=makeThreeCSSObject

*protected*

Creates a LUME element's Three.js object
for CSS rendering. At the moment this is not overriden by any
subclasses, and always creates `CSS3DObjectNested` instances for CSS
rendering, which is a modified version of
[THREE.CSS3DObject](https://github.com/mrdoob/three.js/blob/b13eccc8bf1b6aeecf6e5652ba18d2425f6ec22f/examples/js/renderers/CSS3DRenderer.js#L7).
        
        