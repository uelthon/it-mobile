import React from 'react'
import PasswordInput from '@/components/shared/password-input'

export default function ChangePasswordForm () {
  return (
    <form className='w-full flex flex-col justify-start gap-2'>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            New password
          </span>
        </label>
        <PasswordInput
          placeholder='Type your new password'
          className='input input-bordered w-full rounded-full it-input-border text-base'
          name='password'
          required
        />
      </div>
      <button className='btn btn-active btn-neutral rounded-full mt-2'>
        Confirm password
      </button>
    </form>
  )
}
