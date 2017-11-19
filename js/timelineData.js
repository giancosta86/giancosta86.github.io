var now =
    new Date()

var today =
    `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`


events = [
    {
        content: "My first PC",
        start: "1998-6-13"
    },

    {
        content: "First compiled (.exe) program",
        start: "1999-1-29"
    },

    {
        content: "Cambridge FCE",
        start: "2008-12-6"
    },

    {
        content: "Cambridge CAE",
        start: "2009-12-9"
    },


    {
        content: "1st version of my website",
        start: "2009-10-5"
    },


    {
        content: "Bachelor's Degree in Computer Engineering",
        start: "2009-7-24"
    },

    {
        content: "Cambridge BEC Higher",
        start: "2011-6-7"
    },


    {
        content: "MongoDB for DBAs",
        start: "2013-11-15"
    },


    {
        content: "MongoDB for Java Developers",
        start: "2013-12-15"
    },


    {
        content: "Diplôme Approfondi de Langue Française (DALF) C1",
        start: "2013-11-21"
    },

    {
        content: "MongoDB for Developers",
        start: "2014-1-15"
    },


    {
        content: "Master's Degree in Computer Engineering",
        start: "2016-12-19"
    },

    {
        content: "Goethe Zertifikat A2",
        start: "2017-1-25"
    },

    {
        content: "Goethe Zertifikat B1",
        start: "2017-6-15"
    },

    {
        content: "Latin competition - 6th Prize",
        start: "2003-6-8"
    },

    {
        content: "Prize to the 30 best Engineering students (2015/2016)",
        start: "2016-7-6"
    },
]



programmingLanguages = [
    {
        content: "Logo",
        start: "1998-9-1",
        end: "1999-1-29"
    },

    {
        content: "Delphi 1",
        start: "1999-1-29",
        end: "2000-9-1"
    },

    {
        content: "Delphi 4",
        start: "1999-5-1",
        end: "2006-9-1"
    },

    {
        content: "Visual Basic 6",
        start: "2000-9-1",
        end: "2004-6-10",
    },

    {
        content: "C",
        start: "2000-7-1",
        end: "2008-9-10",
    },

    {
        content: "Python",
        start: "2006-2-1",
        end: "2017-7-31",
    },

    {
        content: "Bash",
        start: "2005-2-10",
        end: "2016-6-1",
    },

    {
        content: "Java",
        start: "2004-6-25",
        end: today,
    },

    {
        content: "C#",
        start: "2007-11-10",
        end: "2014-6-15",
    },

    {
        content: "JavaFX script",
        start: "2010-2-10",
        end: "2010-5-10",
    },

    {
        content: "Go",
        start: "2014-10-1",
        end: "2016-6-1"
    },

    {
        content: "Prolog",
        start: "2015-6-1",
        end: "2015-9-1"
    },

    {
        content: "Elm",
        start: "2015-12-15",
        end: "2016-3-1"
    },

    {
        content: "Erlang",
        start: "2016-5-1",
        end: "2016-9-1"
    },

    {
        content: "Scala",
        start: "2015-2-15",
        end: today,
    }
]



webTechnologies = [
    {
        content: "HTML",
        start: "2004-6-30",
        end: today
    },

    {
        content: "CSS",
        start: "2008-2-2",
        end: today
    },

    {
        content: "JavaScript",
        start: "2008-2-2",
        end: today
    },

    {
        content: "J2EE",
        start: "2008-2-2",
        end: "2010-1-31"
    },

    {
        content: "Java EE",
        start: "2015-10-1",
        end: "2017-3-1"
    },

    {
        content: "Wildfly",
        start: "2015-10-1",
        end: "2016-2-1"
    },

    {
        content: "ASP.NET",
        start: "2009-7-1",
        end: "2009-12-10"
    },

    {
        content: "ASP.NET MVC",
        start: "2009-11-22",
        end: "2012-1-31"
    },

    {
        content: "PHP",
        start: "2009-8-1",
        end: "2013-4-15"
    },

    {
        content: "jQuery",
        start: "2009-12-21",
        end: today
    },

    {
        content: "jQuery UI",
        start: "2010-12-13",
        end: "2013-4-15"
    },

    {
        content: "Silverlight 4",
        start: "2010-6-30",
        end: "2011-1-20"
    },

    {
        content: "Struts",
        start: "2012-3-12",
        end: "2013-6-1"
    },

    {
        content: "Spring (old versions)",
        start: "2012-3-12",
        end: "2013-6-1"
    },

    {
        content: "Spring 4",
        start: "2017-6-1",
        end: "2017-10-16"
    },

    {
        content: "Play!",
        start: "2017-3-1",
        end: "2017-6-1"
    },

    {
        content: "Smarty",
        start: "2011-12-1",
        end: "2013-4-15"
    },

    {
        content: "React",
        start: "2017-4-15",
        end: today
    },

    {
        content: "Bootstrap",
        start: "2016-9-1",
        end: today
    },

    {
        content: "Java EE",
        start: "2017-10-1",
        end: today
    },
]



databaseTechnologies = [
    {
        content: "SQL",
        start: "2004-2-4",
        end: "2017-2-14"
    },

    {
        content: "Paradox",
        start: "2004-2-4",
        end: "2006-2-20"
    },

    {
        content: "PostgreSQL",
        start: "2006-2-20",
        end: "2017-7-30"
    },

    {
        content: "SQL Server 2008",
        start: "2009-11-1",
        end: "2011-3-1"
    },

    {
        content: "SQL Server 2012",
        start: "2013-6-30",
        end: "2014-6-15"
    },

    {
        content: "DB2",
        start: "2007-9-1",
        end: "2007-12-14"
    },

    {
        content: "Dynamo",
        start: "2017-2-1",
        end: "2017-4-30"
    },

    {
        content: "Oracle 10g/11g",
        start: "2011-1-6",
        end: "2011-12-31"
    },

    {
        content: "SQLite",
        start: "2011-2-1",
        end: "2011-12-31"
    },

    {
        content: "Fluent NHibernate",
        start: "2009-12-1",
        end: "2012-3-1"
    },

    {
        content: "MongoDB",
        start: "2013-6-30",
        end: "2014-6-30"
    },

    {
        content: "HyperSQL",
        start: "2016-10-1",
        end: today
    },

    {
        content: "MyBatis",
        start: "2012-11-1",
        end: "2013-2-28"
    },

    {
        content: "Hibernate",
        start: "2016-10-1",
        end: today
    }
]



systemAdministration = [
    {
        content: "Windows",
        start: "1998-6-13",
        end: today
    },

    {
        content: "DOS",
        start: "1998-7-1",
        end: "2000-6-13"
    },

    {
        content: "Linux",
        start: "2004-12-20",
        end: today
    },

    {
        content: "Android",
        start: "2012-5-26",
        end: today
    },

    {
        content: "Apache HTTP Server 2",
        start: "2009-8-17",
        end: "2015-6-15"
    },

    {
        content: "Apache Ant",
        start: "2011-5-5",
        end: "2012-7-1"
    },

    {
        content: "Maven",
        start: "2012-7-1",
        end: "2017-6-6"
    },

    {
        content: "Hudson",
        start: "2012-11-1",
        end: "2013-2-28"
    },

    {
        content: "Gradle",
        start: "2015-3-30",
        end: today
    },

    {
        content: "VirtualBox",
        start: "2014-9-30",
        end: today
    },

    {
        content: "Raspberry Pi",
        start: "2016-12-19",
        end: today
    },

    {
        content: "Docker",
        start: "2015-10-15",
        end: today
    }
]



otherFrameworks = [
    {
        content: "JavaFX",
        start: "2010-2-10",
        end: today,
    },

    {
        content: "Swing",
        start: "2004-8-25",
        end: today
    },

    {
        content: "Solr",
        start: "2013-9-1",
        end: "2014-3-1",
    },

    {
        content: "Windows Forms",
        start: "2007-12-1",
        end: "2014-6-15",
    },

    {
        content: "Pthreads",
        start: "2014-10-19",
        end: "2015-2-1"
    }
]

