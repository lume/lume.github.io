
# <code>class <b>TorusGeometryBehavior</b> extends [GeometryBehavior](GeometryBehavior.md)</code> :id=TorusGeometryBehavior

Creates a donut-shaped geometry for [`<lume-mesh>`](../../../meshes/Mesh)
elements. This is the geometry behavior of
[`<lume-torus>`](../../../meshes/Torus) elements by default.

The outer diameter of the donut is determined by the element's
[`calculatedSize.x`](../../../core/Sizeable#calculatedsize). The inner diameter is
the element's `calculatedSize.x` minus the donut's
[`tubeThickness`](#tubethickness).

## Properties

Inherits properties from [GeometryBehavior](GeometryBehavior.md).


### <code>.<b>tubeThickness</b></code> :id=tubeThickness

`attribute`

Default: `0.1`

The thickness of the tube of the donut, as a fraction of the element's
`x` size (as a fraction of the overall diameter also determined by the
element's `x` size). The default `0.1` value means the donut's tube
thickness is 10% of the overall diameter.
        


### <code>.<b>radialSegments</b></code> :id=radialSegments

`attribute`

Default: `16`

The number of segments (or edges) of the circular cross section of the
donut tube.
        


### <code>.<b>tubularSegments</b></code> :id=tubularSegments

`attribute`

Default: `32`

The number of tube sections around the donut.
        


### <code>.<b>arc</b></code> :id=arc

`attribute`

Default: `360`

The total angle in degrees around which the donut is constructed. The
default value of `360` means the tubular segments go all the way around
to form a whole donut. A value of `180` means we get a half of a donut
shape.
        



Inherits methods from [GeometryBehavior](GeometryBehavior.md).


        