'use server'
import supabaseServer from '@/libs/supabase/supabase-server'
import { cookies } from 'next/headers'

export const getAllUserSubscriptions = async () => {
  const supabase = supabaseServer({ cookies })
  const { data, error } = await supabase.from('subscriptions').select('*').eq('status', 'active')
  return {
    data,
    error
  }
}
