import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Template = ({data}) => {
  const {markdownRemark} = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <div className="article">
      <Link to={'/'}>
        <Header />
      </Link>
      <h1>{title}</h1>
      <div className="blogpost" dangerouslySetInnerHTML={{__html: html}} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Footer />
      </div>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: {path: {eq: $pathSlug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`
Template.propTypes = {
  data: PropTypes.object,
}

export default Template
