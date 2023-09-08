
# <code>class <b>PlyGeometryBehavior</b> extends [GeometryBehavior](GeometryBehavior.md)</code> :id=PlyGeometryBehavior

Behavior: `ply-geometry`

This is useful for rendering a set of points from a `.ply` file.

Given a `src` attribute that points to a `.ply` file, the behavior will load
a set of points from the file to use as geometry.

It can be useful to use this behavior on a
[`<lume-points>`](../../../meshes/Points) element, which has a
[`points-material`](../materials/PointsMaterialBehavior) behavior for
configuring how points are rendered.

## Properties

Inherits properties from [GeometryBehavior](GeometryBehavior.md).


### <code>.<b>src</b></code> :id=src

`string` `attribute`

Default: `''`

Path to a `.ply` file to load points from.
        



Inherits methods from [GeometryBehavior](GeometryBehavior.md).


        