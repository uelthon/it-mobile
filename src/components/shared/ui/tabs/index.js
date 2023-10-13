import Link from 'next/link'
import React from 'react'

const Tab = ({ active = false, children, value = '', className = '' }) => {
  return (
    <Link
      href={{ query: { tab: value } }}
      className={`tab tab-bordered ${className} ${active ? 'tab-active font-bold container-poly' : ''}`}
      scroll={false}
    >
      {children}
    </Link>
  )
}

const Tabs = ({ children, className = '' }) => {
  return (
    <div className={`tabs ${className}`}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child)
      })}
    </div>
  )
}

Tabs.Tab = Tab

export default Tabs
