
# <code>class <b>AmbientLight</b> extends [Light](Light.md)</code> :id=AmbientLight

The AmbientLight class is the implementation behind
`<lume-ambient-light>` elements.

This light globally illuminates all objects in the scene equally.  It does
not cast shadows as it does not have a direction.

## Properties

Inherits properties from [Light](Light.md).


### <code>.<b>intensity</b></code> :id=intensity

`attribute`

Default: `1`

The intensity of the light.

The intensity of this element does not change behavior when [physically
correct lighting](../core/Scene#physicallycorrectlights) is enabled.
        



Inherits methods from [Light](Light.md).


        