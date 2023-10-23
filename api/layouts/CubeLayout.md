
# <code>class <b>CubeLayout</b> extends [Element3D](..\core\Element3D.md)</code> :id=CubeLayout

Element: `<lume-cube-layout>`

A layout in which layout slots are six sides of a cube, facing outwards.

Slots:

- `front` - The front face of the cube layout.
- `back` - The back face of the cube layout.
- `left` - The left face of the cube layout.
- `right` - The right face of the cube layout.
- `top` - The top face of the cube layout.
- `bottom` - The bottom face of the cube layout.
- Default: The default slot is a catch-all for all other children, so they behave the same as children of a node without a shadow tree.



Inherits properties from [Element3D](..\core\Element3D.md).



## Methods

Inherits methods from [Element3D](..\core\Element3D.md).


### <code>.<b>createCubeSide</b>(): void</code> :id=createCubeSide

Creates one side of the cube.
        


### <code>.<b>setContent</b>(): undefined</code> :id=setContent

As an imperative alternative to slotting, an array
of 6 children (any more are ignored) can be passed in to make them
children of the 6 sides of the cube layout. The order in which they are
added is front, right, back, left, top, bottom. Note, it can be easier to
assign nodes to slots by name, without worrying about their order.
        
        