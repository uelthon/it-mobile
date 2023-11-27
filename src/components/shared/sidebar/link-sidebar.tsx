'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
  icon: React.ReactNode
  label: string
  paths: string[]
  href: string
}

export default function LinkSidebar ({ icon, label, paths, href }: Props) {
  const pathname = usePathname()
  return (
    <li
      className={`flex items-center justify-start text-base 
      ${paths.includes(pathname) ? 'text-it-blue-1 font-semibold' : 'text-it-gray-5'} 
      leading-[150%]`}
    >
      <span className='w-8 flex items-center justify-start'>
        {icon}
      </span>
      <Link href={href}>
        {label}
      </Link>
    </li>
  )
}
