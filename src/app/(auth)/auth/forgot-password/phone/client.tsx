'use client'
import React, { useState } from 'react'
import { toast } from 'sonner'
import PhoneInputClient from '@/components/shared/phone-input-client'
import useLoginByOtp from '@/hooks/useLoginByOtp'
import useVerifyOtp from '@/hooks/useVerifyOtp'

export default function PhoneClient () {
  const [phoneState, setPhoneState] = useState('')
  const [step, setStep] = useState<'sign-in' | 'code'>('sign-in')
  const { loading, signInWithOtp } = useLoginByOtp()
  const { loading: loadingVerifyCode, verifyOtp } = useVerifyOtp()

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { phone } = e.target as unknown as {
      phone: { value: string }
    }
    if (!phone.value) {
      return toast.error('Phone is required')
    }
    if (phone.value.length < 10) {
      return toast.error('Phone not allowed')
    }
    setPhoneState(phone.value)
    void signInWithOtp({
      body: {
        type: 'phone',
        phone: phone.value
      },
      onError: (message) => toast.error(message),
      onSuccess: () => {
        phone.value = ''
        setStep('code')
        toast.success('A code has been sent to your phone')
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
    if (!phoneState) {
      return toast.error('phone missing')
    }
    if (phoneState.length < 10) {
      return toast.error('Phone not allowed')
    }
    void verifyOtp({
      body: {
        phone: phoneState,
        type: 'phone',
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
        <form
          onSubmit={handleSubmitLogin}
          className='w-full flex flex-col justify-start gap-2'
        >
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>
                Phone number
              </span>
            </label>
            <PhoneInputClient />
          </div>
          <button className='btn btn-active btn-neutral rounded-full mt-2' disabled={loading}>
            Continue
          </button>
        </form>}
      {step === 'code' &&
        <form className='w-full flex flex-col justify-start gap-2' onSubmit={handleSubmitCode}>
          <p className='text-center leading-none'>
            A 6-digit code has been sent to your phone,<br /> please verify it.
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
