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
      className={`tab tab-bordered relative z-10
      ${className} ${includes.includes(pathname)
        ? 'tab-active text-white font-bold bg-it-black-1'
        : ''}`}
      scroll={false}
    >
      {children}
    </Link>
  )
}
