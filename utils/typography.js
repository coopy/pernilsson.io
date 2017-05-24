import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont } from 'react-typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '700',
      ],
    },
    {
      name: 'Roboto Slab',
      styles: [
        '400',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  headerColor: '#003366',
  bodyColor: '#222222',
  bodyFontFamily: ['Roboto Slab', 'sans-serif'],
  baseFontSize: '18px',
  baseLineHeight: 1.65,
  scaleRatio: 2.25,
  plugins: [
    new CodePlugin(),
  ],
  overrideStyles: () => ({
    a: {
      color: '#FF7700',
      textDecoration: 'none'
    },
    'a:visited': {
      color: '#222222'
    },
    'a:hover': {
      textDecoration: 'underline'
    }
  })
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}

export default typography
