import React from 'react'
import { getAllUserSubscriptions, getUnpurchasedUserProducts } from '@/actions/subscriptions.actions'
import AddItemSelector from './add-item-selector'

export default async function Add () {
  const [{ data: subscriptions }, { data: unpurchasedProducts }] = await Promise.all([getAllUserSubscriptions(), getUnpurchasedUserProducts()])
  return (
    <div className='w-full flex justify-center px-2 md:px-0 py-4'>
      <AddItemSelector productsData={unpurchasedProducts} subId={subscriptions[0].id} />
    </div>
  )
}
