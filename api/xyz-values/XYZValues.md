
# <code>class <b>XYZValues</b></code> :id=XYZValues

Represents a set of values for the X, Y, and Z axes. For example, the
position of an object can be described using a set of 3 numbers, one for each
axis in 3D space: {x:10, y:10, z:10}.

The values don't have to be numerical. For example,
{x:'foo', y:'bar', z:'baz'}

## Properties




### <code>.<b>x</b></code> :id=x

*signal*

Default: `undefined`

The X value.
        


### <code>.<b>y</b></code> :id=y

*signal*

Default: `undefined`

The Y value.
        


### <code>.<b>z</b></code> :id=z

*signal*

Default: `undefined`

The Z value.
        

## Methods




### <code>.<b>constructor</b>(): void</code> :id=constructor

The constructor accepts the initial x, y, and z values for
the respective properties, as well as a string list of values, an array
of values, an object of values with matching x, y, and z properties, or
another XYZValues object. This class allows for any type of values, so if
anything other than the string, array, or objects are passed for the
first arg, then whatever that value is becomes the value of `x`.

Examples:

```js
// default values for all axes
new XYZValues()

// individual args
new XYZValues(foo)
new XYZValues(foo, bar)
new XYZValues(foo, bar, baz)

// string of values
new XYZValues('')
new XYZValues('foo')
new XYZValues('foo, bar')
new XYZValues('foo, bar, baz')
// commas are optional, these are the same as the last two:
new XYZValues('foo bar')
new XYZValues('foo bar baz')

// array of values
new XYZValues([])
new XYZValues([foo])
new XYZValues([foo, bar])
new XYZValues([foo, bar, baz])

// array of values
new XYZValues({})
new XYZValues({x: foo})
new XYZValues({y: bar})
new XYZValues({z: baz})
new XYZValues({y: bar, z: baz})
new XYZValues({x: foo, z: baz})
new XYZValues({x: foo, y: bar})
new XYZValues({x: foo, y: bar, z: baz})

// other XYZValues
let other = new XYZValues(...)
new XYZValues(other)
```
        


### <code>.<b>fromDefault</b>(): undefined</code> :id=fromDefault

Resets the `x`, `y`, and `z` values of the instance back
to their defaults, as defined by the `default` getter. If no `default`
getter is assigned, the default is ultimately `undefined` for `x`, `y`, and
`z`.

```js
values.fromDefault()
```
        


### <code>.<b>from</b>(): undefined</code> :id=from

Accepts multiple types of values to set the object's `x`, `y`, and `z` properties from. The args are the same as for the [`constructor()`](#constructor).

```js
// similar to the constructor:
values.from(foo, bar, baz)
values.from('foo, bar, baz')
values.from('foo bar baz')
values.from([foo, bar, baz])
values.from({x: foo, y: bar, z: baz})
```
        


### <code>.<b>set</b>(): undefined</code> :id=set

Sets specific values for `x`, `y`, and `z`. Unlike
[`.from()`](#from), this does not accept different sorts of values, but
only specific values for each axis.

```js
values.set(foo, bar, baz)
```
        


### <code>.<b>fromArray</b>(): undefined</code> :id=fromArray

Sets the object's `x`, `y`, and `z` values from an array of values.

```js
values.fromArray([foo, bar, baz])
```
        


### <code>.<b>toArray</b>(): undefined</code> :id=toArray

Returns the `x`, `y`, and `z` values in array form.

```js
values.toArray() // [foo, bar, baz]
```
        


### <code>.<b>fromObject</b>(): undefined</code> :id=fromObject

Sets the object's `x`, `y`, and `z` values from an
object with `x`, `y`, and `z` properties.

```js
values.fromObject({x: foo, y: bar, z: baz})
```
        


### <code>.<b>toObject</b>(): undefined</code> :id=toObject

Returns the `x`, `y`, and `z` values in object form.

```js
values.toObject() // {x: foo, y: bar, z: baz}
```
        


### <code>.<b>fromString</b>(): undefined</code> :id=fromString

Sets the object's `x`, `y`, and `z` values from a
string containing a list of values.

```js
values.fromString('foo, bar, baz')
values.fromString('foo bar baz')
```
        


### <code>.<b>toString</b>(): undefined</code> :id=toString

Returns the `x`, `y`, and `z` values in string of values form, with an optional separator.

`override`

```js
values.toString() // 'foo bar baz'
values.toString(',') // 'foo, bar, baz'
```
        


### <code>.<b>deserializeValue</b>(): undefined</code> :id=deserializeValue

Defines how to deserialize an incoming string
being set onto one of the x, y, or z properties. Subclasses should
override this. This class does not perform any transformation of the
string values.
        


### <code>.<b>checkValue</b>(): void</code> :id=checkValue

Subclasses extend this to implement type checks.
Return `true` if the value should be assigned, or `false` to ignore the
value and not set anything. A subclass could also throw an error when
receiving an unexpected value.

Returning `false`, for example, can allow 'undefined' values to be
ignored, which allows us to do things like `values.fromObject({z: 123})`
to set only `z` and ignore `x` and `y`.
        
        