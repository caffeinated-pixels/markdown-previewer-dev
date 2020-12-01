import React from 'react'

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

export default Footer
