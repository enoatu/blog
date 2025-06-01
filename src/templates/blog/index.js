import Layout from '@c/layout'
import * as postStyles from './index.module.css'
import { graphql } from 'gatsby'
import { setImg } from '@/utils/markdown'

const BlogPost = (props) => {
  const post = props.data.blogPosts
  const markdown = setImg(post.body.childMarkdownRemark.html)
  return (
    <Layout
      pageTitle={post.title}
      description={post.description.description}
      baseColor={{ r: 0, g: 0, b: 0 }}
      ogImageUrl={post.heroImage.file.url}
      faviconUrl={props.data.favicon.nodes[0].file.url}
      logoFluid={props.data.logo.nodes[0].file.url}
      {...props}
    >
      <div>
        <img
          alt={post.title}
          src={post.heroImage.file.url}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className={postStyles.wrapper}>
        <h1 className={postStyles.title}>{post.title}</h1>
        <p
          style={{
            display: 'block',
          }}
        >
          {post.publishDate}
        </p>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{
            __html: markdown,
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
        file {
          url
        }
        title
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
      filter: { title: { eq: "blog-favicon-soukoumyocyo" } }
    ) {
      nodes {
        file {
          url
        }
      }
    }
    logo: allContentfulAsset(
      limit: 1
      filter: { title: { eq: "blog-logo-soukoumyocho-white" } }
    ) {
      nodes {
        file {
          url
        }
        title
      }
    }
  }
`
