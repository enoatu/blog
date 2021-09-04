import { Link } from 'gatsby'
import styles from '@/components/navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>adding...</li>
    </ul>
  </nav>
)
