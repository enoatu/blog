import '@c/base.css'
import Container from '@c/container'
import Footer from '@c/footer'
import Navigation from '@c/navigation'

const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
      <Footer />
    </Container>
  )
}
export default Layout
