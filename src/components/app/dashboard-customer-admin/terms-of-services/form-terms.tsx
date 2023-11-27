'use client'
import React, { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  serverAction: (currentState: any, formData: FormData) => Promise<any>
}
export default function FormTerms ({ children, serverAction, ...props }: Props) {
  const [state, formAction] = useFormState(serverAction, null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error)
    }
    if (state?.data) {
      formRef.current?.reset()
      toast.success('Success')
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} {...props}>
      {children}
    </form>
  )
}
