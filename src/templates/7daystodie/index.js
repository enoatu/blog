import Layout from '@c/layout'
import { siteTitle } from '@/config'
import * as heroStyles from '@c/hero/index.module.css'
import * as postStyles from './index.module.css'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { useEffect, useRef } from 'react'
import Helmet from 'react-helmet'

const BlogPost = (props) => {
  const post = get(props, 'data.contentful7DaysToDie')
  const markdownBodyRef = useRef(null)
  useEffect(() => {
    markdownBodyRef.current
      .querySelectorAll('[data-click-count="1"]')
      .forEach((clickCountEl) => {
        clickCountEl.addEventListener(
          'click',
          () => {
            window.ga('send', 'event', 'banner', 'click', clickCountEl.href, 1)
          },
          { once: true }
        )
      })
  }, [])

  return (
    <Layout>
      <div>
        <Helmet
          title={`${post.title} | ${siteTitle}`}
          meta={[{ name: 'description', content: post.title }]}
        />
        <div className={heroStyles.hero}>
          <Img
            className={heroStyles.heroImage}
            alt={post.title}
            fluid={post.heroImage.fluid}
          />
        </div>
        <div className={postStyles.wrapper}>
          <h1 className={postStyles.title}>{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}>
            {post.publishDate}
          </p>
          <div
            ref={markdownBodyRef}
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query _7daystodiePosts($slug: String!) {
    contentful7DaysToDie(slug: { eq: $slug }) {
      title
      publishDate(formatString: "YYYY年MM月DD日")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
