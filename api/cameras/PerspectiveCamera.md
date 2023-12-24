
# <code>class <b>PerspectiveCamera</b> extends [Camera](Camera.md)</code> :id=PerspectiveCamera

Defines a viewport into the 3D scene as will be seen on screen.

A perspective camera is very similar to a camera in the real world: it has a
field of view (fov) such that more things in the world are visible further away from
the camera, while less can fit into view closer to the camera.

<live-code id="example"></live-code>
<script>
  example.content = perspectiveCameraExample
</script>

## Properties

Inherits properties from [Camera](Camera.md).


### <code>.<b>fov</b></code> :id=fov

*attribute*

Default: `50`

The camera's field of view angle, in degrees, when [`zoom`](#zoom) level
is `1`.
        



Inherits methods from [Camera](Camera.md).


        