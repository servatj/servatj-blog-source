import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

// eslint-disable-next-line react/prop-types
const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2 style={{marginBottom: 0}}>{title}</h2>
      <p
        style={{
          marginTop: 0,
          opacity: 0.5,
          color: '#ff6b6b',
        }}
      >
        {description}
      </p>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
