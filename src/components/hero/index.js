import PropTypes from 'prop-types'
import * as styles from './index.module.css'

const Hero = ({ data }) => (
  <div className={styles.hero}>
    <img
      className={styles.heroImage}
      alt={data.name}
      src={data.image.file.url}
      style={{ width: '100%', height: 'auto' }}
    />
    <div className={styles.heroDetails}>
      <h1 className={styles.heroHeadline}>{data.name}</h1>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)

PropTypes.Hero = {
  data: PropTypes.object.isRequired,
}
export default Hero
