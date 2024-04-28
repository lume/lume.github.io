
# <code>class <b>PropertyAnimator</b></code> :id=PropertyAnimator

This is a utility mixin class to make some Lume
element properties animatable when provided a function. This allows animation
of some properties like so:

```js
const box = document.querySelector('lume-box')
box.rotation = (x, y, z, t, dt) => [x, ++y, z]
box.opacity = (opacity, t, dt) => opacity - 0.01
```

Currently it is only for any XYZValues properties (for example `position`, `rotation`, etc), or `opacity`.

For an `XYZValues` property, the function accepts the current x, y, z, time,
and deltaTime values for the current frame, and should return the new desired
values.

For `opacity` it is similar, but the function accepts a opacity, time, and
deltaTime, and should return the new desired opacity.












        