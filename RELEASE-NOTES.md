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