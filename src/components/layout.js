import '@c/base.css'
import Container from '@c/container'
import Navigation from '@c/navigation'

const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  )
}
export default Layout
