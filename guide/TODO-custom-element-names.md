<!-- TODO guide on how to define elements using custom element names. -->

## Define the HTML elements

Now that you've imported the code into your project, you must register the LUME
HTML elements with your browser, using either the default element names
(easier), or custom element names. Using custom names for the elements may be
useful for solving naming collisions if any arrise, or if you simply prefer to
use different names.

### with default names

The fastest way to get up and running is to tell LUME to use default naming
for all of its HTML elements:

CONTINUE: describe new method without defineElements

```js
LUME.defineElements()
```

We can write the scene with JavaScript imperatively, without thinking about
the element names, like this:

<div id="defaultNamesImperative"></div>

Or we can write the scene declaratively with HTML, using the default element
names, like so:

<div id="defaultNamesDeclarative"></div>

> [!Note] The documentation will refer to the LUME elements by their default names.

> [!Tip] Right click (or two-finger click if you're in macOS) on the
> rotating blue square, then click on "Inspect" or "Inspect Element" depending
> on your browser, and you'll be able to see the live DOM. In some browsers
> (namely Safari) you may first need to enable developer tools before this
> option will appear in your context menu (see how to [enable the developer
> tools in
> Safari](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/Web_Inspector_Tutorial/EnableWebInspector/EnableWebInspector.html)).
> DOM stands for "Document Object Model". Essentially the DOM is a tree of HTML
> elements that are in your web page. Here's an [introduction to the
> DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

### with custom names

Sometimes you might like to use different element names (f.e. to avoid a
naming conflict, or just because you feel like it). You can do this using the
`.define()` method on any of the classes, for example:

```js
const {Scene, Node} = LUME

// Define custom names, only for these two classes:
Scene.defineElement('x-scene')
Node.defineElement('x-node')
```

CONTINUE: describe new way to not auto-define elements.

> **Note:** If you choose not to use `LUME.defineElements()`, you must then
> define the custom names yourself for each element that you wish to use.

Here's the same imperative JavaScript example as the previous section, but
using custom names for the elements:

<div id="customNamesImperative"></div>

And similarly to the previous section, we can also write HTML using the
custom names:

<div id="customNamesDeclarative"></div>

CONTINUE: no more global install

<script>
new Vue({
  el: '#globalInstall',
  template: '<live-code :template="code" :autorun="true" mode="html>iframe" />',
  data: {
    code: stripIndent(`
      <!--
      This is a comment, ignored by the browser. We'll use comments below
      explain parts of the HTML code.
      -->

      <!-- This sets the base URL from which subsequent relative paths will be relative to. -->
      <base href="${host}" />

      <!--
      This loads an importmap that specifies URL from which Lume
      dependencies are fetched. See ${host}importmap.js. To learn about import
      maps, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap.
      -->
      <script src="./importmap.js"><\/script>

      <!-- This defines the structure of a 3D scene with some lighting, and a 3D
      cube in the middle of the view: -->
      <lume-scene webgl>
        <lume-ambient-light intensity="0.5"></lume-ambient-light>
        <lume-point-light color="white" align-point="0.5 0.5" position="0 0 300" size="0 0 0" cast-shadow="true" intensity="0.65">
        </lume-point-light>

        <lume-box id="box" size="100 100 100" align-point="0.5 0.5 0.5" mount-point="0.5 0.5 0.5" color="cornflowerblue"> </lume-box>
      </lume-scene>

      <!-- Add default styling to the document: -->
      <style>
        body,
        html {
          /*
           * Make the root elements take full width/height of the window. Some browsers
           * don't do this by default, so let's ensure that it we explicitly define
           * it:
           */
          width: 100%;
          height: 100%;

          /*
           * Also remove default padding and margin. These changes give you a
           * consistent experience across browsers, which are quirky.
           */
          padding: 0;
          margin: 0;
        }
      </style>

      <script type="module">
        // Import lume.
        import 'lume'

        // Give the box an animated rotation around the Y axis.
        box.rotation = (x, y, z) => [x, y + 1, z]
      <\/script>
    `)

},
})

new Vue({
el: '#defaultNamesImperative',
template: '<live-code :template="code" :autorun="true" mode="html>iframe" />',
data: {
code:
`<script src="https://unpkg.com/lume@0.3.0-alpha.27/dist/global.js"><\/script>

<script type=module>
  LUME.defineElements()

  const {Scene, Node} = LUME
  const scene = new Scene()

  const node = new Node().set({
    position: [50, 50, 0], // X, Y, and Z position
    size: [100, 100, 0], // X, Y, and Z size
  })

  node.style.background = 'cornflowerblue'
  scene.append(node)
  document.body.append(scene)
  node.rotation = (x, y, z) => [x, y + 1, z]

  // The code outputs these elements to the DOM:
  // <body>
  //   <lume-scene>
  //     <lume-element3d position="50 50 0" size="100 100 0"></lume-element3d>
  //   </lume-scene>
  // </body>
<\/script>

<style>
  body, html {width: 100%; height: 100%; padding: 0; margin: 0}
</style>`

},
})

<!-- CONTINUE: no more global script -->

new Vue({
el: '#defaultNamesDeclarative',
template: '<live-code :template="code" :autorun="true" mode="html>iframe" />',
data: {
code:
`<script src="https://unpkg.com/lume@0.3.0-alpha.27/dist/global.js"><\/script>

<lume-scene>
  <lume-element3d id="node" position="50 50" size="100 100"></lume-element3d>
</lume-scene>

<script type="module">
  import 'lume'
  document.getElementById('node').rotation = (x, y, z) => [x, y + 1, z]
<\/script>

<style>
  body, html {width: 100%; height: 100%; padding: 0; margin: 0;}
  #node {background: cornflowerblue;}
</style>`

},
})

new Vue({
el: '#customNamesImperative',
template: '<live-code :template="code" :autorun="true" mode="html>iframe" />',
data: {
code:
`<script src="https://unpkg.com/lume@0.3.0-alpha.27/dist/global.js"><\/script>

<script type=module>
  const {Scene, Node} = LUME

  // Define custom names, only for these two classes:
  Scene.defineElement('x-scene')
  Node.defineElement('x-node')

  const scene = new Scene()

  const node = new Node().set({
    position: [50, 50, 0], // X, Y, and Z position
    size: [100, 100, 0], // X, Y, and Z size
  })

  node.style.background = 'cornflowerblue'
  scene.append(node)
  document.body.append(scene)
  node.rotation = (x, y, z) => [x, y + 1, z]

  // The code outputs these elements to the DOM:
  // <body>
  //   <x-scene>
  //     <x-node position="50 50 0" size="100 100 0"></x-node>
  //   </x-scene>
  // </body>
<\/script>

<style>
  body, html {width: 100%; height: 100%; padding: 0; margin: 0}
</style>`

},
})

new Vue({
el: '#customNamesDeclarative',
template: '<live-code :template="code" :autorun="true" mode="html>iframe" />',
data: {
code:
`<script src="https://unpkg.com/lume@0.3.0-alpha.27/dist/global.js"><\/script>

<x-scene>
  <x-node id="node" position="50 50" size="100 100"></x-node>
</x-scene>

<script type=module>
  const {Scene, Node} = LUME

  // Define custom names, only for these two classes:
  Scene.defineElement('x-scene')
  Node.defineElement('x-node')

  document.getElementById('node').rotation = (x, y, z) => [x, y + 1, z]
<\/script>

<style>
  body, html {width: 100%; height: 100%; padding: 0; margin: 0;}
  #node {background: cornflowerblue;}
</style>`

},
})
</script>
