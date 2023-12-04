import React from 'react'

export default function SubscriptionCardSkeleton () {
  return (
    <button className='flex items-center justify-between gap-2 px-4 py-2 rounded-2xl animate-pulse'>
      <div className='flex items-center gap-2'>
        <span className='w-11 h-8 bg-gray-200' />
        <p className='text-left text-lg leading-none font-light'>
          <div className='h-4 bg-gray-200 rounded mb-1' />
          <div className='h-4 bg-gray-200 w-32 rounded' />
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='h-4 w-6 bg-gray-200 rounded block' />
        <span className='w-6 h-6 bg-gray-200 rounded' />
      </div>
    </button>
  )
}
