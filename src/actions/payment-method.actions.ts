'use server'

import stripe from '@/libs/stripe'

export const getPaymentMethodById = async (pmId: string) => {
  try {
    const paymentMethod = await stripe.paymentMethods.retrieve(
      pmId
    )
    return {
      data: paymentMethod,
      error: null
    }
  } catch (error) {
    return {
      error: 'stripe error',
      data: null
    }
  }
}
