
# <code>class <b>Settable</b></code> :id=Settable

This class provides a simple `set()` method that can be used
to set multiple properties of an instance at once. See `set()` method
description.

This class is a mixin. Use it like so:

```js
class MyClass extends Settable() {
  // ...
}
```

or

```js
class MyClass extends Settable(SomeBaseClass) {
  // ...
}
```







## Methods




### <code>.<b>set</b>(): void</code> :id=set

Convenience method for setting all (or some)
properties of a Settable at once. For example:

```js
class Foo extends Settable {
  a = 1
  b = 2
}

const obj = new Foo().set({
  a: 3,
  b: 4
})
```
        
        