import React from 'react'
import Tab from './tab'

interface Props {
  children: React.ReactNode
  className?: string
}

const Tabs = ({ children, className = '' }: Props) => {
  return (
    <div className={`tabs ${className}`}>
      {React.Children.map(children, (child) => {
        // @ts-expect-error
        return React.cloneElement(child)
      })}
    </div>
  )
}

Tabs.Tab = Tab

export default Tabs
