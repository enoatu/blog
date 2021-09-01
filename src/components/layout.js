import React from 'react'
import '@c/base.css'
import Container from '@c/container'
import Navigation from '@c/navigation'

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
