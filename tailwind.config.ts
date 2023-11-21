import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'it-black-1': '#1D1D1B',
        'it-gray-3': '#A7A5A5',
        'it-gray-2': '#575757',
        'it-gray-1': '#303030',
        'it-gray-sky': '#838383',
        'it-blue-1': '#009FE3',
        'it-red': '#FF4040',
        'it-purple': '#7666FF',
        'it-yellow': '#FFD500',
        'it-gray-4': '#ECEAEA',
        'it-white-smoke': '#F5F5F5',
        'it-gray-5': '#757575',
        'it-gray-6': '#CFCFCF',
        'it-black-2': '#161616',
        'it-black-opacy': 'rgba(0,0,0,0.5)',
        'it-green-1': '#2BC442'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)'
      },
      screens: {
        '3xl': '1600px'
      }
    }
  },
  plugins: [require('daisyui'), plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value
        })
      },
      { values: theme('textShadow') }
    )
  })],
  daisyui: {
    themes: ['corporate']
  }
}
export default config
