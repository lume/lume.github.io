// Adapted from http://npmjs.com/min-indent
function minIndent(string) {
	const match = string.match(/^[ \t]*(?=\S)/gm)
	if (!match) return 0
	return match.reduce((r, a) => Math.min(r, a.length), Infinity)
}

// Adapted from http://npmjs.com/strip-indent
function stripIndent(string) {
	const indent = minIndent(string)
	if (indent === 0) return string
	const regex = new RegExp(`^[ \\t]{${indent}}`, 'gm')
	return string.replace(regex, '')
}

/** no-op template tag */
function noop(strings, ...keys) {
	const lastIndex = strings.length - 1
	return strings.slice(0, lastIndex).reduce((p, s, i) => p + s + keys[i], '') + strings[lastIndex]
}

function WithShadow(Base) {
	return class WithShadow extends Base {
		static shadowMode = 'open'

		constructor(...args) {
			super(...args)
			this.internals ??= this.attachInternals()
			if (!this.internals.shadowRoot) this.attachShadow({mode: this.constructor.shadowMode})
		}
	}
}

const html = noop // useful for syntax highlight and auto-formatting

const host = location.origin + '/'

const projectedTextureExample = stripIndent(html`
	<title>&lt;lume-texture-projector&gt;</title>

	<style>
		html,
		body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background: #333;
			touch-action: none;
		}
		#ui {
			position: absolute !important;
			top: 0;
			left: 0;
			color: white;
		}
		#ui,
		#ui lume-element3d {
			pointer-events: none;
		}
		#ui label {
			pointer-events: auto;
		}
		lume-element3d {
			padding: 15px;
		}
		.hidden {
			display: none;
		}
	</style>

	<base href="${host}" />
	<script src="./importmap.js"></script>

	<lume-scene id="scene" perspective="800" webgl shadowmap-type="pcfsoft" class="hidden">
		<lume-ambient-light color="white" intensity="0.4"></lume-ambient-light>

		<lume-camera-rig active vertical-angle="30" distance="400" max-distance="7000" min-distance="100">
			<lume-point-light
				position="200 -200 200"
				intensity="1200"
				color="white"
				shadow-bias="-0.001"
				shadow-map-width="2048"
				shadow-map-height="2048"
				slot="camera-child"
			></lume-point-light>
		</lume-camera-rig>

		<lume-box
			id="box"
			has="projected-material"
			texture-projectors="#projectedTexture"
			sidedness="double"
			cast-shadow="true"
			receive-shadow="true"
			opacity="1"
			color="deeppink"
			dithering
			mount-point="0.5 0.5 0.5"
			rotation="0 45 0"
			size="100 100 100"
			scale="1 1 1"
		></lume-box>

		<lume-element3d id="textureRotator">
			<lume-element3d rotation="45 0 0">
				<lume-texture-projector
					id="projectedTexture"
					size="150 150"
					mount-point="0.5 0.5 0.5"
					src="${host}/images/monalisa-2.jpg"
					fitment="contain"
					visible="true"
					position="0 0 150"
					rotation="0 180 0"
				>
					<lume-box
						id="visual"
						opacity="0.5"
						color="yellow"
						size="1 1 500"
						size-mode="proportional proportional"
						cast-shadow="false"
						receive-shadow="false"
						visible="false"
					>
						<lume-sphere size="5" color="yellow" align-point="0.5 0.5"></lume-sphere>
					</lume-box>
				</lume-texture-projector>
			</lume-element3d>
		</lume-element3d>

		<lume-plane
			has="projected-material"
			texture-projectors="#projectedTexture"
			size="800 800"
			color="cyan"
			rotation="90"
			position="0 150"
			mount-point="0.5 0.5"
		></lume-plane>
	</lume-scene>

	<lume-scene id="ui" class="hidden">
		<lume-element3d size-mode="proportional literal" size="1 80">
			<label>
				Projected texture enabled on box:
				<input
					type="checkbox"
					checked
					onchange="box.getAttribute('texture-projectors') === 'none' ? box.setAttribute('texture-projectors', '#projectedTexture') : box.setAttribute('texture-projectors', 'none')"
				/>
			</label>
			<br />
			<label>
				Fitment "cover" instead of "contain"
				<input
					type="checkbox"
					onchange="projectedTexture.getAttribute('fitment') === 'contain' ? projectedTexture.setAttribute('fitment', 'cover') : projectedTexture.setAttribute('fitment', 'contain')"
				/>
			</label>
			<br />
			<label>
				Visualize texture projector:
				<input type="checkbox" onchange="visual.visible = !visual.visible" />
			</label>
		</lume-element3d>
	</lume-scene>

	<script type="module">
		import 'lume'

		scene.classList.remove('hidden')
		ui.classList.remove('hidden')

		textureRotator.rotation = (x, y, z) => [x, y + 0.1, z]
	</script>
`)

function meshExample({geometry = 'box', material = 'phong', color = ''} = {}) {
	return stripIndent(html`
		<style>
			html,
			body {
				width: 100%;
				height: 100%;
				margin: 0;
				padding: 0;
				background: #222;
				touch-action: none;
			}
		</style>

		<base href="${host}" />
		<script src="./importmap.js"></script>

		<lume-scene id="scene" perspective="800" webgl>
			<lume-point-light position="200 -200 200" intensity="1200" color="white"></lume-point-light>
			<lume-ambient-light color="white" intensity="0.6"></lume-ambient-light>
			<lume-camera-rig active distance="400" max-distance="700" min-distance="100"></lume-camera-rig>

			<lume-mesh
				id="mesh"
				has="${geometry}-geometry ${material}-material"
				color="${color}"
				rotation="90 0 0"
				size="100 100 100"
				mount-point="0.5 0.5 0.5"
			></lume-mesh>
		</lume-scene>

		<script type="module">
			import 'lume'

			mesh.rotation = (x, y, z) => [++x, ++y, z]
		</script>
	`)
}

function pointLightExample() {
	return stripIndent(html`
		<base href="${host}" />
		<script src="./importmap.js"></script>

		<lume-scene webgl shadowmap-type="vsm">
			<lume-ambient-light color="white" intensity="0.7"></lume-ambient-light>

			<!-- We need a plane onto which shadows will land (the "floor"). -->
			<lume-element3d align-point="0.5 0.5" mount-point="0.5 0.5" rotation="60 0 0" size="1000 1000">
				<lume-plane color="white" size="1500 1500" align-point="0.5 0.5" mount-point="0.5 0.5" rotation="0 0 30">
					<!-- For simplicity, let's position the light, and a cube, relative to (as children of) the "floor". -->

					<!-- A point in space where light emanates from. Try increasing the shadow map with and height, and changing the radius. -->
					<lume-point-light
						color="white"
						position="500 -500 500"
						intensity="14000"
						shadow-map-width="1024"
						shadow-map-height="1024"
						shadow-radius="5"
					></lume-point-light>

					<!-- A box that will cast a shadow onto the floor. -->
					<lume-box
						id="box"
						color="skyblue"
						size="50 50 50"
						align-point="0.5 0.5 0.5"
						mount-point="0.5 0.5 0"
						rotation="0 0 10"
					></lume-box>
				</lume-plane>
			</lume-element3d>
		</lume-scene>

		<style>
			html,
			body {
				margin: 0;
				height: 100%;
				width: 100%;
				background: white;
			}
		</style>

		<script type="module">
			import 'lume'

			box.rotation = (x, y, z) => [x, y, ++z]
		</script>
	`)
}

function directionalLightExample() {
	return stripIndent(html`
		<base href="${host}" />
		<script src="./importmap.js"></script>

		<lume-scene webgl shadowmap-type="soft">
			<lume-ambient-light color="white" intensity="0.7"></lume-ambient-light>

			<!-- We need a plane onto which shadows will land (the "floor"). -->
			<lume-element3d align-point="0.5 0.5" mount-point="0.5 0.5" rotation="60 0 0" size="1000 1000">
				<lume-plane color="white" size="1500 1500" align-point="0.5 0.5" mount-point="0.5 0.5" rotation="0 0 30">
					<!-- For simplicity, let's position the light, and a cube, relative to (as children of) the "floor". -->

					<!-- A point in space that determines direction of an infinitely-far source of light. -->
					<lume-directional-light
						color="white"
						position="500 -500 500"
						intensity="8"
						shadow-map-width="1024"
						shadow-map-height="1024"
					></lume-directional-light>

					<!-- A box that will cast a shadow onto the floor. -->
					<lume-box
						id="box"
						color="skyblue"
						size="50 50 50"
						align-point="0.5 0.5 0.5"
						mount-point="0.5 0.5 0"
						rotation="0 0 10"
					></lume-box>

					<!-- Add an interactive camera viewpoint. -->
					<lume-element3d align-point="0.5 0.5" rotation="-90 0 0">
						<lume-camera-rig vertical-angle="30" min-vertical-angle="5" distance="500"></lume-camera-rig>
					</lume-element3d>
				</lume-plane>
			</lume-element3d>
		</lume-scene>

		<style>
			html,
			body {
				margin: 0;
				height: 100%;
				width: 100%;
				background: white;
				touch-action: none;
			}
		</style>

		<script type="module">
			import 'lume'

			box.rotation = (x, y, z) => [x, y, ++z]
		</script>
	`)
}

function perspectiveLayeredImage({bg, fg, bgPosition = {x: 0, y: 0}, fgPosition = {}}) {
	return stripIndent(html`
		<base href="${host}" />
		<script src="./importmap.js"></script>

		<lume-scene id="scene" webgl>
			<lume-point-light
				align-point="0.5 0.5"
				position="0 0 500"
				intensity="1000"
				distance="800"
				shadow-radius="2"
				shadow-bias="-0.001"
			></lume-point-light>

			<lume-element3d
				id="container"
				align-point="0.5 0.5"
				mount-point="0.5 0.5"
				size-mode="proportional proportional"
				size="1 1"
				scale="1.2 1.2 1.2"
			>
				<lume-mixed-plane
					size-mode="proportional proportional"
					size="1 1"
					position="${bgPosition.x || 0} ${bgPosition.y || 0} -50"
					color="#444"
				>
					<img src="${host}${bg}" />
				</lume-mixed-plane>
				<lume-mixed-plane size-mode="proportional proportional" size="1 1" position="0 0 50" color="#444">
					<img src="${host}${fg}" />
				</lume-mixed-plane>
			</lume-element3d>
		</lume-scene>

		<style>
			html,
			body {
				margin: 0;
				padding: 0;
				height: 100%;
				width: 100%;
			}
			lume-scene {
				background: #fefefe;
				touch-action: none;
			}
			img {
				width: 100%;
				height: 100%;
				display: block;
			}
		</style>

		<script type="module">
			import {Motor} from 'lume'

			const rotationAmount = 10
			const targetRotation = {
				x: 0,
				y: 0,
			}

			const setTargetRotation = event => {
				targetRotation.y = (event.clientX / scene.calculatedSize.x) * (rotationAmount * 2) - rotationAmount
				targetRotation.x = -((event.clientY / scene.calculatedSize.y) * (rotationAmount * 2) - rotationAmount)
			}

			// Rotate the image a little bit based on pointer position.
			scene.addEventListener('pointermove', setTargetRotation)
			scene.addEventListener('pointerdown', setTargetRotation)

			// Rotate the container towards the targetRotation over time to make it smooth.
			Motor.addRenderTask(() => {
				container.rotation.x += (targetRotation.x - container.rotation.x) * 0.05
				container.rotation.y += (targetRotation.y - container.rotation.y) * 0.05
			})
		</script>
	`)
}

const lineExample = stripIndent(html`
	<base href="${host}" />
	<script src="./importmap.js"></script>

	<style>
		html,
		body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background: #111;
			touch-action: none;
		}
	</style>

	<lume-scene id="scene" perspective="800" webgl>
		<lume-point-light intensity="800" color="white" position="300 400 500"></lume-point-light>
		<lume-ambient-light intensity="0.5" color="white" position="300 400 500"></lume-ambient-light>

		<lume-camera-rig active distance="4000" max-distance="7000" min-distance="10"></lume-camera-rig>

		<lume-line id="line" has="line-geometry line-material" color="deeppink" points=""></lume-line>
	</lume-scene>

	<script type="module">
		import 'lume'

		// FIXME We currently need to skip a turn or else setting the points below
		// will be overwritten by the empty points attribute.
		await new Promise(r => setTimeout(r))

		// Generate points for a spiral-shaped line.
		const points = []
		let angle = 0
		let distance = 0
		let z = 0
		for (const _ of Array(300).map((_, i) => i)) {
			const x = distance * Math.cos(angle)
			const y = distance * Math.sin(angle)
			points.push(x, y, 400 * Math.sin(z))

			angle += Math.PI / 16
			distance += 10
			z += Math.PI / 5
		}

		line.points = points

		// Give the spiral some rotation around Z.
		line.rotation = (x, y, z) => [x, y, z - 1]
	</script>
`)

const shapesExample = stripIndent(html`
	<base href="${host}" />
	<script src="./importmap.js"></script>

	<style>
		html,
		body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background: white;
			touch-action: none;
		}
	</style>

	<lume-scene id="scene" perspective="800" webgl fog-mode="linear" fog-near="100" fog-far="500" fog-color="white">
		<lume-ambient-light color="white" intensity="0.4"></lume-ambient-light>

		<lume-camera-rig id="cam" active distance="200" max-distance="70000" min-distance="100">
			<lume-point-light position="200 0 200" intensity="1400" color="white" slot="camera-child"></lume-point-light>
			<lume-perspective-camera
				align-point="0.5 0.5 0.5"
				far="200000"
				active
				slot="camera-child"
			></lume-perspective-camera>
		</lume-camera-rig>

		<lume-shape
			size="30 60 15"
			color="red"
			position="30 0 0"
			rotation="0 -30 0"
			mount-point="0.5 0.5"
			sidedness="double"
			receive-shadow="false"
			fitment="cover"
		>
			<lume-box
				visible="false"
				has="basic-material"
				opacity="0.9"
				size-mode="proportional proportional proportional"
				size="1 1 1"
				color="black"
				wireframe
			></lume-box>
		</lume-shape>
		<lume-shape
			size="40 25 15"
			color="red"
			scale="1.2 1.2 1.2"
			position="-30 0 0"
			rotation="0 30 0"
			mount-point="0.5 0.5"
			sidedness="double"
			receive-shadow="false"
			fitment="cover"
		>
			<lume-box
				visible="false"
				has="basic-material"
				opacity="0.9"
				size-mode="proportional proportional proportional"
				size="1 1 1"
				color="black"
				wireframe
			></lume-box>
		</lume-shape>

		<lume-element3d rotation="0 10 0">
			<!--
			FIXME mesh with manual behaviors not working initially. Change the has
			attribute to something else and back, then it works. Code load order
			issue.
			-->
			<!-- <lume-mesh has="shape-geometry phong-material" size="0 0 5" color="white" position="30 0 0" sidedness="double" receive-shadow="false"> -->
			<lume-shape
				size="30 60 5"
				color="red"
				position="-10 40"
				mount-point="0.5 0.5"
				sidedness="double"
				receive-shadow="false"
				fitment="none"
			>
				<lume-box
					visible="false"
					has="basic-material"
					opacity="0.9"
					size-mode="proportional proportional proportional"
					size="1 1 1"
					color="black"
					wireframe
				></lume-box>
			</lume-shape>

			<lume-shape
				size="30 60 10"
				color="red"
				scale="0.75 0.75 0.75"
				position="30 -60 0"
				mount-point="0.5 0.5"
				sidedness="double"
				receive-shadow="false"
				fitment="contain"
			>
				<lume-box
					visible="false"
					has="basic-material"
					opacity="0.9"
					size-mode="proportional proportional proportional"
					size="1 1 1"
					color="black"
					wireframe
				></lume-box>
			</lume-shape>

			<lume-shape
				size="30 60 15"
				color="red"
				position="50 50 0"
				mount-point="0.5 0.5"
				sidedness="double"
				receive-shadow="false"
				fitment="scale-down"
			>
				<lume-box
					visible="false"
					has="basic-material"
					opacity="0.9"
					size-mode="proportional proportional proportional"
					size="1 1 1"
					color="black"
					wireframe
				></lume-box>
			</lume-shape>

			<lume-shape
				size="10 60 5"
				color="red"
				position="-50 -50 0"
				mount-point="0.5 0.5"
				sidedness="double"
				receive-shadow="false"
				fitment="scale-down"
			>
				<lume-box
					visible="false"
					has="basic-material"
					opacity="0.9"
					size-mode="proportional proportional proportional"
					size="1 1 1"
					color="black"
					wireframe
				></lume-box>
			</lume-shape>

			<lume-shape
				size="30 10 5"
				color="red"
				position="40 -40 0"
				mount-point="0.5 0.5"
				sidedness="double"
				receive-shadow="false"
				fitment="scale-down"
			>
				<lume-box
					visible="false"
					has="basic-material"
					opacity="0.9"
					size-mode="proportional proportional proportional"
					size="1 1 1"
					color="black"
					wireframe
				></lume-box>
			</lume-shape>
		</lume-element3d>

		<lume-element3d position="0 0 0">
			<lume-shape
				size="40 25 5"
				color="red"
				position="-20 50 0"
				mount-point="0.5 0.5"
				sidedness="double"
				receive-shadow="false"
				fitment="none"
			>
				<lume-box
					visible="false"
					has="basic-material"
					opacity="0.9"
					size-mode="proportional proportional proportional"
					size="1 1 1"
					color="black"
					wireframe
				></lume-box>
			</lume-shape>

			<lume-shape
				size="40 25 10"
				color="red"
				scale="0.75 0.75 0.75"
				position="50 -50 0"
				mount-point="0.5 0.5"
				sidedness="double"
				receive-shadow="false"
				fitment="contain"
			>
				<lume-box
					visible="false"
					has="basic-material"
					opacity="0.9"
					size-mode="proportional proportional proportional"
					size="1 1 1"
					color="black"
					wireframe
				></lume-box>
			</lume-shape>

			<lume-shape
				size="40 25 15"
				color="red"
				position="-20 -40 0"
				mount-point="0.5 0.5"
				sidedness="double"
				receive-shadow="false"
				fitment="scale-down"
			>
				<lume-box
					visible="false"
					has="basic-material"
					opacity="0.9"
					size-mode="proportional proportional proportional"
					size="1 1 1"
					color="black"
					wireframe
				></lume-box>
			</lume-shape>

			<lume-shape
				size="40 10 5"
				color="red"
				position="80 0 0"
				mount-point="0.5 0.5"
				sidedness="double"
				receive-shadow="false"
				fitment="scale-down"
			>
				<lume-box
					visible="false"
					has="basic-material"
					opacity="0.9"
					size-mode="proportional proportional proportional"
					size="1 1 1"
					color="black"
					wireframe
				></lume-box>
			</lume-shape>

			<lume-shape
				size="10 25 5"
				color="red"
				position="-70 0 0"
				mount-point="0.5 0.5"
				sidedness="double"
				receive-shadow="false"
				fitment="scale-down"
			>
				<lume-box
					visible="false"
					has="basic-material"
					opacity="0.9"
					size-mode="proportional proportional proportional"
					size="1 1 1"
					color="black"
					wireframe
				></lume-box>
			</lume-shape>
		</lume-element3d>
	</lume-scene>

	<script type="module">
		import {Motor} from 'lume'

		// Dolly the camera towards the hearts for intro animation.

		const camTargetDistance = 0
		let camDistance = 700

		Motor.addRenderTask((t, dt) => {
			if (camDistance <= 1) {
				return false
			}

			camDistance -= 0.03 * (camDistance - camTargetDistance)

			cam.position.z = camDistance
		})
	</script>

	<div class="ui">
		<fieldset>
			<legend>Options</legend>
			<label> <input type="checkbox" onchange="updateShowSize()" />&nbsp; Show size boundaries </label>
			<br />
			<label> <input type="checkbox" onchange="updateBevel()" />&nbsp; Bevel </label>
			<fieldset>
				<legend>Shape</legend>
				<label>
					<input type="radio" name="shape" value="hearts" checked onchange="updateShape(event)" />&nbsp; Hearts
				</label>
				<br />
				<label>
					<input type="radio" name="shape" value="triangles" onchange="updateShape(event)" />&nbsp; Triangles
				</label>
				<br />
				<label>
					<input type="radio" name="shape" value="trapezoids" onchange="updateShape(event)" />&nbsp; Trapezoids
				</label>
				<br />
				<label> <input type="radio" name="shape" value="stars" onchange="updateShape(event)" />&nbsp; Stars </label>
			</fieldset>
		</fieldset>
	</div>

	<script type="module">
		import * as THREE from 'three'
		import {starPath} from '${host}js/starPath.js'

		let showSize = false
		const boxes = Array.from(document.querySelectorAll('lume-box'))

		globalThis.updateShowSize = () => {
			showSize = !showSize
			for (const box of boxes) box.visible = showSize
		}

		const shapes = Array.from(document.querySelectorAll('lume-shape'))

		let bevel = false

		globalThis.updateBevel = () => {
			bevel = !bevel
			for (const shape of shapes) {
				shape.bevel = bevel
			}
		}

		globalThis.updateShape = event => {
			const input = event.target

			// react only to the newly checked radio
			if (!input.checked) return

			for (const shape of shapes) {
				if (input.value === 'triangles') {
					// Use a list of points,
					// shape.shape = '-12 0, 12 0, 0 12, -12 0'

					// or, set a THREE.Shape instance.
					shape.shape = new THREE.Shape([
						new THREE.Vector2(-12, 0),
						new THREE.Vector2(12, 0),
						new THREE.Vector2(0, 12),
						new THREE.Vector2(-12, 0),
					])
				} else if (input.value === 'trapezoids') {
					// Set the 'shape' attribute with a list of points
					shape.setAttribute('shape', '-5 0, 2 -13,  13 -13,  20 0,  0 0')
				} else if (input.value === 'stars') {
					// Set an SVG path string (same as the value you'd find in a <path> element's d="" attribute).
					// Make SVG path strings at https://yqnn.github.io/svg-path-editor/
					shape.shape = starPath
				} else {
					// Revert back to the default shape
					shape.shape = null
				}
			}
		}
	</script>

	<style>
		.ui {
			position: absolute;
			margin: 15px;
			padding: 10px;
			top: 0;
			left: 0;
			color: white;
			color: red;
			font-family: sans-serif;
			background: rgba(255, 0, 0, 0.8);
			background: rgba(255, 255, 255, 0.8);
			border-radius: 7px;
		}

		fieldset legend {
			color: white;
			color: red;
		}
		fieldset {
			border-color: white;
			border-color: black;
			border-radius: 4px;
			border-style: dashed;
		}
	</style>
`)

const instancedMeshExample = stripIndent(html`
	<style>
		html,
		body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background: #222;
			touch-action: none;
		}
	</style>

	<lume-scene id="scene" perspective="800" webgl>
		<lume-point-light position="200 -200 200" intensity="1200" color="white"></lume-point-light>
		<lume-ambient-light color="white" intensity="0.6"></lume-ambient-light>

		<lume-element3d size-mode="proportional proportional" size="1 1" style="border: 5px solid teal"></lume-element3d>

		<lume-camera-rig
			active
			distance="1000"
			max-distance="2500"
			min-distance="100"
			position="500 500 500"
		></lume-camera-rig>

		<!-- CONINUE FIXME: this works: -->
		<!-- <lume-mesh has="sphere-geometry" size="30 30 30"></lume-mesh> -->
		<!-- this doesn't: -->
		<!-- <lume-mesh has="sphere-geometry phong-material" size="30 30 30"></lume-mesh> -->
	</lume-scene>

	<base href="${host}" />
	<script src="./importmap.js"></script>
	<script type="module">
		import {html, Motor} from 'lume'

		const numberOfObjects = 10000

		scene.append(html\`
			<lume-instanced-mesh id="mesh" color="white" count=\${numberOfObjects} size="30 30 30"> </lume-instanced-mesh>
		\`)

		mesh.rotations = Array.from({length: numberOfObjects * 3}).map(() => Math.random())
		mesh.positions = Array.from({length: numberOfObjects * 3}).map(() => 1000 * Math.random())
		mesh.scales = Array.from({length: numberOfObjects * 3}).map(() => Math.random())
		mesh.colors = Array.from({length: numberOfObjects * 3}).map(() => Math.random())

		Motor.addRenderTask(() => {
			let i = 0
			const a = mesh.rotations

			for (const rot of a) {
				a[i] += 0.01
				i++
			}

			// Modifying the array in place does not trigger reactivity (arrays
			// are currently not reactive) so we need to notify that the mesh
			// needs to be re-rendered.
			mesh.needsUpdate()

			// If you wish to trigger reactivity for mesh.rotations in a case
			// like this one, then do this:
			// mesh.rotations = mesh.rotations
		})
	</script>
`)

const morphingSpiralExample = stripIndent(html`
	<base href="${host}" />
	<script src="./importmap.js"></script>
	<script src="./modules/vue/dist/vue.js"></script>

	<body>
		<template>
			<lume-scene id="scene" webgl="true" enable-css="false">
				<lume-element3d
					ref="rotator"
					TODO-calculate-minimum-size-based-on-viewport-size
					size="1630 1630"
					align-point="0.5 0.5"
					mount-point="0.5 0.5"
					rotation="0 0 0"
				>
					<lume-element3d
						v-for="(n, i) of Array(400)"
						:key="i"
						size="0 0 0"
						align-point="0.5 0.5"
						:rotation="[0, 0, i * 10]"
					>
						<lume-rounded-rectangle
							has="basic-material"
							:corner-radius="i % 50 > (50 - (i % 50)) / 2 ? (50 - (i % 50)) / 2 : i % 50"
							thickness="1"
							quadratic-corners="false"
							:size="[50 - i % 50, 50 - i % 50, 0]"
							mount-point="0.5 0.5"
							:position="[0, i * 2, 0]"
							:color="'hsl(' + ((i * 2) % 360) + ', 90%, 78%)'"
							:style="{
								background: 'hsl(' + ((i * 2) % 360) + ', 90%, 78%)',
								borderRadius: (i % 50) + 'px',
							}"
						></lume-rounded-rectangle>
					</lume-element3d>
				</lume-element3d>
			</lume-scene>
		</template>

		<div class="ui">
			<fieldset>
				<legend>Render mode</legend>
				<!-- prettier-ignore -->
				<label>
					<input type="radio" name="webgl" onchange="scene.enableCss = !(scene.webgl = this.checked)" checked />
					WebGL (higher fps, longer initialization)
				</label>
				<br />
				<!-- prettier-ignore -->
				<label>
					<input type="radio" name="webgl" onchange="scene.enableCss = !(scene.webgl = !this.checked)" />
					CSS (lower fps, shorter initialization)
				</label>
			</fieldset>
		</div>

		<style>
			lume-scene {
				background: #333;
			}
			html,
			body {
				width: 100%;
				height: 100%;
				padding: 0;
				margin: 0;
			}

			.ui {
				position: absolute;
				margin: 15px;
				padding: 10px;
				top: 0;
				left: 0;
				color: white;
				font-family: sans-serif;
				background: rgba(0, 0, 0, 0.6);
				border-radius: 7px;
			}

			fieldset {
				--fieldsetOutline: hsl(320, 90%, 78%);
				--fieldsetText: hsl(100, 90%, 78%);

				color: var(--fieldsetText);
				border-color: var(--fieldsetOutline);
				border-radius: 4px;
			}
			fieldset legend {
				color: var(--fieldsetOutline);
			}
		</style>

		<script type="module">
			import 'lume'

			var template = document.querySelector('template')

			new Vue({
				el: template,
				template: template.innerHTML,
				mounted() {
					const rotator = this.$refs.rotator
					rotator.rotation = (x, y, z) => [x, y, z - 9.8]
				},
			})
		</script>
	</body>
`)

const perspectiveCameraExample = stripIndent(html`
	<body>
		<base href="${host}" />
		<script src="./importmap.js"></script>

		<style>
			body,
			html {
				width: 100%;
				height: 100%;
				margin: 0;
				padding: 0;
				overflow: hidden;
				background: #191919;
				touch-action: none; /* prevent touch drag from scrolling */
				color: #ccc;
			}
			lume-scene {
				position: absolute !important;
				top: 0;
				left: 0;
			}
			lume-scene:nth-of-type(2),
			lume-scene:nth-of-type(2) lume-element3d {
				pointer-events: none;
			}
			lume-scene:nth-of-type(2) label {
				pointer-events: auto;
			}
			lume-element3d {
				padding: 15px;
			}
			label {
				padding-right: 10px;
			}
			.hidden {
				display: none;
			}
		</style>

		<lume-scene id="scene" webgl perspective="800" class="hidden">
			<!-- This node visualizes the size of the default viewing area. -->
			<lume-element3d
				size-mode="proportional proportional"
				size="1 1"
				style="border: 5px solid royalblue;"
			></lume-element3d>

			<lume-perspective-camera id="cam" position="0 0 1000" align-point="0.5 0.5"></lume-perspective-camera>

			<lume-ambient-light intensity="0.3"></lume-ambient-light>
			<lume-point-light id="light" color="white" cast-shadow="true" intensity="1000" position="0 0 300">
				<lume-mesh
					has="sphere-geometry basic-material"
					cast-shadow="false"
					size="10 10 10"
					mount-point="0.5 0.5"
					color="#eee"
				></lume-mesh>
			</lume-point-light>

			<!-- Specify a color otherwise the material will be tinted deeppink by default -->
			<lume-mesh
				id="model"
				has="box-geometry phong-material"
				rotation="40 40 0"
				align-point="0.5 0.5 0.5"
				mount-point="0.5 0.5 0.5"
				size="100 100 100"
				color="white"
				texture="${host}textures/cement.jpg"
			>
			</lume-mesh>
		</lume-scene>

		<lume-scene id="scene2" class="hidden">
			<lume-element3d size-mode="proportional literal" size="1 80">
				<label>
					Camera active:
					<input id="active" type="checkbox" onchange="cam.active = !cam.active" />
				</label>
				<br />
				<label>
					Field of view <code>(50)</code>:
					<input
						id="fov"
						type="range"
						min="1"
						max="75"
						value="50"
						onchange="onFovChange(this)"
						oninput="onFovChange(this)"
					/>
				</label>
				<br />
				<script>
					const onFovChange = el => {
						cam.fov = el.value
						el.previousElementSibling.textContent = '(' + el.value.padStart(2, '0') + ')'
					}
				</script>
				<label>
					Camera Y rotation <code>(0)</code>:
					<input
						type="range"
						min="-45"
						max="45"
						value="0"
						onchange="onRotationChange(this)"
						oninput="onRotationChange(this)"
					/>
				</label>
				<br />
				<script>
					const onRotationChange = el => {
						cam.rotation.y = el.value
						el.previousElementSibling.textContent = '(' + el.value.padStart(2, '0') + ')'
					}
				</script>
				<label>
					Camera Y position <code>(0)</code>:
					<input
						type="range"
						min="-150"
						max="150"
						value="0"
						onchange="onPositionChange(this)"
						oninput="onPositionChange(this)"
					/>
				</label>
				<script>
					const onPositionChange = el => {
						window.debug = true
						cam.position.y = el.value
						window.debug = false
						el.previousElementSibling.textContent = '(' + el.value.padStart(2, '0') + ')'
					}
				</script>
			</lume-element3d>
		</lume-scene>

		<script type="module">
			import 'lume'

			scene.classList.remove('hidden')
			scene2.classList.remove('hidden')

			document.addEventListener('pointermove', event => {
				event.preventDefault()
				light.position.x = event.clientX
				light.position.y = event.clientY
			})

			const rotate = t => 180 * Math.sin(0.0005 * t)

			model.rotation = (x, y, z, t) => [rotate(t / 1.4), rotate(t / 2.1), rotate(t / 2.5)]
		</script>
	</body>
`)

const cameraRigExample = stripIndent(html`
	<body>
		<base href="${host}" />
		<script src="./importmap.js"></script>

		<style>
			body,
			html {
				width: 100%;
				height: 100%;
				margin: 0;
				padding: 0;
				overflow: hidden;
				background: #191919;
				touch-action: none; /* prevent touch drag from scrolling */
				color: #ccc;
			}
			lume-scene {
				position: absolute !important;
				top: 0;
				left: 0;
			}
			#ui,
			#ui lume-element3d {
				pointer-events: none;
			}
			#ui label {
				pointer-events: auto;
			}
			lume-element3d {
				padding: 15px;
			}
			.hidden {
				display: none;
			}
		</style>

		<lume-scene id="scene" webgl perspective="800" class="hidden">
			<!-- This node visualizes the size of the default viewing area. -->
			<lume-element3d
				size-mode="proportional proportional"
				size="1 1"
				style="border: 5px solid royalblue;"
			></lume-element3d>

			<!-- The rig's 'distance' is 800, which is the default perspective
			value of a scene, so the camera rig's initial view will match that
			of the scene's default camera when a rig or custom camera is not
			being used. -->
			<lume-camera-rig
				id="cam"
				distance="800"
				min-distance="50"
				max-distance="1000"
				align-point="0.5 0.5"
			></lume-camera-rig>

			<lume-ambient-light intensity="0.3"></lume-ambient-light>
			<lume-point-light id="light" color="white" cast-shadow="true" intensity="1000" position="0 0 300">
				<lume-mesh
					has="sphere-geometry basic-material"
					cast-shadow="false"
					size="10 10 10"
					mount-point="0.5 0.5"
					color="#eee"
				></lume-mesh>
			</lume-point-light>

			<lume-box
				id="model"
				rotation="40 40 0"
				align-point="0.5 0.5 0.5"
				mount-point="0.5 0.5 0.5"
				size="100 100 100"
				color="white"
				texture="${host}textures/cement.jpg"
			></lume-box>
		</lume-scene>

		<lume-scene id="ui" class="hidden">
			<lume-element3d size-mode="proportional literal" size="1 80">
				<label>
					Camera rig active:
					<input id="active" type="checkbox" checked onchange="cam.active = !cam.active" />
				</label>
			</lume-element3d>
		</lume-scene>

		<script type="module">
			import 'lume'

			scene.classList.remove('hidden')
			ui.classList.remove('hidden')

			document.addEventListener('pointermove', event => {
				event.preventDefault()
				light.position.x = event.clientX
				light.position.y = event.clientY
			})

			const rotate = t => 180 * Math.sin(0.0005 * t)

			model.rotation = (x, y, z, t) => [rotate(t / 1.4), rotate(t / 2.1), rotate(t / 2.5)]
		</script>
	</body>
`)

const cameraRigVerticalRotationExample = stripIndent(html`
	<base href="${host}" />
	<script src="./importmap.js"></script>
	<script type="module">
		import 'lume'
	</script>

	<lume-scene webgl style="background: #444">
		<lume-box size="100 100 100" color="pink">
			<lume-camera-rig
				align-point="0.5 0.5 0.5"
				vertical-angle="20"
				min-vertical-angle="-45"
				max-vertical-angle="45"
				distance="500"
			>
				<lume-point-light slot="camera-child" color="white" intensity="1800" position="120 120 120"></lume-point-light>
			</lume-camera-rig>
		</lume-box>
	</lume-scene>
`)

const clipPlaneExample = stripIndent(html`
	<title>&lt;lume-clip-plane&gt;</title>

	<style>
		html,
		body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background: #333;
			touch-action: none;
		}
		#ui {
			position: absolute !important;
			top: 0;
			left: 0;
			color: white;
		}
		#ui,
		#ui lume-element3d {
			pointer-events: none;
		}
		#ui label {
			pointer-events: auto;
		}
		lume-element3d {
			padding: 15px;
		}
	</style>

	<base href="${host}" />
	<script src="./importmap.js"></script>

	<lume-scene id="scene" perspective="800" webgl shadowmap-type="pcfsoft">
		<lume-ambient-light color="white" intensity="0.4"></lume-ambient-light>

		<lume-camera-rig active vertical-angle="30" distance="400" max-distance="7000" min-distance="100">
			<lume-point-light
				position="200 -200 200"
				intensity="1200"
				color="white"
				shadow-bias="-0.001"
				shadow-map-width="2048"
				shadow-map-height="2048"
				slot="camera-child"
			></lume-point-light>
		</lume-camera-rig>

		<lume-box
			id="box"
			has="clip-planes"
			clip-planes="#clipPlane"
			flip-clip="false"
			clip-disabled="false"
			sidedness="double"
			cast-shadow="true"
			receive-shadow="true"
			opacity="1"
			color="skyblue"
			dithering
			mount-point="0.5 0.5 0.5"
			rotation="0 45 0"
			size="100 100 100"
			scale="1 1 1"
		>
			<lume-sphere size="20 20 20" color="pink" mount-point="0.5 0.5 0.5" align-point="0.5 0.5 0.5"></lume-sphere>

			<lume-clip-plane id="clipPlane" size="175 175" mount-point="0.5 0.5 0.5" align-point="0.5 0.5 0.5">
				<lume-plane
					id="plane"
					opacity="0.5"
					visible="false"
					sidedness="double"
					color="orange"
					size="1 1"
					size-mode="proportional proportional"
					cast-shadow="false"
					receive-shadow="false"
				></lume-plane>
			</lume-clip-plane>
		</lume-box>

		<lume-plane size="800 800" color="pink" rotation="90" position="0 150" mount-point="0.5 0.5"></lume-plane>
	</lume-scene>

	<lume-scene id="ui">
		<lume-element3d size-mode="proportional literal" size="1 80">
			<label>
				Clipping enabled:
				<input type="checkbox" checked onchange="box.clipDisabled = !box.clipDisabled" />
			</label>
			<br />
			<label>
				Flip clip:
				<input
					type="checkbox"
					onchange="box.behaviors.get('clip-planes').flipClip = !box.behaviors.get('clip-planes').flipClip"
				/>
			</label>
			<br />
			<label>
				Clip shadows:
				<input
					type="checkbox"
					checked
					onchange="box.behaviors.get('clip-planes').clipShadows = !box.behaviors.get('clip-planes').clipShadows"
				/>
			</label>
			<br />
			<label>
				Visualize plane:
				<input type="checkbox" onchange="plane.visible = !plane.visible" />
			</label>
		</lume-element3d>
	</lume-scene>

	<script type="module">
		import 'lume'

		// Other ways to set the clip planes:
		// box.setAttribute('clip-planes', '#clipPlane')
		// box.clipPlanes = [clipPlane]

		clipPlane.rotation = (x, y, z, t) => [x, (y += 0.1), z]
	</script>
`)

const pictureFrameExample = stripIndent(html`
	<base href="${host}" />
	<script src="./importmap.js"></script>

	<style>
		html,
		body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background: #333;
			touch-action: none;
		}
	</style>

	<script>
		const host = '${host}'

		// See ${host}js/PictureFrameScene.js
		import('./js/PictureFrameScene.js')
	</script>

	<!--
		The vampire picture is from
		https://mythical-creatures.com/glossary/unknown/vampire/
		https://mythical-creatures.com/wp-content/uploads/2023/03/Satijn_vampire_with_fangs_452dda35-0cf4-4f8d-b456-63e069ecdf09.png
	-->
	<picture-frame-scene
		picture="${host}images/satijn_vampire.png"
		frame-texture="${host}images/wood.jpg"
		frame-shape="m16.1 345c217.1-.3 328.7-.3 335 0 6.3-.3 10-6.3 11-18 3.6-50.8 5.3-78.8 5-84 .3-5.2 1.9-7.9 5-8 27.3.8 42.6 1.2 46 1 3.2.2 5.5-2.5 7.1-8v-23l-27-1c-23.2-22.7-28.2-15.4-28-22-.1-4.9-1.1-9.3-3-13h-31c.1 6.1-1.6 10.4-5 13-5.2 2.7-27.8 3.6-53 0-28.2-5-54.6-21.7-60-24-37.7-18.6-78.3-65.9-106-137-1.2-2.8-3.9-5.1-8-7-3.3-.2-4.9-.9-5-2 .1-.9-.4-8.5-1-9-.7-1.3-2.3-2.3-5-3h-56c.2 10 .2 14.7 0 14 .2-1.1-5.4-1.1-17 0 .2 9 .2 16 0 21-.8 10.4-.4 33.3 2 37 20.5 30.1 24.2 84.5 15 132-4.2 20.1-15.9 48.4-35 85-2.6 20.8-3 34.8-1.1 42 1.6 7.5 6.6 12.2 15 14z"
	></picture-frame-scene>
`)
