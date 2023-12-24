# Cameras

There are different ways to control a scene's "camera".

A camera is an element that is placed somewhere inside a LUME scene, and its
position in that world determines from where we will view the scene, much like a
real camera in our real world.

# Perspective Camera

A perspective camera is very similar to a camera in the real world: it has a
view angle such that more things in the world are visible further away from the
camera.

In the following example, a `<lume-perspective-camera>` element is placed into
the scene, and we can control several aspects of the camera like the field of
view (fov), position, and rotation.

All cameras start "inactive". When a manually-created camera is not `active`
(i.e. it does not have an `active` attribute, or the attribute is set to
`active="false"`, or the `.active` property is set to `false`), then the scene
will use its internal default camera (see
[`Scene#camera`](../api/core/Scene#camera) for info on the default camera). Once
the perspective camera is active then the view will be displayed through the
lense of that camera, and we can manipulate that camera to control our view.

<live-code id="cameraExample"></live-code>

# Camera Rig

The [`<lume-camera-rig>`](../api/cameras/CameraRig) element is similar to a
real-life camera rig that holds a camera making it easy to move the camera in space using controls for rotating
the camera around or moving the camera closer or further to or from a focus point.

In the following example, drag to rotate the camera around the camera rig's
local origin, and scroll or pinch with fingers to zoom:

<live-code id="rigExample"></live-code>

<script>
  cameraExample.content = perspectiveCameraExample
  rigExample.content = cameraRigExample
</script>

See the [`CameraRig`](../api/cameras/CameraRig) class for details on all of its
attributes and properties.
