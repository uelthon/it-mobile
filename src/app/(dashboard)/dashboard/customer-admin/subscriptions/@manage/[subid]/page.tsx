import { getSubItemById } from '@/actions/subscriptions.actions'
import React from 'react'
import UpdateSubItemCard from './updateSubItemCard'

interface Props {
  params: { subid: string }
}

export default async function SubId ({ params }: Props) {
  const { subid } = params
  const { data } = await getSubItemById(subid)
  const benefits = JSON.parse(data?.product.metadata.benefits || '[]') as string[]
  const assets = JSON.parse(data?.product.metadata.assets || '[]') as string[]
  const price = Number(data?.subItem.price.unit_amount)
  return (
    <div className='w-full flex justify-center py-4 px-2 md:px-0'>
      <UpdateSubItemCard
        assets={assets}
        benefits={benefits}
        desc={data?.product.description || ''}
        id={subid}
        name={data?.product.name || ''}
        price={price}
        quantity={data?.subItem.quantity || 1}
      />
    </div>
  )
}
