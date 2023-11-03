import React from 'react'

interface Props {
  children: React.ReactNode
  tags: React.ReactNode

}

export default function HomeRootLayout ({ children, tags }: Props) {
  return (
    <>
      {children}
      {tags}
    </>
  )
}
