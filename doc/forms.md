# Forms
## Preliminary remark
A **form** is not a **page**. Pages can be navigated to. Forms define how a user interacts with the application and its entities.

A simple page can contain a single form.
> Example:
> ManageAddressComponent is a page that uses 

## Model
A **Form** contains **[Form]Field**s.

A form interacts with the application through a **FormService**. A FormService is composed **DataElements** [*Name OK?*] - read-only observable attributes - and **(Update)Methods** [*Inspiration: [Redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) pattern*] The form calls the methods trigger actions. A typical action is updating the state of one or more entities.
