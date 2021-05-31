import React from 'react'

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

export default Preview
