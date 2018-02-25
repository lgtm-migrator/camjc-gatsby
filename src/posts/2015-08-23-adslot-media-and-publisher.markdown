---
layout: post
title:  "Adslot Media & Publisher"
tagline: "Campaigns by the A–Team."
categories: application
desktops:
- adslot_media_site
technologies:
- HTML
- Jade
- CSS
- Stylus
- JavaScript
- CoffeeScript
- AngularJs
- Node.js
- Express.js
- Moment.js
- SVG

link: https://media.adslot.com/sites/1745
---

<!-- TODO: Preamble  -->

#### Collaboration and Feature Development

At Adslot I have collaborated with designers, product managers, full-stack developers, and QA to create the best solutions for the people who use our products.

One example that shows my collaborative approach to developing new features was developing a new product preview creator. The initial design was a modal as part of the first step of product creation. I started prototyping how this view might interact based on the initial designs. I noticed that the user would have to shift modes out of the product setup to create the preview, and then shift modes back again. I thought that the workflow would be easier to follow if we moved product preview into its own step. I sketched out a wireframe and talked through it with the designer. After explaining this solution from a user perspective we collaborated on the wireframe to reach an even stronger solution.

As a Front–End Developer I am an advocate for good structural interface design. I empathise with the users and collaborate to create the best experiences.


#### Application Architecture

I co-led a large refactoring effort of the crucial campaign management section of Adslot. This is a performance critical area, with a lot of application state and business logic. We designed a system to reduce performance bottlenecks and increase maintainability of this codebase. We rewrote the entire data structures to use our newly created partner–facing API. We decided to use a flux-like approach in this [AngularJS] app; leaning on small [immutable data structures][Object.freeze], isolated components, and one–way data flow. The old version of this section had hard to fix bugs caused by ad–hoc mutations to data. This new version is much easier to reason about. We recursively [freeze][Object.freeze] data coming from the server via AJAX or websockets. These immutable objects guarantee that the client knows the server's state. This new version enabled us to build a new campaign briefing feature.


#### Performance

Client–side frameworks like AngularJS give programmers a lot of power but don't guarantee performance. The Adslot product requires lots of data displayed in ways that give our users insight and control. This can lead to performance concerns. I profile our application to find bottlenecks, and apply this knowledge along with external research. I seek advice from other team members and share gained knowledge back to the team to improve our methodologies.

One of the ways we address performance in [AngularJS] is by making sure that watches just look at the properties that can change. We use [immutable data structures][Object.freeze] where possible so that we just need to watch the object reference instead of a deep watch. When this isn't possible we watch a [picked][lodash pick] version of the object with just the mutable properties. Since [AngularJS] 1.3 we have [one–time bound] properties in our templates. I have encouraged our team to move away from evaluating functions in our templates, since these run every digest cycle. I balance performance and maintainability, never prematurely optimising at the expense of code readability.


#### The Rest of the Web–app Stack

I have learnt about [package management][Bower], [build processes][Gulp], and [deployment][Jenkins]. We have used [Amazon DynamoDB] and now use a [PostgreSQL] database. I have learned best practices for the [Node.js] backend from the full–stack team. I have worked with our infrastructure team on increasing the linting run on [CI][Jenkins]. I have learnt how to use [Git] in a team environment and am now able to help newer colleagues out of any situation. I am comfortable with command–line tools and have worked on tooling for the team.


#### Automated Testing

I have become proficient at unit testing [AngularJS] and [Node.js] JavaScript. I write tests to cover possible cases beyond hitting every branch and function. I have worked with the QA department to solidify our [UI tests][Selenium WebDriver]. I co-led moving our UI tests to [Protractor] to get more deterministic results when testing [AngularJS] interfaces.

<!-- TODO:

-	[ ] Solid understanding of web front–end concepts (DOM, rendering, AJAX).

-	[ ] Algorithms.

-	[ ] Experience with high-traffic consumer websites. -->


[Object.freeze]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze "Object.freeze() on MDN docs"

[AngularJS]: https://angularjs.org/ "HTML enhanced for web apps!"
[Bower]: http://bower.io/ "Bower: A package manager for the web"
[Gulp]: http://gulpjs.com/ "Gulp: The streaming build system"
[Stylus]: https://learnboost.github.io/stylus/ "Stylus: Expressive, dynamic, robust CSS"
[Jade]: http://jade-lang.com/ "Jade: Node Template Engine"

[jQuery]: http://jquery.com/ "jQuery"

[lodash]: https://lodash.com/ "lodash: A JavaScript utility library delivering consistency, modularity, performance, & extras"
[lodash pick]: https://lodash.com/docs#pick "_.pick: Creates an object composed of the picked object properties."

[SMACSS]: https://smacss.com/ "Scalable and Modular Architecture for CSS"
[Bootstrap]: http://getbootstrap.com/ "Bootstrap Framework"

[CoffeeScript]: http://coffeescript.org/ "CoffeeScript: A little language that compiles into JavaScript"

[Protractor]: https://angular.github.io/protractor/ "Protractor: End to end testing for AngularJS"
[Selenium WebDriver]: http://docs.seleniumhq.org/ "Selenium WebDriver: Create robust, browser-based regression automation suites and tests"
[Jenkins]: https://jenkins-ci.org/ "Jenkins: An extensible open source continuous integration server"

[Node.js]: https://nodejs.org/ "Node.js"
[Async.js]: https://github.com/caolan/async "Async.js"
[assert.js]: https://github.com/Jxck/assert "assert.js: A port of the Node.js standard assertion library for the browser"

[one–time bound]: https://docs.angularjs.org/guide/expression "One time binding with AngularJS"

[PostgreSQL]: http://www.postgresql.org/ "PostgreSQL: The world's most advanced open source database"
[Amazon DynamoDB]: https://aws.amazon.com/dynamodb/ "DynamoDB: …a fast and flexible NoSQL database service…"

[Git]: https://www.git-scm.com/ "Git is a distributed revision control system with an emphasis on speed, data integrity, and support for distributed, non-linear workflows."
