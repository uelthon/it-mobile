import React from 'react'
import SubscriptionCard from '@/components/app/dashboard-customer-admin/subscription-card'
import Add from '@/components/shared/icons/add'
import Link from 'next/link'
import { getAllUserSubscriptions, getOneStripeSubscriptions } from '@/actions/subscriptions.actions'
import BillingLink from '@/components/app/dashboard-customer-admin/billing-link'
import { getUser } from '@/actions/auth.actions'

interface Props {
  children: React.ReactNode
}

export default async function ManageLayout ({ children }: Props) {
  const { data } = await getAllUserSubscriptions()
  if (!data) {
    return
  }
  const stripeSub = getOneStripeSubscriptions(data[0].id)
  const userData = getUser()
  const [{ data: stripeSubscription }, { data: user }] = await Promise.all([stripeSub, userData])
  return (
    <div className='w-full flex flex-col justify-start h-full bg-white sm:flex-row sm:justify-stretch'>
      <div className='w-full flex flex-col justify-start gap-4 md:max-w-md p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-medium leading-[150%]'>Your Subscription</h1>
          <Link href='/dashboard/customer-admin/subscriptions/add' className='text-it-gray-2 text-base font-light leading-[150%]'>
            <Add />
            <p>Add</p>
          </Link>
        </div>
        <div className='flex flex-col justify-start gap-2'>
          <BillingLink company={user?.user_metadata?.business_name || ''} />
          {stripeSubscription?.items.data.map(item =>
            <SubscriptionCard
              key={item.id}
            // @ts-expect-error
              name={item.plan?.product?.name || ''}
              price={(Number(item.price.unit_amount) / 100).toFixed(2)}
              quantity={Number(item.quantity)}
              id={item.id}
            />
          )}
        </div>
      </div>
      <div className='divider divider-vertical my-0 py-0 sm:divider-horizontal sm:mx-0 sm:px-0' />
      {children}
    </div>
  )
}
