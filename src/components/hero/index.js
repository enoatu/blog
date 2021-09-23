import PropTypes from 'prop-types'
import * as styles from './index.module.css'
import Img from 'gatsby-image'

const Hero = ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.image.fluid}
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
