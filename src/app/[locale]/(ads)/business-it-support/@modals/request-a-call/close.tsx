'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Close () {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2 font-sans'
    >
      ✕
    </button>
  )
}
