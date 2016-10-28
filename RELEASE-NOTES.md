### Version 2.2.5 - October, 27, 2016

-  **Sticky** - Adds `container` setting. This can be used to specify the offsetParent of the sticky element and avoid having to calculate on initialization (improving performance)

### Version 2.2.3 - August 21, 2016

- **Form Validation** - Bracketed notation can now be omitted for rules, instead passing in bracketed values with the `value` parameter [#3313](https://github.com/Semantic-Org/Semantic-UI/issues/3313)
- **Form/Segment** - Fix typo causing `pointer-events: none` no to work on `loading segment` and `loading form`  **Thanks @YamiOdymel and @ilanus** [#4403](https://github.com/Semantic-Org/Semantic-UI/issues/4403)
- **Form** - Fixed issue where `disabled fields` with radio inputs would not correctly dim the label **Thanks @louwers** [#4366](https://github.com/Semantic-Org/Semantic-UI/issues/4366)
- **Form** - `input` styles now apply to `type="file"` **thanks @coldfire79** [#4074](https://github.com/Semantic-Org/Semantic-UI/issues/4074)

### Version 2.2.2 - July 07, 2016

- **Shape** - Fixed issue where shape was animating incorrectly when using jQuery 3.0, due to secret changes in how `width` are calculated on elements with `transform`

### Version 2.2.0 - June 26, 2016

- **Dropdown** - Added new setting for search selection `hideAdditions` this will remove showing user additions inside the menu, making for a more intuitive adding process. Dropdowns now have a new state `empty` which will format an active dropdown with empty results. [#3791](https://github.com/Semantic-Org/Semantic-UI/issues/3791)
- **Form Validation** - Added `depends` validation rule setting which will only validate a field if another specified field is not empty
- **Form Validation / Dropdown** - Using "enter" key in a `search dropdown` could cause a form to be submitted [#3676](https://github.com/Semantic-Org/Semantic-UI/issues/3676)
- **Form Validation** - Fix issue with some foreign email addresses with extended charsets causing email validation to fail [#3955](https://github.com/Semantic-Org/Semantic-UI/issues/3955) [#3755](https://github.com/Semantic-Org/Semantic-UI/issues/3755)
- **Form Validation** - Revalidating a field `on: blur` could cause fields not yet interacted with to be validated [#3606](https://github.com/Semantic-Org/Semantic-UI/issues/3606)
- **Form** - Fixed issue with `(x) fields` and `equal width` fields where middle rows would be slightly smaller because they include both left and right padding in % width. (Edges only have one side padding). Field groups now use negative margins instead.
- **Form Validation** - Fixed issue where initializing form multiple times would not properly call `destroy` removing previous settings [#3798](https://github.com/Semantic-Org/Semantic-UI/issues/3798)
- **Form** - Fix `equal width fields` sometimes not including right field spacing on mobile [#3913](https://github.com/Semantic-Org/Semantic-UI/issues/3913)
- **Form** - Fixed issue where `inline` field was not being correctly inverted in color with `inverted form` [#4004](https://github.com/Semantic-Org/Semantic-UI/issues/4004) [#4005](https://github.com/Semantic-Org/Semantic-UI/issues/4005) **Thanks @tbracken**
- **Form** - Grouped `fields` and `field` would cause different margin collapse, making `fields` include larger gaps between content [#3717](https://github.com/Semantic-Org/Semantic-UI/issues/3717)
- **Form** - Remove deprecated `size()` method in `prompt` [#3655](https://github.com/Semantic-Org/Semantic-UI/issues/3655) **Thanks @SimonArdrey**
- **Message** - Fixes `compact message` appearing as `block` when inside a `form` [#3343](https://github.com/Semantic-Org/Semantic-UI/issues/3343) **Thanks @bcroq**
- **Form** - Added example of using custom rules with form

### Version 2.1.7 - Dec 19, 2015

- **Form** - Fixed issue where text would turn transparent inside a `loading form` [#3122](https://github.com/Semantic-Org/Semantic-UI/issues/3122)
- **Sidebar** - Sidebar no longer includes `transform` rules on child elements, this was causing layout issues in some cases (for example dropdowns in sidebars) [#3306](https://github.com/Semantic-Org/Semantic-UI/issues/3306)

### Version 2.1.5 - Nov 1, 2015

- **Form** - Adds `equal width form` and `equal width fields` for simpler grouped fields
- **Form Validation** - Fixes error on `blur` or `change` when using a blank validation object [#3131](https://github.com/Semantic-Org/Semantic-UI/issues/3131) **Thanks @listepo**
- **Form Validation** - Fixes some issues with form integer validation [#3053](https://github.com/Semantic-Org/Semantic-UI/issues/3053) **Thanks @maturano**
- **Form Validation** - `decimal` rule now **only matches decimals**, to match any number use `number` rule. [#3060](https://github.com/Semantic-Org/Semantic-UI/issues/3060)
- **Form** - Removed `divider` spacing as part of `ui form`, this caused inheritance issues when using special divider types [#3092](https://github.com/Semantic-Org/Semantic-UI/issues/3092)

### Version 2.1.4 - Sep 13, 2015

- **Form Validation** - Form validation now supports a brand new shorthand which is drastically simpler to specify [#2579](https://github.com/Semantic-Org/Semantic-UI/issues/2579)

$('.ui.form')
  .form({

- **Form Validation** - `identifier` and `prompt` are now optional for all form validation rules. Default prompt values have been added for all rule types, and identifier will now automatically match on the named value for rule if no ID is specified. [#3001](https://github.com/Semantic-Org/Semantic-UI/issues/3001) [#2579](https://github.com/Semantic-Org/Semantic-UI/issues/2579)
- **Form Validation** - All form prompts now support templates values, `{value}`, `{name}`,  `{ruleValue}`, and `{identifier}` [#3001](https://github.com/Semantic-Org/Semantic-UI/issues/3001)
- **Form Validation** - Validation messages in `error message` group are now correctly removed when invalid field revalidates on blur

### Version 2.1.3 - Sep 03, 2015

- **Input** - Fixes regression where `ui icon input` inside forms were not correct width [#2953](https://github.com/Semantic-Org/Semantic-UI/issues/2953)

### Version 2.1.2 - Sep 02, 2015

- **Form Validation** - Fixes callbacks on `onSuccess` so as to not break backwards compatibility. #2945 #2944

#### Features

- **API** Added new setting `hideError`, defaults to `auto` (will automatically hide error for elements that are not forms). [#2586](https://github.com/Semantic-Org/Semantic-UI/issues/2586)
- **Form Validation** - Added credit card validation, supports array of card types, and international cards including non luhn cards like China UnionPay [#2729](https://github.com/Semantic-Org/Semantic-UI/issues/2729)
- **Form Validation** - Updated appearance of form validation prompts to use a more lightweight style. Added variables for controlling error validation prompt styles in `form.variables`
- **Site** - Added global variable `@focusedFormBorderColor` for controlling form focus border color
- **Form** - `inverted form` now remove input border, added new variables for controlling inverted form input styles
- **Form Validation** - Added `number` and `decimal` validations to form **Thanks @TonnyORG** [#2537](https://github.com/Semantic-Org/Semantic-UI/issues/2537)
- **Form Validation** - Form `onSuccess` and `onFailure` now receive current form fields as a parameter **Thanks @guodong**

#### Bugs

- **Form / Input** - Fixes `::placeholder` text color for `ui error input`, modifies form error placeholder color to distinguish from form value error color [#2786](https://github.com/Semantic-Org/Semantic-UI/issues/2786)
- **Form / Input** - Fixes issue where `ui input` would sometimes collapse to `0px` width, especially when used inside an `inline field` [#2705 [#2621 [#2821](https://github.com/Semantic-Org/Semantic-UI/issues/2821)
- **Form** - `disabled field(s)` now remove `pointer-events` allowing it to disable checkbox and dropdown functionality  [#555](https://github.com/Semantic-Org/Semantic-UI/issues/#555)
- **Form** - Date input and other special input in chrome now are the same height as normal input (adds custom vendor shadow dom styling) [#2704](https://github.com/Semantic-Org/Semantic-UI/issues/2704)
- **Form** - Form will no longer show messages that are empty in `error`, `warning`, or `success` state.
- **API** - API now will use automatically use `form` action if no api event is specified now  when form is `stateContext` but not initialized element
- **Build Tools** - Fixes issue on `win` platform where packaged theme would not correctly update when using watch due to regExp not matching windows path separators.
- **Form Validation** - Fixed issue with `get value(s)` where unchecked checkboxes would not correctly retrieve values
- **Form** - Dropdown in `inline field` now use auto width instead of 100%

### Version 2.0.6 - July 22, 2015

- **Form Validation** - In `2.0.4` `length` rules were corrected to match "exact length" and not "minimum length". This may have caused issues for those who were using this rule as min length previously. We've remedied any breaking changes introduced by by returning `length` to functioning as "minimum length" and added a new rule `exactLength` for matching exact length. #2681

### Version 2.0.4 - July 17, 2015

- **Form** - Added `doesntContain` and `doesntContainExactly` [#2638](https://github.com/Semantic-Org/Semantic-UI/issues/2638)
- **Form** - Fixed issue with `minLength[1]` validation not behaving same as `minLength > 2` [#2636](https://github.com/Semantic-Org/Semantic-UI/issues/2636).
- **Form** - Fixes errors when a field identifier is named `identifier` [#2629](https://github.com/Semantic-Org/Semantic-UI/issues/2629)
- **Form** - Form fields will now error when a non-string identifier is used
- **Formatting** - Fixed several source files that had `CR LF` (Windows) line endings [#2649](https://github.com/Semantic-Org/Semantic-UI/issues/2649)
- **Input** - Fixed `left action input` displaying with incorrect `input` border radius inside `ui form` [#2638](https://github.com/Semantic-Org/Semantic-UI/issues/2638)
- Added individual examples of all form validation rules

### Version 2.0.3 - July 8, 2015

- **Form** - URL regexp will now match now works correctly, and matches against non `http://` prefixed urls like `www.google.com`

### Version 2.0.1 - July 6, 2015

- **Form** - `reset` will no longer clear values if no default value is found [#2504](https://github.com/Semantic-Org/Semantic-UI/issues/2504)
- **Form** - Clarified usage for `reset` in form docs [#2504](https://github.com/Semantic-Org/Semantic-UI/issues/2504)

### Version 2.0.0 - June 30, 2015

- **Form Validation** - Form validation now passes settings through a `fields` object. This is to make form initialization match other components. The previous syntax will continue to work but will produce deprecation notices in console
- **Form** - `grouped inline field` no longer display horizontally. Use `inline field` instead for horizontal inline field groups.
- **Tab** - `onTabInit` and `onTabLoad` have been renamed to `onFirstLoad` and `onLoad` respectively. This is to conform to the naming conventions of other modules (no self reference). Previous callbacks will continue to work but will produce deprecation notices in console. Two new callbacks `onVisible` and `onRequest` have been added as well.
- **Form** - Forms now use `flexbox` for creating field groups. Inline fields now support `(x) wide` sizing using `flex`
- **Popup** - Popup has been rewritten to drastically improve performance, especially when testing multiple positions.
- **Transition** - Fallback javascript animations have been removed from UI components like dropdown and popup to increase performance. This removes need for expensive pseudo selectors like `:visible`, `:animated` and `:hidden` and reduces filesize.
- **Form Validation** - Form validation now uses a single `settings` object like other modules. Using `(fields, settings)` will continue to work but will produce a deprecation notifications in `console`
- **Form Validation** - Form validation now supports many new validation rules, including some specifically for use with multiple select values.
- **Transition** - Transition code has been optimized to increase performance. 100% improvement on first animation, and 40% improvement on subsequent animations.
- **Visibility** - Visibility and sticky now use a more performant [pub/sub pattern](http://davidwalsh.name/pubsub-javascript) that will only attach a single event to context `scroll`.
- **Form** - Added a host of new styles for form fields autocompleted by your browser, including autocompleted error, and focus states
- **Form** - Added placeholder color rules for IE, `ms-input-placeholder`
- **Form** - Fix `errored field` dropdown keyboard selection color
- **Form** - Adds form `success` state
- **Form Validation** - Added `is valid` behavior, returns `true/false` if form is valid
- **Form Validation** - Added `different[field]` rule which requires a field to be different than another field
- **Form Validation** - `data-validate` now takes precedence over other validation matching schemes like `name` or `id`
- **Form Validation** - New rules for matching against custom regular expressions
- **Form Validation** - Form validation now has `minCount`, `maxCount`, and `exactCount` for validating multiple selections
- **Popup** - Popup now defines a `transform-origin` so animations will be affected by the direction the element is placed
- **Sidebar** - Improved animation performance through performance debugging. Sidebar now caches, width, height, rtl direction on load.
- **Visibility/Sticky** - Visibility now uses pub/sub pattern to greatly improve scroll performance when attaching multiple events
- **All Modules** - Performance logging now delays 500ms instead of 100ms for console logging to ensure all logs are captured in one group
- **All Modules/Transition** - Transitions no longer use `rotateZ(0deg)` to trigger GPU display of visible state. This causes issues with `transform` creating new stacking context that can disrupt `z-index`.
- **Dropdown** - Fixed `search dropdown` submitting parent form when enter shortcut pressed
- **Form** - Form will no longer set a height for `textarea` using the `rows` property
- **Form** - `inline fields` are now `1em` and do not match label's reduced size
- **Form** - `field` inside `fields` no longer produce double sized margins.
- **Form** - Form sizes and input sizes now inherit from `site.variables`
- **Form Validation** - Fixed bug causing `match` rule not to work as expected.
- **Form Validation** - Fixed `clear` and `reset` causing validation error to appear on checkbox if empty rule was set on checkbox.
- **Form Validation** - Form validation now validates correctly on `<select>` change
- **Form** - Fixed autocompleted `ui selection dropdown` having dropdown icon z-index issues
- **Form/Input** - `ui labeled input` inside `form` will no longer escape column width. `ui fluid input` will now use input widths shorter than browser default.
- **Form** - `set value` no longer automatically calls `validate form`
- **Sidebar** - Sidebar `legacy` animations have been removed. 3D transforms are now available in all supported browsers.

### Version 1.12.0 - April 13, 2015

- **Sticky** - Adds sticky module from `2.x` branch. Sticky elements now use pub/sub with drastically improved performance. Sticky elements that do not fit on page will now scroll at the same speed as the page is scrolled instead of slower.

### Version 1.11.6 - March 27, 2015

- **Form** - Fix `grouped required` fields display issues **Thanks @palmsey**

### Version 1.11.5 - March 23, 2015

- **Dropdown** - Dropdown `focus` color has been adjusted to match forms more closely

### Version 1.11.0 - March 3, 2015

- **Form** - `<select>` now receive error formatting on `form error` **Thanks @davialexandre**
- **Item ** - `img` inside of `ui item content` now do not receive size formatting by default
- **Form** - Added `input[type="search"]` styles to `ui form`

### Version 1.10.4 - February 28, 2015

- **API** - Remove console error message when no API url is specified but element is a `form` (defaults to `form` action)
- **API** - `api` check for [serialize object](https://github.com/macek/jquery-serialize-object) optional dependency no longer produces error when `serializeForm: true` and dependency is not found.

### Version 1.10.0 - February 23, 2015

- **Form Validation** - Adds `containsExactly`, `notExactly`, `isExactly` case sensitive validation rules, make `contains`, `not`, `is` case insensitive.
- **Form Validation** - `contains` rule is now case insensitive
- **Form Validation** - Validation messages no longer increase field height on `inline fields` like checkboxes after error appears

### UI Changes

- **Form** - Input rules now apply to `input[type="time"]`
- **Form Validation** - `get values`, `set values` now support multiple select e.g. `field[]`
- **Form Validation** - Dropdown and checkbox will now validate after interaction with `on: 'blur'`
- **Form** - `info message` are no longer hidden by default inside `ui form`
- **Form** - Lightened error dropdown hover text color to be more legible

### Version 1.8.0 - January 23, 2015

- **Form** - Form now has new methods `reset`, `clear`, `set value(s)`, and `read value(s)` for modifying and reading form data. Check docs for details on implementation. **Thanks @mktm**
- **Form** - Form will now prevent browsers from resubmitting form repeatedly when keydown is pressed on input field.
- **Button** - Fixes formatting for `disabled button` inside `ui buttons`

### Version 1.7.0 - January 14, 2015

- **Site** - Form input highlighting color added (helps differentiate form colors with autocompleted fields). Default text highlighting color moved from highlighter yellow to a mellow blue.
- **Popup** - Popup now uses `preserve: false` by default, this is slightly less performant but will reduce page clutter caused by leaving generated elements in the DOM
- **Sidebar** - `setup layout` not occurs synchronously if you initialize a sidebar without the proper html. This makes sure calls to sidebar will occur correctly before the page is setup. A new setting `delaySetup` will override this, increasing performance.
- **Modules** - Use of `$.proxy` swapped to native `function.call()` for performance gains across all modules

### Version 1.6.0 - January 05, 2015

- **Form** - ``ui search dropdown`` inside a form has incorrect focus style

### Version 1.5.0 - December 30, 2014

- **Progress** - Progress bars now display all intermediary percentage values when animating. Improved performance when progress bar is rapidly updated.
- **Form** - Fixed (x) wide field not having correct bottom field margin when in ``fields`` group on tablet or mobile
- **Form** - ``ui input`` now receives the same formatting as a normal input inside an ``inline field``
- **Input** - Fixed bug when ``ui action input`` uses a ``ui icon button``, button was receiving `i.icon` formatting.
- **List** - Fixed bug when using ``ui icon button`` or ``ui icon header`` causing element to receive icon formatting

### Version 1.4.0 - December 22, 2014

- **Form** - Form inputs without ``type`` specified are now formatted **Thanks PSyton**
- **Menu** - Fix formatting of ``ui selection dropdown`` inside ``menu``

### Version 1.3.0 - December 17, 2014

- **Form** - Form will no longer process validation rules on disabled fields
- **Table** - Table now has a ``structured table`` type, which removes some formatting considerations to support complex table layouts with ``colspan`` and ``rowspan``
- **Form** - Fixed positioning of horizontal field groups, aka ``fields`` for mobile.

### Version 1.2.0 - December 08, 2014

- **Form** - Form validation now has parameter ``optional`` which will only validate a field against a set of rules if the user does not leave it blank **Thanks DHNCarlos**
- **Checkbox** - JS Checkbox now handles several variations of html. Labels can be before inputs, after, or not included at all. This should work better with server side form generation.
- **Item/Card** - Default link formatting inside element simplified to avoid adjusting other nested ``ui`` link styles
- **Form** - Fixes required checkbox asterisks formatting incorrect
- Fixed documentation on dropdown actions, form field widths, form validation types, and many odds & ends

### Version 1.1.0 - December 02, 2014

- **Transition** - Transition's caching of final display state and animation existence now has improved performance.
- **Icon** - ``remove icon`` is now formatted correctly when used as ``remove link icon``

### Version 1.0.0 - November 24, 2014

- **Form** - Date field has been removed, use a ``ui icon input`` with a ``calendar icon`` instead
- **General** - CSS animations now hint with will change properties to increase performance in supported browsers
- **Button** - Now has compact form, used for fitting into tight spaces
- **Form** - Form now has a success state which will automatically display success messages
- **Form** - Grouped fields and inline fields can now have labels
- **Form** - Forms in 'success' state will now show success messages inside
- **Form** - Inputs now use 1em font size and correctly match selection dropdown height
- **Form** - Inverted form now properly styles loader
- **Form** - New field type ``required`` formats labels to show filling out field is mandatory
- **Label** - Now has compact form, for fitting into tight spaces
- **List** - Child lists can now be formatted to sit inside text content

### Version 0.17.0 - May 9, 2014

- **Form, Input** - Fixes ``ui input`` to work correctly inside ``inline field``

### Version 0.16.0 - April 22, 2014

- **Form** - Fields can now be aligned to a grid **Thanks seralex-vi**
- **Checkbox** - Fixes issue where checkboxes with multiple line labels were appearing formatted incorrectly.

### Version 0.15.3 - April 04, 2014

- Fixes a variety of issues with malformed examples (thanks community)

### Version 0.15.2 - Mar 28, 2014

- **Menu** - Fixes formatting of attached segments with menus

### Version 0.15.0 - Mar 14, 2014

- **Form** - Forms, Dropdowns, and Inputs now have matching padding size, and use 1em font size to appear same size as surrounding text
- **Form Validation** - Form validation now automatically revalidates a selection dropdown on change when invalid

### Version 0.14.0 - Mar 03, 2014

- **Form** - Form fields with errors will now properly style dropdown elements **Thanks Musatov**

### Version 0.13.1 - Feb 28, 2014

- **Checkbox** - Fixes checkbox appearance inside inverted forms
- **Input** - Fixes ui input to inherit form sizing
- **Form Validation** -  Fixes form validation regular expression matching **Thanks icefox0801**

### Version 0.13.0 - Feb 20, 2014

- **Form** - Grouped form fields now have responsive styles for mobile
- **Form Validation** - Form validation now rechecks on all form change events, not just input change
- **Menu** - Fixes dropdown formatting when used **inside* a menu item
- **Menu** - Fixes formatting of grouped icon buttons inside menus

### Version 0.12.4 - Jan 29, 2014

- **Form** - Fixes issue with onSuccess not allowing cancellation of form submit in form validation

### Version 0.12.2 - Jan 21, 2014

- **Form Validation** - Adding custom validation is now simpler, uses syntax ``$('.form').form('add prompt', identifier, 'Error message');``

### Version 0.12.1 - Jan 15, 2014

- **Message** - Prevents close icon from being misformatted in icon message **thanks MohammadYounes**

Some updates to docs formatting

### Version 0.12.0 - Jan 06, 2014

- **Icon** - Fixes unnecessary formatting on thumbs up/down
- **Form** - Fixes all validation input to be trimmed for whitespace

### Merry Christmas!

-**Transition**: Transition has been completely rewritten, performance should be about 10x after first animation due to caching and use of request animation frame

### Version 0.10.0 - Dec 05, 2013

- **Grid** - Adds ``doubling`` responsive variation which automatically formats content spacing based on device type
- **Form Validation** - Adds two new parameters, to allow for changing of revalidation and delay on input
- **Dropdown** - Value can be retrieved even in instances where forms arent used

### Version 0.9.4 - Nov 24, 2013

- **Form** - Adds input type="url" to forms

### Version 0.9.1 - Nov 7, 2013

- **Accordion** - Adds formatting for nested accordions

### Version 0.9.0 - Nov 5, 2013

- **Form** - Darkens placeholder text color to be more visible

### Version 0.8.3 - Oct 30, 2013

- **Form** - Fixes issues with form validation not escaping regex characters
- **Form** - Errored fields now have their icons and corner labels colored appropriately
- **Labels** - Fixes formatting of links inside labels

### Version 0.7.0 - Oct 22, 2013

- **List** - Adds documentation for module format
- **Sidebar** - Sidebar now have several size variations, and a new styled variation that comes preformatted
- Code samples will now automatically format indention

### Version 0.6.3 - Oct 15, 2013

- Dropdown changeText and updateForm have been deprecated and will be removed in 1.0
- Simplified possible dropdown actions changeText and updateForm are now consolidated into activate which is the new default

### Version 0.6.1 - Oct 15, 2013

- Adds small/large sizing of modal, reformats default modal size to be slightly inset from page grid
- Adds automatic menu formatting for buttons inside menus
- Fixes right menu formatting in secondary menus

### Version 0.3.6 - Oct 7, 2013

- Updates form and accordion docs
- Dropdown action default is now automatically determined based on type of dropdown, select dropdowns now will update form fields with default options
- Adds more html5 form support for forms (deneuxa)

### Version 0.3.2 - Oct 2, 2013

- Dropdown now formats top and right arrow icons automatically with icon coupling with sub menus

### Version 0.2.5 - Sep 28, 2013

- Fixes dropdown to now set active item to whatever hidden input field is when using action updateForm

### Version 0.2.1 - Sep 28, 2013

- Modals can now have an icon in its left content that will be automatically formatted

### Version 0.2.0 - Sep 28, 2013

- Removed selector count from performance logs

### Version 0.1.0 - Sep 25, 2013

- Updated documentation for sidebar, transition, and form validation