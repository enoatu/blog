import React, { useState, useEffect } from 'react'

export default () => {
  const [isDraw, setIsDraw] = React.useState(false)
  useEffect(() => {
    async function loadData() {
      if (!isDraw) {
        const webGl = await import('@/utils/webgl')
        webGl.main()
        setIsDraw(true)
      }
    }
    loadData()
  })
  return <canvas/>
}
