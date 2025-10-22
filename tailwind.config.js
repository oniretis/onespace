/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PlusJakartaSans_400Regular', 'ui-sans-serif', 'system-ui'],
        jakarta: [
          'PlusJakartaSans_400Regular',
          'PlusJakartaSans_500Medium',
          'PlusJakartaSans_600SemiBold',
          'PlusJakartaSans_700Bold',
          'ui-sans-serif',
          'system-ui',
        ],
      },
      colors: {
        // Main
        primary: '#6758db',
        secondary: '#F6F8FE',

        // Alerts
        alert: '#00C566',
        success: '#00C566',
        error: '#E53935',
        warning: '#FACC15',

        // Additional
        white: '#FEFEFE',
        black: '#111111',
        line: '#E3E7EC',
        'line-dark': '#4A4A65',

        // Grayscale (custom scale 10-100)
        gray: {
          10: '#FDFDFD',
          20: '#ECF1F6',
          30: '#E3E9ED',
          40: '#D1D8DD',
          50: '#BFC6CC',
          60: '#9CA4AB',
          70: '#78828A',
          80: '#66707A',
          90: '#434E58',
          100: '#171725',
        },
      },
    },
  },
  plugins: [],
};
