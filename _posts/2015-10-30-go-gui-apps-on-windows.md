---
title: Visual applications with Go on Windows
---


### Introduction

[Go](https://golang.org/) is a great programming language, supporting more and more cross-platform libraries for the creation of visual applications - especially [GTK](http://mattn.github.io/go-gtk/) and [gxui](https://github.com/google/gxui).

The setup on Linux is generally very simple - on Ubuntu, for example, you'll just have to install the C compiler system and the required C libraries via the *apt-get* package manager.

In this short article we will see how to configure a 64-bit Windows in order to develop a visual application.


### Setting up the C toolchain and libraries

1. Download Go from the [Download section](https://golang.org/dl/) of its website.

2. Download [Win-Builds](http://win-builds.org/)'s setup launcher from its [Download area](http://win-builds.org/doku.php/download_and_installation_from_windows) and run it.

3. Choose the following settings:
  * **Target system**: *Native Windows*
  * **Architecture**: *x86_64*
  * **Directory**: *C:/opt/windows_64*  (mandatory)

4. Click **OK**.

5. Click the **Process** button and wait a few minutes for the installation to complete. Then, close the setup window.

6. Set the following environment variables as follows:
  * **PATH**: add *C:\opt\windows_64\bin*
  * **PKG_CONFIG_PATH**: set to *C:\opt\windows_64\lib64\pkgconfig*

This concludes the C toolchain and libraries setup! Now, we are ready to install Go's visual libraries! ^\_\_^

**Please, note:** for 32-bit systems, the process is similar - just choose a different *Architecture* parameter in the installer and change the above paths accordingly.


### Installing GUI libraries for Go

This task usually requires Go's setup tool, *go get*; please, refer to the documentation of your favorite GUI library to know the exact command line to employ.

If everything was installed correctly, the command should print no output, completing after a few minutes; otherwise, please double-check your Win-Builds directory and your environment variables.


### Compiling a visual Go program

By default, on Windows, running GUI programs created with Go will show the DOS window as well.

To prevent this default behavior, you can compile the app by adding the following parameter to *go build*: **-ldflags "-H windowsgui"**. For example:

```
go build -ldflags "-H windowsgui" SourceFile.go
```

On Linux, no additional arguments are required.
