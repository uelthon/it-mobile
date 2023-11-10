'use client'
import React from 'react'

interface Props {
  children: () => React.JSX.Element
}

export default function Client ({ children }: Props) {
  return children()
}
