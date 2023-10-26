'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Tab = ({ children, value = '', className = '', label = '' }) => {
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
