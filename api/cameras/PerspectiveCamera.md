
# <code>class <b>PerspectiveCamera</b> extends [Element3D](..\core\Element3D.md)</code> :id=PerspectiveCamera

Defines a viewport into the 3D scene as will be seen on screen.

A perspective camera is very similar to a camera in the real world: it has a
field of view (fov) such that more things in the world are visible further away from
the camera, while less can fit into view closer to the camera.

<div id="perspectiveCamera"></div>
<script>
  new Vue({
    el: '#perspectiveCamera',
    template: '<live-code :template="code" mode="html>iframe" :debounce="200" />',
    data: { code: perspectiveCameraExample },
  })
</script>

## Properties

Inherits properties from [Element3D](..\core\Element3D.md).


### <code>.<b>fov</b></code> :id=fov

*attribute*

Default: `50`

The camera's field of view angle, in degrees, when [`zoom`](#zoom) level
is `1`.
        


### <code>.<b>aspect</b></code> :id=aspect

*attribute*

Default: `0`

A value of `0` sets the aspect ratio to automatic, based on the
dimensions of a scene.  You normally don't want to modify this, but in
case of stretched or squished display, this can be adjusted appropriately
to unstretch or unsquish the view of the 3d world.
        


### <code>.<b>near</b></code> :id=near

*attribute*

Default: `0.1`

Anything closer to the camera than this value will not be rendered.
        


### <code>.<b>far</b></code> :id=far

*attribute*

Default: `3000`

Anything further from the camera than this value will not be rendered.
        


### <code>.<b>zoom</b></code> :id=zoom

*attribute*

Default: `1`

The zoom level of the camera modifies the effective field of view.
Increasing the zoom will decrease the effective field of view, and vice
versa. At zoom level `1`, the effective field of view is equivalent to
[`fov`](#fov).
        


### <code>.<b>active</b></code> :id=active

*attribute*

Default: `false`

When `true`, the camera will be used as the viewport into the 3D scene,
instead of the scene's default camera. When set back to `false`, the last
camera that was set (and is still) active will be used, or if no other
cameras are active the scene's default camera will be used.
        



Inherits methods from [Element3D](..\core\Element3D.md).


        