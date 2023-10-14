<!-- display:none so it shows only on GitHub -->
<div style="display: none;">

> [!Note]
> For a better experience, read these docs at https://docs.lume.io. Some of
> the documentation features we use are not supported here on GitHub.

</div>

# Introduction

**HTML to the next level.**

<!-- display:none so it shows only on GitHub -->
<h3 style="display: none;">
  <a href="//lume.io">Home</a>&nbsp;&nbsp;·&nbsp;
  <a href="//lume.io/docs">Documentation</a>&nbsp;&nbsp;·&nbsp;
  <a href="//lume.io/docs/#/examples/hello3d">Examples</a>&nbsp;&nbsp;·&nbsp;
  <a href="//lume.community">Forum</a>&nbsp;&nbsp;·&nbsp;
  <a href="//discord.gg/PgeyevP">Chat</a>&nbsp;&nbsp;·&nbsp;
  <a href="//github.com/lume/lume">Source</a>
</h3>

Lume advances the capabilities of HTML rendering in the web, gifting you new HTML
elements for crafting graphically-rich hardware-accelerated visual experiences that
include 3D models, lighting, shadow, reflection, and more.

Here's a small sample of Lume HTML features:

> [!Note]
> The examples are live! Play with code on the left and the output on the right will update.

<div id="introExample"></div>

In that example we
have a glossy semi-translucent ball with a glow inside of it made with
[`<lume-sphere>`](/api/meshes/Sphere.md) elements, a shiny
environment-reflecting Mandalorian helmet loaded with a
[`<lume-fbx-model>`](/api/models/FbxModel.md) element, and a star shape with a
custom shader material made with a [`<lume-shape>`](/api/meshes/Shape.md)
element.

> :bulb:**Tip**
>
> These docs assume you have basic knowledge of HTML and some JavaScript. If
> you're a total beginner to web development, [start
> here](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web).

To show how Lume literally takes HTML to the next level, let's first see what we can do
with traditional HTML, without Lume. In the next example, we use regular HTML and
CSS to

- place `<button>` elements
- on a "cement wall" using an image of cement,
- give each button a 2D "drop shadow" with CSS `box-shadow`,
- translate the position of the drop shadows to be almost underneath the buttons on button press,
- and shrink the button sizes a little bit on button press
- submit a `<form>` natively (see the `console.log` in the `onsubmit` event handler).

in order to give the buttons an almost-convincing 3D look and feel that we've actually
implemented with 2D graphics. It is pretty neat for fake 3D!

<div id="traditional"></div>

With Lume we can augment traditional HTML content with real 3D effects.

The next example creates essentially the same scenario -- buttons hovering on a
cement wall -- but notice:

- there is now a light (a `<lume-point-light>` element) that moves around based on pointer position,
- the content rotates a little bit, for effect, based on pointer position,
- the cement wall (a `<lume-plane>` element) not only has an image of cement, but a bump map image used to make its surface have a more realistic physical shape,
- the cement wall also has properties that configure how it shines under the light
- when the light moves, the shine and shading of the bumps on the wall changes dynamically,
- the native `<button>` elements are wrapped with `<lume-mixed-plane>` elements which allows them to mix into the 3D rendering so that they also receive lighting and cast 3D shadows onto the cement wall based on the light position,
- we are now animating the buttons in 3D space, moving them backward towards the wall when we press them, which automatically causes the shadows to change respectively,
- the animations are, for now, powered by [Tween.js](https://github.com/tweenjs/tween.js/) in JavaScript because Lume does not yet have CSS support for its 3D properties ([styling 3D elements with CSS is planned](https://github.com/lume/lume/issues/159), and it will support CSS animations!),
- the native form submission still works (in the `onsubmit` event handler)!

and this gives us a version of the same concept with more realism:

<div id="dynamic"></div>

Lume is built as [Custom
Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) (also
known as Web Components, but we prefer "custom elements" over "web components",
or just "elements"), making Lume compatible with popular web frameworks such as

- [React](https://facebook.github.io/react)
- [Vue](https://vuejs.org)
- [Svelte](https://svelte.dev)
- [Solid.js](https://solidjs.com)
- [Angular](https://angular.io)
- [Meteor](http://meteor.com)
- [Ember.js](https://www.emberjs.com)
- the venerable [jQuery](http://jquery.com)
- and any other library or framework for manipulating HTML elements!

Long live HTML and Custom Elements! 👑

<script>
  new Vue({
    el: '#introExample',
    template: '<live-code :template="code" :autorun="true" mode="html>iframe" />',
    data: { code: introExample },
  })
  new Vue({
    el: '#traditional',
    template: '<live-code :template="code" :autorun="true" mode="html>iframe" />',
    data: { code: traditionalButtonExample },
  })
  new Vue({
    el: '#dynamic',
    template: '<live-code :template="code" :autorun="true" mode="html>iframe" />',
    data: { code: buttonsWithShadowExample },
  })
</script>
