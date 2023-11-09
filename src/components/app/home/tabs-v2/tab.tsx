'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  children: React.ReactNode
  value: string
  className?: string
  label: string
  includes: string[]
}

export default function Tab ({
  children,
  includes = [],
  label = '',
  value = '',
  className = ''
}: Props) {
  const pathname = usePathname()
  return (
    <Link
      href={value}
      className={`tab tab-bordered relative
      ${className} ${includes.includes(pathname)
        ? 'tab-active text-white font-bold before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-[95%] before:bg-it-black-1 before:-z-10'
        : ''}`}
      scroll={false}
    >
      {children}
    </Link>
  )
}
