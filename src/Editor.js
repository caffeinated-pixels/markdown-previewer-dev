import React from 'react'

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

export default Editor
