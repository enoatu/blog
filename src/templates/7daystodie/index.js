import Layout from '@c/layout'
import * as styles from './index.module.css'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useEffect, useRef } from 'react'

const BlogPost = (props) => {
  const post = props.data.contentful7DaysToDie
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
    <Layout
      pageTitle={post.title}
      description={post.description.description}
      baseColor={{ r: 150, g: 0, b: 0 }}
      ogImageUrl={post.heroImage.file.url}
      faviconUrl={props.data.favicon.nodes[0].file.url}
      logoFluid={props.data.logo.nodes[0].fluid}
      {...props}>
      <div>
        <Img alt={post.title} fluid={post.heroImage.fluid} />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{post.title}</h1>
        <p
          style={{
            display: 'block',
          }}>
          {post.publishDate}
        </p>
        <div
          className="markdown"
          ref={markdownBodyRef}
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
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
      tags
      description {
        description
      }
      heroImage {
        fluid(
          maxWidth: 1180
          maxHeight: 480
          resizingBehavior: PAD
          background: "rgb:000000"
        ) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    favicon: allContentfulAsset(
      limit: 1
      filter: { title: { eq: "blog-favicon-genkaimyocyo" } }
    ) {
      nodes {
        file {
          url
        }
      }
    }
    logo: allContentfulAsset(
      limit: 1
      filter: { title: { eq: "blog-logo-genkaimyocyo-white" } }
    ) {
      nodes {
        fluid(maxWidth: 200, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
        title
      }
    }
  }
`
