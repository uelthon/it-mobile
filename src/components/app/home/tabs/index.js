import React from 'react'
import Tab from './tab'

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
