import WebGlCanvas from '@/components/container/webgl-canvas'

export default ({ children }) => {
  return (
    <div>
      {typeof window !== 'undefined' && <WebGlCanvas />}
      <div id="container">{children}</div>
    </div>
  )
}
