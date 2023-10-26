import React from 'react'
import Header from '@/components/app/home/header'
import Footer from '@/components/app/home/footer'
import Link from 'next/link'
import Logo from '@/components/shared/icons/logo'

export default function HomeLayout ({ children, tags }) {
  return (
    <>
      <Header />
      <header className='w-full flex justify-center py-12'>
        <Link href='/'><Logo /></Link>
      </header>
      <main className='w-full flex flex-col justify-start items-center'>
        <div className='w-full md:w-4/5 2xl:max-w-[1440px]'>
          <div className='w-full flex flex-col justify-start gap-7 py-7'>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
