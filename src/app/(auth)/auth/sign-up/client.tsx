import React from 'react'
import { createUser } from '@/actions/auth.actions'
import PasswordInput from '@/components/shared/password-input'
import PhoneInputClient from '@/components/shared/phone-input-client'

export default function FormSignUp () {
  return (
    <form action={createUser} className='w-full flex flex-col justify-start gap-2'>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            Full Name
          </span>
        </label>
        <input
          type='text'
          placeholder='Enter your Name'
          className='input input-bordered w-full rounded-full it-input-border'
          name='fullName'
          required
        />
      </div>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            Work Email
          </span>
        </label>
        <input
          type='email'
          placeholder='Enter your your work mail'
          className='input input-bordered w-full rounded-full it-input-border'
          name='email'
          required
        />
      </div>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            Business Name
          </span>
        </label>
        <input
          type='text'
          placeholder='Enter the name of your business'
          className='input input-bordered w-full rounded-full it-input-border'
          name='businessName'
          required
        />
      </div>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            Website (Optional)
          </span>
        </label>
        <input
          type='text'
          placeholder='Enter your website address'
          className='input input-bordered w-full rounded-full it-input-border'
          name='website'
        />
      </div>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            Mobile number
          </span>
        </label>
        <PhoneInputClient />
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
      <div className='form-control'>
        <label className='label justify-start gap-2 cursor-pointer'>
          <input type='checkbox' className='checkbox checkbox-primary' name='sendEmail' />
          <span className='label-text text-base font-normal leading-none'>
            Send me news and updates about Lords of IT products and services.
          </span>
        </label>
      </div>
      <button type='submit' className='btn btn-active btn-neutral rounded-full mt-2'>
        Sign Up
      </button>
    </form>
  )
}
