import PropTypes from 'prop-types'
import * as styles from './index.module.css'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Navigation = ({ logoFluid }) => {
  return (
    <nav className={styles.navigation} role="navigation">
      <div className={styles.logoWrapper}>
        <Img className={styles.logo} alt="logo" fluid={logoFluid} />
      </div>
      <ul className={styles.navigationUl}>
        <li className={styles.navigationItem}>
          <Link to="/" activeStyle={{ color: 'red' }}>
            Home
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/7daystodie" activeStyle={{ color: 'red' }}>
            7 Days To Die
          </Link>
        </li>
      </ul>
    </nav>
  )
}

PropTypes.Navigation = {
  logoFluid: PropTypes.object.isRequired,
}

export default Navigation
