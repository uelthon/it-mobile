'use client'
import { useState } from 'react'
import supabaseBrowser from '@/libs/supabase/supabase-browser'
import cleanPhoneNumber from '@/libs/clean-phone-number'

interface Mutate {
  body: Body
  onSuccess?: () => void
  onError?: (message: string) => void
}
type Body = {
  type: 'email'
  email: string
} | {
  type: 'phone'
  phone: string
}

export default function useLoginByOtp () {
  const [loading, setLoading] = useState(false)
  const supabase = supabaseBrowser()

  const signInWithOtp = async ({ body, onError, onSuccess }: Mutate) => {
    setLoading(true)
    try {
      if (body.type === 'email') {
        const { error } = await supabase.auth.signInWithOtp({
          email: body.email,
          options: {
            shouldCreateUser: false
          }
        })
        if (error) {
          if (onError) {
            return onError(error.message)
          }
          return
        }
        if (onSuccess) {
          return onSuccess()
        }
        return
      }
      if (body.type === 'phone') {
        const cleanNumber = cleanPhoneNumber(body.phone)
        const { error } = await supabase.auth.signInWithOtp({
          phone: cleanNumber,
          options: {
            channel: 'sms',
            shouldCreateUser: false
          }
        })
        if (error) {
          if (onError) {
            return onError(error.message)
          }
          return
        }
        if (onSuccess) {
          onSuccess()
        }
      }
    } catch (error) {
      console.log(error)
      if (onError) {
        onError('Server Error')
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    signInWithOtp
  }
}
