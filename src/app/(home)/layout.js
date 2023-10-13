import React from 'react'
import Header from '@/components/app/home/header'
import Footer from '@/components/app/home/footer'

export default function HomeLayout ({ children }) {
  return (
    <>
      <Header />
      <main className='w-full flex flex-col justify-start items-center'>
        <div className='w-full md:w-4/5 2xl:max-w-[1440px]'>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
