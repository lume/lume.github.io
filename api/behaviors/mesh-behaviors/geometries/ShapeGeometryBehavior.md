
# <code>class <b>ShapeGeometryBehavior</b> extends [GeometryBehavior](GeometryBehavior.md)</code> :id=ShapeGeometryBehavior

Provides a 2D extrudable shape geometry for mesh
elements. The [`<lume-shape>`](../../../meshes/Shape.md) element has this behavior
on it by default.

The shape defined by the [`shape`](#shape) attribute property will be centered within the
size space defined by the host element's `size` and `sizeMode` attribute
properties.

To extrude the shape, set the host element's Z size to the amount of desired
extrusion. If the host element Z size is zero, the shape will be flat and 2D
only.

<div id="exampleContainer"></div>
<script>
  new Vue({
    el: '#exampleContainer',
    template: '<live-code class="full" :template="code" :autorun="true" mode="html>iframe" />',
    data: { code: shapesExample },
  })
</script>

## Properties

Inherits properties from [GeometryBehavior](GeometryBehavior.md).


### <code>.<b>shape</b></code> :id=shape

Defines the 2D shape to render.

Reading the property always returns an underlying
[THREE.Shape](https://threejs.org/docs/index.html?q=shape#api/en/extras/core/Shape)
object.

Setting the property accepts `string`, `number[]`, `null`, or
`THREE.Shape` values. All values are mapped to a single `THREE.Shape`
property (the one returned by the getter).

While setting the property triggers reactivity, modifying the
`THREE.Shape` returned by the getter does not. In such a case, we can
execute `el.shape = el.shape` to trigger reactivity.
<!-- TODO investigate using Solid createMutable to make the THREE.Shape reactive. -->

A string value should be a list of numbers separated by any amount of space
(commas are optional, for organizational use), every two numbers forming
one point in the 2D shape. Similar to the rest of LUME's coordinate
system, +X goes rightward, and +Y goes downward.

A number array value is similar to the string value: every two numbers
form a point in the shape.
<!-- TODO investigate reacting to reactive arrays -->

If the string or number array have no points, the default shape is rendered.

A `THREE.Shape` value will have its data copied to the underlying
`THREE.Shape` returned by the getter, and does not replace the underlying
`THREE.Shape` object.
<!-- TODO perhaps the getter should always return the value the user set, and not expose the internal `THREE.Shape` -->

A value of `null` (or when the attribute is removed) causes the
default shape to be rendered.
        


### <code>.<b>curveSegments</b></code> :id=curveSegments

The number of lines per curve withing
the shape. The higher the number, the smoother the shape at the cost of
render time.
        


### <code>.<b>bevel</b></code> :id=bevel

When the shape is extruded, enables rounding
of the shape edges.
        


### <code>.<b>bevelSegments</b></code> :id=bevelSegments

When the shape is extruded, determines
the number of sections for the bevel. A higher number makes the model
look smoother, but cost more time to render.
        


### <code>.<b>bevelThickness</b></code> :id=bevelThickness

When the shape is extruded,
determines the thickness of the bevel. Roughly like the amount of
radius for the rounded edges.
        


### <code>.<b>centerGeometry</b></code> :id=centerGeometry

When true, centers the shape geometry
within the host element's size space.
        


### <code>.<b>fitment</b></code> :id=fitment

Determines how to fit a shape within the
size area on X and Y. The Z size dictates the shape extrusion separately.
This takes the same values as the object-fit CSS property, except global
values. See https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#values
for details.
        



Inherits methods from [GeometryBehavior](GeometryBehavior.md).


        