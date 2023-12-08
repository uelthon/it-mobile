'use server'
import { cookies } from 'next/headers'
import supabaseServer from '@/libs/supabase/supabase-server'
import { getCart } from './cart.actions'
import { createOrRetrieveCustomer } from '@/services/stripe-webhook-services'
import stripe from '@/libs/stripe'
import { getURL } from '@/utils/helpers'

export const createSession = async () => {
  const supabase = supabaseServer({ cookies })
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) {
    console.log(error)
    return {
      error: error?.message || 'auth error',
      data: null
    }
  }
  const { data: products } = await getCart()
  const prices = products.map(p => ({
    price: p.value?.prices[0].id,
    quantity: Number(p.quantity)
  })).filter(price => price.price !== null && price.price !== undefined)
  const metadatos = products.map(p => p.value?.prices[0].metadata).filter(m => m !== null && m !== undefined)
  if (prices.length <= 0) {
    return {
      error: 'Agregue al menos una subscripcion',
      data: null
    }
  }
  const customer = await createOrRetrieveCustomer({
    email: user?.email || '',
    uuid: user?.id || '',
    businessId: user?.user_metadata?.business_id || ''
  })
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      customer,
      customer_update: {
        address: 'auto'
      },
      line_items: prices,
      mode: 'subscription',
      allow_promotion_codes: true,
      subscription_data: {
        metadata: {
          price_metadata: JSON.stringify(metadatos)
        }
      },
      success_url: `${getURL()}/dashboard/customer-admin/subscriptions`,
      cancel_url: `${getURL()}/dashboard/customer-admin/subscriptions`
    })
    if (!session) {
      return {
        error: 'session error',
        data: null
      }
    }
    return {
      error: null,
      data: { sessionId: session.id }
    }
  } catch (error) {
    console.log(error)
    return {
      error: 'stripe session error',
      data: null
    }
  }
}

export const createPortal = async () => {
  const supabase = supabaseServer({ cookies })
  const { data: { user }, error } = await supabase.auth.getUser()
  if (!user || error) {
    return {
      error: error?.message || 'auth error',
      data: null
    }
  }
  const customer = await createOrRetrieveCustomer({
    uuid: user?.id || '',
    email: user?.email || '',
    businessId: user?.user_metadata?.business_id || ''
  })
  if (!customer) {
    return {
      error: 'error al obtener usuario',
      data: null
    }
  }
  const { url } = await stripe.billingPortal.sessions.create({
    customer,
    return_url: `${getURL()}/dashboard/customer-admin/subscriptions`
  })
  return {
    data: url,
    error: null
  }
}
