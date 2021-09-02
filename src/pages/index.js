import ArticlePreview from '@/components/article-preview'
import Hero from '@/components/hero'
import Layout from '@/components/layout'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const Index = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allContentfulBlogPost.edges')
  const [author] = get(props, 'data.allContentfulPerson.edges')
  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <div style={{ width: '100%', height: '100%' }}>
        <Hero data={author.node} />
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
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
    site {
      siteMetadata {
        title
      }
    }
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
  }
`
