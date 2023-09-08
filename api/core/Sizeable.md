
# <code>class <b>Sizeable</b> extends [TreeNode](TreeNode.md)</code> :id=Sizeable

Provides features for defining the size volume of an object in 3D space.

The properties of `Sizeable` all follow a common usage pattern,
described in the [`Common Attributes`](../../guide/common-attributes) doc.

## Properties

Inherits properties from [TreeNode](TreeNode.md).


### <code>.<b>sizeMode</b></code> :id=sizeMode

*attribute*

Default: <code>new [XYZSizeModeValues](../xyz-values/XYZSizeModeValues)('literal', 'literal', 'literal')</code>

Set the size mode for each axis. Possible values are `"literal"` (or `"l"` for short) and
`"proportional"` (or `"p"` for short). For example,

```html
<lume-element3d size-mode="proportional literal"></lume-element3d>
<lume-element3d size-mode="p l"></lume-element3d>
```

The value of `.sizeMode` for a particular axis dictates how the respective
[`.size`](#size) value along the same axis will behave:

- A value of `"literal"` for an axis means the `.size` value along that
axis will be literally as specified.
- A value of `"proportional"` for an axis means the `.size`
value along that axis will be a proportion of the object's parent's size
along that axis.
        


### <code>.<b>size</b></code> :id=size

*attribute*

Default: <code>new [XYZNonNegativeValues](../xyz-values/XYZNonNegativeValues)(0, 0, 0)</code>

Set the size of the object along each axis. The meaning of a size value for a particular axis depends on the
[`.sizeMode`](#sizemode) value for the same axis.

All size values must be positive numbers or an error is thrown.

Literal sizes can be any positive value (the literal size that you want).
Proportional size along an axis represents a proportion of the parent
size on the same axis. `0` means 0% of the parent size, and `1.0` means
100% of the parent size.

For example, if `.sizeMode` is set to `el.sizeMode = ['literal',
'proportional', 'literal']`, then setting `el.size = [20, 0.5, 30]` means
the X size is a literal value of `20`, the Y size is 50% of the parent Y
size, and the Z size is a literal value of `30`. It is easy this way to
mix literal and proportional sizes for the different axes.
        


### <code>.<b>calculatedSize</b></code> :id=calculatedSize

*readonly*, *reactive*

Get the actual size of an element as an object with `x`, `y`, and `z`
properties, each property containing the computed size along its
respective axis.

This can be useful when size is proportional, as the actual size of the
an element will depend on the size of its parent, and otherwise looking
at the `.size` value won't tell us the actual size.
        


### <code>.<b>parentSize</b></code> :id=parentSize

*reactive* *readonly*

Returns an object with `x`, `y`, and `z` properties containing the size
dimensions of the composed LUME parent. If there is no composed LUME
parent, the size is 0,0,0.
        



Inherits methods from [TreeNode](TreeNode.md).


        