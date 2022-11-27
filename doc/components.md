# Components
We distinguish two categories of components
- presentational components
- smart (application? functional? domain?) components

## Data representations
The goal of some components is the representation of data. They can act 
We choose to In thWe chData representations are components that 
There is a generic abstract component that is used as base of the components that represent simple values. Its implementation has 2 parts The readonly 
They can be union of two parts. One is the readonly representation. This is in essence a text. To make it wo
The other part allows the user to modify the value. This can often be realized as a text input with specific validation and mask (formatting).

## Layout elements

## Links
- [Angular Architecture - Smart Components vs Presentational Components](https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/)
- container-presenter pattern
  - [Angular Architecture - Container vs Presentational Components Common Design Pitfalls](https://blog.angular-university.io/angular-component-design-how-to-avoid-custom-event-bubbling-and-extraneous-properties-in-the-local-component-tree/) [Angular Univeristy]
  - [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) [Dan Abramov] - original idea with comments
  - [container-presenter pattern](https://www.patterns.dev/posts/presentational-container-pattern/) [react]
-