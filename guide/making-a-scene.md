# Making a Scene

> [!Important]
> This is WIP! We need to release Lume first before we can update these steps, so that we can show the new way to import Lume and be sure that it works.

After you've [installed Lume](./install/), you're now ready to make a scene.

<div id="example"></div>

<script>
new Vue({
  el: '#example',
  template: '<live-code :template="code" :autorun="true" mode="html>iframe" />',
  data: {
    code: stripIndent(`
      <!--
        JSPM Generator Import Map
        Edit URL: https://generator.jspm.io/#U2VhYGBkDM0rySzJSU1hyCnNTXUw0DPWM9BNzCnISNQzMgcAMJcFxyIA
      -->
      <script type="importmap">
      {
        "imports": {
          "lume": "https://ga.jspm.io/npm:lume@0.3.0-alpha.27/dist/index.js"
        },
        "scopes": {
          "https://ga.jspm.io/": {
            "@lume/autolayout/es/AutoLayout.js": "https://ga.jspm.io/npm:@lume/autolayout@0.9.1/es/AutoLayout.js",
            "@lume/custom-attributes/dist/index.js": "https://ga.jspm.io/npm:@lume/custom-attributes@0.1.7/dist/index.js",
            "@lume/element": "https://ga.jspm.io/npm:@lume/element@0.7.1/dist/index.js",
            "@lume/eventful": "https://ga.jspm.io/npm:@lume/eventful@0.2.5/dist/index.js",
            "@lume/kiwi": "https://ga.jspm.io/npm:@lume/kiwi@0.3.4/es/kiwi.js",
            "@lume/three-projected-material/dist/ProjectedMaterial.js": "https://ga.jspm.io/npm:@lume/three-projected-material@0.2.5/dist/ProjectedMaterial.js",
            "@lume/variable": "https://ga.jspm.io/npm:@lume/variable@0.8.0/dist/index.js",
            "element-behaviors": "https://ga.jspm.io/npm:element-behaviors@3.1.0/dist/index.js",
            "james-bond": "https://ga.jspm.io/npm:james-bond@0.5.1/dist/index.js",
            "lowclass": "https://ga.jspm.io/npm:lowclass@5.0.1/dist/index.js",
            "regexr": "https://ga.jspm.io/npm:regexr@1.6.0/index.js",
            "solid-js": "https://ga.jspm.io/npm:solid-js@1.4.8/dist/dev.js",
            "solid-js/html": "https://ga.jspm.io/npm:solid-js@1.4.8/html/dist/html.js",
            "solid-js/store": "https://ga.jspm.io/npm:solid-js@1.4.8/store/dist/dev.js",
            "solid-js/web": "https://ga.jspm.io/npm:solid-js@1.4.8/web/dist/dev.js",
            "three": "https://ga.jspm.io/npm:three@0.157.0/build/three.module.js",
            "three/": "https://ga.jspm.io/npm:three@0.157.0/"
          },
          "https://ga.jspm.io/npm:@lume/variable@0.8.0/": {
            "lowclass": "https://ga.jspm.io/npm:lowclass@4.9.6/dist/index.js"
          }
        }
      }
      <\/script>

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
        import {defineElements} from 'lume'

        // Define all of the Lume elements.
        defineElements()

        // Give the box an animated rotation around the Y axis.
        box.rotation = (x, y, z) => [x, y + 1, z]
      <\/script>
    `)

},
})
</script>

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

```html
<!--
This loads an importmap that specifies URLs from which Lume
dependencies are fetched. See ${host}importmap.js. To learn about import
maps, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap.
-->
<script type="importmap"></script>

<!-- This defines the structure of a 3D scene with some lighting, and a 3D
cube in the middle of the view: -->
<lume-scene webgl>
	<lume-ambient-light intensity="0.5"></lume-ambient-light>

	<lume-point-light
		color="white"
		align-point="0.5 0.5"
		position="0 0 300"
		size="0 0 0"
		cast-shadow="true"
		intensity="0.65"
	></lume-point-light>

	<lume-box
		id="box"
		size="100 100 100"
		align-point="0.5 0.5 0.5"
		mount-point="0.5 0.5 0.5"
		color="cornflowerblue"
	></lume-box>
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
	// Import lume, which defines the implementations of the Lume HTML elements.
	import 'lume'

	// Give the box an animated rotation around the Y axis.
	box.rotation = (x, y, z) => [x, y + 1, z]
</script>
```

<div id="globalInstall"></div>

Save the file with a name ending
in `.html`, click `File > Open` in your favorite web browser, choose the `.html`
file that you saved, and open it. You should see the same visual as in the
following example:

Let's go over what this does. The first line,

```html
<script src="https://unpkg.com/lume@0.3.0-alpha.27/dist/global.js"></script>
```

is an HTML `<script>` element that tells the browser where to get LUME code from.

> :bulb:**Tip**
>
> If HTML text format is totally new to you, see this [HTML
> tutorial](https://html.com).

What this will do in the web page (when you run it in your browser) is create
a global `LUME` variable that is available to all code in the web page.

After including the script tag, which loads LUME from http://unpkg.com (a
website that allows us to get code for any JavaScript projects that are
hosted on http://npmjs.com), we wrote

CONTINUE: describe new method without defineElements

```html
<script type="module">
	LUME.defineElements()
</script>
```

which tells LUME to define all the HTML elements with their default tag names
so that we can use them in our HTML code, otherwise nothing would happen.

Next we wrote some HTML code using the LUME elements to define the structure
of a 3D scene on the screen:

```html
<lume-scene webgl>
	<lume-ambient-light intensity="0.5"></lume-ambient-light>
	<lume-point-light
		color="white"
		align-point="0.5 0.5"
		position="0 0 300"
		size="0 0 0"
		cast-shadow="true"
		intensity="0.65"
	>
	</lume-point-light>

	<lume-box id="box" size="100 100 100" align-point="0.5 0.5 0.5" mount-point="0.5 0.5 0.5"> </lume-box>
</lume-scene>
```

The `lume-ambient-light`, `lume-point-light`, and `lume-box` elements must be placed
within the `lume-scene` element. We gave each element some properties like
`color`, `size`, `intensity`, etc, by specifying values for those properties
with HTML attributes on the elements (for example, `size="100 100 100"` on
the `lume-box` element to make a cube with a size of `100` in each dimension).

<!-- TODO: add a tip about 3D space, dimensions, etc, here. -->

Now that we've defined a scene, we made a `<script>` tag containing some code
to make our cube rotate:

```html
<script type="module">
	box.rotation = (x, y, z) => [x, y + 1, z]
</script>
```

The `box` variable is a global variable that references the `lume-box` element
because we gave that element an ID of "box" with the attribute `id="box"`.
The browser saves top-level elements as global variables with names matching
their IDs.

<!-- TODO: Add a tip here about JavaScript programming. -->

Finally, the file ended with some styling inside of a `<style>` element, in the form of CSS code:

```html
<style>
	body,
	html {
		width: 100%;
		height: 100%;

		padding: 0;
		margin: 0;

		background: #62b997;
	}
</style>
```

This styling makes the page take up the whole width and height of the browser
window, and gives the web page a background color.

<!-- TODO: Add a tip here regarding CSS, link to a tutorial. -->

### ES module install

> :construction: :hammer: Under construction! :hammer: :construction:

### Local install

> :construction: :hammer: Under construction! :hammer: :construction:
>
> This section is work-in-progress, but people with knowledge of common JavaScript tooling should get the idea.

More advanced users can install LUME from NPM:

```bash
npm install lume
```

CONTINUE: describe new method without defineElements

```js
import * as LUME from 'lume'
LUME.defineElements()
```

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
