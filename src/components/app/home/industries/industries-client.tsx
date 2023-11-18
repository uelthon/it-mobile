'use client'
import React from 'react'

interface Props {
  industriesNodes: React.ReactNode

}

export default function IndustriesClient ({ industriesNodes }: Props) {
  return (
    <>
      {industriesNodes}
    </>
  )
}
