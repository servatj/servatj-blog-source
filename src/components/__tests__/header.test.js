/* eslint-disable no-undef */
import React from 'react'
import renderer from 'react-test-renderer'
import {StaticQuery} from 'gatsby'
import Header from '../Header'

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

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
