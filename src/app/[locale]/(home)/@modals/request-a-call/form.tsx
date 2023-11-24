'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  serverAction: (currentState: any, formData: FormData) => Promise<any>
}
export default function Form ({ children, serverAction, ...props }: Props) {
  const [state, formAction] = useFormState(serverAction, null)
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (state?.error) {
      alert(state.error)
    }
    if (state?.data) {
      formRef.current?.reset()
      alert('Success')
      router.back()
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} {...props}>
      {children}
    </form>
  )
}
