# Making a Scene

After you've [installed Lume](./install/), you're now ready to make a scene! Here's what we will make:

<live-code src="./install/cdn-install-example.html" editor-hidden></live-code>

The following is the HTML code needed to create this basic foggy scene
containing a rotating cube colored by a couple of lights, with an interactive
rotatable/zoomable view. After installing Lume, add the following code into the
`<body>` of your HTML file (see the live example further below) or into the HTML
template of your web framework (you might need to adjust the syntax a little bit
depending on the framework you use):

<!-- prettier-ignore -->
```html
<style>
  html, body {
    margin: 0;
    height: 100%;
    background: #8338ec;
  }
</style>

<lume-scene webgl physically-correct-lights perspective="800" fog-mode="linear" fog-color="#8338ec" fog-near="600" fog-far="900">
  <lume-camera-rig align-point="0.5 0.5" initial-distance="800"></lume-camera-rig>

  <lume-point-light intensity="1200" align-point="0.5 0.5" position="300 -300 300" color="#ff006e">
    <lume-sphere size="20" cast-shadow="false" receive-shadow="false" color="#ff006e" has="basic-material"></lume-sphere>
  </lume-point-light>

  <lume-point-light intensity="1200" align-point="0.5 0.5" position="-300 300 -300" color="#3a86ff">
    <lume-sphere size="20" cast-shadow="false" receive-shadow="false" color="#3a86ff" has="basic-material"></lume-sphere>
  </lume-point-light>

  <lume-point-light intensity="1200" align-point="0.5 0.5" position="-300 300 300" color="#3a86ff">
    <lume-sphere size="20" cast-shadow="false" receive-shadow="false" color="#3a86ff" has="basic-material"></lume-sphere>
  </lume-point-light>

  <lume-point-light intensity="1200" align-point="0.5 0.5" position="300 -300 -300" color="#ff006e">
    <lume-sphere size="20" cast-shadow="false" receive-shadow="false" color="#ff006e" has="basic-material"></lume-sphere>
  </lume-point-light>

  <lume-box id="box" cast-shadow="false" receive-shadow="false" has="physical-material" roughness="0.8" align-point="0.5 0.5" mount-point="0.5 0.5 0.5" size="200 200 200" color="white" position="0 0 -500"></lume-box>
</lume-scene>

<script type="module">
  box.rotation = (x, y) => [x+0.5, y+0.5];
  box.position = (x, y, z) => [x, y, 0.02 * (0 - z) + z]; // lerp
</script>
```

In the followin live example, the HTML from the above sample code is located between the
comments marked with `BEGIN CUSTOM CODE` and `END CUSTOM CODE`. The rest of the
code was generated using JSPM in the [CDN install
method](./install/#cdn-easiest). If you used the other install methods, you will
add the above HTML code to your app in a similar way. A standalone HTML page
with the same example is also <a class="cdn-example"
href="/guide/install/cdn-install-example.html" target="_blank">available
here</a>.

<live-code src="./install/cdn-install-example.html"></live-code>

> :bulb:**Tip**
>
> Having trouble getting it working? [Chat with us on
> Discord](https://discord.gg/PgeyevP), [post a topic in our
> forum](https://lume.community/), or [open an issue in the GitHub
> repo](https://github.com/lume/lume).

Here's what we did with that Lume HTML code. First, we styled the top-level
`<html>` and `<body>` elements to make them full size of the window, and to have
a colored background:

<!-- prettier-ignore -->
```html
<style>
	html, body {
		margin: 0;
		height: 100%;
		background: #8338ec;
	}
</style>
```

> :bulb:**Tip**
>
> If HTML code is totally new to you, here's an [HTML tutorial](https://html.com).

Next we made a Lume 3D scene with Lume HTML by adding a `<lume-scene>` element
and various Lume elements inside of it:

```html
<lume-scene webgl ...>
	<!-- ... Lume elements go in here ... -->
</lume-scene>
```

WebGL rendering is not enabled by default, so we added the `webgl` attribute to
turn WebGL rendering on. Only CSS rendering is enabled by default. See the
[`Scene`](/api/core/Scene)'s docs for details on attributes that can be used.

The `<lume-camera-rig>` element gave us a view with interactive zoom and
rotation abilities.

> :bulb:**Tip**
>
> The "API Reference" section in the sidebar has links to the classes that define
> Lume's HTML elements. For example, to see the docs for the `<lume-point-light>`
> element and the attributes that you can set, see the
> [`PointLight`](/api/lights/PointLight) class. The classes do not have `Lume` in
> front of their name, for example the class for the `<lume-camera-rig>` element
> is [`CameraRig`](/api/cameras/CameraRig).

We used several `<lume-point-light>` elements with different colors to make the
cube have different colors as it rotates. Inside of each `<lume-point-light>` we
placed a `<lume-sphere>` element so that we could visually see the location of
each light, because otherwise point lights do not render a visible object, they
only change the color of objects affected by their light.

Finally, we create a cube using the `<lume-box>` element, giving it some
attributes to make its surfaces look the way we wanted.

After the Lume HTML code, we added a `<script>` tag that accessed the `box`
variable to get a reference to the `<lume-box>` element, to finally assign
"property functions" to `rotation` and `position`:

<!-- TODO: Make a separate page for Property Functions. -->

<!-- prettier-ignore -->
```html
<script type="module">
  box.rotation = (x, y) => [x+0.5, y+0.5];
  box.position = (x, y, z) => [x, y, 0.02 * (0 - z) + z]; // lerp
</script>
```

> :bulb:**Tip**
>
> Assigning an ID to an element in an HTML file also creates a global variable
> of the same name containing a reference to the element. That's how we were able
> to access the `<lume-box>` element using the `box` variable.

Attributes like rotation, position, and others (and JavaScript properties on the
element references with the same name but camelCased) accept three values for X,
Y, and Z. A property function assigned to one of the JavaScript properties will
be called repeatedly as quickly as possible (limited to the diplay refresh rate)
and each time it is called it will receive the current X, Y, and Z values for
the given property, and can then return the new values that should be used for
the current rendering.

For example, give the property function `(x, y) => [x + 0.5, y + 0.5]`, it takes
the current X and Y axis values, and increments them by 0.5. This means that
every animation frame (every re-draw of the screen) the X and Y values change by
0.5, causing an animation. Property functions also receive a fourth `t` value
with the current app time in milliseconds, and a fifth `dt` value with the
amount of time passed since the last frame, for time-based animation.
