import React from 'react'

import {rhythm} from '../utils/typography'

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
        color: '#fff',
      }}
    >
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
        href="https://www.linkedin.com/in/josep-servat-lorca-384ba757/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin
      </a>{' '}
      &bull; <a href="https://discord.gg/vbE4MaJ">Discord</a>
    </footer>
  )
}

export default Footer
