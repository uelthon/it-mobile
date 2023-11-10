'use client'
import React, { useEffect, useState } from 'react'
import Check from '@/components/shared/icons/check'

interface Props {
  list: string[]
}

export default function PlanIncludesList ({ list }: Props) {
  const [select, setSelect] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSelect(prev => (prev + 1) % list.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])
  return (
    <>
      {list.map((item, i) =>
        <li
          className={`${i === select ? 'text-it-blue-1' : ''} transition-[color] duration-500 ease-linear`} key={item}
        >
          <Check /> {item}
        </li>
      )}
    </>
  )
}
