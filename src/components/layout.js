import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        {children}
      </Container>
    )
  }
}

export default Layout
