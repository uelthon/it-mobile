'use client'
import React, { useState } from 'react'
import { toast } from 'sonner'
import useLoginByOtp from '@/hooks/useLoginByOtp'
import useVerifyOtp from '@/hooks/useVerifyOtp'

export default function ForgotPasswordForm () {
  const [email, setEmail] = useState('')
  const [step, setStep] = useState<'sign-in' | 'code'>('sign-in')
  const { loading, signInWithOtp } = useLoginByOtp()
  const { loading: loadingVerifyCode, verifyOtp } = useVerifyOtp()

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email } = e.target as unknown as {
      email: { value: string }
    }
    if (!email.value) {
      return toast.error('Email is required')
    }
    void signInWithOtp({
      body: {
        type: 'email',
        email: email.value
      },
      onError: (message) => toast.error(message),
      onSuccess: () => {
        email.value = ''
        setStep('code')
        toast.success('A code has been sent to your email')
      }
    })
  }

  const handleSubmitCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { code } = e.target as unknown as {
      code: { value: string }
    }
    if (!code.value) {
      return toast.error('Code is required')
    }
    if (!email) {
      return toast.error('email missing')
    }
    void verifyOtp({
      body: {
        email,
        type: 'email',
        token: code.value
      },
      onError: (message) => toast.error(message),
      onSuccess: () => {
        toast.success('Login Success')
        if (window) {
          window.location.reload()
        }
      }
    })
  }

  return (
    <>
      {step === 'sign-in' &&
        <form onSubmit={handleSubmitLogin} className='w-full flex flex-col justify-start gap-2'>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>
                Email
              </span>
            </label>
            <input
              type='email'
              placeholder='example@mail.com'
              className='input input-bordered w-full rounded-full it-input-border'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className='btn btn-active btn-neutral rounded-full mt-2' disabled={loading}>
            Continue
          </button>
          {/* <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            Type the characters in the image
          </span>
        </label>
        <input
          type='text'
          placeholder='DBU'
          className='input input-bordered w-full rounded-full it-input-border'
          name='code'
          required
        />
      </div> */}
        </form>}
      {step === 'code' &&
        <form className='w-full flex flex-col justify-start gap-2' onSubmit={handleSubmitCode}>
          <p className='text-center leading-none'>
            A 6-digit code has been sent to your email,<br /> please verify it.
          </p>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>
                Code
              </span>
            </label>
            <input
              type='text'
              placeholder='Enter the code'
              className='input input-bordered w-full rounded-full it-input-border'
              name='code'
              required
            />
          </div>
          <button className='btn btn-active btn-neutral rounded-full mt-2' disabled={loadingVerifyCode}>
            Continue
          </button>
          <button className='btn btn-link' onClick={() => setStep('sign-in')}>I did't get a code</button>
        </form>}
    </>
  )
}
