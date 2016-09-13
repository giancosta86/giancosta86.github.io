---
title: Writing custom rulesets for EasyPmd
tags:
  - EasyPmd
  - PMD
  - Java
  - ruleset
---
When parsing your Java code, EasyPmd internally calls PMD, so you can create your custom sets of rules (that is, *rulesets*), in addition to - or instead of - the predefined ones, for maximum flexibility.

A ruleset is basically an XML file stating which rules should be included or excluded. The format of this file is explained, with some useful examples, at: [http://pmd.sourceforge.net/howtomakearuleset.html](http://pmd.sourceforge.net/howtomakearuleset.html).

We'll now see how to define rulesets and how to configure EasyPmd to support them:

1. Create an empty directory and create your first ruleset as an XML file within it; the ruleset could be one of the examples presented in the above link.

   You might also want to create other rulesets: in this case, just create other XML files in the same directory or in subdirectories.

2. Now, you'll have to create a jar file containing the content of the rulesets directory. To do this, open your command line in the directory itself, then, assuming that the JDK tools are in your PATH, execute the following line:

   ```bash
   jar cvfM ../PmdRulesets.jar *
   ```

	 This will create, in the parent of your rulesets directory, a jar file containing all the files and subdirectories within the rulesets directory, recursively.

	 Of course, you can use any valid name for your jar file; additionally, you can move the file wherever you want.

3. Now, start NetBeans and open the options dialog for EasyPmd.

4. In the `Additional classpath` tab, click on `Add Jar...` and select your jar file; alternatively, if you have specific needs, you can enter a custom URL, if you wish.

5. In the `Rulesets` tab, remove all the pre-existing rulesets, then click on `Add custom...` and type just the relative file names of the ruleset you want to use - for example, `MyRuleset.xml`.

6. Repeat the above step for any other ruleset in the jar file. For rulesets within subdirectories, use the format `{dirName1}/{dirName2}/.../{ruleSetName}.xml`

7. Click `OK`

**NOTE**: In the `Rulesets` tab, you can choose to use your custom rulesets either in addition to or instead of the predefined ones provided by PMD.

However, please remember that PMD's rulesets always have precedence, in the classpath, over custom rulesets. You will probably want to use subdirectories to avoid naming conflicts, just as you would do when creating Java packages.

**NOTE 2**: For further information on PMD's options, please refer to EasyPmd's online help, which is integrated into the NetBeans help system, or to PMD's website.

**NOTE 3**: PMD allows you to create your own rules: custom rules can currently be written either in Java or XPath, and can be plugged into PMD (and therefore into EasyPmd) by using, unsurprisingly, a custom ruleset.
