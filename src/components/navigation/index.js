import * as styles from './index.module.css'
import { Link } from 'gatsby'

const Navigation = () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>...</li>
    </ul>
  </nav>
)
export default Navigation
