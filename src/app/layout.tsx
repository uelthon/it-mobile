import { aceh } from '@/styles/aceh-font'
import './globals.css'

export const metadata = {
  title: 'IT-mobile',
  description: 'Servicios de soporte administrado de IT'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' data-theme='corporate'>
      <body className={`${aceh.variable} font-aceh`}>
        {children}
      </body>
    </html>
  )
}
