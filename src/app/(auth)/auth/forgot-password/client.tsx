import React from 'react'

export default function ForgotPasswordForm () {
  return (
    <form className='w-full flex flex-col justify-start gap-2'>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text text-base'>
            Email or Phone number
          </span>
        </label>
        <input
          type='email'
          placeholder='example@mail.com'
          className='input input-bordered w-full rounded-full it-input-border'
          name='email'
          required
        />
      </div>
      <div className='form-control w-full'>
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
      </div>
      <button className='btn btn-active btn-neutral rounded-full mt-2'>
        Continue
      </button>
    </form>
  )
}
