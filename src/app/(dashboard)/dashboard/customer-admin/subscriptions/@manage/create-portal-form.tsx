'use client'
import React from 'react'
import { createPortal } from '@/actions/stripe.actions'
import { useRouter } from 'next/navigation'

export default function CreatePortalForm () {
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await createPortal()
    if (error || !data) {
      return alert(error)
    }
    router.push(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <button
        type='submit'
        className='text-sm text-it-blue-1'
      >
        Update
      </button>
    </form>
  )
}
