import ArticlePreview from '@c/article-preview'
import * as styles from '@/pages/7daystodie.module.css'
import Layout from '@c/layout'
import { graphql } from 'gatsby'
import * as baseStyles from '@c/base.css'

const _7daystodie = (props) => {
  const posts = props.data.posts.edges
  const { node: top } = props.data.top.edges[0]
  return (
    <Layout
      pageTitle="7DaysToDie"
      type="7dtd"
      description={null}
      baseColor={{ r: 150, g: 0, b: 0 }}
      ogImageUrl={props.data.top.edges[0].node.image.file.url}
      faviconUrl={props.data.favicon.nodes[0].file.url}
      logoFluid={props.data.logo.nodes[0].file.url}
      {...props}
    >
      <div className={styles.top}>
        <div className={styles.description}>
          <img alt={top.image.title} src={top.image.file.url} />
          <div className={styles.descriptionDetail}>
            <h1 className={styles.descriptionTitle}>{top.title}</h1>
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
    posts: allContentful7DaysToDie(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "YYYY年MM月DD日")
          tags
          heroImage {
            file {
              url
            }
          }
          description {
            description
          }
        }
      }
    }
    top: allContentful7DaysToDieTop {
      edges {
        node {
          title
          image {
            file {
              url
            }
            title
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
        file {
          url
        }
        title
      }
    }
  }
`
