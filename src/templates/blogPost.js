import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

const Template = ({data}) => {
  const {markdownRemark} = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <div>
      <h1>{title}</h1>
      <div className="blogpost" dangerouslySetInnerHTML={{__html: html}} />
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
