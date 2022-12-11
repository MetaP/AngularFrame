# Domain-driven GUI Development
The basic idea of domain-driven GUI development is that most of the elements of a GUI can be seen as representations of elements of the domain model.

## Convention over configuration
(See [convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration) [Wikipedia])

The properties of the domain model elements can that be reused by the GUI, simplifying its specification considerably. We can define a set of conventions that infer properties of the GUI from properties of the domain. Properties of the domain define the defaults for properties of the GUI. Only where exceptions to the rules are necessary, some extra info has to be added to the GUI specification. 

For instance, if a GUI field represents an entity attribute of the domain, a user-friendly name defined in the domain model can be used as label for that field.

It is then possible to define a transformation of the GUI model using the domain model as secondary input to produce another model with all the information to build an implementation for a particular development environment.
If both the GUI model and the domain model are realized in a computer-readable format, this transformation could be automated to generate executable code.

## Principle ... 
We further elaborate on that principle.

***Design each page as an instance of a page type***, not as a something completely unique.

## Separate content and presentation
(See [Separation of content and presentation](https://en.wikipedia.org/wiki/Separation_of_content_and_presentation) [Wikipedia])

***A GUI model should not contain presentation information.*** How the GUI is styled - things like fonts and colors, but even spacing and layout - should not be part of a GUI model. 
In an enterprise setting the presentation aspects should be defined by a design system and implemented by a framework. Individual pages or components of those pages should not be concerned with presentation aspects. ... are often used 
The content of the page - what the user can do with the page - can be the same, while its presentation - how that interaction is realized on a particular device - could be totally different. 

(* ToDo * - Example of different realizations of same page in different environments (e.g. laptop versus cellphone or tablet))

Ideally the same page specification should be valid in contexts with radically different presentation characteristics.