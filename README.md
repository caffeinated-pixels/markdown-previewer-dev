# Markdown Previewer (dev server version)

You can see my [Markdown Previewer app](https://markup-my-markdown.netlify.app/) in action here. I also wrote a [dev blog about it on Hashnode](https://caffeinated-coder.hashnode.dev/how-i-built-a-markdown-previewer-with-react).

## What is it?

This is a ReactJS-based app I made for the [Build a Markdown Previewer](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer) freeCodeCamp project, which is part of the Front End Development Libraries certification.

My app takes a plain text input and converts it to formatted HTML based on any [Github-flavoured Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) syntax the user includes. It does this in real-time and displays the result in a live preview box.

The project brief specifies that when the app first loads, the `<textarea>` input should contain valid Markdown examples for a variety of different elements, such as a header, subheader, link, code block, image, etc. Hence, all the placeholder text!

I definitely now know a lot more about formatting markdown, which is handy for writing Github readmes!

## Set up

This was my first-ever ReactJS app, which was exciting! I [orginally built the app](https://github.com/caffeinated-pixels/markdown-previewer) using a single JS file and CDNs script tags to import the React library. I figured this would make it easier to copy my app over from my dev environment (i.e. Atom and Git) to CodePen for submitting to freeCodeCamp.

However, I wanted to have a go at using the **Create-React-App** to set a local Webpack-based dev server. I also wanted to modularize my components into separate JS files, which helps improve readability and I believe is a good habit to get into.

## Design philosophy

I opted for a simple, minimalist design that devotes most of the screen space to the text input and preview boxes, which are arranged using CSS Flexbox.

At larger screen sizes, the two boxes sit side-by-side in a two-column layout that flips to a single column layout for mobile devices. For both mobile and desktop layouts, the page doesn't scroll and all the elements are forced to fit within the viewport. Obviously, the content of the input and preview elements does scroll when necessary.

Originally, I went with black text and pastel-shades of pink and green for the backgrounds. It seemed like a good idea at the time but feedback on this colour scheme wasn't exactly enthusiastic and in retrospect, it was a tad gaudy! Also, some of the text contrast ratios didn't quite meet WCAG standards.

So, I recently switched to a dark grey background with white text and orange highlights. This scheme provides better text contrast and, to my eye, it looks quite elegant.

## Parsing the Markdown text

The freeCodeCamp challenge permitted the use of an external library for parsing the markdown syntax, so coding the app was fairly straightforward.

For this purpose, I am using the [Marked library](https://github.com/markedjs/marked?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library), which is very easy to install, configure and use. You simply pass in your markdown text into the function as a string and it returns another string containing marked-up HTML, eg:

```javascript
const htmlMarkup = marked(rawText)
```

I perform all my business logic inside of the `<Input />` component, which passes down both its state and functions as props to the `<Editor />` and `<Preview />` components:

```javascript
function Input() {
  const [rawText, setState] = useState(defaultText)

  const getMarkdown = () => {
    // parse markdown text using Marked library
    const htmlMarkup = marked(rawText)

    // clean up HTML to mitigate XSS risk
    const cleanMarkup = DOMPurify.sanitize(htmlMarkup)

    // prepare html for use with dangerouslySetInnerHTML attribute
    return { __html: cleanMarkup }
  }

  const handleChange = event => {
    setState(event.target.value)
  }

  return (
    <div className="windows-container">
      <Editor handleChange={handleChange} rawText={rawText} />
      <Preview getMarkdown={getMarkdown()} />
    </div>
  )
}
```

`<Editor />` renders a `<textarea>`, which is a controlled component. It gets its value from the passed-down state. Every time the user updates the input text, it calls an event handler that updates state with the new text value.

```javascript
function Editor(props) {
  return (
    <div className="flexitem">
      <div className="bar" tabIndex="0">
        <p>Input window</p>
      </div>
      <textarea
        id="editor"
        className="editor"
        value={props.rawText}
        spellCheck="false"
        onChange={props.handleChange}
      />
    </div>
  )
}
```

And each time state updates, it triggers a rerender and `<Preview />` calls the `getMarkdown()` function.

`getMarkdown()` does the job of converting the markdown text into an HTML string. `<Preview />` receives this string as a prop, which I then pass to the `dangerouslySetInnerHTML` attribute for rendering.

```javascript
function Preview(props) {
  return (
    <div className="flexitem">
      <div className="bar">
        <p tabIndex="0">Preview window</p>
      </div>
      <div
        id="preview"
        className="preview"
        dangerouslySetInnerHTML={props.getMarkdown}
        tabIndex="0"
      ></div>
    </div>
  )
}
```

## Using dangerouslySetInnerHTML

`dangerouslySetInnerHTML` is a React-specific attribute and similar to using the `.innerHTML` DOM property in vanilla JS. If it sounds scary, that's because its supposed to!

Like `.innerHTML`, `dangerouslySetInnerHTML` sets the HTML content inside the element you target. If the source of this new HTML is from a user input, it can open up your app to malicious code injection (i.e. an XSS attack). This is why various developer communities strongly recommend that you sanitize the code first.

So, that's exactly what I did by using the [DOMPurify library](https://github.com/cure53/DOMPurify). The `getMarkdown()` function passes the output from the marked library to the DOMPurify library, which generates a sanitized output that I then pass into the `dangerouslySetInnerHTML` attribute. I should mention that React makes you pass this attribute an object with a `__html` key to further remind you of the danger!

However, some developers in the freeCodeCamp community assured me that the threat of an XSS attack in the context of my app is virtually non-existent. This is because no data is shared or saved, so if a user inputs malicious code, it will only affect themselves. Anyway, better to be safe than sorry!
