import { siteTitle } from '@/config'
import ArticlePreview from '@/components/article-preview'
import Hero from '@/components/hero'
import Layout from '@/components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const Index = (props) => {
  const posts = get(props, 'data.allContentfulBlogPost.edges')
  const [author] = get(props, 'data.allContentfulPerson.edges')
  const faviconUrl = get(props, 'data.favicon.nodes[0].file.url')
  const logo = get(props, 'data.logo.nodes[0]')
  return (
    <Layout logo={logo}>
      <Helmet>
        <title>{siteTitle}</title>
        <link
          rel="shortcut icon"
          type="image/vnd.microsoft.icon"
          href={faviconUrl}
        />
        <link rel="icon" type="image/vnd.microsoft.icon" href={faviconUrl} />
        <link rel="apple-touch-icon" href={faviconUrl} />
      </Helmet>
      <div style={{ width: '100%' }}>
        <Hero data={author.node} />
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview contentType="blog" article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
export default Index

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "YYYY年MM月DD日")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
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
        fluid(maxWidth: 200, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
        title
      }
    }
  }
`
