import React from 'react'
import defaultText from './default-text'
import marked from 'marked'
import DOMPurify from 'dompurify'

// set options for Marked
marked.setOptions({
  breaks: true, // adds <br> on single line breaks
  headerIds: false // disables auto header ids
})

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

export default Input
