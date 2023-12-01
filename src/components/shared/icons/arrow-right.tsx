import React from 'react'

interface Props {
  width?: string
  height?: string
}

export default function ArrowRight ({ height = '68', width = '68' }: Props) {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='34' cy='34' r='34' transform='rotate(180 34 34)' fill='#009FE3' /><path d='M24.192 49.038 45.115 34 24.192 18.96' stroke='#fff' strokeWidth='2' strokeLinecap='round' /></svg>
  )
}
