'use client'
import React from 'react'
import { Toaster } from 'sonner'

interface ToasterProps {
  invert?: boolean
  theme?: 'light' | 'dark' | 'system'
  position?: Position
  hotkey?: string[]
  richColors?: boolean
  expand?: boolean
  duration?: number
  gap?: number
  visibleToasts?: number
  closeButton?: boolean
  toastOptions?: ToastOptions
  className?: string
  style?: React.CSSProperties
  offset?: string | number
  dir?: 'rtl' | 'ltr' | 'auto'
  loadingIcon?: React.ReactNode
}
type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'
interface ToastOptions {
  className?: string
  descriptionClassName?: string
  style?: React.CSSProperties
  cancelButtonStyle?: React.CSSProperties
  actionButtonStyle?: React.CSSProperties
  duration?: number
  unstyled?: boolean
}
export default function Sonner (props: ToasterProps) {
  return (
    <Toaster {...props} />
  )
}
