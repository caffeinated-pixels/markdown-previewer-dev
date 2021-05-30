import React, { useState } from 'react'
import defaultText from './default-text'
import Editor from './Editor'
import Preview from './Preview'
import marked from 'marked'
import DOMPurify from 'dompurify'

// set options for Marked
marked.setOptions({
  breaks: true, // adds <br> on single line breaks
  headerIds: false // disables auto header ids
})

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

export default Input
