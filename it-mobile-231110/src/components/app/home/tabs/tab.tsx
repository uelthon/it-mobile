'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  children: React.ReactNode
  value: string
  className?: string
  label: string
  includes: string[]
}

const Tab = ({ children, value = '', className = '', label = '', includes = [] }: Props) => {
  const pathname = usePathname()
  return (
    <Link
      href={value}
      className={`tab tab-bordered 
      ${className} ${includes.includes(pathname)
        ? 'tab-active font-bold container-poly'
        : ''}`}
      scroll={false}
    >
      {children}
    </Link>
  )
}

export default Tab
