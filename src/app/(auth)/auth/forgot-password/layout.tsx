import Tabs from '@/components/app/home/tabs-v2'
import Link from 'next/link'
import React from 'react'

export default function ForgotPasswordLayout ({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col justify-start gap-4 items-center'>
      <h1 className='text-3xl text-it-blue-1 font-bold'>
        Reset your password
      </h1>
      <p className='text-center leading-none'>
        Reset your email address or phone number that you use with your account to continue.
      </p>
      <Tabs>
        <Tabs.Tab
          includes={['/auth/forgot-password/email']}
          label='Email'
          value='/auth/forgot-password/email'
        >
          Email
        </Tabs.Tab>
        <Tabs.Tab
          includes={['/auth/forgot-password/phone']}
          label='Phone'
          value='/auth/forgot-password/phone'
        >
          Phone
        </Tabs.Tab>
      </Tabs>
      {children}
      <Link href='/auth/sign-up' className='text-base text-center md:text-left'>
        Don’t have and account? <span className='font-bold'>Register</span>
      </Link>
    </div>
  )
}
