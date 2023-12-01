import { getAllUserSubscriptions } from '@/actions/subscriptions.actions'
import React from 'react'

interface Props {
  cart: React.ReactNode
  manage: React.ReactNode
}

export default async function LayoutSubscriptions ({ cart, manage }: Props) {
  const { data } = await getAllUserSubscriptions()
  if (!data) return
  return (
    <>
      {!data.length ? cart : manage}
    </>
  )
}
