import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Logo from '@/components/shared/icons/logo'
import Sonner from '../../components/shared/sonner'
import { aceh } from '../../styles/aceh-font'
import '../../styles/globals.css'
import { getUser } from '@/actions/auth.actions'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Managed IT Services - Lords of IT',
  description: 'Servicios de soporte administrado de IT'
}

interface Props {
  children: React.ReactNode
}

export const dynamic = 'force-dynamic'

export default async function Authlayout ({ children }: Props) {
  const { data } = await getUser()
  if (data) {
    if (Number(data.user_metadata.role_id) === 3) {
      return redirect('/dashboard/customer-admin')
    }
  }
  return (
    <html data-theme='corporate'>
      <body className={`${aceh.className} bg-home`}>
        <main className='w-full min-h-screen flex flex-col justify-center items-center px-2 py-8 md:px-0'>
          <section className='w-full md:max-w-[33.5rem] shadow-xl bg-white py-8 px-4 md:px-[4.5rem] rounded-2xl flex flex-col justify-start items-center gap-8'>
            <Link href='/'>
              <Logo width='320' />
            </Link>
            {children}
          </section>
        </main>
        <Sonner position='bottom-right' richColors />
      </body>
    </html>
  )
}
