
# <code>class <b>LineBasicMaterialBehavior</b> extends [MaterialBehavior](MaterialBehavior.md)</code> :id=LineBasicMaterialBehavior

Behavior: `line-material`

This is the default material behavior for
[`<lume-line>`](../../../meshes/Line.md) elements. It renders a series of
points as a simple colored line, optionally with a texture for coloring. It is
backed by Three.js `LineBasicMaterial` underneath. This is typically paired with
[`LineGeometryBehavior`](../geometries/LineGeometryBehavior.md).

<live-code id="example"></live-code>
<script>
  example.code = lineExample
</script>

## Properties

Inherits properties from [MaterialBehavior](MaterialBehavior.md).


### <code>.<b>texture</b></code> :id=texture

A texture to set color along the line.
Useful when supplying UVs to the geometry being used along with this
material. Most likely you'll supply UVs by copying data from a modeling
program like Blender, probably not something you'd program manually.
        



Inherits methods from [MaterialBehavior](MaterialBehavior.md).


        