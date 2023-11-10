import React from 'react'
import Link from 'next/link'
import FormLogin from './client'

export default function Login () {
  return (
    <div className='flex flex-col justify-start gap-4 items-center'>
      <h1 className='text-3xl text-it-blue-1 font-bold'>Welcome Back!</h1>
      <FormLogin />
      <Link href='/auth/forgot-password' className='text-base font-bold'>
        Forgot Lords of IT Password?
      </Link>
      <Link href='/auth/sign-up' className='text-base text-center md:text-left'>
        Don’t have and account? <span className='font-bold'>Register</span>
      </Link>
    </div>
  )
}
