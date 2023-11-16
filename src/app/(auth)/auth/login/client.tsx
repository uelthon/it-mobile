import React from 'react'
import PasswordInput from '@/components/shared/password-input'
import { login } from '@/actions/auth.actions'

export default function FormLogin () {
  return (
    <form action={login} className='w-full flex flex-col justify-start gap-2'>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            Email Address
          </span>
        </label>
        <input
          type='email'
          placeholder='example@mail.com'
          className='input input-bordered w-full rounded-full it-input-border'
          name='email'
          required
        />
      </div>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            Password
          </span>
        </label>
        <PasswordInput
          placeholder='********'
          className='input input-bordered w-full rounded-full it-input-border text-base'
          name='password'
          required
        />
      </div>
      <button className='btn btn-active btn-neutral rounded-full mt-2'>
        Login
      </button>
    </form>
  )
}
