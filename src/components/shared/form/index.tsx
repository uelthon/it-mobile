'use client'
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  serverAction: (currentState: any, formData: FormData) => Promise<any>
}

export default function Form ({ children, serverAction, ...props }: Props) {
  const [state, formAction] = useFormState(serverAction, null)

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error)
    }
    if (state?.data) {
      toast.success('Login Success')
    }
  }, [state])

  return (
    <form action={formAction} {...props}>
      {children}
    </form>
  )
}
