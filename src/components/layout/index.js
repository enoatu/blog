import '@c/base.css'
import WebGlCanvas from './webgl-canvas'
import Footer from '@c/footer'
import Navigation from '@c/navigation'
import * as styles from './index.module.css'
import Head from '@c/head'

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      {typeof window !== 'undefined' && <WebGlCanvas {...props} />}
      <div className={styles.layout}>
        <div className={styles.layoutInner}>
          <Navigation {...props} />
          {props.children}
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Layout
