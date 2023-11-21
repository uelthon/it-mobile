import React from 'react'

export default function HomeLayout ({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full flex flex-col justify-start items-center'>
      <main className='w-full md:max-w-[1550px]'>
        {children}
      </main>
    </div>
  )
}
