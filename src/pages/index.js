/* eslint-disable import/first */
import React from 'react'
import Header from '../components/Header'
import {graphql, Link} from 'gatsby'

import '../utils/global.css'

// eslint-disable-next-line react/prop-types
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
        }}
      >
        {edges.map(edge => {
          const {frontmatter, timeToRead} = edge.node
          return (
            <div key={frontmatter.path} style={{marginBottom: '1rem'}}>
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: '#ff6b6b',
                }}
                to={frontmatter.path}
              >
                {frontmatter.title}
              </Link>
              <br />
              <small style={{color: '#fff'}}>
                {frontmatter.date}{' '}
                <small style={{color: '#fff'}}>
                  Time To Read *:* {timeToRead}
                </small>
              </small>
              <br />
              <p style={{color: '#fff'}}>{frontmatter.excerpt}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
          timeToRead
        }
      }
    }
  }
`

export default Layout
