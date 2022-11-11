# Forms
## Preliminary remark
A **form** is not a **page**. Pages can be navigated to. Forms define how a user interacts with the application and its entities.

A simple page can contain a single form.
> Example:
> ManageAddressComponent is a page that uses 

## Model
A **Form** contains **[Form]Field**s.

A form interacts with the application through a **FormService**. A FormService is composed **DataElements** [*Name OK?*] - read-only observable attributes - and **(Update)Methods** [*Inspiration: [Redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) pattern*] The form calls the methods trigger actions. A typical action is updating the state of one or more entities.

**DataElement** = **DataAtom** | **DataMap** | **DataSet**

DataMap = {(name:string, DataElement)}
DataSet is preferred over *DataArray* because the order of the elements is not part of the state of the system. (“Not persisted to the store”)

A Form binds to a DataMap. The items of a DataMap can be readonly or updateable.

An updateable item is represented by a concrete AbstractControl subclass, either FormControl, FormGroup or FormArray, depending on the DataElement type of the item.

A readonly item is represented by a 
 
