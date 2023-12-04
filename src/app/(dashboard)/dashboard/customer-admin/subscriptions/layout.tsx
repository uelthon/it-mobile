import { getAllUserSubscriptions } from '@/actions/subscriptions.actions'
import React from 'react'
import ManageLayout from './manage-layout'

interface Props {
  cart: React.ReactNode
  manage: React.ReactNode
  add: React.ReactNode
}

export default async function LayoutSubscriptions ({ cart, manage, add }: Props) {
  const { data } = await getAllUserSubscriptions()
  if (!data) return
  return (
    <>
      {!data.length
        ? cart
        : <ManageLayout>{manage}</ManageLayout>}
    </>
  )
}
