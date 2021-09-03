import '@c/base.css'
import Container from '@c/container'
import Navigation from '@c/navigation'

export default ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  )
}
