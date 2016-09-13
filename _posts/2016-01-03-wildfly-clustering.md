---
title: Magellan - A clustering tutorial with WildFly, nginx, Scala(FX) and Gradle
tags:
  - networking
  - clustering
  - WildFly
  - nginx
  - Scala
  - ScalaFX
  - Gradle
  - MoonDeploy
  - EJB
  - JNDI
  - tutorial
---

## Introduction

*High availability* is an essential requirement for more and more websites:

* there should *not* be significant delays as the number of simultaneous requests increases

* in case of a hardware or software failure, the website should continue to work

* there should be a way to *dynamically adjust* the capabilities of the infrastructure


From our WildFly-oriented point of view, a **cluster** can be defined as a set of server instances (*nodes*) that behave as a single network component serving requests; it effectively addresses the above issues:

* all the nodes in the cluster are equivalent and can reside on any machine; usually, a client is able to address *any node* and receive *the very same response*, thanks to *state replication*

* should a node crash, the overall cluster *continues with its activity*

* *nodes can be dynamically added and removed*, according to the current requirements - for example, new instances can be introduced to support request peaks and shut down later

In such a scenario, **load balancing** is a complementary tool, creating a sort of *network facade* making clustering totally transparent to clients - as they actually refer to a well-defined access point.


This tutorial will guide us step by step - without any claim of completeness - through the setup of a cluster and the deployment and execution of [Magellan](https://github.com/giancosta86/magellan), a simple, open source Java EE application consisting of:

* a *Java Enterprise Archive* (**ear**), containing:

  * a *web application* with a few *servlets*
  * an *EJB-jar* providing a *stateful EJB*

* a *JavaFX* rich client application


While playing with clustering, we'll deal with a wide range of modern technologies:

* [WildFly](http://wildfly.org/) 9, the latest stable version of the robust and advanced WildFly Java EE server - and the project has been tested with the upcoming WildFly 10 as well

* The beautiful [Scala](http://scala-lang.org/) language, which proved effective and a pleasure to use in the [Java EE](http://docs.oracle.com/javaee/) domain as well

* [Java JDK](http://www.oracle.com/technetwork/java/javase/overview/index.html) 8, providing a rich ecosystem for a variety of languages and frameworks

* The concise and efficient [nginx](http://nginx.org/) server for load balancing

* [JavaFX](http://www.oracle.com/technetwork/java/javase/overview/javafx-overview-2158620.html) - wrapped by the outstanding [ScalaFX](http://www.scalafx.org/) library - to create a rich client running in a Java SE virtual machine

* [Gradle](http://gradle.org/), to manage inter-project dependencies and produce a sophisticated enterprise artifact with just one click (or one command line) - without manually copying and assembling intermediate artifacts

* [MoonDeploy](https://github.com/giancosta86/moondeploy), to download and run the rich client application directly from the web browser


Since we are working in the Java ecosystem, any OS supporting Java can be employed while following the suggested steps.



## Standalone and domain clustering

With regard to clustering, WildFly supports two distinct *operating modes*:

  * **standalone**: each server instance is configured independently. Despite the easy inital setup, it requires dedicated deployment and configuration for *every* single enterprise artifact (applications, EJB-jars, WARs, JDBC drivers, ...) on *every* single WildFly instance

  * **domain**: the nodes share a common management interface - deployed artifacts and configuration are automatically replicated to every node in the cluster

Despite the fundamental differences, both clustering modes support state replication; therefore, for the sake of simplicity, in this article we'll learn how to create a cluster of *two standalone servers* on the same machine - but several ideas and concepts apply to domains as well.



## Creating a standalone cluster

First of all, we'll start two different instances (*nodes*) of WildFly:

0. Download the latest stable version of WildFly from its [download page](http://wildfly.org/downloads/) and extract the zip twice, creating two identical directory trees - let's assume they are named **wildfly-alpha** and **wildfly-beta**

0. In a terminal, `cd` to `wildfly-alpha/bin` and run the command:

   ```bash
   ./standalone.sh -c standalone-ha.xml -u 230.0.0.4 -Djboss.node.name=alpha -Djboss.socket.binding.port-offset=1
   ```

    Where:

    * `-u` declares *the multicast address shared by all the server instances in the cluster*

    * `-Djboss.node.name` introduces a *node name*; every server instance must have its **unique** node name

    * `-Djboss.socket.binding.port-offset` adds the given offset to every default port number defined by the server instance - especially convenient when starting multiple nodes on the same machine


0. In another terminal (or, better, another terminal tab), `cd` to `wildfly-beta/bin` and run:

   ```bash
   ./standalone.sh -c standalone-ha.xml -u 230.0.0.4 -Djboss.node.name=beta -Djboss.socket.binding.port-offset=2
   ```

   Compared to the previous server invocation:

   * The *multicast address* is the very same

   * The *node name* and the *port offset* are different


The cluster is ready! To test its capabilities, we are going to deploy Magellan, our Java EE application.


## Deploying Magellan

0. Download the **.ear** archive from the [latest release page](https://github.com/giancosta86/magellan/releases/latest)

0. Copy it to the `standalone/deployments` subdirectory, *for both WildFly instances*

Incidentally, please consider that Magellan is a standard Java Enterprise application, so it could be deployed to other Java EE servers, such as GlassFish, to study high availability.



## Testing HTTP session replication

0. Point your web browser to the following addresses:

    * [http://localhost:8081/magellan](http://localhost:8081/magellan)

    * [http://localhost:8082/magellan](http://localhost:8082/magellan)

0. By refreshing each page, you'll see an increment *of the very same counter* (stored in the replicated HTTP session)



## The session-based servlet

You might wonder what special classes are employed by the servlet to achieve session replication: luckily, the answer is *none* - clustering is completely transparent to the source code of Java EE components.

On the other hand, your web application *must* include the `<distributable>` tag in its `web.xml` descriptor: were it missing, both pages would see their counter *reset to 0* whenever you switch from one page to the other!


#### Reference files

* [Servlet](https://github.com/giancosta86/magellan/blob/master/magellan-war/src/main/scala/info/gianlucacosta/clustering/magellan/web/SimpleSessionServlet.scala)

* [web.xml configuration file](https://github.com/giancosta86/magellan/blob/master/magellan-war/src/main/webapp/WEB-INF/web.xml)



## Load balancing with nginx

While verifying that our virtual nodes compose a cluster, we noticed that contacting either of them is equivalent; however, an inconvenience arises: we *always* need to know their network address. Not only: should a node crash, we'd have to remember the address of the *other* node - and what if our cluster includes thousands of nodes?

*Load balancing* is the natural solution to the problem; a *load balancer* is a network component that:

* is generally *not* part of the cluster in terms of state replication, but actively interacts with it, defining a wider network unit

* listens onto a network address, which is *the only address referenced by the clients*

* knows the network address of all the nodes in the cluster

* when a request arrives, delivers it to a node, according to a wide range of possible algorithms and parameters

In other terms, a load balancer is fairly similar to the *Facade* design pattern in OOP sofware engineering.


There are several kinds of load balancers:

* dedicated, hyper-optimized hardware

* dedicated software

* HTTP servers with modules for load balancing

What's more, a few solutions also provide *replication*, not to make the load balancer a *single point of failure* - that is, if one of the load balancer components crashes, the balancer as a whole continues serving at the given address.


In this tutorial, we'll employ [nginx](http://nginx.org/) - an elegant, minimalist and fast server, providing fine-grained load balancing with just a few lines of configuration; another idea could be *mod_cluster*, a module for Apache HTTP server dedicated to WildFly.


The steps are quite straightforward:

0. Install nginx. It should be available as a binary package for most operating systems. On Linux, in particular, you can also:

    0. Download and extract the source code archive

    0. Open a terminal and `cd` to the extracted directory

    0. Run the usual set of commands:

       ```bash
       ./configure --prefix="<where you want to install nginx, for example $HOME/nginx>"

       make

       make install
       ```

    0. Add its **sbin** directory to your **PATH** environment variable

0. Download the configuration file for our cluster topology, **nginx-balancer.conf**, from [Magellan's release files](https://github.com/giancosta86/magellan/releases/latest)

0. Run:

   ```bash
   nginx -c "<path to the configuration file>"
   ```

0. Navigate to [http://localhost:8080/magellan](http://localhost:8080/magellan) and refresh the page a few times

0. Turn off either WildFly server, and notice that the web application runs unaffected after refreshing the page

0. Restart that instance and shut down the other - further page refreshes will continue showing increased values for the counter.



## Creating a stateful session bean

Stateful session beans are transparently replicated; should you need to deploy them to less recent server versions, you can mark them via the `@Clustered` annotation and/or specific tags in the `jboss-ejb3.xml` descriptor.

For consistency, we'll expand the "counter" example by implementing a basic EJB counter, in `magellan-ejb`.


#### Reference files

* [Stateful EJB](https://github.com/giancosta86/magellan/blob/master/magellan-ejb/src/main/scala/info/gianlucacosta/clustering/magellan/ejb/CounterBean.scala)



## Connecting to the EJB from the web tier

Now, we want to create a servlet showing the value of our EJB counter for the current HTTP session.

Here comes the tricky part; one might think to:

  * employ `@EJB` to locally or remotely inject the bean into the servlet

  * resolve the EJB by instantiating `InitialContext` in the `doGet()` servlet method and consequently call `lookup()`

Unfortunately, neither of the above methods will work correctly.

The 2 simplest solutions are perhaps:

1. Employ a proxy *CDI bean*:

    0. Create a `@SessionScoped` CDI bean *in the web project* - named, for example, `CounterClient`

    0. Inject the counter EJB into it - via `@Inject` or `@EJB` - in order to keep the reference to the counter EJB for the life of the HTTP session

    0. Inject `CounterClient` (via `@Inject`) into the servlet

    The advantages of such approach are:

      * you do not need to perform explicit lookups if the web tier is in the same **ear** as the EJB tier - thus supporting local injection

      * the client bean can add logic to simplify the interface of the wrapped EJB - or it can just expose the original bean via a getter, or introduce a mixed approach

      * finally, by using `@Named`, you can easily integrate it into other technologies, such as Java Server Faces.

2. Call HttpSession's `getAttribute()` method to retrieve the EJB handle, looking it up via `InitialContext` only if it was not found. A drawback is that such approach would require an explicit naming operation even for resolving a local interface.


#### Reference files

* [CounterClient](https://github.com/giancosta86/magellan/blob/master/magellan-war/src/main/scala/info/gianlucacosta/clustering/magellan/web/counter/CounterClient.scala)
* [CounterServlet](https://github.com/giancosta86/magellan/blob/master/magellan-war/src/main/scala/info/gianlucacosta/clustering/magellan/web/counter/CounterServlet.scala)
* [ResetCounterServlet](https://github.com/giancosta86/magellan/blob/master/magellan-war/src/main/scala/info/gianlucacosta/clustering/magellan/web/counter/ResetCounterServlet.scala)


## Testing the web-EJB connection

Once again, we can employ our load balancer, and run:

* [http://localhost:8080/magellan/counter](http://localhost:8080/magellan/counter) to see the ever-increasing value of the counter bean

* [http://localhost:8080/magellan/counter/reset](http://localhost:8080/magellan/counter/reset) to reset its value

By alternately shutting down the server instances like we did for the session servlet, we can test state replication for our bean.



## The ScalaFX client

What if we want to access a stateful EJB from a *rich UI client*? In this example, a ScalaFX app will call the methods exposed by the *counter* EJB - with each execution of the app referencing a different bean instance.

ScalaFX is a simple and elegant library providing Scala bindings and new syntax constructs for the modern JavaFX GUI toolkit.

The suggested way to run the example is [MoonDeploy](https://github.com/giancosta86/moondeploy), an open source deployment tool similar to Java Web Start: if MoonDeploy is installed, just click on `App.moondeploy` in Magellan's [latest release](https://github.com/giancosta86/magellan/releases/latest) file list and open it with MoonDeploy - the application will be downloaded and started.

By clicking on the two buttons shown in the JavaFX user interface, you'll actually interact with the session bean on the server.


## Highlights of the ScalaFX client

The core of the program is the interaction with the stateful EJB - which is **not** a standard, portable process; in the case of WildFly, a few basic steps are required:

0. Reference `org.wildfly:wildfly-ejb-client-bom:WILDFLY_VERSION` as a dependency in the Gradle build script - where `WILDFLY_VERSION` could be, for example, `9.0.2.Final`

0. Reference the **client interface library** provided by the EJB developer - in this case, as the Gradle projects share the same root project, we just employed `project(":magellan-common")`

0. Perform an *almost* standard JNDI lookup:

    0. Instantiate an `InitialContext` with no constructor parameters

    0. Call its `lookup()` method, passing the portable JNDI name *without the* `java:global/` *prefix*, then casting the result to the remote interface; in the example, the reduced JNDI name is:

        `Magellan/magellan-ejb/CounterBean!info.gianlucacosta.clustering.magellan.ejb.CounterRemote`

        whose components are:

          * **App name**: *Magellan*
          * **Module name**: *magellan-ejb*
          * **Bean name**: *CounterBean*
          * **FQN of the referenced interface**: *info.gianlucacosta.clustering.magellan.ejb.CounterRemote*

    0. Just call the methods of the remote interface, as if it were a local object

0. Create a `jndi.properties` file in `src/main/resources`, required to correctly instantiate the `InitialContext` in the above steps; alternatively, you might choose to pass a *Hashtable* to *InitialContext*'s constructor, especially in case of dynamic parameters.

0. `jndi.properties` must include at least the following lines:

    * **java.naming.factory.initial**=*org.jboss.naming.remote.client.InitialContextFactory*
    to declare the provider employed by JNDI so as to connect to the server

    * **java.naming.provider.url**=*http-remoting://localhost:8081,http-remoting://localhost:8082*
    a comma-separated list of nodes in the cluster used for connecting to the cluster.
    We are passing the explicit list of addresses because our load balancer handles HTTP interactions - which is not the case of the rich client

    * **jboss.naming.client.ejb.context**=**true**
    mandatory when you perform an EJB lookup


#### Reference files

* [jndi-properties](https://github.com/giancosta86/magellan/blob/master/magellan-app-client/src/main/resources/jndi.properties)
* [App](https://github.com/giancosta86/magellan/blob/master/magellan-app-client/src/main/scala/info/gianlucacosta/clustering/magellan/appclient/App.scala)
* [CounterBeanService](https://github.com/giancosta86/magellan/blob/master/magellan-app-client/src/main/scala/info/gianlucacosta/clustering/magellan/appclient/CounterBeanService.scala)



## Conclusion

Well, it seems we have covered quite a bit of ground! ^\_\_^ I really hope you have found this brief tutorial a helpful starting point for learning more about clustering, load balancing and the world of Java EE in general - especially with **WildFly**, **Gradle** and the **Scala** programming language! ^\_\_^


## Further references

* [Magellan project page on GitHUb](https://github.com/giancosta86/magellan)

* [WildFly - High Availability Guide](https://docs.jboss.org/author/display/WFLY8/High+Availability+Guide)

* [WildFly - Operating modes](https://docs.jboss.org/author/display/WFLY8/Operating+modes)

* [WildFly - Load Balanced HA Standalone Cluster - Howto](https://docs.jboss.org/author/display/WFLY8/Load+Balanced+HA+Standalone+Cluster+-+Howto)

* [Clustering di Applicazioni in JBoss - Professor Paolo Bellavista](http://lia.deis.unibo.it/Courses/sd1516-info/lucidi/11-clustering%281x%29.pdf)

* [WildFly - Remote EJB invocations via JNDI - EJB client API or remote-naming project](https://docs.jboss.org/author/display/WFLY8/Remote+EJB+invocations+via+JNDI+-+EJB+client+API+or+remote-naming+project)

* [WildFly](http://wildfly.org/)

* [Java EE](http://docs.oracle.com/javaee/)

* [Scala](http://scala-lang.org/)

* [ScalaFX](http://www.scalafx.org/)

* [JNDI](http://docs.oracle.com/javase/tutorial/jndi/index.html)

* [MoonDeploy](https://github.com/giancosta86/moondeploy)
