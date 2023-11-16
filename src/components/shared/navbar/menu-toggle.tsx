'use client'
import React, { useEffect } from 'react'
import Menu from '../icons/menu'
import { useSidebar } from '@/providers/sidebar'
import { usePathname } from 'next/navigation'

export default function MenuToggle () {
  const { setShow } = useSidebar()
  const pathname = usePathname()
  useEffect(() => {
    setShow(false)
  }, [pathname])
  return (
    <button className='block hover:scale-110 md:hidden' onClick={() => setShow(true)}>
      <Menu />
    </button>
  )
}
