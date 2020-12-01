# Markdown Previewer

A React-based app for the [Build a Markdown Previewer](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer) freeCodeCamp challenge.

## Set up

I wanted to write a React app using Atom with Git version control, but also needed to submit it on freeCodeCamp through CodePen. So, I've set it up with CDNs script tags rather than using the Create-React-App to install a local development server through Webpack. For the same reason, all the React components are kept in a single jsx file.

However, I did install Babel locally and configured it to automatically transpile the JSX to JS each time I save the file in Atom.

## Parsing the Markdown text

I'm using the [Marked library](https://github.com/markedjs/marked?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library) to convert the input from plain text into marked up HTML. Because this outputs a string we need to use the scarey sounding _dangerouslySetInnerHTML_ React attribute to render the HTML elements.

From what I've read, using this attribute opens up an XSS attack vunerability and so it is recommended that you sanitize the code first. For this task, I'm using the [DOMPurify library](https://github.com/cure53/DOMPurify).

However, I've also been told that the threat of an XSS attack in context of my app is basically non-existent as there is no server or data-sharing involved, so if a user inputs malicious code, it will only affect themselves. Anyway, better to be safe than sorry!
