import ArticlePreview from '@/components/article-preview'
import Hero from '@/components/hero'
import Layout from '@/components/layout'
import { graphql } from 'gatsby'

const Index = (props) => {
  const posts = props.data.posts.edges
  const [author] = props.data.top.edges
  return (
    <Layout
      pageTitle="ブログ"
      type="blog"
      description={null}
      baseColor={{ r: 0, g: 0, b: 0 }}
      ogImageUrl={props.data.top.edges[0].node.image.file.url}
      faviconUrl={props.data.favicon.nodes[0].file.url}
      logoFluid={props.data.logo.nodes[0].fluid}
      {...props}>
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
    </Layout>
  )
}
export default Index

export const pageQuery = graphql`
  query HomeQuery {
    posts: allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
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
            description
          }
        }
      }
    }
    top: allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          image {
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
