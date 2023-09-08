
# <code>class <b>ProjectedMaterialBehavior</b> extends [PhysicalMaterialBehavior](PhysicalMaterialBehavior.md)</code> :id=ProjectedMaterialBehavior

Behavior: `projected-material`

A physical material with the added ability to have additional textures
projected onto it with
[`<lume-texture-projector>`](../../../textures/TextureProjector) elements.

## Properties

Inherits properties from [PhysicalMaterialBehavior](PhysicalMaterialBehavior.md).


### <code>.<b>projectedTextures</b></code> :id=projectedTextures

*string attribute*

Default: `[]`

The corresponding `clip-planes` attribute accepts one or more selectors,
comma separated, that define which
[`<lume-clip-plane>`](../../core/TextureProjector) elements are to be used as
clip planes. If a selector matches an element that is not a
`<lume-clip-plane>`, it is ignored. If a selector matches more than one
element, all of them that are clip planes are used.

```html
<lume-box has="clip-planes" clip-planes=".foo, .bar, #baz"></lume-box>
```

The property can also be set with a string (comma separated selectors),
or a mixed array of strings (selectors) or `<lume-clip-plane>` element
instances.

```js
el.projectedTextures = ".some-projected-texture"
// or
const plane = document.querySelector('.some-projected-texture')
el.projectedTextures = [plane, "#someOtherTexture"]
```

The property getter returns the currently applicable collection of
`<lume-clip-plane>` instances, not the original string or array of values
passed into the attribute or setter. Applicable planes are those that are
connected into the document, and that participate in rendering (composed,
either in the top level document, in a ShadowRoot, or distributed to a
slot in a ShadowRoot).
        



Inherits methods from [PhysicalMaterialBehavior](PhysicalMaterialBehavior.md).


        