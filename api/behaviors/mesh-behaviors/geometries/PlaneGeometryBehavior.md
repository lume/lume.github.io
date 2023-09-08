
# <code>class <b>PlaneGeometryBehavior</b> extends [GeometryBehavior](GeometryBehavior.md)</code> :id=PlaneGeometryBehavior

Behavior: `plane-geometry`

Makes a flat rectangle-shaped geometry on a [`<lume-mesh>`](../../../meshes/Mesh)
element. This is the default geometry behavior on
[`<lume-plane>`](../../../meshes/Plane) elements.

The size of the sphere is determined by the `x` and `y`
[`size`](../../../core/Sizeable#size) of the element.

## Properties

Inherits properties from [GeometryBehavior](GeometryBehavior.md).


### <code>.<b>widthSegments</b></code> :id=widthSegments

`attribute`

Default: `1`

The number of divisions across the width of the plane. A plane with 10
width segments and 10 height segments is essentially made up of 100 cells
(or 10 rows and 10 columns of smaller planes)
        


### <code>.<b>heightSegments</b></code> :id=heightSegments

`attribute`

Default: `1`

The number of divisions across the height of the plane. A plane with 10
width segments and 10 height segments is essentially made up of 100 cells
(or 10 rows and 10 columns of smaller planes)
        



Inherits methods from [GeometryBehavior](GeometryBehavior.md).


        