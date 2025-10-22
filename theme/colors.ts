export const colors = {
  primary: '#6758db',
  secondary: '#F6F8FE',

  // Alerts
  alert: '#00C566',
  success: '#00C566',
  error: '#E53935',
  warning: '#FACC15',

  // Additional
  white: '#FEFEFE',
  line: '#E3E7EC',
  lineDark: '#4A4A65',
  black: '#111111',

  // Grayscale
  gray: {
    '10': '#FDFDFD',
    '20': '#ECF1F6',
    '30': '#E3E9ED',
    '40': '#D1D8DD',
    '50': '#BFC6CC',
    '60': '#9CA4AB',
    '70': '#78828A',
    '80': '#66707A',
    '90': '#434E58',
    '100': '#171725',
  },
} as const;

export type AppColors = typeof colors;
export type GrayScaleLevel = keyof typeof colors.gray;
