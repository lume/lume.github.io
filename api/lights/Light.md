
# <code>class <b>Light</b> extends [Element3D](../core/Element3D.md)</code> :id=Light

`abstract`

An abstract base class for light elements. This class has properties common
to all types of light.

## Properties

Inherits properties from [Element3D](../core/Element3D.md).


### <code>.<b>color</b></code> :id=color

`attribute`

Default: `"white"`

The color of light that is emitted.

A string value can be any valid CSS color string, f.e. `"#ff6600"` or
`"rgb(10,20,30)"`.

A number value represents a hex color value, f.e.
`0xff6600`.

A `THREE.Color` instance can be assigned, and it will be copied to the
element's internal color value upon assignment. Mutating the assigned
`THREE.Color` after assignment will have no effect; instead you can
assign it again each time you wish to update the color.
        


### <code>.<b>intensity</b></code> :id=intensity

`abstract`

The intensity of the light.

When [physically correct lighting](../core/Scene#physicallycorrectlights)
is enabled, the units of intensity depend on the type of light (f.e.
[`PointLight`](./PointLight) or [`SpotLight`](./SpotLight)).
        



Inherits methods from [Element3D](../core/Element3D.md).


        