import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="text-center">
      <p>
        Coded by&nbsp;
        <a
          href="https://steviegill-webportfolio.netlify.app/"
          title="Stevie Gill's portfolio page"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stevie Gill
        </a>
        {' | '}
        <a
          href="https://github.com/caffeinated-pixels/markdown-previewer-dev"
          title="Markdown Previewer Github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="githubIcon" /> repo
        </a>
      </p>
    </footer>
  )
}

export default Footer
