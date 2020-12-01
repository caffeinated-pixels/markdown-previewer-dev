import React from 'react'

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

export default Preview
