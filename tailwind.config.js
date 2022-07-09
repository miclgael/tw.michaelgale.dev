const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      xs: '428px',
      ...defaultTheme.screens,
      '3xl': '1600px'
    }
  }
}
