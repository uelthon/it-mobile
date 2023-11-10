import localFont from 'next/font/local'

const aceh = localFont({
  src: [
    {
      path: '../assets/fonts/Aceh-Light.woff2',
      style: 'normal',
      weight: '300'
    },
    {
      path: '../assets/fonts/Aceh-Regular.woff2',
      style: 'normal',
      weight: '400'
    },
    {
      path: '../assets/fonts/Aceh-Medium.woff2',
      style: 'normal',
      weight: '500'
    },
    {
      path: '../assets/fonts/Aceh-SemiBold.woff2',
      style: 'normal',
      weight: '600'
    },
    {
      path: '../assets/fonts/Aceh-Bold.woff2',
      style: 'normal',
      weight: '700'
    },
    {
      path: '../assets/fonts/Aceh-ExtraBold.woff2',
      style: 'normal',
      weight: '800'
    }
  ],
  display: 'swap',
  variable: '--aceh'
})

export { aceh }
