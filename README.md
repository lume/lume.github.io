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

<live-code src="./intro-example.html"></live-code>

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

<live-code>
<template>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  body,
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: sans-serif;
    background: #79b59e;
    background: url(https://dl.polyhaven.org/file/ph-assets/Textures/jpg/2k/concrete_layers_02/concrete_layers_02_diff_2k.jpg);
    background-size: cover;
    filter: brightness(1.1);
  }
  div {
    display: flex;
    gap: 28px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  button {
    width: 120px;
    height: 38px;
    box-shadow: 10px 10px 2px rgba(0, 0, 0, 0.3);
    transition: all 75ms;
    white-space: nowrap;
    border-radius: 10px;
    border: none;
    background: #808284;
    color: #ccc;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 16px;
  }
  button:focus,
  button:hover {
    background: #8da1b8;
  }
  button:active {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    transform: scale(0.95);
  }
</style>

<form style="display: contents" onsubmit="console.log('Native form submission!'); event.preventDefault()">
  <div style="width: 100%; height: 100%;">
    <div>
      <button>🏖 Have Fun</button>
      <button>😊 Smi)e</button>
      <button>🛠 Create</button>
      <button>♥️ Give Love</button>
    </div>
  </div>
</form>
</template>
</live-code>

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

<live-code src="./examples/buttons-with-shadow.html"></live-code>

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
