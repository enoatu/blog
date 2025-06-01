import { Link } from 'gatsby'
import * as styles from './index.module.css'

const ArticlePreview = ({ article, contentType }) => (
  <div>
    <img alt="" src={article.heroImage.file.url} className={styles.img} />
    <h3 className={styles.previewTitle}>
      <Link to={`/${contentType}/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p>{article.description.description}</p>
  </div>
)
export default ArticlePreview
