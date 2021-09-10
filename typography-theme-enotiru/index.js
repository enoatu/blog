const theme = {
  title: 'japanese-riywo',
  baseFontSize: '16px',
  baseLineHeight: 1.7,
  scaleRatio: 2.3,
  googleFonts: [
    {
      name: 'M+PLUS+1p',
      styles: ['400'],
    },
    {
      name: 'M+PLUS+1p',
      styles: ['400'],
    },
    {
      name: 'Roboto+Slab',
      styles: ['700'],
    },
    {
      name: 'Noto+Sans+JP',
      styles: ['400'],
    },
    {
      name: 'Merriweather',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Roboto Slab', 'M PLUS 1p'],
  bodyFontFamily: ['Merriweather', 'Noto Sans JP'],
  headerColor: 'hsl(0,0%,20%)',
  bodyColor: 'hsl(0,0%,30%)',

  overrideStyles: ({ scale, rhythm }, options, styles) => ({
    html: {
      WebkitFontSmoothing: 'antialiased',
    },
    'h1,h2,h3,h4,h5,h6': {
      letterSpacing: '0.02rem',
    },
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.8rem',
    },
    h3: {
      fontSize: '1.6rem',
    },
    h4: {
      fontSize: '1.4rem',
    },
    h5: {
      fontSize: '1.2rem',
    },
    'h4,h5,h6,a,p,small,li,strong': {
      fontSize: '1rem',
    },
    p: {
      textAlign: 'justify',
      wordBreak: 'break-all',
    },
    a: {
      color: 'inherit',
    },
    'a:hover': {
      color: '#3498DB',
    },
    li: {
      marginBottom: '0.5rem',
    },
    blockquote: {
      color: '#333',
      fontSize: '85%',
      position: 'relative',
      margin: '0.5rem',
      padding: '0.5rem 1rem 0.5rem 2rem',
    },
    'blockquote:before': {
      position: 'absolute',
      fontSize: '1.5rem',
      lineHeight: '1',
      top: '0.2rem',
      left: '0.5rem',
      content: '"\\201C"',
      color: '#333',
    },
    pre: {
      overflowX: 'auto',
      padding: '1rem',
      background: 'hsla(0,0%,0%,0.04)',
    },
  }),
}

export default theme
