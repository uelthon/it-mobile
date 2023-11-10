import React from 'react'
import FormSignUp from './client'
import Link from 'next/link'

export default function SignUp () {
  return (
    <div className='flex flex-col justify-start gap-4 items-center'>
      <h1 className='text-3xl text-it-blue-1 font-bold'>
        Create an Account
      </h1>
      <div className='divider mt-0 mb-0' />
      <FormSignUp />
      <Link href='/auth/login' className='text-base text-center md:text-left'>
        Do you already have an account? <span className='font-bold'>Login</span>
      </Link>
    </div>
  )
}
