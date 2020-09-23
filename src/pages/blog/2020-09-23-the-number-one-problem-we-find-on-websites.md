---
templateKey: blog-post
title: The number one problem we find on websites
date: 2020-09-23T18:09:29.650Z
description: After working on countless websites since 2008, we've seen just as
  many problems with them. Often, the client is completely unaware that they
  have issues with their website other than "it's not selling." Many of the
  problems we find are small. Sometimes, they are severe and hinder the client's
  ability to accomplish their goals in any meaningful way.
featuredimage: /img/ba_blog-featuredimage.jpg
tags:
  - Research & Analytics
  - eCommerce
  - Google Analytics
---
After working on countless websites since 2008, we've seen that, often, the client is completely unaware that they have issues with their website other than "it's not selling enough." Most of the problems we find are small, but some are severe and hinder the client's ability to accomplish their goals in any meaningful way.\
\
Of the severe problems that we see, the most common is an incorrectly installed Analytics script. You might be thinking, why is the incorrect analytics code considered a severe problem? Without correct data, it's impossible to make the right decisions about what's working and what isn't working on your website. At Ballistic Agency, accurate data is *everything*.

So how can you find out if your analytics code is working correctly? Before we check for the correct function, let's check for its presence in your website code. More than once, during a free consultation, we have found that the analytics code wasn't present on the site.

**To check for Google Analytics code, do this.**

If you're using Chrome and want to check the source code for the Analytics JavaScript:

1. Load a web page in the Chrome browser.
2. Right-click the page, then click **View page source**.
3. Use the Search function (Command-F or Control-F) to find code that looks like this:



```
<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
</script>
<!-- End Google Analytics -->
```



There are some instances where Google Analytics could be installed, and you don't see this code. If so, search instead for 'TagManager' as this might hide the analytics code in some cases.



**Other Common Analytics Problems**

1. Analytics code is installed twice (you'll notice that your bounce rate is below 20%)
2. The UA-### for Google Analytics is mismatched
3. The old version of Google Analytics code is installed (ga.js)
4. eCommerce tracking isn't enabled
5. The business's office IP hasn't been whitelisted
6. Analytics isn't installed on all pages
7. Campaigns aren't being tracked

Taking care of the number one problem we find on websites can be a little tricky. If you'd like us to take a look at your site and consult with you about growing your business, [contact us](https://ballisticagency.com/contact/). We'd love to help you achieve Optimized eCommerce™.