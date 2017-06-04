import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import Headroom from 'react-headroom'
import format from 'date-fns/format'

import '../css/markdown-styles'

import { config } from 'config'
import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    const dateFormat = 'MMMM Do, YYYY'
    const { props } = this
    const { pathname } = props.location
    const isBlog = pathname.indexOf("/blog/") === 0
    const isIndex = !isBlog
    const blogPosts = props.route.pages.filter((page) => page.path.indexOf("/blog/") === 0)
    const page = props.route.pages.find((page) => page.path === pathname)
    const pageData = page ? page.data : undefined
    const postDate = pageData ? new Date(pageData.date) : undefined
    const postDateStr = postDate ? format(postDate, dateFormat) : undefined

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

            {isIndex && (
              <div>
                <h2>Articles by Per</h2>
                <ul>
                {
                  blogPosts
                    .sort((postA, postB) => new Date(postA.data.date).getTime() < new Date(postB.data.date).getTime())
                    .map((post, index) => (
                      <li key={index}>
                        <Link to={post.path}>{post.data.title}</Link> ({format(post.data.date, dateFormat)})
                      </li>
                    ))
                }
                </ul>
              </div>
            )}

            {isBlog && postDateStr && (<em>Posted on {postDateStr}</em>)}

        </Container>

      </div>
    )
  },
})
