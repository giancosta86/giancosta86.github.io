---
title: The 13th version of my website is online!
date: "2019-07-22"
description: "Announcement of the 13th edition"

tags:
  - website
---

## Introduction

**Ten years** have passed since when I started designing the very first edition of _Gianluca Costa's Creations_: back then, I just sketched out an elementary layout consisting of a handful of HTML pages, which referenced a few lines of CSS 2 declarations.

Version after version, I have constantly _rethought the website_ - and, even better, it has become a sort of **playground** to discover _web technologies_: from raw HTML 4 to PHP, then Python and jQuery, later moving on to Jekyll, scripted SVG and, very recently, CSS 3 (especially Flexbox, gradients and shadows) and Bootstrap.

## Online courses

The heart of this new edition is [**the page dedicated to the interactive drill-down charts**](/courses) analyzing all the public online courses I've taken: it is provided by [OmniCourse](https://www.npmjs.com/package/@giancosta86/omnicourse) - my very first _React component_.

The charts are rendered by the **Google Charts** library and its wrapper for React, with a thin user interface coordinating the navigation process and displaying partial results.

Finally, the hierarchy of courses is published as [a JSON service](/courses.json), available for custom processing.

## A new technological stack

This _13th edition_ is _a paramount milestone_, focused on a wide variety of JavaScript-based, very modern technologies:

- **Gatsby**, replacing _Jekyll_, leverages the power of **NodeJS APIs** - to statically generate the website and its services (the [raw JSON of my completed courses](/courses.json), the [experimental JSON news feed](/news.json)) - and to provide simple and _elegant_ resource management

* **React**, the minimalist library to create _component-based user interfaces_ - including its most recent features like **useState()** and **useEffect()**, as well as common libraries - e.g., **classnames**

* **GraphQL**, providing a simple and _elegant_ unified data source aggregating a variety of _JSON_ and _Markdown_ files from all over the website source directory tree

* **NPM** (_Node Package Manager_) - both a vault of JavaScript libraries and a tool to easily handle _dependencies_ and _build phases_

* **NVM** (_Node Version Manager_) - ensures deterministic executions, which is paramount in a hyper-dynamic ecosystem such as JavaScript

## Enhanced user interface

Apart from introducing the _drill-down analytical engine_ for online courses, I have decided to _postpone major changes to the perceived user interface_, so as to be sure that the new stack works as expected.

However, I have _enhanced the styling of different areas_ of the website (especially the carousel of _featured projects_ and the menus) - in addition to introducing **CSS modules** for _scoped styling_ and further _media queries_ for a more natural experience on different devices.

While keeping the existing Bootstrap UI, I have managed to **replace CDN references with Webpack imports**, for a more elegant and deterministic bundling approach; furthermore, I have managed to integrate the **React version of Font Awesome's icons**.

As a cute symbol of both _creativity_ and _inclusion_, I have slightly redesigned the _jumbotron_ in the home page - painting a _rainbow gradient_ based on ideas derived from _Color Theory_.

## Elegance always matters

It was paramount to have a new, **JavaScript-based stack**, widely relying on _React_, so as to to enter the world of flexibility provided by **ES6** and key solutions like **NPM**.

To streamline the deployment, _CI/CD integration_ with **Travis CI**, recently explored with [Arcadia](https://gianlucacosta.info/Arcadia), is another asset of this edition.

Last but not least, while creating [OmniCourse](https://www.npmjs.com/package/@giancosta86/omnicourse), I have explored in detail how **transpilation** and **polyfills** work, especially via **Babel**: I have applied it to Gatsby itself, in order to write ES6 modules all over the project, but future versions of the website might be able to widely employ this interesting technology to _foster browser compatibility_.
