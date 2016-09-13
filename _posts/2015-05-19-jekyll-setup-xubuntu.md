---
title: Installing Jekyll on Xubuntu

tags:
  - Jekyll
  - Xubuntu
  - setup
---

[Jekyll](http://jekyllrb.com/) is a brilliant tool for static website creation, and installing its latest version on my Xubuntu 15 machine was definitely easy:


0. Open a root shell by running:

   ```bash
   sudo -i
   ```
	 and typing your password

0. Execute:

   ```bash
   apt-get install ruby ruby-dev nodejs
   ```

	 and confirm

0. Run:

   ```bash
   gem install jekyll
   ```

0. Exit the root shell:

   ```bash
   exit
   ```



And that's all! ^\_\_^! Jekyll is now ready!


## Further references

* [Jekyll website](http://jekyllrb.com/)
* [Markdown syntax](http://daringfireball.net/projects/markdown/)
* [Markdown live preview](http://markdownlivepreview.com/)
* [W3C Markup Validation Service](https://validator.w3.org/)
