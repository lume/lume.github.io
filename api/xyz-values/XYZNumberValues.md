
# <code>class <b>XYZNumberValues</b> extends [XYZValues](XYZValues.md)</code> :id=XYZNumberValues

Extends [`XYZValues`](./XYZValues) to enforce that
values are numbers. Additionally, values of `undefined` are ignored instead
of throwing errors, which allows us to handle values like `{y: 123}` when
setting element properties to set only one axis value.

## Properties

Inherits properties from [XYZValues](XYZValues.md).


### <code>.<b>default</b></code> :id=default

*override*

Defines the default XYZ values to be the numbers 0,0,0.
        

## Methods

Inherits methods from [XYZValues](XYZValues.md).


### <code>.<b>deserializeValue</b>(): void</code> :id=deserializeValue

*override*

Coerces a string value into a number.
        


### <code>.<b>checkValue</b>(): void</code> :id=checkValue

*override*

Check that a value is a number.
        
        