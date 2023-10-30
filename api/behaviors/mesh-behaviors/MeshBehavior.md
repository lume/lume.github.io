
# <code>class <b>MeshBehavior</b> extends [RenderableBehavior](../RenderableBehavior.md)</code> :id=MeshBehavior





Inherits properties from [RenderableBehavior](../RenderableBehavior.md).



## Methods

Inherits methods from [RenderableBehavior](../RenderableBehavior.md).


### <code>.<b>_createComponent</b>(): undefined</code> :id=_createComponent

Subclasses override this to create either a Material or a BufferGeometry.
It is reactive, any reactive dependencies used in here will cause
re-creation of the instance. Use `untrack` for cases where a dependency
should not re-create the instance (in that case an additional effect may
update the instance instead, while in other cases constructing a new
object is the only (or easier) way).
        
        