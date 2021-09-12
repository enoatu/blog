import { siteTitle } from '@/config'
import ArticlePreview from '@c/article-preview'
import * as styles from '@/pages/7daystodie.module.css'
import Layout from '@c/layout'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import * as baseStyles from '@c/base.css'

const _7daystodie = (props) => {
  const posts = get(props, 'data.allContentful7DaysToDie.edges')
  const { node: top } = get(props, 'data.allContentful7DaysToDieTop.edges')[0]
  const faviconUrl = get(props, 'data.favicon.nodes[0].file.url')
  const logo = get(props, 'data.logo.nodes[0]')
  return (
    <Layout baseColor={{ r: 150, g: 0, b: 0 }} logo={logo}>
      <Helmet>
        <title>7DaysToDie | {siteTitle}</title>
        <link
          rel="shortcut icon"
          type="image/vnd.microsoft.icon"
          href={faviconUrl}
        />
        <link rel="icon" type="image/vnd.microsoft.icon" href={faviconUrl} />
        <link rel="apple-touch-icon" href={faviconUrl} />
      </Helmet>
      <div className={styles.top}>
        <div className={styles.description}>
          <Img
            className={styles.heroImage}
            alt={top.image[0].title}
            fluid={top.image[0].fluid}
          />
          <div className={styles.heroDetails}>
            <h3 className={styles.heroHeadline}>{top.name}</h3>
            <p className={styles.heroTitle}>{top.title}</p>
            <div
              className="markdown"
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
    favicon: allContentfulAsset(
      limit: 10
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
