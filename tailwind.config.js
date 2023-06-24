const colors = {
  grey: {
    light: '#6B7082',
    normal: '#2E3349',
  },
  lightblue: {
    normal: '#19A1AE',
  },
}

/*
|-------------------------------------------------------------------------------
| Configuration
|-------------------------------------------------------------------------------
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      colors,
      fontSize: {
        xxs: '0.625rem',
      },
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
}
