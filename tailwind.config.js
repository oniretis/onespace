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
    },
  },
  plugins: [],
};
