---
layout: post
title:  "Sparky & Slicey"
tagline: "Sparkline and Pie chart components."
categories: component
desktops:
- sparky_large
- slicey_large
todo:
- sparky_campaign_management_reporting_large TODO
- sparky_campaign_management_lineitems_large TODO
- slicey_campaign_management_reporting_large TODO
technologies:
- SVG
- AngularJS
- CoffeeScript
- JavaScript
- HTML
- Jade
- CSS
- Stylus
- Gulp
link: https://github.com/Adslot/sparky
---

At [Adslot] we need to draw a lot of line and column graphs per page.
This called for a performant solution, preferably without adding to the page load weight.
After researching available graphing solutions I realised that
we could use [AngularJS] (which was already loaded) to replace a lot of the manipulation
that these large graphing libraries provided.
Making our own graphing library also gave us full control over the look and interaction of the graph elements .

I made a prototype of a simple line graph and performance tested 150 on a page with constantly randomizing data.
It stood up over all browsers, even IE9 (our lowest target).
This directive is [open source].

It made its debut at [Adslot] in the Q1 2014-15 launch of the new Campaign Management workflow across Adslot Media, Publisher and Partner.

In May 2015 I created a [React version of Slicey] in a weekend. I did this to learn [React] using a real–world component.

[Adslot]: https://adslot.com "Adslot"
[AngularJS]: https://angularjs.org/ "AngularJS"
[Bower]: http://bower.io/ "Bower"
[Open Source]: https://github.com/Adslot/sparky/blob/master/LICENSE "MIT License"

[React version of Slicey]: https://github.com/camjc/slicey-react "Slicey React on Github"
[React]: https://facebook.github.io/react/ "React"
