module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/base/**/*.js',
    './src/components/**/*.js',
    './src/data/**/*.js',
    './src/layouts/**/*.js',
    './src/screens/**/*.js',
    './pages/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    extend: {
      lineHeight: {
        justright: '1.125',
      },
      colors: {
        yellow: {
          300: '#fbf76b',
        }
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {},
  plugins: [],
};
