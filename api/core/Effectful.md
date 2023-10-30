
# <code>class <b>Effectful</b></code> :id=Effectful

`mixin`

Create Solid.js effects using `this.createEffect(fn)` and easily stop them
all by calling `this.stopEffects()`.

Example (note, replace double ampersands with one ampersand):

```js
import {element, Effectful} from 'lume'

@@element('my-element')
class MyElement extends Effectful(HTMLElement) {
  @@attribute foo = "foo"
  @@attribute bar = "bar"

  connectedCallback() {
    // Log `foo` and `bar` any time either of them change.
    this.createEffect(() => {
      console.log('foo:', this.foo)
    })
  }

  disconnectedCallback() {
    this.stopEffects()
  }
}
```












        