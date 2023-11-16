'use client'
import React, { createContext, useContext, useState } from 'react'

interface SidebarContextI {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = createContext<SidebarContextI>({
  show: false,
  setShow: () => {}
})

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false)

  return (
    <SidebarContext.Provider value={{ show, setShow }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)
