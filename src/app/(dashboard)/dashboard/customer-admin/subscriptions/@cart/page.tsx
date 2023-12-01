import { getAllProducts } from '@/actions/products.actions'
import Await from '@/components/shared/await'
import Logo from '@/components/shared/icons/logo'
import React from 'react'
import SubscritionsSelector from './subscritions-selector'
import CartProducts from './cart-products'

export default function Cart () {
  const products = getAllProducts()
  return (
    <div className='px-2 py-4 flex flex-col justify-start items-center gap-8 md:flex-row md:items-start md:justify-center'>
      <div className='p-8 bg-white shadow-md rounded-2xl w-full md:max-w-[38rem] flex flex-col justify-start items-center gap-4'>
        <Logo width='100%' />
        <p className='text-[1.7rem] font-extrabold [&>span]:text-it-blue-1 leading-[91%] text-center'>
          <span>One subscription.</span><br /> A world of alternatives.
        </p>
        <p className='text-base font-normal text-it-gray-2 text-center max-w-[29rem] leading-none'>
          Craft your ideal Subscription with the flexibility to combine plans for each user, and the freedom to adjust your plans as needed.
        </p>
        <Await.Suspense>
          <Await promise={products}>
            {({ data }) => <SubscritionsSelector productsData={data} />}
          </Await>
        </Await.Suspense>
      </div>
      <div className='p-8 bg-white shadow-md rounded-2xl w-full flex flex-col justify-start gap-4 md:max-w-[30rem]'>
        <h2 className='text-[1.72rem] font-extrabold leading-[98%] text-center'>Your Subscription</h2>
        <div className='divider my-0' />
        <CartProducts />
        <button className='btn btn-active btn-neutral rounded-full'>
          Subscribe
        </button>
      </div>
    </div>
  )
}
