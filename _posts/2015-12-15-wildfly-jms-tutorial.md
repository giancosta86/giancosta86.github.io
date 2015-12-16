---
title: WildFly 9 - A JMS-oriented tutorial
---

Java Message Service (JMS) is a simple and elegant API abstracting message-oriented middleware; in this tutorial, we'll see how to easily set up a new instance of the WildFly 9 application server with JMS support.

Of course, this is just one of many possible configurations, but it should enable developers to quickly have a working JMS environment, especially when learning this technology for the first time; in particular, we'll consider how to expose HornetQ to local and remote clients, also creating *application users* for remote authentication.

The instructions are for Unix systems, but Windows users can easily customize the steps just by employing - in lieu of the mentioned *shell scripts* - the corresponding *.bat* files.


## Objectives

* Installing WildFly

* First-time configuration

* Starting WildFly with HornetQ, to enable messaging

* Creating a queue and a connection factory

* Configuring the authentication subsystem to define a user for sending messages (in case of remote access)

* Developing a basic servlet that sends a message to the queue

* Preparing a message-driven bean that receives messages from the above queue



## Adding a management user

1. Download and install a copy of WildFly from [its website](http://wildfly.org/)

2. Go to its **bin** directory, and run:

    > ./add-user.sh

    this script will request a few parameters. You should provide:

    * **Type of user**: *Management User*
    * **Username**: *your private username*
    * **Password**: *your private password*
    * **Groups**: *can be left empty*
    * **Used for one AS process to connect to another AS process?**: *yes*

3. We'll need to start, from the **bin** directory, the *Full* server profile, as the default profile does not include HornetQ:

    > ./standalone.sh \-\-server-config=standalone-full.xml

4. Open your favorite web browser, navigate to the [WildFly management web app](http://localhost:9990) and input your credentials chosen at step 2.

Good! ^\_\_^ WildFly is ready, and can be employed for your JavaEE applications!



## Creating a ConnectionFactory and a Destination

Now, we must create a **ConnectionFactory** and a **Destination** - for now, we'll just employ a *Queue*.

1. Go to the *Configuration* tab of the [Management web app](http://localhost:9990) and click on:

    > Subsystems --> Messaging (HornetQ) --> View

2. Click on **default**, then **Destinations**

3. In *Queues/Topics --> Queues*,  click **Add** and provide just these parameters:

    * **Name**: *MyQueue*
    * **JNDI Names**: *java:/myJmsTest/MyQueue*
    * **Durable**: *yes*

4. In the *Connection Factories* tab, click **Add** and input these settings:

    * **Name**: *MyConnectionFactory*
    * **JNDI Names**: *java:/myJmsTest/MyConnectionFactory*
    * **Connector**: *in-vm* **or** *http-connector*

    *in-vm* is the easier choice, as it doesn't require user authentication - but works only in the context of the very same JVM running the server; *http-connector* can be accessed by a remote client, but always requires authentication.

5. Finally, *if* you have chosen *http-connector* in the step above, open the *Security Settings* tab, click **Add** and provide these values:

    * **Pattern**: *#*
    * **Role**: *myJmsGroup*
    * **Send?**: *yes*
    * **Consume?**: *yes*
    * **Manage?**: *yes*


## Adding an application user

If you have chosen *http-connector* for the client factory, we need to configure an application user, required by HornetQ authentication. Therefore:

1. Go to WildFly's **bin** directory and run again:

    > ./add-user.sh

2. This time, choose the following parameters:

    * **Type of user**: *Application User*
    * **Username**: *arbitrary, but in this example we'll employ* **myJmsUser**
    * **Password**: *arbitrary, but in this example we'll employ* **myJmsPassword**
    * **Groups**: *arbitrary, or "guest", but in this example we'll employ* **myJmsGroup**
    * **Used for one AS process to connect to another AS process?**: *yes*


## Writing a producer servlet

To test the infrastructure, we are going to develop a servlet that, when invoked, will send a message to our queue.

**NOTE**: the call *connectionFactory.createConnection()* must receive username and password if the connection factory is based on *http-connector*; it *can* (and, actually, *should*) receive no parameters when using *in-vm*.

A simple code example might be:



~~~java
package info.gianlucacosta.jmstest.web;

import javax.annotation.Resource;
import javax.jms.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = "/send")
public class MyJmsServlet extends HttpServlet {
    @Resource(lookup = "java:/myJmsTest/MyConnectionFactory")
    ConnectionFactory connectionFactory;

    @Resource(lookup = "java:/myJmsTest/MyQueue")
    Destination destination;


    @Override
    protected void doGet(
      HttpServletRequest req,
      HttpServletResponse resp
    ) throws ServletException, IOException {
        PrintWriter writer = resp.getWriter();

        try {
            //Authentication info can be omitted if we are using in-vm
            QueueConnection connection = (QueueConnection)
              connectionFactory.createConnection(
                "myJmsUser",
                "myJmsPassword"
              );

            try {
                QueueSession session =
                  connection.createQueueSession(
                    false,
                    Session.AUTO_ACKNOWLEDGE
                  );

                try {
                    MessageProducer producer =
                      session.createProducer(destination);

                    try {
                        TextMessage message =
                          session.createTextMessage(
                            "Hello, world! ^__^"
                          );

                        producer.send(message);

                        writer.println(
                          "Message sent! ^__^"
                        );
                    } finally {
                        producer.close();
                    }
                } finally {
                    session.close();
                }

            } finally {
                connection.close();
            }

        } catch (Exception ex) {
            ex.printStackTrace(writer);
        }
    }
}
~~~

1. Compile this servlet and package it into a *.war* archive (a web application) - using your favorite development tools

2. Copy the *.war* file into the **standalone/deployments** directory in WildFly's directory. You don't need to shut down the server

3. Invoke the servlet, remembering that it's mapped to the **/send** path of its web application

4. If the servlet was successful, try returning to the Management web app and navigating to:

    > Runtime --> Standalone Server --> Subsystems --> JMS Destinations --> View

5. In the new page appeared, click on the **View** link next to *default*

6. After clicking on *MyQueue*, you should see **Message Count:	1** !



## Consuming the message with a message-driven bean

Our message is now in the queue, ready to be consumed - let's create a message-driven bean for this task!

Its code might be:

~~~java
package info.gianlucacosta.jmstest.beans;

import javax.ejb.ActivationConfigProperty;
import javax.ejb.MessageDriven;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;

@MessageDriven(activationConfig = {
        @ActivationConfigProperty(
                propertyName = "destination",
                propertyValue = "java:/myJmsTest/MyQueue"
        )
})
public class ReceivingMdb implements MessageListener {
    @Override
    public void onMessage(Message message) {
        if (message instanceof TextMessage) {
            TextMessage textMessage = (TextMessage) message;

            try {
                System.out.println(
                  String.format(
                    "A message was found! ^__^ It is: '%s'",
                    textMessage.getText()
                  )
                );
            } catch (Exception ex) {
                ex.printStackTrace(System.err);
            }
        }
    }
}
~~~

1. Compile this class and package it into an *ejb-jar*, using your favorite build tools

2. Copy the archive file into the **standalone/deployments** directory in WildFly's directory

3. Check the console: you should see the bean's output!



## Conclusion

In this brief tutorial we have seen:

* how to install Wildfly and start it with HornetQ support

* how to setup *management* and *application* users

* how to create a *ConnectionFactory* and a *Queue* in HornetQ

* how to write a toy servlet sending a message to the queue, and a message-driven bean consuming it

* how to deploy enterprise artifacts without restarting the server


This is just the beginning! ^\_\_^ I hope you'll find this tutorial a useful starting point for learning more about JMS and WildFly!


## Further references

* [WildFly application server](http://wildfly.org/)

* [HornetQ](http://hornetq.jboss.org/)

* [Java Platform, Enterprise Edition (Java EE) 7](https://docs.oracle.com/javaee/7/index.html)

* [Transaction and redelivery in JMS](http://www.javaworld.com/article/2074123/java-web-development/transaction-and-redelivery-in-jms.html)
