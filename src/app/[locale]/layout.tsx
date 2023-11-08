import { notFound } from 'next/navigation'
import { unstable_setRequestLocale } from 'next-intl/server'
import { aceh } from '@/styles/aceh-font'
import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT-mobile',
  description: 'Servicios de soporte administrado de IT'
}

const locales = ['en', 'es']

export function generateStaticParams () {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout ({
  children,
  params: { locale }
}:
{
  children: React.ReactNode
  params: { locale: string }
}) {
  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()
  unstable_setRequestLocale(locale)
  return (
    <html lang={locale} data-theme='corporate'>
      <body className={`${aceh.variable} font-aceh`}>
        {children}
      </body>
    </html>
  )
}
