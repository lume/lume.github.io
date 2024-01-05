# Scene Graph

A graphical scene is made up of a hierarchy of objects called a "scene graph",
A scene graph is a "tree" structure containing the objects that specify what
will be rendered on screen.

A browser's Document Object Model (DOM) is a scene graph that has traditionally
been used for 2D graphics. LUME brings 3D to the DOM, or shall we say, LUME
brings the DOM into the future. 😎

> :bulb:**Tip**
>
> The DOM is a tree of HTML elements
> that are in a web page. Here's Mozilla's [introduction to the
> DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

The following graphic shows the idea of a hierarchical tree. The graphic itself
is created with a tree of (Lume) elements (a scene graph) that defines the following
visual depicting the concept of a scene graph.

<style>
	html,
	body {
		width: 100%;
		height: 100%;
	}

	lume-scene {
		user-select: none;
	}

	.line {
		background: black;
	}

	lume-element3d:not(.line) {
		font-family: sans-serif;
		background: skyblue;
		border-radius: 3px;
	}

	lume-element3d div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>

<div style="width: 400px; height: 300px;">
	<lume-scene id="scene">
		<!-- Root Scene -->
		<lume-element3d size="60 30" align-point="0.5 0.2" mount-point="0.5 0.5">
			<div align="center">
				Scene
			</div>
		</lume-element3d>
		<!-- Left Child -->
		<lume-element3d size="60 30" align-point="0.3 0.5" mount-point="0.5 0.5">
			<div align="center">
				Node
			</div>
		</lume-element3d>
		<!-- Right Child -->
		<lume-element3d size="60 30" align-point="0.7 0.5" mount-point="0.5 0.5">
			<div align="center">
				Node
			</div>
		</lume-element3d>
		<!-- Line, Root Scene to Left Child -->
		<lume-element3d class="line" size="2 100" align-point="0.4 0.35" rotation="0 0 50" mount-point="0.5 0.5" position="0 0 -1"></lume-element3d>
		<!-- Line, Root Scene to Left Child -->
		<lume-element3d class="line" size="2 100" align-point="0.6 0.35" rotation="0 0 -50" mount-point="0.5 0.5" position="0 0 -1"></lume-element3d>
		<!-- Left Grandchild -->
		<lume-element3d size="60 30" align-point="0.2 0.8" mount-point="0.5 0.5">
			<div align="center">
				Node
			</div>
		</lume-element3d>
		<!-- Right Grandchild -->
		<lume-element3d size="60 30" align-point="0.4 0.8" mount-point="0.5 0.5">
			<div align="center">
				Node
			</div>
		</lume-element3d>
		<!-- Line, Left Child to Left Grandchild -->
		<lume-element3d class="line" size="2 100" align-point="0.25 0.65" rotation="0 0 25" mount-point="0.5 0.5" position="0 0 -1"></lume-element3d>
		<!-- Line, Left Child to Right Grandchild -->
		<lume-element3d class="line" size="2 100" align-point="0.35 0.65" rotation="0 0 -25" mount-point="0.5 0.5" position="0 0 -1"></lume-element3d>
	</lume-scene>
</div>

The top-level node in a LUME scene is always a `<lume-scene>` element. The
`<lume-scene>` element creates an area in which we'll render LUME-based
graphics. Below the scene element are other types of elements that render in
different visual ways.

This next example shows how parent elements affect the positioning of child
elements. The positions and rotations of the child `<lume-element3d>` elements
are relative to their parent `<lume-element3d>` elements. This is why the
parent-most element only rotates but does not move to other positions, while
each child not only rotates but also moves due to the rotation of its parent.

<live-code src="./example.html"></live-code>

<!-- prettier-ignore -->
<script>
  // Note, Docsify does not currently support script type="module", so we use
  // the import() function instead of regular import syntax.
	import('lume').then(Lume => {

    document.querySelectorAll('lume-scene *').forEach(n => {
      if (n instanceof Lume.Element3D) {
        // FIXME temporary hack to trigger a re-render because transforms are not
        // updated on the initial paint.
        n.rotation.y += 0.000000001
        n.addEventListener('pointerover', event => {
          console.log('on a node!')
          n.scale.x = 1.1
          n.scale.y = 1.1
          n.scale.z = 1.1
        })
        n.addEventListener('pointerout', event => {
          n.scale.x = 1
          n.scale.y = 1
          n.scale.z = 1
        })
      }
    })

  })
</script>
