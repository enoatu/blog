import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styles from '@/pages/blog.module.css'
import Layout from '@c/layout'
import ArticlePreview from '@c/article-preview'

export default (props) => {
  const posts = get(props, 'data.allContentfulBlogPost.edges')
  const siteTitle = get(props, 'props.data.site.siteMetadata.title')
  return (
    <Layout location={props.location}>
      <div>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>
          Blog=
          <span role="img" aria-label="poop">
            プログラミング
          </span>
        </div>
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

export const pageQuery = graphql`
  query BlogIndexQuery {
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
  }
`
