import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import * as WebGl from '@/utils/webgl'

export default ({ children }) => {
  const [isDraw, setIsDraw] = React.useState(false)
  useEffect(() => {
    if (!isDraw) {
      const canvas = document.querySelector('canvas')
      WebGl.main(canvas)
      setIsDraw(true)
    }
  })
  return (
    <div>
      <Helmet>
        <script src="https://paveldogreat.github.io/WebGL-Fluid-Simulation/dat.gui.min.js" type="text/javascript" />
      </Helmet>
      <canvas/>
      <div id="container" style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
    </div>
  )
}
