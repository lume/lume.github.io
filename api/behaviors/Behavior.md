
# <code>class <b>Behavior</b> extends [PropReceiver](PropReceiver.md)</code> :id=Behavior

Base class for all LUME behaviors.

Features:
- Sets `static awaitElementDefined` to `true`, which causes `elementBehaviors` to wait until the behavior's host element is upgraded if it might be a custom element (i.e. when the host element has a hyphen in its name).
- Assigns the host element onto `this.element` for convenience.
- Calls a subclass's `requiredElementType` method which should return the type (constructor) of allowed elements that the behavior can be hosted on. If the element is not instanceof the `requiredElementType()`, then an error is shown in console. For TypeScript users, it enforces the type of `.element` in subclass code.
- Forwards the properties specified in `receivedProperties` from `observedObject` to `this` any time `receivedProperties` on `observedObject` change. Useful for forwarding JS properties from the host element to the behavior. This functionality comes from the [`PropReceiver`](./PropReceiver) class.



Inherits properties from [PropReceiver](PropReceiver.md).



## Methods

Inherits methods from [PropReceiver](PropReceiver.md).


### <code>.<b>requiredElementType</b>(): undefined</code> :id=requiredElementType

A subclass can override this method in
order to enforce that the behavior can be applied only on certain types
of elements by returning an array of constructors. An error will be
thrown if `this.element` is not an instanceof one of the constructors.

If the element's tag name has a hyphen in it, the logic will consider it
to possibly be a custom element and will wait for it to be upgraded
before performing the check; if the custom element is not upgraded within
a second, an error is thrown.
        
        