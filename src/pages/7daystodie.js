import ArticlePreview from '@/components/article-preview'
import * as styles from '@/pages/7daystodie.module.css'
import Layout from '@/components/layout'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

const _7daystodie = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allContentful7DaysToDie.edges')
  const { node: top } = get(props, 'data.allContentful7DaysToDieTop.edges')[0]

  return (
    <Layout location={props.location} baseColor={{ r: 150, g: 0, b: 0 }}>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <div className={styles.top}>
        <div className={styles.description}>
          <Img
            className={styles.heroImage}
            alt={top.title}
            fluid={top.image[0].fluid}
          />
          <div className={styles.heroDetails}>
            <h3 className={styles.heroHeadline}>{top.name}</h3>
            <p className={styles.heroTitle}>{top.title}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: top.text.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview contentType="7daystodie" article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
export default _7daystodie

export const pageQuery = graphql`
  query daysQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentful7DaysToDie(sort: { fields: [publishDate], order: DESC }) {
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
    allContentful7DaysToDieTop {
      edges {
        node {
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
          }
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
