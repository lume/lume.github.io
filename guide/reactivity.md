# Reactivity

LUME's reactivity system is built on Solid.js, making it easy to react to
changes in variables, or to update rendering, in a concise and simple way.

The following example shows a button, that when clicked, updates a reactive
number variable, and this causes the rendering to update any time the number
value changes.

<live-code>
  <template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <script type="module">
    import {html, Motor} from 'lume'
    import {createSignalFunction, createSignalObject} from 'classy-solid'

    const count = createSignalFunction(0)
    const incrementCount = () => count(count() + 1)

    let targetRotationY = 0
    const rotationY = createSignalObject(-80)
    Motor.addRenderTask(t => {
      rotationY.set(
        rotationY.get() + (targetRotationY - rotationY.get()) / 20
      )
    })

    const buttonClicked = () => {
      incrementCount()
      targetRotationY += 20
    }

    const rotation = () => [0, rotationY.get(), 0]

    // Use reactive values in an html template and the DOM elements created by
    // the template will automatically update when those values change.
    const scene = html`
      <lume-scene>
        <lume-element3d
          id="node"
          rotation=${rotation}
          size="100 100"
          align-point="0.5 0.5 0.5"
          mount-point="0.5 0.5 0.5"
        >
          <h1 align="center">${count}</h1>
        </lume-element3d>

        <lume-element3d
          id="node"
          align-point="0.5 0.5"
          position="0 80"
        >
          <button
            style="transform: translateX(-50%)"
            onclick=${buttonClicked}
          >
            Click
          </button>
        </lume-element3d>
      </lume-scene>
    `

    // The top-level element in the template was returned:
    console.log(scene instanceof HTMLElement) // true

    document.body.append(scene)
  </script>

  <style>
    html, body {
      margin: 0; padding: 0;
      height: 100%; width: 100%;
      background: #333;
      font-family: sans-serif;
    }
    lume-element3d {
      background: deeppink;
      border-radius: 5px;
    }
  </style>
  </template>
</live-code>

For more on reactivity and templating, see the
[`classy-solid`](./includes/classy-solid.md) and
[`@lume/element`](./includes/lume-element) packages.
