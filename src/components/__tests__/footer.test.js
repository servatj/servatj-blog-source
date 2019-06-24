/* eslint-disable no-undef */
import React from 'react'
import renderer from 'react-test-renderer'
import {StaticQuery} from 'gatsby'
import Footer from '../Footer'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({render}) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    }),
  )
})

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
