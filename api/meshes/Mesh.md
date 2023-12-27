
# <code>class <b>Mesh</b> extends [Element3D](../core/Element3D.md)</code> :id=Mesh

Element: `<lume-mesh>`

An element that renders a particular 3D shape (geometry) along with a
particular style (material). This is a generic element with no particular
shape. Elements like `<lume-box>` extend from `Mesh` in order to define
behaviors they ship with by default. For example a `<lume-box>` element
(backed by the [`Box`](./Box) class) extends from this `Mesh` class and
applies two default behaviors:
[`box-geometry`](../behaviors/mesh-behaviors/geometries/BoxGeometryBehavior)
and
[`phong-material`](../behaviors/mesh-behaviors/materials/PhongMaterialBehavior).

A `<lume-mesh>` does not have any behaviors by default, a geometry behavior
and material behavior need to be added for it to render something, using the
`has=""` attribute, for example `has="box-geometry phong-material"`.

## Example

<live-code id="liveExample"></live-code>
<script>
  liveExample.content = meshExample()
</script>

## Properties

Inherits properties from [Element3D](../core/Element3D.md).


### <code>.<b>castShadow</b></code> :id=castShadow

`boolean` `attribute`

Default: `true`

When `true`, the mesh casts shadows onto other objects when under the
presence of a light such as a
[`<lume-point-light>`](../lights/PointLight).
        


### <code>.<b>receiveShadow</b></code> :id=receiveShadow

`boolean` `attribute`

Default: `true`

When `true`, the mesh receives shadows from other objects when under the
presence of a light such as a
[`<lume-point-light>`](../lights/PointLight).
        



Inherits methods from [Element3D](../core/Element3D.md).


        