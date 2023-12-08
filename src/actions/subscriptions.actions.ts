'use server'
import stripe from '@/libs/stripe'
import supabaseAdmin from '@/libs/supabase/supabase-admin'
import { SubscriptionUser } from '@/types/subscriptions-user.types'
import { getAllProducts } from './products.actions'
import { Product } from '@/types/products.types'
import { revalidatePath } from 'next/cache'
import { getUser } from './auth.actions'

export const getAllUserSubscriptions = async () => {
  const { data: user } = await getUser()
  if (!user) {
    return {
      error: 'user missing',
      data: null
    }
  }
  const { data, error } = await supabaseAdmin.from('subscriptions').select('*').eq('business_id', user.user_metadata.business_id).eq('status', 'active')
  const subscriptions = data ? data as SubscriptionUser[] : []
  return {
    data: subscriptions,
    error
  }
}

export const getOneStripeSubscriptions = async (subId: string) => {
  try {
    const subscription = await stripe.subscriptions.retrieve(
      subId,
      {
        expand: ['items.data.plan.product', 'customer']
      }
    )
    return {
      data: subscription,
      error: null
    }
  } catch (error) {
    return {
      error: 'stripe error',
      data: null
    }
  }
}
export const getAllUserProducts = async () => {
  try {
    const { data: dataUserSubscriptions } = await getAllUserSubscriptions()
    if (!dataUserSubscriptions?.length) {
      return {
        data: [''],
        error: 'user subscription not found'
      }
    }
    const subscription = await stripe.subscriptions.retrieve(
      dataUserSubscriptions[0].id
    )
    const products = subscription.items.data.map(item => item.plan.product)
    return {
      data: products,
      error: null
    }
  } catch (error) {
    return {
      data: [''],
      error: 'server error'
    }
  }
}

export const getUnpurchasedUserProducts = async () => {
  const dataUserProducts = getAllUserProducts()
  const dataProducts = getAllProducts()
  const [{ data: userProducts }, { data: products }] = await Promise.all([dataUserProducts, dataProducts])
  const unpurchasedProducts = products.filter(product => !userProducts.includes(product?.id || ''))
  return {
    data: unpurchasedProducts,
    error: null
  }
}

export const getSubItemById = async (siId: string) => {
  try {
    const subItem = await stripe.subscriptionItems.retrieve(
      siId,
      {
        expand: ['price.product']
      }
    )
    const data = {
      subItem,
      product: subItem.price.product as unknown as Product
    }
    return {
      data,
      error: null
    }
  } catch (error) {
    return {
      data: null,
      error: 'stripe error'
    }
  }
}

export const updateSubItemById = async (formData: FormData) => {
  const subItem = formData.get('subItem')
  const quantity = formData.get('quantity')
  if (!subItem || !quantity) {
    return {
      error: 'subItem and quantity are required',
      data: null
    }
  }
  if (typeof subItem !== 'string') {
    return {
      data: null,
      error: 'sub item must be a string'
    }
  }
  try {
    const subscriptionItem = await stripe.subscriptionItems.update(
      subItem,
      {
        quantity: Number(quantity)
      }
    )
    revalidatePath('/dashboard/customer-admin/subscriptions')
    return {
      data: JSON.parse(JSON.stringify(subscriptionItem)),
      error: null
    }
  } catch (error) {
    return {
      data: null,
      error: 'server error'
    }
  }
}

export const addItemToSub = async (formData: FormData) => {
  const subId = formData.get('subId')
  const priceId = formData.get('priceId')
  const quantity = formData.get('quantity')
  if (!subId || !priceId || !quantity) {
    return {
      data: null,
      error: 'some fields are required'
    }
  }
  if (typeof subId !== 'string' || typeof priceId !== 'string' || typeof Number(quantity) !== 'number') {
    return {
      data: null,
      error: 'type error on fields'
    }
  }
  try {
    const subscriptionItem = await stripe.subscriptionItems.create({
      subscription: subId,
      price: priceId,
      quantity: Number(quantity)
    })
    revalidatePath('/dashboard/customer-admin/subscriptions')
    return {
      data: JSON.parse(JSON.stringify(subscriptionItem)),
      error: null
    }
  } catch (error) {
    return {
      data: null,
      error: 'stripe error'
    }
  }
}
