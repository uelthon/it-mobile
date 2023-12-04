'use client'
import { createSession } from '@/actions/stripe.actions'
import getStripe from '@/libs/stripe/stripe-client'
import React from 'react'

export default function Subscribe () {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await createSession()
    if (error || !data) {
      return alert(error)
    }
    const stripe = await getStripe()
    void stripe?.redirectToCheckout({ sessionId: data.sessionId })
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-start gap-2'
    >
      <button className='btn btn-active btn-neutral rounded-full'>
        Subscribe
      </button>
    </form>
  )
}
