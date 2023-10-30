
# <code>class <b>MaterialBehavior</b> extends [GeometryOrMaterialBehavior](../GeometryOrMaterialBehavior.md)</code> :id=MaterialBehavior

Base class for material behaviors.

## Properties

Inherits properties from [GeometryOrMaterialBehavior](../GeometryOrMaterialBehavior.md).


### <code>.<b>alphaTest</b></code> :id=alphaTest

`attribute`

Default: `0`

Sets the alpha value to be used when running an alpha test. The material
will not be rendered if the opacity is lower than this value.
        


### <code>.<b>colorWrite</b></code> :id=colorWrite

`attribute`

Default: `true`

Whether to render the material's color. This can be used in conjunction
with a mesh's renderOrder property to create invisible objects that
occlude other objects.
        


### <code>.<b>depthTest</b></code> :id=depthTest

`attribute`

Default: `true`

Whether to have depth test enabled when rendering this material.
        


### <code>.<b>depthWrite</b></code> :id=depthWrite

`attribute`

Default: `true`

Whether rendering this material has any effect on the depth buffer.

When drawing 2D overlays it can be useful to disable the depth writing in
order to layer several things together without creating z-index
artifacts.
        


### <code>.<b>dithering</b></code> :id=dithering

`attribute`

Default: `false`

Whether to apply dithering to the color to remove the appearance of
banding.
        


### <code>.<b>fog</b></code> :id=fog

`attribute`

Default: `true`

Whether the material is affected by a [scene's fog](../../../core/Scene#fogMode).
        


### <code>.<b>wireframe</b></code> :id=wireframe

`attribute`

Default: `false`

Whether to render geometry as wireframe, i.e. outlines of polygons. The
default of `false` renders geometries as smooth shaded.
        


### <code>.<b>sidedness</b></code> :id=sidedness

`attribute`

Default: `"front"`

Whether to render one side or the other, or both sides, of any polygons
in the geometry. If the side that isn't rendered is facing towards the
camera, the polygon will be invisible. Use "both" if you want the
polygons to always be visible no matter which side faces the camera.
        


### <code>.<b>materialOpacity</b></code> :id=materialOpacity

`attribute`

Default: `1`

Opacity of the material only.

The value should be a number from 0 to 1, inclusive. 0 is fully transparent, and 1
is fully opaque.

This is in addition to an element's
[`opacity`](../../../core/SharedAPI#opacity), both are multiplied
together. As an example, if this material's element's `opacity` is `0.5`,
and this material's `materialOpacity` is `0.5`, then the overall opacity
of the material will be 0.25 when rendered.

This modifies the material's opacity without affecting CSS rendering,
whereas modifying an element's `opacity` affects CSS rendering including
the element's children.
        


### <code>.<b>color</b></code> :id=color

Default: `THREE.Color("white")`

Color of the material.

The property can be set with a CSS color value string (f.e. `"#ff6600"`
or `rgb(20, 40, 50)`), a
[`THREE.Color`](https://threejs.org/docs/index.html?q=material#api/en/math/Color),
or a number representing the color in hex (f.e. `0xff6600`).

The property always returns the color normalized to a
[`THREE.Color`](https://threejs.org/docs/index.html?q=material#api/en/math/Color)
object.
        


### <code>.<b>transparent</b></code> :id=transparent

`reactive`

Returns `true` when either the element's
[`opacity`](../../../core/SharedAPI#opacity) or this material's
[`materialOpacity`](#materialOpacity) are less than 1.
        



Inherits methods from [GeometryOrMaterialBehavior](../GeometryOrMaterialBehavior.md).


        