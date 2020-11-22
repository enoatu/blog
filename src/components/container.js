import React, { useState, useEffect } from 'react'
import WebGlCanvas from '@/components/container/webgl-canvas'

export default ({ children }) => {
  return (
    <div>
      { typeof window === "undefined" && <WebGlCanvas/> }
      <div id="container" style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
    </div>
  )
}
