import '@c/base.css'
import WebGlCanvas from './webgl-canvas'
import Footer from '@c/footer'
import Navigation from '@c/navigation'
import * as styles from './index.module.css'

const Layout = ({ children }) => {
  return (
    <>
      {typeof window !== 'undefined' && <WebGlCanvas />}
      <div className={styles.layout}>
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  )
}
export default Layout