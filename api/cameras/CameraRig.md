
# <code>class <b>CameraRig</b></code> :id=CameraRig

Element: `<lume-camera-rig>`

The [`<lume-camera-rig>`](./CameraRig) element is much like a real-life
camera rig that contains a camera on it: it has controls to allow the user to
rotate and dolly the camera around in physical space more easily, in a
particular and specific. In the following example, try draging to rotate,
scrolling to zoom:

<live-code id="example"></live-code>

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
        


### <code>.<b>verticalAngle</b></code> :id=verticalAngle

*attribute*

Default: `0`

The vertical angle of the camera (rotation around a horizontal axis). When the user drags up or
down, the camera will move up and down as it rotates around the center.
The camera is always looking at the center.
        


### <code>.<b>initialPolarAngle</b></code> :id=initialPolarAngle

*deprecated*: initialPolarAngle has been renamed to verticalAngle.
        


### <code>.<b>minVerticalAngle</b></code> :id=minVerticalAngle

*attribute*

Default: `-90`

The lowest angle that the camera will rotate vertically.
        


### <code>.<b>minPolarAngle</b></code> :id=minPolarAngle

*deprecated*: minPolarAngle has been renamed to minVerticalAngle.
        


### <code>.<b>maxVerticalAngle</b></code> :id=maxVerticalAngle

*attribute*

Default: `90`

The highest angle that the camera will rotate vertically.

<live-code id="verticalExample"></live-code>

<script>
  example.content = cameraRigExample
  verticalExample.content = cameraRigVerticalRotationExample
</script>
        


### <code>.<b>maxPolarAngle</b></code> :id=maxPolarAngle

*deprecated*: maxPolarAngle has been renamed to maxVerticalAngle.
        


### <code>.<b>horizontalAngle</b></code> :id=horizontalAngle

*attribute*

Default: `0`

The horizontal angle of the camera (rotation around a vertical axis). When the user drags left or
right, the camera will move left or right as it rotates around the center.
The camera is always looking at the center.
        


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
        


### <code>.<b>distance</b></code> :id=distance

*attribute*

Default: `1000`

The distance that the camera will be away from the center point.
When the performing a scroll gesture, the camera will zoom by moving
towards or away from the center point (i.e. dollying).
        


### <code>.<b>initialDistance</b></code> :id=initialDistance

*deprecated*: initialDistance has been renamed to distance.
        


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

Default: `true`

When `false`, user interaction (ability to zoom or rotate the camera) is
disabled, but the camera rig can still be manipulated programmatically.
        






        