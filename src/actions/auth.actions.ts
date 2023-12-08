'use server'
import { cookies } from 'next/headers'
import * as z from 'zod'
import supabaseAction from '@/libs/supabase/supabase-action'
import supabaseAdmin from '@/libs/supabase/supabase-admin'
import supabaseServer from '@/libs/supabase/supabase-server'
import cleanPhoneNumber from '@/libs/clean-phone-number'
import { revalidatePath } from 'next/cache'

export const getSession = async () => {
  const supabase = supabaseServer({ cookies })
  const { data: { session }, error } = await supabase.auth.getSession()
  if (error || !session) {
    return {
      error: error?.message || 'Supabase server error',
      data: null
    }
  }
  return {
    error: null,
    data: session
  }
}

export const getUser = async () => {
  const supabase = supabaseServer({ cookies })
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) {
    return {
      error: error?.message || 'Supabase server error',
      data: null
    }
  }
  return {
    error: null,
    data: user
  }
}

const BodyLogin = z.object({
  email: z.string(),
  password: z.string()
})
export type BodyLoginType = z.infer<typeof BodyLogin>
export const login = async (formData: FormData) => {
  const supabase = supabaseAction({ cookies })
  try {
    const body = await BodyLogin.parseAsync(Object.fromEntries(formData))
    const { data, error } = await supabase.auth.signInWithPassword(body)
    if (error) {
      return {
        error: error.message || 'supabase error',
        data: null
      }
    }
    return {
      data,
      error: null
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: error.message,
        data: null
      }
    }
    return {
      error: 'Server Error',
      data: null
    }
  }
}

export const logOut = async () => {
  const supabase = supabaseAction({ cookies })
  await supabase.auth.signOut()
}

const BodyCreateUserElementSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  businessName: z.string(),
  website: z.string(),
  phone: z.string(),
  password: z.string(),
  sendEmail: z.union([z.null(), z.string()]).optional()
})
export type BodyCreateUserElement = z.infer<typeof BodyCreateUserElementSchema>

export const createUser = async (formData: FormData) => {
  const supabase = supabaseAction({ cookies })
  try {
    const body = await BodyCreateUserElementSchema.parseAsync(Object.fromEntries(formData))
    const cleanPhone = cleanPhoneNumber(body.phone)
    const { data: dataCompany, error: errorCompany } = await supabase.from('business').insert({
      name: body.businessName
    }).select('*').single()
    if (errorCompany || !dataCompany) {
      return {
        error: errorCompany?.message || 'supabase error company',
        data: null
      }
    }
    console.log(dataCompany)
    const { data: { user }, error } = await supabase.auth.signUp({
      email: body.email,
      password: body.password,
      options: {
        data: {
          full_name: body.fullName,
          avatar_url: '',
          business_name: body.businessName,
          business_id: dataCompany.id,
          website: body.website,
          send_emails: body?.sendEmail === 'on',
          role_id: 3,
          disabled: false
        }
      }
    })
    if (error || !user) {
      console.log('1', error?.message)
      return {
        error: error?.message || 'supabase server error',
        data: null
      }
    }
    await supabaseAdmin.auth.admin.updateUserById(user.id, {
      phone: cleanPhone
    })
    return {
      error: null,
      data: user
    }
  } catch (error) {
    console.log('hola', error)
    if (error instanceof z.ZodError) {
      return {
        error: error.message,
        data: null
      }
    }
    return {
      error: 'supabase server error',
      data: null
    }
  }
}

export const getTermsOfServices = async () => {
  const { data, error } = await getSession()
  if (error || !data) {
    return {
      error,
      data: null
    }
  }
  const userId = data.user.id
  const supabase = supabaseServer({ cookies })
  const { data: dataTerms, error: errorTerms } = await supabase.from('terms_of_services')
    .select('*')
    .eq('user_id', userId)
  return {
    data: dataTerms,
    error: errorTerms
  }
}

export const agreeTermsOfServices = async (currentState = { error: null, data: null }, formData: FormData) => {
  const { data, error } = await getSession()
  if (error || !data) {
    return {
      error,
      data: null
    }
  }
  const supabase = supabaseAction({ cookies })
  const { data: dataTerms, error: errorTerms } = await supabase.from('terms_of_services').insert({
    isAgree: true
  }).select('*')
  if (errorTerms || !dataTerms) {
    return {
      error: errorTerms?.message || 'server error',
      data: null
    }
  }
  revalidatePath('/dashboard/customer-admin')
  return {
    data: dataTerms,
    error: null
  }
}
