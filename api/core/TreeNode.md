
# <code>class <b>TreeNode</b> extends Eventful, LumeElement</code> :id=TreeNode

The `TreeNode` class represents objects that are connected
to each other in parent-child relationships in a tree structure. A parent
can have multiple children, and a child can have only one parent.

## Properties

Inherits properties from Eventful, LumeElement.


### <code>.<b>parentLumeElement</b></code> :id=parentLumeElement

*readonly*

The LUME-specific parent of the current TreeNode. Each node in a tree can
have only one parent. This is `null` if there is no parent when not
connected into a tree, or if the parentElement while connected into a
tree is not as LUME 3D element.
        


### <code>.<b>lumeChildren</b></code> :id=lumeChildren

*readonly*

An array of this element's LUME-specific children. This returns a new
static array each time, so and modifying this array directly does not
effect the state of the TreeNode. Use [TreeNode.append(child)](#append)
and [TreeNode.removeChild(child)](#removechild) to modify a TreeNode's
actual children.
        


### <code>.<b>lumeChildCount</b></code> :id=lumeChildCount

*readonly*

The number of children this TreeNode has.
        



Inherits methods from Eventful, LumeElement.


        