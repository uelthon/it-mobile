'use client'
import React, { useState } from 'react'
import Eye from '@/components/shared/icons/eye'
import EyeOff from '@/components/shared/icons/eye-off'

export default function ChangePasswordForm () {
  const [show, setShow] = useState(false)
  return (
    <form className='w-full flex flex-col justify-start gap-2'>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            New password
          </span>
        </label>
        <div className='relative'>
          <div
            className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer'
            onClick={() => setShow(prev => !prev)}
          >
            {!show ? <Eye /> : <EyeOff />}
          </div>
          <input
            type={!show ? 'password' : 'text'}
            placeholder='Type your new password'
            className='input input-bordered w-full rounded-full it-input-border'
            name='password'
            required
          />
        </div>
      </div>
      <button className='btn btn-active btn-neutral rounded-full mt-2'>
        Confirm password
      </button>
    </form>
  )
}
