import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import Headroom from 'react-headroom'
import '../../css/markdown-styles'

import { config } from 'config'
import { rhythm } from '../../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    console.log("SUBTEMPLATE")
    return (
      <div>

        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: '#FF7700'
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
              textAlign: 'center'
            }}
          >
            <Link
              to='/'
              style={{
                color: '#FFFFFF',
                textDecoration: 'none'
              }}
            >
              <span style={{

              }}>
                {config.siteTitle}
              </span>
            </Link>
          </Container>
        </Headroom>

        <Container
            style={{
              maxWidth: 960,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
              paddingTop: 0,
            }}
          >
            {this.props.children}
        </Container>

      </div>
    )
  },
})
