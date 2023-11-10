'use client'
import React, { useState } from 'react'

interface Props {
  children: React.ReactNode
}

export default function PricingCard ({ children }: Props) {
  const [show, setShow] = useState(false)
  return (
    <div
      className={`relative border-solid border-[1px] border-it-black-1 py-[1.44rem] px-[1.75rem] flex flex-col justify-start gap-2 ${show ? '' : 'max-h-80 overflow-hidden'}`}
    >
      <p
        className='text-base font-bold leading-[87%] text-it-blue-1 cursor-pointer absolute top-4 right-4 z-[5]'
        onClick={() => setShow(prev => !prev)}
      >
        {!show ? 'Show details' : 'Close details'}
      </p>
      {children}
    </div>
  )
}
