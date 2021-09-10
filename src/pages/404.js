import Helmet from 'react-helmet'
import Layout from '@c/layout'
const NotFound = (props) => {
  return (
    <Layout location={props.location}>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1>404 Not Found ページがみつかりません</h1>
      <p>
        ページが移動したかもしれません。↑のナビゲーションからページを移動してほしいです。
      </p>
    </Layout>
  )
}
export default NotFound
