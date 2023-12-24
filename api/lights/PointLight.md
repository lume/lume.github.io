
# <code>class <b>PointLight</b> extends [LightWithShadow](LightWithShadow.md)</code> :id=PointLight

Element: `<lume-point-light>`

An element that illuminates objects near it, casting shadows in any direction
away from the light by default. The light element itself is not visible; to
visualize it you can place a sphere as a child of the light for example.

The light's shadow projection camera is a PerspectiveCamera with fov of 90,
with aspect of 1.

All mesh elements [receive](../meshes/Mesh#receiveshadow) or
[cast](../meshes/Mesh#castshadow) shadows by default.

## Example

<live-code id="liveExample"></live-code>
<script>
  liveExample.content = pointLightExample()
</script>

## Properties

Inherits properties from [LightWithShadow](LightWithShadow.md).


### <code>.<b>intensity</b></code> :id=intensity

`attribute`

Default: `1`

This light's intensity. Changing the intensity will also change the light's
[`power`](#power) according to the formula `intensity * 4 * Math.PI`.

When [physically correct lighting](../core/Scene#physicallycorrectlights)
enabled, intensity is the luminous intensity of the light measured in
candela (cd).
        


### <code>.<b>distance</b></code> :id=distance

`attribute`

Default: `0`

In the default lighting mode, when distance is zero, light does not
attenuate (intensity stays constant as it travels away the light's
position). When distance is non-zero, light will attenuate linearly from
maximum intensity at the light's position down to zero at this distance
from the light.

When [physically correct lighting](../core/Scene#physicallycorrectlights)
is enabled, when distance is zero, light will attenuate according to
inverse-square law to infinite distance. When distance is non-zero, light
will attenuate according to inverse-square law until near the distance
cutoff, where it will then attenuate quickly and smoothly to 0.
Inherently, cutoffs are not physically correct.
        


### <code>.<b>decay</b></code> :id=decay

`attribute`

Default: `1`

The amount the light dims along the distance of the light.

In [physically correct mode](../core/Scene#physicallycorrectlights), a
decay value of `2` leads to physically realistic light falloff.
        


### <code>.<b>power</b></code> :id=power

`attribute`

Default: `1`

This light's power. Changing the power will also change the light's
[`intensity`](#intensity) according to the formula `power / (4 * Math.PI)`.

When [physically correct lighting](../core/Scene#physicallycorrectlights)
is enabled, power is the luminous power of the light measured in lumens
(lm).
        



Inherits methods from [LightWithShadow](LightWithShadow.md).


        