'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { Product } from '@/types/products.types'
import ArrowLeft from '@/components/shared/icons/arrow-left'
import ArrowRight from '@/components/shared/icons/arrow-right'
import AddItemCard from './add-item-card'

interface Props {
  productsData: Product[]
  subId: string
}

export default function AddItemSelector ({ productsData, subId }: Props) {
  const [item, setItem] = useState(0)
  const product = useMemo(() => productsData[item], [productsData, item])

  useEffect(() => {
    setItem(0)
  }, [productsData])

  const handleClick = {
    next: () => {
      if (item === productsData.length - 1) {
        return setItem(0)
      }
      setItem(prev => prev + 1)
    },
    prev: () => {
      if (item <= 0) {
        return setItem(productsData.length - 1)
      }
      setItem(prev => prev - 1)
    }
  }

  return (
    <>
      {productsData.length > 0 &&
        <div className='flex flex-col justify-start gap-4'>
          <div className='flex justify-center items-center gap-2'>
            <button className='block 2xl:hidden' onClick={handleClick.prev}>
              <ArrowLeft />
            </button>
            <button className='block 2xl:hidden' onClick={handleClick.next}>
              <ArrowRight />
            </button>
          </div>
          <div className='flex justify-center gap-4'>
            <div className='relative hidden 2xl:block'>
              <button className='absolute top-44 -left-20' onClick={handleClick.prev}>
                <ArrowLeft />
              </button>
            </div>
            <AddItemCard
              assets={JSON.parse(product.metadata.assets) as string[]}
              benefits={JSON.parse(product.metadata.benefits) as string[]}
              desc={product.description}
              subId={subId}
              priceId={product.prices[0].id}
              name={product.name}
              price={product.prices[0].unit_amount}
            />
            <div className='relative hidden 2xl:block'>
              <button className='absolute top-44 -right-20' onClick={handleClick.next}>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>}
    </>
  )
}
