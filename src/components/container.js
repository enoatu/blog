import WebGlCanvas from '@/components/container/webgl-canvas'

const Container = ({ children }) => {
  return (
    <div>
      {typeof window !== 'undefined' && <WebGlCanvas />}
      <div id="container">{children}</div>
    </div>
  )
}
export default Container
