import React from 'react'
import { poppins } from '../../styles/poppins-font'
import { Metadata } from 'next'
import '../../styles/globals.css'
import Link from 'next/link'
import Logo from '@/components/shared/icons/logo'

export const metadata: Metadata = {
  title: 'IT-mobile',
  description: 'Servicios de soporte administrado de IT'
}

interface Props {
  children: React.ReactNode
}

export default function Authlayout ({ children }: Props) {
  return (
    <html data-theme='corporate'>
      <body className={`${poppins.className} bg-home`}>
        <main className='w-full min-h-screen flex flex-col justify-center items-center px-2 py-8 md:px-0'>
          <section className='w-full md:max-w-[33.5rem] shadow-xl bg-white py-8 px-4 md:px-[4.5rem] rounded-2xl flex flex-col justify-start items-center gap-8'>
            <Link href='/'>
              <Logo width='320' />
            </Link>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
