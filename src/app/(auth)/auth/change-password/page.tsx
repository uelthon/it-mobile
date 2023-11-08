import React from 'react'
import ChangePasswordForm from './client'

export default function ChangePassword () {
  return (
    <div className='flex flex-col justify-start gap-4 items-center'>
      <h1 className='text-3xl text-it-blue-1 font-bold'>
        New password
      </h1>
      <p>
        Enter your new password
      </p>
      <ChangePasswordForm />
    </div>
  )
}
