
# <code>class <b>PropReceiver</b></code> :id=PropReceiver

`mixin`

Forwards properties of a specified `observedObject` onto properties of
`this` object. The properties to be received from `observedObject` are those
listed in the `receivedProperties` array, or the ones decorated with
`

## Properties




### <code>.<b>observedObject</b></code> :id=observedObject

`abstract` `protected` `readonly`

A subclass should specify the object to observe by defining a `get observedObject` getter.
        


### <code>.<b>receivedProperties</b></code> :id=receivedProperties

`static`

An array of strings, the properties of observedObject to observe.
        






        