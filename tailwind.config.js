/** @type {import('tailwindcss').Config} */

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
