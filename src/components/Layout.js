/* eslint-disable import/first */
import React from 'react'
import Header from '../components/Header'
import {Link} from 'gatsby'
import {object} from 'prop-types'

const Layout = ({data}) => {
  const {edges} = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'avenir',
        }}
      >
        {edges.map(edge => {
          const {frontmatter} = edge.node
          return (
            <div key={frontmatter.path} style={{marginBottom: '1rem'}}>
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'var(--textTitle)',
                }}
                to={frontmatter.path}
              >
                {frontmatter.title}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Layout.propTypes = {
  data: object,
}

export default Layout
