# Selector

A ***Selector*** is a widget that allows the user to select a single item from a set of items. There are a number of possible implementations that all share the same abstract functionality. 

A selector binds to the set of items on the one hand and on a selected value on the other. The type of the selected value can be anything. By default, it is the selected Item itself. Otherwise, a `Value(Item): TValue` function can be specified to define the value to return for each item. Often such method will return a property of the item, for instance the ID.

One can also define the representation of the items. If they can be represented by a text, we can define a function `Caption(Item): string`. Typically, this function returns a property of the item or the translation of such property in the locale of the user (associated with the current context.) For more complex representations, a template can be used.

A selector presents the set of items in a particular order. The order can be specified as a `GreaterThan(Item, Item): boolean` function. This function accepts 2 Item instances as input and returns true, if the first Item should come before the second and otherwise false.

There are a number of possible implementations for such widget: a List, a ComboBox, a set of Options or RadioButtons... or even a simple CheckBox if there are only 2 possible choices (and eventually undefined). 
One could allow the choice of implementation via a property on a generic SelectorComponent or define rules that automatically select the preferred implementation depending on the number of items in the set.
