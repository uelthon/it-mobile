import Link from 'next/link'
import React from 'react'
import ForgotPasswordForm from './client'

export default function ForgotPassword () {
  return (
    <div className='flex flex-col justify-start gap-4 items-center'>
      <h1 className='text-3xl text-it-blue-1 font-bold'>
        Reset your password
      </h1>
      <p className='text-center'>
        Reset your email address or phone number that you use with your account to continue.
      </p>
      <ForgotPasswordForm />
      <Link href='/auth/sign-up' className='text-base text-center md:text-left'>
        Don’t have and account? <span className='font-bold'>Register</span>
      </Link>
    </div>
  )
}
