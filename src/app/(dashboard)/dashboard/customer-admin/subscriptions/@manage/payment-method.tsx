import React from 'react'
import CreatePortalForm from './create-portal-form'

export function PaymentMethodSkeleton () {
  return (
    <div className='flex items-center justify-between py-2 px-4 border-[1px] border-solid bg-gray-200 animate-pulse rounded-2xl'>
      <div className='flex flex-col justify-start gap-1'>
        <p className='text-base font-medium leading-[150%]'>
          Payment Method
        </p>
        <div className='flex items-center gap-2'>
          <div className='w-7 h-5 bg-it-gray-1 bg-opacity-25' />
          <div className='h-4 bg-it-gray-1 bg-opacity-25 rounded w-32' />
        </div>
      </div>
      <form>
        <button className='text-sm text-it-blue-1'>Update</button>
      </form>
    </div>
  )
}

interface Props {
  name: string
  code: number | string
}

export default function PaymentMethod ({ code, name }: Props) {
  return (
    <div className='flex items-center justify-between py-2 px-4 border-[1px] border-solid border-it-white-smoke rounded-2xl'>
      <div className='flex flex-col justify-start gap-1'>
        <p className='text-base font-medium leading-[150%]'>
          Payment Method
        </p>
        <div className='flex items-center gap-2'>
          <span className='py-1 px-2 bg-it-blue-1 text-white text-xs capitalize'>
            {name}
          </span>
          <p className='text-sm text-it-gray-1 leading-[150%] capitalize'>
            {name} {code}
          </p>
        </div>
      </div>
      <CreatePortalForm />
    </div>
  )
}
