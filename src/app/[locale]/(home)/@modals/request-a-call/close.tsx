'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Close () {
  const router = useRouter()
  return (
    <button
      className='btn btn-xs btn-circle btn-error text-opacity-70 absolute top-2 right-3'
      onClick={() => router.back()}
    >
      x
    </button>
  )
}
