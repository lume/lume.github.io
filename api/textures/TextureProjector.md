
# <code>class <b>TextureProjector</b> extends [Element3D](..\core\Element3D.md)</code> :id=TextureProjector

Element: `<lume-texture-projector>`

An non-rendered plane that can be placed anywhere in 3D space to project a
texture onto mesh elements that have `projected-material` behaviors.

For now only one `<lume-texture-projector>` can be associated to a mesh, and
only with an orthographic projection (perpendicular to the plane, i.e. along
the direction the plane is facing). Later on we'll support perspective
projection and multiple projections.

To project a texture onto a mesh element, add a
[`projected-material`](../behaviors/mesh-behaviors/ProjectedMaterialBehavior)
behavior to the element using the `has=""` attribute, then assign an array of
`<lume-texture-projector>` elements, or a string of comma-separated CSS
selectors, to the element's `projectedTextures` property. The equivalent
dash-case attribute accepts only the string of selectors. Only the first
texture is used, for now.

<div id="projectedTextureExample"></div>

<script type="application/javascript">
  new Vue({ el: '#projectedTextureExample', data: { code: projectedTextureExample }, template: '<live-code :template="code" mode="html>iframe" :debounce="200" />' })
</script>

## Properties

Inherits properties from [Element3D](..\core\Element3D.md).


### <code>.<b>src</b></code> :id=src

`attribute`

Default: `''`

The path to an image to be used as a projected
texture.
        


### <code>.<b>fitment</b></code> :id=fitment

`attribute`

Default: `'cover'`

Fitment of the image within the size area on X and Y. Similar to the CSS
object-fit property, but supporting only "cover" and "contain" fitments.
        



Inherits methods from [Element3D](..\core\Element3D.md).


        