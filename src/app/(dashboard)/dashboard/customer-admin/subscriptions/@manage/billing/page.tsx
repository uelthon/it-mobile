import React from 'react'
import { getAllUserSubscriptions, getOneStripeSubscriptions } from '@/actions/subscriptions.actions'
import Await from '@/components/shared/await'
import Billing from '@/components/shared/icons/billing'
import PaymentMethod, { PaymentMethodSkeleton } from '../payment-method'
import { getPaymentMethodById } from '@/actions/payment-method.actions'

export default async function BillingManage () {
  const { data } = await getAllUserSubscriptions()
  if (!data) {
    return
  }
  const { data: stripeSubscription } = await getOneStripeSubscriptions(data[0].id)
  const startDate = new Date(Number(stripeSubscription?.current_period_start) * 1000)
  const endDate = new Date(Number(stripeSubscription?.current_period_end) * 1000)
  // @ts-expect-error
  const pmId = stripeSubscription?.customer?.invoice_settings?.default_payment_method as string || ''
  return (
    <div className='w-full flex flex-col justify-start gap-4 p-4'>
      <div className='text-2xl font-medium leading-[150%] flex items-center gap-4'>
        <Billing />
        <h1>Billing Overview</h1>
      </div>
      <div className='flex flex-col justify-start gap-1 py-2 px-4 border-[1px] border-solid border-it-white-smoke rounded-2xl'>
        <p className='text-base font-medium leading-[150%]'>
          Upcoming Invoice for {startDate.toDateString()} - {endDate.toDateString()}
        </p>
        <p className='text-xs text-it-gray-1 leading-[150%]'>
          The upcoming invoice is based on assigned subscription plans. Your final invoice will include applicable taxes.
        </p>
      </div>
      <Await.Suspense fallback={<PaymentMethodSkeleton />}>
        <Await promise={getPaymentMethodById(pmId)}>
          {({ data }) => <PaymentMethod code={data?.card?.last4 || ''} name={data?.card?.brand || ''} />}
        </Await>
      </Await.Suspense>
    </div>
  )
}
