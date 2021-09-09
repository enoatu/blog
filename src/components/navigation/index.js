import * as styles from './index.module.css'
import { Link } from 'gatsby'

const Navigation = () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
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
export default Navigation
