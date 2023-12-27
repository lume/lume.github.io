
# <code>class <b>ClipPlane</b> extends [Element3D](Element3D.md)</code> :id=ClipPlane

Element: `lume-clip-plane`

An non-rendered plane that can be placed anywhere in 3D space to clip an
element on one side of the plane. The plane is infinite.

To visualize a portion of the plane, we can place a `<lume-plane>` as a
child of a `<lume-clip-plane>`, as in the below example.

To clip an element, add a
[`clip-planes`](../behaviors/mesh-behaviors/ClipPlanesBehavior) behavior to the
element with the `has=""` attribute, then assign any number of connected
`<lume-clip-plane>` elements to the element's `clipPlanes` property.

<live-code id="clipExample"></live-code>
<script>
  clipExample.content = clipPlaneExample
</script>



Inherits properties from [Element3D](Element3D.md).





Inherits methods from [Element3D](Element3D.md).


        