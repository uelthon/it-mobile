'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  children: React.ReactNode
  value: string
  className?: string
  label: string
}

const Tab = ({ children, value = '', className = '', label = '' }: Props) => {
  const pathname = usePathname()
  return (
    <Link
      href={value}
      className={`tab tab-bordered 
      ${className} ${pathname === value
        ? 'tab-active font-bold container-poly'
        : (pathname === '/' && label === 'Services')
        ? 'tab-active font-bold container-poly'
: ''}`}
      scroll={false}
    >
      {children}
    </Link>
  )
}

export default Tab
