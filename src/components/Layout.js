import React from "react"
import Header from "./Header"
import { Link } from "gatsby"

const Layout = (data) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'avenir'
      }}>
        {edges.map(edge => {
          const {frontmatter} = edge.node
          return (
            <div
              key={frontmatter.path}
              style={{marginBottom: '1rem'}}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'var(--textTitle)',
                }}
                to={frontmatter.path}>
                {frontmatter.title}
              </Link>
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
        node{
          frontmatter{
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Layout
