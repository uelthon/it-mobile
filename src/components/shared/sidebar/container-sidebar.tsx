'use client'
import { useSidebar } from '@/providers/sidebar'
import React from 'react'
import Close from '../icons/close'

export default function ContainerSidebar ({ children }: { children: React.ReactNode }) {
  const { setShow, show } = useSidebar()
  return (
    <div className={`w-full ${!show ? 'hidden md:block' : 'block'} fixed top-0 left-0 h-screen bg-black bg-opacity-50 backdrop-blur-sm z-20 md:w-auto md:relative`} onClick={() => setShow(false)}>
      <button
        className='absolute top-4 right-2 text-red-700 md:hidden'
        onClick={() => setShow(false)}
      >
        <Close />
      </button>
      <div className='w-64 h-full' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
