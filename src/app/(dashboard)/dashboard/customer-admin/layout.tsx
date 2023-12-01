import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { aceh } from '../../../../styles/aceh-font'
import '../../../../styles/globals.css'
import Navbar from '@/components/shared/navbar'
import Sidebar from '@/components/shared/sidebar'
import { SidebarProvider } from '@/providers/sidebar'
import { getUser } from '@/actions/auth.actions'
import { redirect } from 'next/navigation'
import TermsOfServices from '@/components/app/dashboard-customer-admin/terms-of-services'
import Sonner from '@/components/shared/sonner'

export const metadata: Metadata = {
  title: 'Managed IT Services - Lords of IT',
  description: 'Servicios de soporte administrado de IT'
}

export const dynamic = 'force-dynamic'

interface Props {
  children: React.ReactNode
}

export default async function DashboardLayout ({ children }: Props) {
  const { data } = await getUser()
  if (!data) {
    return redirect('/auth/login')
  }
  if (Number(data.user_metadata.role_id) !== 3) {
    return redirect('/')
  }
  return (
    <html data-theme='corporate'>
      <body className={`${aceh.className} overflow-hidden bg-home`}>
        <SidebarProvider>
          <div className='w-full flex flex-col justify-start items-center overflow-hidden'>
            <div className='w-full 2xl:max-w-[1440px] h-screen flex justify-start overflow-hidden shadow-md'>
              <Sidebar />
              <main className='relative w-full 2xl:max-w-[1440px] bg-[#E9E9E9] overflow-auto'>
                <Navbar />
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Sonner position='bottom-right' richColors />
        <Suspense>
          <TermsOfServices />
        </Suspense>
      </body>
    </html>
  )
}
