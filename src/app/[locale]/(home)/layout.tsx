import React from 'react'
import Link from 'next/link'
import Logo from '@/components/shared/icons/logo'

interface Props {
  children: React.ReactNode
}

export default function OtherLayout ({ children }: Props) {
  return (
    <>
      <header className='w-full flex justify-center pt-12 pb-8'>
        <Link href='/'><Logo width='320' /></Link>
      </header>
      <main className='w-full flex flex-col justify-start items-center mb-12'>
        <div className='w-full md:max-w-[1210px]'>
          <div className='w-full flex flex-col justify-start gap-7 py-7'>
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
