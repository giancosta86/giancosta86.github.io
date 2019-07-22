---
title: MoonDeploy 2.0 is ready!
date: "2016-01-01"

tags:
  - moondeploy
---

I have always been fond of **Java Web Start** - I love the idea of clicking on a link in the web browser and having an application downloaded and run by a dedicated tool.

Unfortunately, I started noticing a few constraints in Java Web Start:

- it is _optimized for the JVM_ - but what if you want to deploy a .NET assembly, or a Go executable, or a set of Python scripts?

- it employs _code certificates_ more and more, which are _extremely_ secure and robust - but you might prefer to employ other security techniques (such as HTTPS), especially if you already rely on a secure website

- it is _not_ optimized for GitHub, a brilliant and very popular hosting service for software projects

Of course, there are other great solutions, such as _Getdown_ or _ZeroInstall_, but I wanted something new and very minimalist, still inspired by the existing ideas. And so I created MoonDeploy.

[MoonDeploy](https://github.com/giancosta86/moondeploy) is an open source tool designed to address the above issues:

- it is configured via _a simple JSON file_, which describes the archives containing the files for your application - which can be created using _any technology_. It also states how to run the app in the different operating systems

- There is no need to _compile_ the app descriptor: just write it with a text editor (or create it with an automated build tool) and deploy it with your packages - for example a single zip file created by Gradle's _application_ plugin

- it is _optimized for GitHub_: when requested by the app descriptor, it can query _GitHub's APIs_ to retrieve the latest version and compare it with the installed version

- it provides _granular versioning_ - an application is versioned, but _its packages as well_! Therefore, when an application starts, only new packages are downloaded

- it is _written in Go_, a native but easily portable programming language. Binary downloads for MoonDeploy are available for both Linux and Windows - and it should run on Mac OS too, if built from sources

- it is _open source_, hosted on GitHub

This is just a brief summary of its features, but there is more! ^\_\_^!

The new major version, just released, introduces a few enhancements, in particular:

- a **GTK+ 3** user interface, based on **Glade**, for better integration with modern systems and to simplify portability on Mac OS

- Shorter application path for GitHub projects relying on the concept of _latest release_

You are all invited to visit [MoonDeploy's project page](https://github.com/giancosta86/moondeploy), which contains an up-to-date list of its features, in-depth considerations and the syntax reference of the app descriptor format.

## Further references

- [MoonDeploy on GitHub](https://github.com/giancosta86/moondeploy)

- [MoonDeploy on Facebook](https://www.facebook.com/MoonDeploy)

- [Chronos IDE](https://github.com/giancosta86/Chronos-IDE) - the first application employing MoonDeploy

- [Java Web Start](http://docs.oracle.com/javase/tutorial/deployment/webstart/)

- [GitHub](https://github.com/)

- [Getdown](https://github.com/threerings/getdown)

- [ZeroInstall](http://0install.net/)

- [GTK+](http://www.gtk.org/)

- [Glade](https://glade.gnome.org/)
