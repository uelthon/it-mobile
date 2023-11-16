import type { Config } from 'tailwindcss'

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
        'it-black-2': '#161616'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['corporate']
  }
}
export default config
