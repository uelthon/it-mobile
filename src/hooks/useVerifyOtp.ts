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
  token: string
} | {
  type: 'phone'
  phone: string
  token: string
}

export default function useVerifyOtp () {
  const [loading, setLoading] = useState(false)
  const supabase = supabaseBrowser()

  const verifyOtp = async ({ body, onError, onSuccess }: Mutate) => {
    setLoading(true)
    try {
      if (body.type === 'email') {
        const { error } = await supabase.auth.verifyOtp(body)
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
        const cleanPhone = cleanPhoneNumber(body.phone)
        const { error } = await supabase.auth.verifyOtp({
          phone: cleanPhone,
          token: body.token,
          type: 'sms'
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
      }
    } catch (error) {
      console.log(error)
      if (onError) {
        onError('server error')
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    verifyOtp
  }
}
