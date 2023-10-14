
# <code>class <b>MixedPlaneMaterialBehavior</b> extends [PhysicalMaterialBehavior](PhysicalMaterialBehavior.md)</code> :id=MixedPlaneMaterialBehavior

Used as the material for [`<lume-mixed-plane>`](../../../meshes/MixedPlane) elements.

<div id="mixedPlaneExample"></div>

<script type="application/javascript">
  new Vue({ el: '#mixedPlaneExample', data: { code: buttonsWithShadowExample }, template: '<live-code :template="code" mode="html>iframe" :debounce="200" />' })
</script>

## Properties

Inherits properties from [PhysicalMaterialBehavior](PhysicalMaterialBehavior.md).


### <code>.<b>materialOpacity</b></code> :id=materialOpacity

`override` `attribute`

Default: `0.3`

Overrides [`PhysicalMaterialBehavior.color`](./PhysicalMaterialBehavior#color) to
give mixed planes a default tinted transparent surface over regular
DOM content, on which light effects can be drawn.
        



Inherits methods from [PhysicalMaterialBehavior](PhysicalMaterialBehavior.md).


        