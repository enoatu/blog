import { Link } from 'gatsby'
import Img from 'gatsby-image'
import * as styles from './index.module.css'

const ArticlePreview = ({ article, contentType }) => (
  <div>
    <Img alt="" fluid={article.heroImage.fluid} className={styles.img} />
    <h3 className={styles.previewTitle}>
      <Link to={`/${contentType}/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p>{article.description.description}</p>
  </div>
)
export default ArticlePreview
