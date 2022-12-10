# Numeric data entry
## Design
The framework includes a set of widgets to enter numbers. We distinguish between 
[natural](https://mathworld.wolfram.com/NaturalNumber.html) numbers, [integer](https://mathworld.wolfram.com/Integer.html) numbers and [real](https://mathworld.wolfram.com/RealNumber.html) numbers.
For each type of number there is a directive and a component.



### Directives
The directives are responsible for:
- the correct display of the number and allow only
- ensuring that, when possible, an attempt to enter one or more characters that would result in an invalid number is ignored

The directives are designed to be applied to HTML \<input\> elements of type text.

### Components
The components use the directives internally.

## Implementation
### Types
The framework provides a TypeScript type for each of the number types: natural, integer, real. They are defined in [numbers.module.ts](../../src/shared/data-bound/numbers/numbers.module.ts). They are only used as a way of documenting. ***[ Is it possible to implement the correct restrictions on these types in TypeScript ? ]***

### Directives
The directives implement [ControlValueAccessor](./control-value-accessor.md).
They implement the ... is the conversion 
