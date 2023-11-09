import React from 'react'

interface Props {
  children: React.ReactNode
  tags: React.ReactNode

}

export default function HomeRootLayout ({ children, tags }: Props) {
  return (
    <section className='flex flex-col justify-start gap-8'>
      {children}
      {tags}
    </section>
  )
}
