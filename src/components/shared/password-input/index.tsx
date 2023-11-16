'use client'
import React, { useState } from 'react'
import Eye from '../icons/eye'
import EyeOff from '../icons/eye-off'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

export default function PasswordInput (props: Props) {
  const [show, setShow] = useState(false)
  return (
    <div className='relative'>
      <div
        className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer'
        onClick={() => setShow(prev => !prev)}
      >
        {!show ? <Eye /> : <EyeOff />}
      </div>
      <input
        type={!show ? 'password' : 'text'}
        {...props}
      />
    </div>
  )
}
