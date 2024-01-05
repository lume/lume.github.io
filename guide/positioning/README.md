# Positioning

This guide discribes the positioning attributes that all Lume elements have:
`position`, `mount-point`, `align-point`, `rotation`, and `origin`. The values
of some of these attributes have differing effects based on an element's size or
an element's parent size.

## Position

The `position` of an element moves the element in 3D space, similar to CSS
`translate`. By default, in a scene with a default view and no camera elements
being used, a position of 0,0,0 (`position="0 0 0"`) is at the top-left of the
view, the same as with CSS 3D coordinates using `position: absolute;`.

Three numbers are used to specify position along X, Y, and Z axes. Similar to
the browser's native CSS coordinate system (and the built-in
[`DOMMatrix`](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix)
class), positive X values move rightward on the screen, positive Y values move
downward on the screen, and positive Z values move towards the camera (towards
us).

> [!NOTE]
> Lume uses Three.js for WebGL rendering, but Lume's coordinate system is
> aligned with that of CSS 3D and `DOMMatrix` in order to expand upon web
> standards rather than invent diverge from them. Namely, positive Y is downward
> in Lume just as with CSS, while in Three.js positive Y is upward.

Here is a simple scene with a rectangle at 0,0,0 (the default value for
`position` is `0 0 0`, hence it is does not need to be explicitly written):

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene>
    <lume-element3d size="100 100" style="background: blue;"></lume-element3d>
  </lume-scene>
</template>
</live-code>

Let's move the rectangle to 50,50:

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene>
    <lume-element3d size="100 100" position="50 50" style="background: blue;"></lume-element3d>
  </lume-scene>
</template>
</live-code>

Position is 3D when a Z value is provided. In the next example we position three
wireframe boxes with successively increasing X, Y, and Z values, and we see that the boxes
go towards the bottom-right of the viewport, as well as get bigger because they
are moving closer to us along Z.

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene webgl>
    <lume-box size="50 50 50" position="50 50 50" has="basic-material" color="blue" wireframe></lume-box>
    <lume-box size="50 50 50" position="200 100 250" has="basic-material" color="blue" wireframe></lume-box>
    <lume-box size="50 50 50" position="300 150 450" has="basic-material" color="blue" wireframe></lume-box>
  </lume-scene>
</template>
</live-code>

## Mount Point

The mount point of an element is the point in the element, relative to its size, that gets positioned
when using `position` or `align-point`.

Here is an element with default positioning as in the first example, and its
top-left corner is located at the top-left of the viewport because the default
`mount-point` is 0,0,0 (`mount-point="0 0 0"`) which is the element's top-left corner:

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene>
    <lume-element3d size="100 100" style="background: blue;"></lume-element3d>
  </lume-scene>
</template>
</live-code>

Now if we change the element's mount-point to 0.5,0.5,0 (`mount-point="0.5
0.5"`), the point within the rectangle that is positioned at the top-left of the
viewport is the rectangle's center point along X and Y, so we will only see the
bottom quadrant of the rectangle:

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene>
    <lume-element3d size="100 100" mount-point="0.5 0.5" style="background: blue;"></lume-element3d>
  </lume-scene>
</template>
</live-code>

We can now see that, if we move the rectangle to 60,60 (or half the rectangle
size on X and Y, plus an extra 10 CSS pixels), we will see the whole rectangle
again:

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene>
    <lume-element3d size="100 100" position="60 60" mount-point="0.5 0.5" style="background: blue;"></lume-element3d>
  </lume-scene>
</template>
</live-code>

Finally, here are two rectangles, both of them with position 100,100. The blue
rectangle has a mount point of 1,1 which will cause it to be positioned based on
its bottom-right corner, hence the bottom-right corner of the blue rectangle
will touch the top-left corner of the pink rectangle.

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene>
    <lume-element3d size="100 100" position="100 100" mount-point="1 1" style="background: blue;"></lume-element3d>
    <lume-element3d size="100 100" position="100 100" mount-point="0 0" style="background: deeppink;"></lume-element3d>
  </lume-scene>
</template>
</live-code>

Mount point is 3D. The next example shows a wireframe box with its default
`mount-point`, and what we see is that the back face of the box is aligned with
the top-left of the viewport, i.e. the back face of the box is aligned with the
display surface. This is because a mount point value of 0 on Z means that the
mount point is at the back of the element, which means that the default mount
point of within the element's size space (a box) is at the top-left-back corner.
(Tip: add `position="10 10 10"` to the box to make it easier to understand, as the
back face will then be away from the edges of the view by 10 pixels)

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene webgl>
    <lume-box size="100 100 100" has="basic-material" color="blue" wireframe></lume-box>
  </lume-scene>
</template>
</live-code>

If we set the mount point on Z to 1, we'll see that the front face of the box is
now flush with the display surface, and the top-left-front corner of the box is
at the top-left of the view:

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene webgl>
    <lume-box size="100 100 100" mount-point="0 0 1" has="basic-material" color="blue" wireframe></lume-box>
  </lume-scene>
</template>
</live-code>

## Align Point

The `align-point` of an element moves the `mount-point` of an element relative
to the parent, effectively moving the location at which position 0,0,0 is
located for the child element. In other words, `align-point` translates an
element before `position` has any effect.

The default value is 0,0,0, so an element with default values will be at the top-left:

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene>
    <lume-element3d size="100 100" style="background: blue;"></lume-element3d>
  </lume-scene>
</template>
</live-code>

If we change the align point to 0.5,0.5, then the element's top-left corner
(because of the default mount point is at its top-left) will move to the center
of the parent, which in this case is the scene and the scene's size will be used
as the basis for which align point is relative to:

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene>
    <lume-element3d size="100 100" align-point="0.5 0.5" style="background: blue;"></lume-element3d>
  </lume-scene>
</template>
</live-code>

We can combine align point with mount point to center the rectangle in the
scene. By making the rectangle's mount point be 0.5,0.5, it will be the center
of the rectangle that is ceneterd in the scene when align point is 0.5,0.5:

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene>
    <lume-element3d size="100 100" align-point="0.5 0.5" mount-point="0.5 0.5" style="background: blue;"></lume-element3d>
  </lume-scene>
</template>
</live-code>

Let's place a pink rectangle in the blue rectangle, with align point 1,1 and
no mount point (i.e. 0,0), and we will see that the pink rectangle's top-left corner
will be moved to the bottom-right of the parent:

<live-code>
<template>
  <base href="${host}" />
  <script src="./importmap.js"></script>
  <script>import('lume')</script>

  <style> html, body {height: 100%; margin: 0} </style>

  <lume-scene>
    <lume-element3d size="100 100" align-point="0.5 0.5" mount-point="0.5 0.5" style="background: blue;">
      <lume-element3d size="100 100" align-point="0.5 0.5" style="background: deeppink;"></lume-element3d>
    </lume-element3d>
  </lume-scene>
</template>
</live-code>

Align point is 3D. In the next example, we center a transparent box in the
scene, and we use `align-point` to position a small sphere at the center of the
box, and at each corner of the box. We also slowly rotate the box to make
it easier to see.

<live-code>
<template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <style>
    html, body {height: 100%; margin: 0}
  </style>

  <lume-scene webgl>
    <lume-ambient-light intensity="0.3"></lume-ambient-light>
    <lume-point-light align-point="0.5 0.5" position="250 250 250"></lume-point-light>
    <lume-box id="myBox" size="100 100 100" align-point="0.5 0.5" mount-point="0.5 0.5 0.5" rotation="45 45 0" color="deeppink" opacity="0.5" sidedness="double" cast-shadow="false">
      <lume-sphere size="10 10 10" mount-point="0.5 0.5 0.5" color="blue" align-point="0.5 0.5 0.5"></lume-sphere>
      <lume-sphere size="10 10 10" mount-point="0.5 0.5 0.5" color="blue" align-point="0 0 0"></lume-sphere>
      <lume-sphere size="10 10 10" mount-point="0.5 0.5 0.5" color="blue" align-point="1 0 0"></lume-sphere>
      <lume-sphere size="10 10 10" mount-point="0.5 0.5 0.5" color="blue" align-point="0 1 0"></lume-sphere>
      <lume-sphere size="10 10 10" mount-point="0.5 0.5 0.5" color="blue" align-point="0 0 1"></lume-sphere>
      <lume-sphere size="10 10 10" mount-point="0.5 0.5 0.5" color="blue" align-point="0 1 1"></lume-sphere>
      <lume-sphere size="10 10 10" mount-point="0.5 0.5 0.5" color="blue" align-point="1 0 1"></lume-sphere>
      <lume-sphere size="10 10 10" mount-point="0.5 0.5 0.5" color="blue" align-point="1 1 0"></lume-sphere>
      <lume-sphere size="10 10 10" mount-point="0.5 0.5 0.5" color="blue" align-point="1 1 1"></lume-sphere>
    </lume-box>
  </lume-scene>

  <script type="module">
    import 'lume'
    requestAnimationFrame(function loop() {
      myBox.rotation.y += 0.5
      myBox.rotation.x += 0.2
      requestAnimationFrame(loop)
    })
  </script>
</template>
</live-code>

## Rotation

The orientation of an element can be specified with `rotation`, with values
being in degrees. An element will rotate around its center point by default (the
place where `origin` defaults to, and which is the same place as a `mount-point`
of `0.5 0.5 0.5`, relative to the element's size).

In the following example we've centered a 3D box (with `webgl` rendering enabled) using
`align-point` and `mount-point`, and rotated it by 45 degrees around X and Y
axes. A point light that illuminates the box is also initially aligned in the center
of the scene, then translated with `position`:

<live-code>
<template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <style>
    html, body {height: 100%; margin: 0}
  </style>

  <lume-scene webgl>
    <lume-ambient-light intensity="0.3"></lume-ambient-light>
    <lume-point-light align-point="0.5 0.5" position="250 250 250"></lume-point-light>
    <lume-box size="100 100 100" align-point="0.5 0.5" mount-point="0.5 0.5 0.5" rotation="45 45 0" color="#fc8eac"></lume-box>
  </lume-scene>

  <script type="module">
    import 'lume'
  </script>
</template>
</live-code>

## Origin

The `origin` attribute on LUME elements controls the point about which
`rotation` happens. Similar to `mount-point`, this location is relative to the
element's size, so `origin="0.5 0.5 0.5"` (the default) means that an element
rotates about its center.

Note that `mount-point` is not the same as `origin`, and `mount-point` is the
element's known point of positioning _before_ rotation around the `origin` point
is applied.

In the next example, there are eight cubes, and each cube has its `origin` set
to one of its corners. For each cubde, we placed a dot on the corner where the
origin is specified to be (centering each dot at the corner using `align-point`
and `mount-point`). When we rotate the cubes using the sliders, we'll see that
the cubes rotate around their specified `origin` points.

<live-code src="./origin.html"></live-code>
