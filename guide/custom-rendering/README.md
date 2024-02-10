# Custom Rendering

To set up custom rendering, for example for use cases like custom post-processing
effects, the underlying Three.js WebGL renderer and Lume's customized CSS renderer
can be accessed from a `<lume-scene>` using the `.glRenderer` and `.cssRenderer`
properties.

```html
<lume-scene id="some-scene"> ... </lume-scene>

<script>
	const someScene = document.getElementById('some-scene')

	// Get the Three.js WebGLRenderer
	const glRenderer = someScene.glRenderer
</script>
```

The the scene's `drawScene` property can be assigned a new function to define
how to renderer in any custom way. For example, here we render the scene with
the scene's currently-active camera, which is what Lume does by default:

```js
someScene.drawScene = () => {
	glRenderer.render(someScene.three, someScene.threeCamera)

	// If you also need CSS rendering, don't forget to use cssRenderer here too.
}
```

The `drawScene` function is automatically called any time the scene needs to
re-render (for example due to changing attributes or properties of any Lume
elements in the scene).

If we want to implement custom [post-processing effects with
Three.js](https://threejs.org/docs/index.html#manual/en/introduction/How-to-use-post-processing),
we can do so:

```js
const composer = new EffectComposer(renderer)

const renderPass = new RenderPass(someScene.three, someScene.threeCamera)
composer.addPass(renderPass)

const glitchPass = new GlitchPass()
composer.addPass(glitchPass)

const outputPass = new OutputPass()
composer.addPass(outputPass)

someScene.drawScene = () => {
	// Ensure we render with whichever Lume camera is currently active (f.e. in
	// case the user toggles the `active` attribute on various
	// `<lume-perspective-camera>` elements).
	renderPass.camera = scene.threeCamera

	composer.render()

	// If you also need CSS rendering, don't forget to use cssRenderer here too.
}
```

> [!Note]
> The [`postprocessing`](https://npmjs.com/postprocessing) package provides an
> alternative set of post-processing effects.

# Example

Here's an example that applies glitch effect using Three's built-in
post-processing classes:

<live-code src="./example.html"></live-code>

> [!Note]
> The `Motor.addRenderTask` part of the example calls `scene.needsUpdate()`
> repeatedly because the `GlitchPass` applies an animated effect. If you are using
> a pass that is not animated and needs to only render for a single frame, then
> you do not need to make an update loop because the scene will update
> automatically when any of its content changes. In that example, the scene has
> no idea the `GlitchPass` exists because we've stepped outside of Lume's control
> and are wiring in custom Three.js stuff, so the scene will not automatically
> know that it should update.
