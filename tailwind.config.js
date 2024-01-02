/** @type {import('tailwindcss').Config} */

const mainColor = '0, 0, 0' // Your main color in RGB format

module.exports = {
  // corePlugins: {
  //   preflight: false
  // },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: ({ colors }) => ({
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000',
      dark: '#1D2144',

      customColors: {
        dark: '#eaeaff',
        light: '000000',
        main: {
          dark: '#eaeaff',
          light: '#000000'
        },
        darkBg: '#282A42',
        lightBg: '#F7F7F9'
      },
      common: {
        black: '#000',
        white: '#FFF'
      },
      primary: {
        light: '#787EFF',
        main: '#E6411C',
        dark: '#5A5FE0',
        contrastText: '#FFF',
        50: '#fef4ee',
        100: '#fde7d7',
        200: '#f9cbaf',
        300: '#f5a77c',
        400: '#f07847',
        500: '#ec5523',
        600: '#e6411c',
        700: '#b82b16',
        800: '#92251a',
        900: '#762118',
        950: '#400d0a'
      },
      secondary: {
        light: '#7F889B',
        main: '#6D788D',
        dark: '#606A7C',
        contrastText: '#FFF',
        50: '#f5f7f8',
        100: '#ecf1f3',
        200: '#dce4e9',
        300: '#c7d2da',
        400: '#afbdca',
        500: '#9aa8ba',
        600: '#8491a7',
        700: '#6d788d',
        800: '#5d6676',
        900: '#4e5561',
        950: '#2e3238'
      },
      success: {
        light: '#83E542',
        main: '#69e019',
        dark: '#64C623',
        contrastText: '#FFF',
        50: '#f2fee7',
        100: '#e2fccb',
        200: '#c6f99d',
        300: '#a2f165',
        400: '#80e536',
        500: '#69e019',
        600: '#47a20e',
        700: '#377c0f',
        800: '#2f6212',
        900: '#295314',
        950: '#122e05'
      },
      error: {
        light: '#FF625F',
        main: '#FF4D49',
        dark: '#E04440',
        contrastText: '#FFF',
        50: '#fff1f1',
        100: '#ffe0df',
        200: '#ffc6c5',
        300: '#ff9f9d',
        400: '#ff6764',
        500: '#ff4d49',
        600: '#ed1a15',
        700: '#c8110d',
        800: '#a5120f',
        900: '#881714',
        950: '#4b0604'
      },
      warning: {
        light: '#FDBE42',
        main: '#FDB528',
        dark: '#DF9F23',
        contrastText: '#FFF',
        50: '#fffaeb',
        100: '#fef0c7',
        200: '#fee089',
        300: '#fec94b',
        400: '#fdb528',
        500: '#f79109',
        600: '#db6a04',
        700: '#b64907',
        800: '#93380d',
        900: '#792f0e',
        950: '#461602'
      },
      info: {
        light: '#40CDFA',
        main: '#26C6F9',
        dark: '#21AEDB',
        contrastText: '#FFF',
        50: '#f0faff',
        100: '#e0f4fe',
        200: '#b9ebfe',
        300: '#7cdbfd',
        400: '#26c6f9',
        500: '#0cb5eb',
        600: '#0191c8',
        700: '#0273a2',
        800: '#066186',
        900: '#0b516f',
        950: '#083349'
      },
      grey: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121'
      },
      text: {
        primary: `rgba(${mainColor}, 1)`,
        secondary: `rgba(${mainColor}, 0.68)`,
        disabled: `rgba(${mainColor}, 0.38)`
      },
      divider: `rgba(${mainColor}, 0.12)`,
      action: {
        active: `rgba(${mainColor}, 0.54)`,
        hover: `rgba(${mainColor}, 0.05)`,
        hoverOpacity: 0.05,
        selected: `rgba(${mainColor}, 0.08)`,
        disabled: `rgba(${mainColor}, 0.26)`,
        disabledBackground: `rgba(${mainColor}, 0.12)`,
        focus: `rgba(${mainColor}, 0.12)`
      },

      // STANDARD
      inherit: colors.inherit,
      slate: colors.slate,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      gray: colors.gray,
      yellow: colors.yellow
    }),
    screens: {
      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px'
      // => @media (min-width: 1400px) { ... }
    },
    animation: {
      /**
       * No animation
       */
      none: 'none',
      /**
       * Infinite spin at 1s
       */
      spin: 'spin 1s linear infinite',
      /**
       * Light in and out at 1s
       */
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      /**
       * Puse at 2s
       */
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      /**
       * Bounce the element at 1s
       */
      bounce: 'bounce 1s infinite',

      locationSwitch: 'transofrm 2s ease'
    },
    extend: {
      animation: {
        /**
         * Text animation at 3s from left to right
         */
        text: 'text 3s ease infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries')
  ]
}
