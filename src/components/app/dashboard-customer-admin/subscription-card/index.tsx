'use client'
import React, { useMemo } from 'react'
import Check from '@/components/shared/icons/check'
import Tags from '@/components/shared/icons/tags'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  name: string
  quantity: number
  price: number | string
  id: string
}

export default function SubscriptionCard ({ name, price, quantity, id }: Props) {
  const pathname = usePathname()
  const href = useMemo(() => {
    return `/dashboard/customer-admin/subscriptions/${id}`
  }, [id])
  return (
    <Link href={href} className={`flex items-center justify-between gap-2 px-4 py-2 rounded-2xl ${pathname === href ? 'bg-it-blue-1 text-white' : ''}`}>
      <div className='flex items-center gap-2'>
        <span className='w-11'>
          <Tags />
        </span>
        <p className='text-left text-lg leading-none font-light [&>span]:font-medium'>
          <span>{quantity} User - <span className='capitalize'>{name}</span></span><br />${price} per user/mo.
        </p>
      </div>
      <div className='[&>span]:text-it-green-1 flex items-center gap-2'>
        <p>{quantity}</p>
        <span><Check /></span>
      </div>
    </Link>
  )
}
