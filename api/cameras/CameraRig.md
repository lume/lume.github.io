
# <code>class <b>CameraRig</b></code> :id=CameraRig

Element: `<lume-camera-rig>`

The [`<lume-camera-rig>`](./CameraRig) element is much like a real-life
camera rig that contains a camera on it: it has controls to allow the user to
rotate and dolly the camera around in physical space more easily, in a
particular and specific. In the following example, try draging to rotate,
scrolling to zoom:

<div id="cameraRigExample"></div>

## Slots

- default (no name): Allows children of the camera rig to render as children
of the camera rig, like with elements that don't have a ShadowDOM.
- `camera-child`: Allows children of the camera rig to render relative to the
camera rig's underlying camera.

## Properties




### <code>.<b>hasShadow</b></code> :id=hasShadow

*override* *readonly*

This is `true` because this element has a `ShadowRoot` with the mentioned
[`slots`](#slots).
        


### <code>.<b>initialPolarAngle</b></code> :id=initialPolarAngle

*attribute*

Default: `0`

The initial vertical rotation of the camera. When the user drags up or
down, the camera will move up and down as it rotates around the center.
The camera is always looking at the center.
        


### <code>.<b>minPolarAngle</b></code> :id=minPolarAngle

*attribute*

Default: `-90`

The lowest angle that the camera will rotate vertically.
        


### <code>.<b>maxPolarAngle</b></code> :id=maxPolarAngle

*attribute*

Default: `90`

The highest angle that the camera will rotate vertically.

<div id="verticalRotationExample"></div>

<script>
  new Vue({
    el: '#cameraRigExample',
    template: '<live-code :template="code" mode="html>iframe" :debounce="200" />',
    data: { code: cameraRigExample },
  })
  new Vue({
    el: '#verticalRotationExample',
    template: '<live-code :template="code" mode="html>iframe" :debounce="200" />',
    data: { code: cameraRigVerticalRotationExample },
  })
</script>
        


### <code>.<b>minHorizontalAngle</b></code> :id=minHorizontalAngle

*attribute*

Default: `-Infinity`

The smallest angle that the camera will be allowed to rotate to
horizontally. The default of `-Infinity` means the camera will rotate
laterally around the focus point indefinitely.
        


### <code>.<b>maxHorizontalAngle</b></code> :id=maxHorizontalAngle

*attribute*

Default: `Infinity`

The largest angle that the camera will be allowed to rotate to
horizontally. The default of `Infinity` means the camera will rotate
laterally around the focus point indefinitely.
        


### <code>.<b>initialDistance</b></code> :id=initialDistance

*attribute*

Default: `1000`

The initial distance that the camera will be away from the center point.
When the performing a scroll gesture, the camera will zoom by moving
towards or away from the center point (i.e. dollying).
        


### <code>.<b>minDistance</b></code> :id=minDistance

*attribute*

Default: `200`

The smallest distance the camera can get to the center point when zooming
by scrolling.
        


### <code>.<b>maxDistance</b></code> :id=maxDistance

*attribute*

Default: `2000`

The largest distance the camera can get from the center point when
zooming by scrolling.
        


### <code>.<b>active</b></code> :id=active

*attribute*

Default: `true`

When `true`, the underlying camera is set to [`active`](./PerspectiveCamera#active).
        


### <code>.<b>dollySpeed</b></code> :id=dollySpeed

*attribute*

Default: `1`
        


### <code>.<b>interactive</b></code> :id=interactive

*attribute*

When `false`, user interaction (ability to zoom or rotate the camera) is
disabled, but the camera rig can still be manipulated programmatically.
        






        