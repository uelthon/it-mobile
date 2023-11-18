'use client'
import React, { HTMLProps, useEffect, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface Props extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  root?: any
  threshold?: number
  rootMargin?: string
}

const AwaitVisible = ({
  children,
  root = null,
  rootMargin = '0px',
  threshold = 0.5,
  ...props
}: Props) => {
  const [show, setShow] = useState(false)
  const { entry, ref } = useIntersectionObserver<HTMLDivElement>({
    threshold,
    root,
    rootMargin
  })

  useEffect(() => {
    if (entry?.isIntersecting) {
      setShow(true)
    }
  }, [entry])

  return (
    <div ref={ref} {...props}>
      {show && children}
    </div>
  )
}

export default AwaitVisible
