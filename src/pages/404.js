import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '@c/layout'
import get from 'lodash/get'
const NotFound = (props) => {
  const faviconUrl = get(props, 'data.favicon.nodes[0].file.url')
  const logoUrl = get(props, 'data.logo.nodes[0].file.url')
  return (
    <Layout logoFluid={logoUrl}>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div style={{ width: '100%', margin: '5vmin' }}>
        <div className="wrapper">
          <h1>404 Not Found ページがみつかりません</h1>
          <p>
            ページが移動したかもしれません。↑のナビゲーションからページを移動してほしいです。
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default NotFound
export const pageQuery = graphql`
  query NotFoundQuery {
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
