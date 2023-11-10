'use client'
import React, { useState } from 'react'
import Eye from '@/components/shared/icons/eye'
import { PhoneInput } from 'react-international-phone'
import EyeOff from '@/components/shared/icons/eye-off'
import 'react-international-phone/style.css'

export default function FormSignUp () {
  const [show, setShow] = useState(false)
  return (
    <form className='w-full flex flex-col justify-start gap-2'>
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
        <PhoneInput
          defaultCountry='us'
          forceDialCode
          inputStyle={{
            borderRadius: '0 9999px 9999px 0',
            paddingRight: '1rem',
            width: '100%',
            height: '3rem',
            borderWidth: '1.5px',
            borderStyle: 'solid',
            borderColor: '#161616',
            borderLeft: 'none'
          }}
          countrySelectorStyleProps={{
            buttonStyle: {
              borderRadius: '9999px 0 0 9999px',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              height: '3rem',
              borderWidth: '1.5px',
              borderStyle: 'solid',
              borderColor: '#161616',
              borderRight: 'none'
            }
          }}
          inputProps={{
            name: 'phone',
            required: true
          }}
        />
      </div>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            Password
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
            placeholder='********'
            className='input input-bordered w-full rounded-full it-input-border'
            name='password'
            required
          />
        </div>
      </div>
      <div className='form-control'>
        <label className='label justify-start gap-2 cursor-pointer'>
          <input type='checkbox' className='checkbox checkbox-primary' />
          <span className='label-text text-base font-normal leading-5'>
            Send me news and updates about Lords of IT products and services.
          </span>
        </label>
      </div>
      <button className='btn btn-active btn-neutral rounded-full mt-2'>
        Sign Up
      </button>
    </form>
  )
}
