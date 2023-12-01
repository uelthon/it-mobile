import React from 'react'

interface Props {
  width?: string
  height?: string
}

export default function ArrowLeft ({ height = '68', width = '68' }: Props) {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='34' cy='34' r='34' fill='#009FE3' /><path d='M43.808 18.962 22.885 34 43.808 49.04' stroke='#fff' strokeWidth='2' strokeLinecap='round' /></svg>
  )
}
