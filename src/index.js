import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import marked from 'marked'
import DOMPurify from 'dompurify'

// default text for the previewer
const defaultText = `# Welcome to my Markdown Previewer!

## I love h2 headings!

### h3 headings are okay, I guess

This is my first ever **React** app and I built it for a *freeCodeCamp* [Front End Libraries Project](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer). The app uses ***state*** to automatically update the preview as you type.

Right, that's bold, italic and a link out of the way! Here's a list of random stuff followed by an image of a sweaty Swedish guitar legend:
* coffee
* cake
* types of nut:
  * brazil
  * hazelnut
  * cashew
    * salted
    * honey roasted (decadent!)
    * raw
* Amiga 1200
* Yngwie Malmsteen

![Yngwie Malmsteen](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yngwie_Malmsteen_1.jpg/220px-Yngwie_Malmsteen_1.jpg)

Here's an inspiring quote from **Avery Brooks**:
> Knowledge is going to make you stronger. Knowledge is going to let you control your life. Knowledge is going to give you the wisdom to teach their children. Knowledge is the thing that makes you smile in the face of disaster.

Of course, we can also format inline code, such as \`const meaningOfLife = 42;\`, as well as code blocks:

\`\`\`
// this is some of my React code
ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`

Finally, a simple table:

Amiga Game | Developer | No. of floppies
---------- | --------- | ---------------
Monkey Island 2: LeChuck's Revenge  | LucasArts | 11
UFO: Enemy Unknown (AGA)  | Climax | 4
Cannon Fodder | Sensible Software | 3
Syndicate | Bullfrog | 4

Oh, I almost forgot that there's an optional user story for getting the previewer to render line
breaks like this one with a \`<br>\`!

This last part is to test the behaviour of the preview box with very long words:

blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah...
`

// set options for Marked
marked.setOptions({
  breaks: true, // adds <br> on single line breaks
  headerIds: false // disables auto header ids
})

function Header() {
  return (
    <header>
      <h1 className="text-center">Markup my Markdown!</h1>
    </header>
  )
}

class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      rawText: defaultText
    }
    this.handleChange = this.handleChange.bind(this)
    this.getMarkdown = this.getMarkdown.bind(this)
  }

  getMarkdown() {
    // parse markdown text using Marked library
    const htmlMarkup = marked(this.state.rawText)

    // clean up HTML to mitigate XSS risk
    const cleanMarkup = DOMPurify.sanitize(htmlMarkup)

    // prepare html for use with dangerouslySetInnerHTML attribute
    return { __html: cleanMarkup }
  }

  handleChange(event) {
    this.setState({
      rawText: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <Editor handleChange={this.handleChange} rawText={this.state.rawText} />
        <Preview getMarkdown={this.getMarkdown()} />
      </div>
    )
  }
}

function Editor(props) {
  return (
    <div className="flexitem">
      <div className="bar">
        <p>Input window</p>
      </div>
      <textarea
        id="editor"
        value={props.rawText}
        spellCheck="false"
        onChange={props.handleChange}
      />
    </div>
  )
}

function Preview(props) {
  return (
    <div className="flexitem">
      <div className="bar">
        <p>Preview window</p>
      </div>
      <div id="preview" dangerouslySetInnerHTML={props.getMarkdown}></div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="text-center">
      <p>
        Written, coded and abused by&nbsp;
        <a
          href="https://steviegill-webportfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Stevie Gill
        </a>
      </p>
      <p>
        Made with{' '}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>
        ,{' '}
        <a
          href="https://github.com/markedjs/marked"
          target="_blank"
          rel="noreferrer"
        >
          Marked
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/cure53/DOMPurify"
          target="_blank"
          rel="noreferrer"
        >
          DOMPurify
        </a>
      </p>
    </footer>
  )
}

function App() {
  return (
    <div className="outer">
      <Header />
      <Input />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
