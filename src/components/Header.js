import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import {rhythm} from '../utils/typography'

// eslint-disable-next-line react/prop-types
const TitleAndDescription = ({data, profilePic}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <div
      style={{
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{marginBottom: -5, marginRight: 10}}>
        <img
          src={profilePic}
          alt={`Josep Servat`}
          style={{
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
      </div>

      <div>
        <h1 style={{marginBottom: 0}}>{title}</h1>
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
      render={data => (
        <TitleAndDescription
          data={data}
          profilePic={'../assets/josepServat.jpg'}
        />
      )}
    />
  )
}

export default Header
