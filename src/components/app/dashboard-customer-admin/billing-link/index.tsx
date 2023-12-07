'use client'
import Billing from '@/components/shared/icons/billing'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'

interface Props {
  company: string
}

export default function BillingLink ({ company }: Props) {
  const pathname = usePathname()
  const active = useMemo(() => {
    return ['/dashboard/customer-admin/subscriptions', '/dashboard/customer-admin/subscriptions/billing'].includes(pathname)
  }, [pathname])
  return (
    <Link
      href='/dashboard/customer-admin/subscriptions'
      className={`flex items-center gap-2 px-4 py-2 rounded-2xl ${active ? 'text-white bg-it-blue-1' : ''}`}
    >
      <span className='w-11'>
        <Billing />
      </span>
      <p className='text-left text-lg leading-none font-light [&>span]:font-medium'>
        <span>Billing Overview</span><br />Subscription details for {company}
      </p>
    </Link>
  )
}
