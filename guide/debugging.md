# Debugging

Because Lume elements are HTML elements that the browser natively understands
(unlike components in other frameworks like React, Vue, Svelte, Solid, Angular,
etc), the browser's element inspector gives us a debugging experience right out
of the box without having to install framework-specific devtools as separate
browser extensions.

For example, in the next demo, secondary click (right click on a mouse, or
two-finger click on some touchpads) on the helmet, then click on "Inspect" or
"Inspect Element" depending on our browser, and we'll be able to see the live
DOM in the browser's element inspector.

> :bulb:**Tip**
>
> In some browsers (namely Safari) we may first need to enable developer tools
> before this option will appear in our context menu (see how to [enable the
> developer tools in
> Safari](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/Web_Inspector_Tutorial/EnableWebInspector/EnableWebInspector.html)).

<live-code src="../examples/disco-helmet/example.html"></live-code>

We'll see a `<lume-gltf-model>` element in the inspector. When we hover on it,
we'll see that the browser tells us where it is on the screen, out of the box!
We can then look inside the `<flickering-orbs>` element and hover on the child
`<flickering-orb>` elements to see where they are on the screen.

It looks something like this (depending on the browser we're using):

<iframe width="560" height="315" src="https://www.youtube.com/embed/cW3i_lNVJ98?si=A7_F0jtBWZV-vhMi&rel=0" title="Lume Debuggability" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Super nifty isn't it! This debuggability is possible due to Lume's CSS 3D
rendering mode and the fact that Lume is built on the Custom Elements standard.

This debuggability is not something we get with plain JavaScript WebGL libraries
like Three.js, Babylon, PlayCanvas, or non-custom-element libs on top of them
like react-three-fiber for React, threlte for Svelte, Trois for Vue, and others
(without installing additional custom devtools for _each_ browser to recreate
what the browser devtools already gives us for free). With Lume, we get
debuggability out of the box _and_ compatibility in all web frameworks _no
matter what browser we use_!

In the video, we can see the flickering purple on a `style` attribute because
Lume writes CSS transforms to the element style attributes when CSS rendering is
enabled. CSS rendering has a cost, so if we don't need CSS rendering and will
only be using WebGL rendering, we can set the `enable-css="false"` attribute on
the `<lume-scene>` to turn off CSS rendering, and can re-enable it only when we
are debugging.

When CSS rendering is disabled, style attributes will not be updated, we'll
save on that cost, all elements will have `display:none` effectively preventing
the browser CSS engine from rendering those elements in any way, we will not be
able to secondary click on elements to inspect them (the click will end up
happening on the `<lume-scene>` element), and when we hover on elements in the
element inspector we will not be able to see their locations on screen because
the browser does not show locations of elements that are not rendered by CSS.
