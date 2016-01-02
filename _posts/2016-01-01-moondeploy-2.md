---
title: MoonDeploy 2.0 is ready!
---

I have always been fond of **Java Web Start** - I love the idea of clicking on a link in the web browser and having an application downloaded and run by a dedicated tool.

Unfortunately, I started noticing a few constraints in Java Web Start:

* it is *optimized for the JVM* - but what if you want to deploy a .NET assembly, or a Go executable, or a set of Python scripts?

* it employs *code certificates* more and more, which are *extremely* secure and robust - but you might prefer to employ other security techniques (such as HTTPS), especially if you already rely on a secure website

* it is *not* optimized for GitHub, a brilliant and very popular hosting service for software projects


Of course, there are other great solutions, such as *Getdown* or *ZeroInstall*, but I wanted something new and very minimalist, still inspired by the existing ideas. And so I created MoonDeploy.

[MoonDeploy](https://github.com/giancosta86/moondeploy) is an open source tool designed to address the above issues:

* it is configured via *a simple JSON file*, which describes the archives containing the files for your application - which can be created using *any technology*. It also states how to run the app in the different operating systems

* There is no need to *compile* the app descriptor: just write it with a text editor (or create it with an automated build tool) and deploy it with your packages - for example a single zip file created by Gradle's *application* plugin

* it is *optimized for GitHub*: when requested by the app descriptor, it can query *GitHub's APIs* to retrieve the latest version and compare it with the installed version

* it provides *granular versioning* - an application is versioned, but *its packages as well*! Therefore, when an application starts, only new packages are downloaded

* it is *written in Go*, a native but easily portable programming language. Binary downloads for MoonDeploy are available for both Linux and Windows - and it should run on Mac OS too, if built from sources

* it is *open source*, hosted on GitHub


This is just a brief summary of its features, but there is more! ^\_\_^!


The new major version, just released, introduces a few enhancements, in particular:

* a **GTK+ 3** user interface, based on **Glade**, for better integration with modern systems and to simplify portability on Mac OS

* Shorter application path for GitHub projects relying on the concept of *latest release*


You are all invited to visit [MoonDeploy's project page](https://github.com/giancosta86/moondeploy), which contains an up-to-date list of its features, in-depth considerations and the syntax reference of the app descriptor format.


## Further references

* [MoonDeploy on GitHub](https://github.com/giancosta86/moondeploy)

* [MoonDeploy on Facebook](https://www.facebook.com/MoonDeploy)

* [Chronos IDE](https://github.com/giancosta86/Chronos-IDE) - the first application employing MoonDeploy

* [Java Web Start](http://docs.oracle.com/javase/tutorial/deployment/webstart/)

* [GitHub](https://github.com/)

* [Getdown](https://github.com/threerings/getdown)

* [ZeroInstall](http://0install.net/)

* [GTK+](http://www.gtk.org/)

* [Glade](https://glade.gnome.org/)
