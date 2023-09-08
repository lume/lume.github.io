
# <code>class <b>ChildTracker</b></code> :id=ChildTracker

A mixin for use with custom elements, for tracking
children of a custom element. In a similar pattern as with custom element
`connectedCallback` and `disconnectedCallback`, when a child is connected
`childConnectedCallback(child)` will be called and when a child is
disconnected `childDisconnectedCallback(child)` will be called.

## Properties




### <code>.<b>awaitChildrenDefined</b></code> :id=awaitChildrenDefined

When `true`,
`childConnectedCallback`s will not fire until those children are
upgraded (if they are possibly custom elements, having a hyphen in
their name). If a child is disconnected before it has been upgraded,
then `childDisconnectedCallback` will not be called and any pending
`childConnectedCallback` will be canceled.
        


### <code>.<b>syncChildCallbacks</b></code> :id=syncChildCallbacks

When `true`,
`childConnectedCallback`s will be fired for existing children when
this element is connected into the DOM, and
`childDisconnectedCallback`s will be fired when `this` is
disconnected from the DOM.

This can be useful for instantiation and cleanup logic that depends
on children, not just when children are (dis)connected, but any time
this element is (dis)connected. Sometimes children are not custom
elements, and don't have their own (dis)connectedCallbacks, hence the
need in such cases for a parent to manage setup/cleanup logic based on
the connection of non-custom elements.
        

## Methods




### <code>.<b>childConnectedCallback</b>(): void</code> :id=childConnectedCallback

If defined, this is called any time a child is
connected, with the connected child passed as an argument.
        


### <code>.<b>childDisconnectedCallback</b>(): void</code> :id=childDisconnectedCallback

If defined, this is called any time a child
is disconnected, with the disconnected child passed as an argument.
        
        