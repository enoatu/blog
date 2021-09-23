import Layout from '@c/layout'
import * as heroStyles from '@c/hero/index.module.css'
import * as postStyles from './index.module.css'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const BlogPost = (props) => {
  const post = props.data.blogPosts
  return (
    <Layout
      pageTitle={post.title}
      description={post.description.description}
      baseColor={{ r: 0, g: 0, b: 0 }}
      ogImageUrl={post.heroImage.file.url}
      faviconUrl={props.data.favicon.nodes[0].file.url}
      logoFluid={props.data.logo.nodes[0].fluid}
      {...props}>
      <div>
        <Img alt={post.title} fluid={post.heroImage.fluid} />
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
          className="markdown"
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
  query BlogPostBySlug($slug: String!) {
    blogPosts: contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "YYYY年MM月DD日")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
        title
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      description {
        description
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
