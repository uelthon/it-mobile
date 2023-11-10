'use client'
import React, { useState } from 'react'
import ArrowUp from '../../icons/arrow-up'
import ArrowDown from '../../icons/arrow-down'

const Dropdown = ({ title = '', children = <></> }) => {
  const [show, setShow] = useState(false)
  return (
    <div
      className='w-full flex flex-col justify-start'
    >
      <header
        className='border-[2px] border-solid border-it-black-1 px-[1rem] py-3'
      >
        <div
          className='flex items-center justify-between text-2xl'
          onClick={() => setShow(prev => !prev)}
        >
          <p>{title}</p>
          <div className='cursor-pointer'>
            {show ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>
      </header>
      <main
        className={`border-it-black-1 border-solid border-[2px] border-t-0
          ${!show ? 'h-0 p-0 overflow-hidden invisible transition-[height]' : 'transition-[height] overflow-visible visible p-3'}
        `}
      >
        {children}
      </main>
    </div>
  )
}

export default Dropdown
