# Markdown Previewer (dev server version)

A React-based app for the [Build a Markdown Previewer](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer) freeCodeCamp challenge.

## Set up

I orginally built this React-based app using CDNs script tags and a single jsx file for later copy over to CodePen (so I could submit to freeCodeCamp). However, I wanted to have a go at using Create-React-App to set a local dev server through Webpack. I also wanted to modularize my code into separate js files.

## Parsing the Markdown text

I'm using the [Marked library](https://github.com/markedjs/marked?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library) to convert the input from plain text into marked up HTML. Because this outputs a string we need to use the scarey sounding _dangerouslySetInnerHTML_ React attribute to render the HTML elements.

From what I've read, using this attribute opens up an XSS attack vunerability and so it is recommended that you sanitize the code first. For this task, I'm using the [DOMPurify library](https://github.com/cure53/DOMPurify).

However, I've also been told that the threat of an XSS attack in context of my app is basically non-existent as there is no server or data-sharing involved, so if a user inputs malicious code, it will only affect themselves. Anyway, better to be safe than sorry!
