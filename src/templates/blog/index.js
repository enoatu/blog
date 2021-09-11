import Layout from '@c/layout'
import { siteTitle } from '@/config'
import * as heroStyles from '@c/hero/index.module.css'
import * as postStyles from './index.module.css'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useEffect } from 'react'
import Helmet from 'react-helmet'

const BlogPost = (props) => {
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
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
