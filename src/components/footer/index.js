import { footer, middleParent, middleChild } from './index.module.css'
const Footer = ({ children }) => {
  return (
    <footer className={footer}>
      <a className={middleParent} href="https://twitter.com/enolate0">
        <span className={middleChild}>当分の連絡先 &rarr;</span>
        <img
          className={middleChild}
          src="/twitter.png"
          alt="twitter"
          width="40"
          height="40"
        />
      </a>
    </footer>
  )
}
export default Footer
