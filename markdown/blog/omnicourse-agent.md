---
title: OmniCourse-Agent is ready!
date: "2019-08-26"

tags:
  - omnicourse
  - omnicourse-agent
  - browser
  - extension
  - json
  - descriptor
  - generator
  - chrome
  - firefox
---

![Waiting screen](waiting.png)

**Learning** is fun! ^\_\_^ And _online courses_ have been, for months, one of my favorite didactic media!

However, it is also true that _any human activity_ cannot proceed _by chance_: on the contrary, it is paramount to constantly _monitor_ the intellectual effort so as to _understand_ its main directions and, consequently, _guide_ the overall process.

The very first idea that came to my mind in order to keep track of my completed courses was _a spreadsheet_ - but its traditional tabular format was definitely not expressive enough - I needed a much finer analysis.

[OmniCourse](https://github.com/giancosta86/OmniCourse), at the very heart of the 13th version of [my website](https://gianlucacosta.info/), is the most important step towards such a goal, as it mixes:

- a minimalist **React component** displaying _drillable pie charts_ and _tables_

- a **flexible taxonomy** of online courses - expressed in **JSON** format and almost completely arbitrary in terms of _structure_ and _nesting_

- a **drill-down engine**, computing _the total number of courses_ and _minutes spent_

However, even though OmniCourse automates most of the mathematical work, it can still feel somehow impractical due to a few aspects:

- **data entry**: _course information must be manually gathered_, which can be fairly cumbersome as the number of courses increases

- **data format**: by default, JSON is not validated; therefore, _creating descriptors can be very error-prone_

## OmniCourse-Agent to the rescue

**OmniCourse-Agent** fills the gaps left by OmniCourse: when the user visits the web page of a course, a click on its toolbar button is all that it takes to automatically generate an OmniCourse descriptor using the information gathered from the page itself!

![Descriptor](descriptor.png)

## Exploring advanced JavaScript

OmniCourse-Agent is a browser extension devoted to _learning_, but it was a veritable **learning experience** by itself:

- **browser APIs** - for both _Chrome_ and _Firefox_ - were a totally unexplored field for me. Consequently, I had to revise my architecture a few times - in particular, to achieve _elegant message passing_ between the extension components

- **vanilla ES6** concepts - such as:

  - **IIFEs**, especially to create modules

  - **Promises** - with lots of **async/await**

  - **DOM manipulation** - mainly via _querySelector_

  - modern syntax

- **Node APIs** and **packages** - to create **elegant** and _flexible_ build scripts that are also _OS-independent_

## Future developments

OmniCourse-Agent is currently _not available on the main extension portals_ - instead, its artifacts can be downloaded from its GitHub page.

This situation introduces 2 major disadvantages:

- the installation process is _slightly more difficult_ - but that can be solved via the instructions within its [README file](https://github.com/giancosta86/OmniCourse-Agent/blob/master/README.md)

- the **update process** is not automatic - that is, _new versions must be installed manually_

However, I'm considering the idea of deploying OmniCourse-Agent to the official extension portals - so please, stay tuned! ^\_\_^!

## Further references

- [OmniCourse-Agent](https://github.com/giancosta86/OmniCourse-Agent)

* [OmniCourse](https://github.com/giancosta86/OmniCourse)
