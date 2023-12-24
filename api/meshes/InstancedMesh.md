
# <code>class <b>InstancedMesh</b> extends [Mesh](Mesh.md)</code> :id=InstancedMesh

This is similar to Mesh, but renders multiple
"instances" of a geometry (insead of only one) with a single draw call to
the GPU, as if all the instances were a single geometry. This is more
efficient in cases where multiple objects to be rendered are similar
(share the same geometry and material). Rendering multiple similar objects
as separate Mesh instances would otherwise incur one draw call to the GPU
per mesh which will be slower.

For sake of simplicity, `<lume-instanced-mesh>` has a box-geometry and
phong-material by default.

## Example

<live-code id="liveExample"></live-code>
<script>
  liveExample.content = instancedMeshExample
</script>

## Properties

Inherits properties from [Mesh](Mesh.md).


### <code>.<b>count</b></code> :id=count

The number of instances to render.
        


### <code>.<b>rotations</b></code> :id=rotations

The rotations for each instance.
Generally the array should have a length of `this.count * 3` because
each rotation consists of three numbers for X, Y, and Z axes. Every three
numbers is one X,Y,Z triplet. If the array has less rotations than
`this.count`, the missing rotations will be considered to have
values of zero. If it has more than `this.count` rotations, those
rotations are ignored.
        


### <code>.<b>positions</b></code> :id=positions

The positions for each instance.
Generally the array should have a length of `this.count * 3` because
each rotation consists of three numbers for X, Y, and Z axes. Every three
numbers is one X,Y,Z triplet. If the array has less positions than
`this.count`, the missing positions will be considered to have
values of zero. If it has more than `this.count` positions, those
positions are ignored.
        


### <code>.<b>scales</b></code> :id=scales

The scales for each instance.
Generally the array should have a length of `this.count * 3` because
each rotation consists of three numbers for X, Y, and Z axes. Every three
numbers is one X,Y,Z triplet. If the array has less scales than
`this.count`, the missing scales will be considered to have
values of zero. If it has more than `this.count` scales, those
scales are ignored.
        


### <code>.<b>colors</b></code> :id=colors

The colors for each instance.
Generally the array should have a length of `this.count * 3` because
each rotation consists of three numbers for R, G, and B color components. Every three
numbers is one R,G,B triplet. If the array has less colors than
`this.count`, the missing colors will be considered to have
values of zero (black). If it has more than `this.count` colors, those
colors are ignored.
        



Inherits methods from [Mesh](Mesh.md).


        