import React from 'react'

import {rhythm} from '../utils/typography'

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
      }}
    >
      <div style={{float: 'right'}}>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          rss
        </a>
      </div>
      <a
        href="https://mobile.twitter.com/servatj"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter
      </a>{' '}
      &bull;{' '}
      <a
        href="https://github.com/servatj"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>{' '}
      &bull;{' '}
      <a
        href="https://stackoverflow.com/users/458193/dan-abramov"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
    </footer>
  )
}

export default Footer
