# Sizing

All Lume elements have the concept of a `size` (per axis) and a `size-mode` (per
axis). The size of an element can be useful for implementing layout. Sometimes
the content that a particular element shows on screen depends on the element
size.

## Size

For example, using only CSS rendering, the following example shows a rectangle with
`size` 100 by 100, in CSS pixels:

<live-code>
<template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <style>
    html, body {height: 100%; margin: 0}
    lume-element3d {background: #fc8eac}
  </style>

  <lume-scene>
    <lume-element3d size="100 100" position="10 10"></lume-element3d>
  </lume-scene>

  <script type="module">
    import 'lume'
  </script>
</template>
</live-code>

Only the X and Y sizes were specified in that example because with CSS
rendering, all objects are flat rectangles with two dimensions, so a Z size was
not necessary in this case.

The following example, using WebGL rendering, shows a 3D box that is 100 by 100
by 100, and rotated a bit so we can see multiple faces of the box:

<live-code>
<template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <style>
    html, body {height: 100%; margin: 0}
  </style>

  <lume-scene webgl>
    <lume-ambient-light intensity="0.3"></lume-ambient-light>
    <lume-point-light position="250 250 250" intensity="1000"></lume-point-light>
    <lume-box size="100 100 100" position="100 100" rotation="30 10 30" color="#fc8eac"></lume-box>
  </lume-scene>

  <script type="module">
    import 'lume'
  </script>
</template>
</live-code>

## Size Mode

Lume elements have a size mode per axis, defaulting to `literal` or `l` for short, for
each axis. The other possible size mode is `proportional` or `p` for short.
Literal size means the element's size (for a particular axis) is the value
that was specified. Proportional size means an axis size value is a proportion
of the parent size.

To specify size mode per axis, use `size-mode`. For example
`size-mode="proportional literal"` (or `size-mode="p l"` for short) means that
the size along X will be a proportion of the parent size, the size along Y will
be literally as specified, and the size along Z will be literally as specified
(a Z size-mode value was not specified, and literal is the default when not
specified).

Here we expand on the first example to add a transparent blue child to the pink
rectangle, with the child having a proportional size along X and a literal size
along Y:

<live-code>
<template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <style>
    html, body {height: 100%; margin: 0}
  </style>

  <lume-scene>
    <lume-element3d size="100 100" position="10 10" style="background: #fc8eac">
      <lume-element3d size-mode="p l" size="0.75 150" opacity="0.5" style="background: cornflowerblue"></lume-element3d>
    </lume-element3d>
  </lume-scene>

  <script type="module">
    import 'lume'
  </script>
</template>
</live-code>

Similarly, here we take the previous 3D box example and add a child to it, with
proportional size on X, literal size on Y, and proportional size on Z. We make
the blue box transparent to more easily see what's going on:

<live-code>
<template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <style>
    html, body {height: 100%; margin: 0}
  </style>

  <lume-scene webgl>
    <lume-ambient-light intensity="0.3"></lume-ambient-light>
    <lume-point-light position="250 250 250" intensity="1000"></lume-point-light>
    <lume-box size="100 100 100" position="100 100" rotation="30 10 30" color="#fc8eac" opacity="0.7">
      <lume-box size-mode="p l p" size="0.75 150 0.25" color="cornflowerblue"></lume-box>
    </lume-box>
  </lume-scene>

  <script type="module">
    import 'lume'
  </script>
</template>
</live-code>

# Scene Size

A `<lume-scene>` element's size is, by default, 100% with and height of its
parent. For now, the recommended way to size a scene is to set the size of a
wrapper element.

In the previous example, the scenes took up the whole width and height of the
viewport. In the following example the scene is smaller, clipping some of its
visible content, with a border to visualize the boundaries:

<live-code>
<template>
  <base href="${host}" /><script src="./importmap.js"></script>

  <style>
    html, body {height: 100%; margin: 0}
  </style>

  <div style="width: 250px; height: 200px; border: 1px solid teal;">
    <lume-scene webgl>
      <lume-ambient-light intensity="0.3"></lume-ambient-light>
      <lume-point-light position="250 250 250" intensity="1000"></lume-point-light>
      <lume-box size="100 100 100" position="100 100" rotation="30 10 30" color="#fc8eac" opacity="0.7">
        <lume-box size-mode="p l p" size="0.75 150 0.25" color="cornflowerblue"></lume-box>
      </lume-box>
    </lume-scene>
  </div>

  <script type="module">
    import 'lume'
  </script>
</template>
</live-code>
