# Rendering Modes

A `<lume-scene>` element has several render modes:

## WebGL

This mode is not enabled by default, enable it with a scene's `webgl` attribute:

```html
<lume-scene webgl></lume-scene>
```

This mode rendering mode is powered by the GPU using WebGL (soon WebGPU) with
the help of Three.js. This mode supports features such as:

- fully-3D shapes such as boxes, spheres, or 3D models loaded from external
  files
- dynamic shadows and lighting
- other GPU shaders effects like glows, refractions through transparent objects,
  reflections, etc.
- fluid morphing of shapes

Here's an example rendered with WebGL only. The demo loads a 3D model from a
`.gltf` file (glTF is a [3D file format](https://khronos.org/gltf)), illuminates
the model using light sources, visualizes the positions of the light sources
using small spheres, and renders a "floor" using a plane:

<live-code src="../examples/disco-helmet/example.html"></live-code>

> :bulb:**Tip:**
>
> The disco helmet example does not use CSS rendering for any visible effects,
> but CSS rendering is enabled (by default) because it makes debugging WebGL
> scenes easier. For example, see the [Debugging](./debugging.md) guide to learn
> about debugging 3D scenes in your browser's element inspector.

## CSS

This mode is enabled by default, disable it with a scene's `enable-css` attribute:

```html
<lume-scene enable-css="false"></lume-scene>
```

This rendering mode uses CSS 3D transforms to move flat surfaces in 3D space.

- CSS 3D rendering is limited to flat rectangles with borders, background
  colors, and images.
- CSS 3D cannot do shading, for example no dynamic shadows or lighting, no
  special effects like refractions or reflections, etc.
- No morphing of shapes, CSS 3D objects are always flat rectangles (with
  optional border radius).

The next example uses only CSS rendering to move flat surfaces in 3D space. Try
dragging the view to change the camera angle to more easily see how the flat
surfaces are positioned.

<live-code src="./scene-graph/example.html"></live-code>

## Mixed

Mixed mode is when both WebGL and CSS rendering modes are enabled, and in
particular when both modes are used to show visual effects at the same time.
Mixed mode is not a mode on its own, but rather when both of the other modes are
combined.

Enabling this mode requires enabling WebGL mode only, as CSS is mode is already
enabled by default:

```html
<lume-scene webgl></lume-scene>
```

Lume's ability to mix WebGL and CSS modes together, out of the box, allows us to
achieve scenarios where CSS content appears to be seamlessly rendered alongside
WebGL content, with CSS content event appearing to intersect with WebGL content.
Object rendered in either mode will be aligned together in the same 3D space.

The following example shows traditional `<button>` elements with standard
CSS-styled text inside of them, rendered along with WebGL effects (such as
lighting and shadow).

<live-code src="../../examples/buttons-with-shadow/example.html"></live-code>

This trick to this is the use of `<lume-mixed-plane>`, which is a plane that has
both a flat CSS surface along with a WebGL plane that aligns with that surface.
The Lume mixed plane element serves for cutting a hole in the WebGL rendering in
order to show the CSS rendering underneath. The CSS drawing is a layer below the
WebGL drawing.

To understand this better, here is a version of the example with only CSS
rendering enabled, and the `<body>` being given a skyblue background:

<live-code src="../../examples/buttons-with-shadow/no-webgl.html"></live-code>

And here's the same example but with only WebGL rendering enabled, and the
`<body>` also given a skyblue color:

<live-code src="../../examples/buttons-with-shadow/no-css.html"></live-code>

We can see that the WebGL rendering has hole cut out, and these holes align with
the CSS buttons. The objects in both the CSS rendering and the WebGL rendering
are transformed to move together, to seem like they are aligned in the same 3D
space, but they are in fact two separate layers with WebGL being on top (much
like two separate layers in a program like Adobe Photoshop).

There are some current limitations to mixing CSS and WebGL together:

- Transparent CSS surfaces (with CSS `opacity` less than `1`) will currently not
  show WebGL objects behind them.
- CSS surfaces will currently not transfer over into WebXR when entering WebXR
  with an AR/VR headset.
