<!-- TODO guide on how to define elements using custom element names. -->

# Custom Element Names

By default, importing the `lume` package will cause its elements to be defined
using their default HTML tag names on the global `customElements` registry.

If you ever need to stop LUME from auto-defining its elements on the global
`customElements` registry, it is possible to do so. An example use case could be
that you need to integrate more than one Lume scene in different parts of an app
using more than one version of Lume.

> [!Note]
> Apart from examples on this page, the documentation will refer to LUME
> elements by their default names.

## Default Names

The simplest way to use LUME is with its default element names by simply
importing the `lume` package after you've [installed](./install) it.

```js
import 'lume'
```

We can write a LUME scene declaratively with HTML, using the default element
names, like so:

<live-code>
<template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <lume-scene>
    <lume-element3d id="node" position="50 50" size="100 100"></lume-element3d>
  </lume-scene>

  <script type="module">
    import 'lume'
    const node = document.getElementById('node')
    node.rotation = (x, y, z) => [x, y + 1, z]
  </script>

  <style>
    body, html {height: 100%; margin: 0;}
    #node {background: cornflowerblue;}
  </style>
</template>
</live-code>

Or we can write the scene imperatively with JavaScript, without needing to know
the element names currently being used, like so:

<live-code>
<template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <script type=module>
    // Import two specific classes.
    import {Scene, Element3D} from 'lume'

    const scene = new Scene()

    const node = new Element3D().set({
      position: [50, 50, 0], // X, Y, and Z position
      size: [100, 100, 0], // X, Y, and Z size
    })

    node.style.background = 'cornflowerblue'
    scene.append(node)
    document.body.append(scene)
    node.rotation = (x, y, z) => [x, y + 1, z]

    // The JS code is the same as this HTML:
    // <lume-scene>
    //   <lume-element3d position="50 50 0" size="100 100 0"></lume-element3d>
    // </lume-scene>
  </script>

  <style>
    body, html {height: 100%; margin: 0}
  </style>
</template>
</live-code>

If you don't want to import the whole `lume` package, but only a subset of
elements so that you import less code, you can define a global `$lume` config
object with an `autoDefineElements` property set to `false`, import element
classes directly, and call `.defineElement()` on the classes like so:

```html
<script>
	// This needs to be defined before you `import` anything from `lume`.
	const $lume = {
		autoDefineElements: false,
	}
</script>

<script type="module">
	// Import (and only load code for) two specific classes directly.
	import {Scene} from 'lume/dist/core/Scene.js'
	import {Element3D} from 'lume/dist/core/Element3D.js'

	// Define elements only for these two classes:
	Scene.defineElement('x-scene')
	Element3D.defineElement('x-node')
</script>
```

In the following example, the `<lume-box>` renders, but the `<lume-sphere>` does
not because we haven't defined it:

<live-code>
<template>
  <!-- This sets the base URL from which subsequent relative paths will be relative to. -->
  <base href="${host}" />

  <!--
  This loads an importmap that specifies URLs from which Lume
  dependencies are fetched. See ${host}importmap.js. To learn about import
  maps, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap.
  -->
  <script src="./importmap.js"></script>

  <script>
    const $lume = { autoDefineElements: false }
  </script>

  <script type="module">
    // Import (and only load code for) specific classes directly from their source files.
    import {Scene} from 'lume/dist/core/Scene.js'
    import {AmbientLight} from 'lume/dist/lights/AmbientLight.js'
    import {PointLight} from 'lume/dist/lights/PointLight.js'
    import {Box} from 'lume/dist/meshes/Box.js'
    import {Sphere} from 'lume/dist/meshes/Sphere.js'

    // Define elements only for the imported classes:
    [
      Scene,
      AmbientLight,
      PointLight,
      Box,
      // Uncomment the next line to make the sphere appear.
      //Sphere
    ].forEach(C => C.defineElement())

    // Give the box an animated rotation around the Y axis.
    box.rotation = (x, y, z) => [x, y + 1, z]
  </script>

  <!-- This defines the structure of a 3D scene with some lighting, and a 3D
  cube in the middle of the view: -->
  <lume-scene webgl>
    <lume-ambient-light intensity="0.5"></lume-ambient-light>
    <lume-point-light color="white" align-point="0.5 0.5" position="0 0 300" size="0 0 0" cast-shadow="true" intensity="600"></lume-point-light>
    <lume-box id="box" size="100 100 100" align-point="0.3 0.3 0.3" mount-point="0.5 0.5 0.5" color="cornflowerblue"></lume-box>
    <lume-sphere id="sphere" size="100 100 100" align-point="0.7 0.7 0.7" mount-point="0.5 0.5 0.5" color="rebeccapurple"></lume-sphere>
  </lume-scene>

  <style>
    body, html { height: 100%; margin: 0; }
  </style>
</template>
</live-code>

## Custom Names

To use custom names for LUME's elements, define a global `$lume` config object
before `import`ing `lume`, set `autoDefineElements` to `false` in the `$lume`
config object, and finally use the `.defineElement()` method on any element
class. For example:

```html
<script>
	const $lume = {
		autoDefineElements: false,
	}
</script>

<script type="module">
	import {Scene, Element3D} from 'lume'

	// Define custom names, only for these two classes:
	Scene.defineElement('x-scene')
	Element3D.defineElement('x-node')
</script>
```

> [!Note]
> If you prevent LUME from auto-defining its elements, you must then separately define
> each element that you want to use.

Here's an example of using custom naming for Lume elements:

<live-code>
<template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <a-scene>
    <a-node id="node" position="50 50" size="100 100"></a-node>
  </a-scene>

  <script>
    const $lume = {
      autoDefineElements: false,
    }
  </script>

  <script type=module>
    // Import two specific classes.
    import {Scene, Element3D} from 'lume'

    // Define elements only for the imported classes, with custom names:
    Scene.defineElement('a-scene')
    Element3D.defineElement('a-node')

    const node = document.getElementById('node')
    node.rotation = (x, y, z) => [x, y + 1, z]
  </script>

  <style>
    body, html {height: 100%; margin: 0;}
    #node {background: cornflowerblue;}
  </style>
</template>
</live-code>

Here's an example with custom names but creating the elements with JavaScript:

<live-code>
<template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <script>
    const $lume = {
      autoDefineElements: false,
    }
  </script>

  <script type=module>
    // Import two specific classes.
    import {Scene, Element3D} from 'lume'

    // Define elements only for the imported classes, with custom names:
    Scene.defineElement('bat-man')
    Element3D.defineElement('robin-hood')

    const scene = new Scene()

    const node = new Element3D().set({
      position: [50, 50, 0], // X, Y, and Z position
      size: [100, 100, 0], // X, Y, and Z size
    })

    node.style.background = 'cornflowerblue'
    scene.append(node)
    document.body.append(scene)
    node.rotation = (x, y, z) => [x, y + 1, z]

    // The JS code is the same as this HTML:
    // <bat-man>
    //   <robin-hood position="50 50 0" size="100 100 0"></robin-hood>
    // </bat-man>
  </script>

  <style>
    body, html {height: 100%; margin: 0}
  </style>
</template>
</live-code>

Note that `.defineElement()` returns the class that was defined. If the class is
already associated with an element name, then `.defineElement()` still succeeds
and returns a _new_ class with the new element name, not the same class. For
example:

```js
// Define elements only for the imported classes, with custom names:
const BatMan = Scene.defineElement('bat-man')
const RobinHood = Element3D.defineElement('robin-hood')

// true if autoDefineElements set to false because defineElements returns the
// same class it is not yet associagted with an element name, false if
// autoDefineElements set to true because then the class is already associated
// with an element name so it creates a new class
console.log(Scene === BatMan)

// true if autoDefineElements set to false because defineElements returns the
// same class it is not yet associagted with an element name, false if
// autoDefineElements set to true because then the class is already associated
// with an element name so it creates a new class
console.log(Element3D === RobinHood)

const SuperMan = Scene.defineElement('super-man')
const LewisLane = Element3D.defineElement('lewis-lane')

// false (second call, regardless of autoDefineElements, must return a new class)
console.log(Scene === SuperMan)

// false (second call, regardless of autoDefineElements, must return a new class)
console.log(Element3D === LewisLane)
```
