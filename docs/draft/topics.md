# Development topics

## Design
- Program against abstract GUI elements (in responsive design the placement of elements can vary)
    - status display
    - error display
    - page title
    - breadcrumb
    - main, secondary and context menu
- Design pages with abstract widgets
    - text
    - selection (can be implemented as combo, radio buttons, checkbox (2 or 3 states))
    - multi-selection (list with highlighting, ticks, checksboxes)

## Angular

- Directives
  - Handle events of host element
    - host: { '(fblur)': 'onBlur($event)'}
    - see NaturalNumberDirective
  - Add class to host element - @HostBinding('class') - see form-field.directive
  - Get bound FormControl as injected NgControl:
    - const control = <AbstractControl>this.ngControl.control;
    - see error-display.directive, form-control.directive
- Components
  - Series of articles on how to create components
    - It is often a good idea to collect chunks of code in a directive or component (also if only used once)
    - focus: internal &harr; external
      - background: are there focusable and non-focusable components?
      - background: set tabindex
    - types of components
    - "inheritance" or composition

### Custom "Widgets"
- Add standard form binding
    - inject ControlContainer
    - See [Access FormControl inside custom Angular Component](https://stackoverflow.com/questions/59513861/access-formcontrol-inside-custom-angular-component) [StackOverflow]
-  

### Patterns
- Observable binding
    - See ErrorDisplayComponent
    - Use the on push change detection strategy (specify `changeDetection: ChangeDetectionStrategy.OnPush` in the Component decorator)
    - code:
```
    private _x$ = new [Behavior]Subject<X>(...);
    public x$: Observable<X> = this._x$.asObservable();
```

### Translations
- Give each element a translations structure
    - See FormComponent

## CSS
- How can a generic style override a local style ? - `border-color: red ! important`
    - See [How to Override CSS Styles](https://www.w3docs.com/snippets/css/how-to-override-css-styles.html) [W3Docs]
    - See [how to overwrite css style](https://stackoverflow.com/questions/13117126/how-to-overwrite-css-style)
- More specific rules take precedence!

## Interesting links
- [@Self or @Optional @Host? The visual guide to Angular DI decorators.](https://medium.com/frontend-coach/self-or-optional-host-the-visual-guide-to-angular-di-decorators-73fbbb5c8658)
- [Aligning items in a flex container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container) [mdn]
- [Detect Unsaved Changes in Angular Forms](https://netbasal.com/detect-unsaved-changes-in-angular-forms-75fd8f5f1fa6)