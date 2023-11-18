import React, { Suspense } from 'react'

export default function AwaitSuspense ({
  children,
  fallback = null
}: {
  children: React.ReactNode
  fallback?: React.ReactNode }) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}
