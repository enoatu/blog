import * as styles from './index.module.css'
import { siteTitle } from '@/config'
import { Link, graphql, useStaticQuery } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'

const Navigation = ({ logo }) => {
  return (
    <nav className={styles.navigation} role="navigation">
      <div className={styles.logoWrapper}>
        <Img className={styles.logo} alt="logo" fluid={logo.fluid} />
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
export default Navigation
