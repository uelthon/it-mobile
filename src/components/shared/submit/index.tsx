'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  loading?: string | React.ReactNode
}

export default function Submit ({
  label = 'Submit',
  loading = 'Loading',
  ...props
}: Props) {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} {...props}>
      {!pending ? label : loading}
    </button>
  )
}
