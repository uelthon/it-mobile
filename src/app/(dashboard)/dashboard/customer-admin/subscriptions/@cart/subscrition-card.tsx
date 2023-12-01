import Check from '@/components/shared/icons/check'
import Tags from '@/components/shared/icons/tags'
import React from 'react'
import { addProductCart } from '@/actions/cart.actions'
import Submit from '@/components/shared/submit'

interface Props {
  id: string
  name: string
  price: number
  benefits: string[]
  assets: string[]
  desc: string
}

export default function SubscritionCard ({
  assets,
  benefits,
  id,
  name,
  price,
  desc
}: Props) {
  return (
    <div className='flex flex-col justify-start gap-4 border-[1px] border-solid border-black py-4 w-full md:w-[20rem]'>
      <div className='px-4'>
        <h1 className='text-lg font-bold leading-[87%] capitalize'>{name}</h1>
        <div className='text-xl font-extrabold leading-[87%] text-it-blue-1 flex items-center gap-2'>
          <Tags />
          <p>${(price / 100).toFixed(2)} per user/mo.</p>
        </div>
      </div>
      <div className='divider my-0' />
      <form action={addProductCart} className='px-4 flex flex-col justify-start gap-4'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text text-base font-bold leading-[87%]'>I need:</span>
          </label>
          <div className='flex justify-start gap-2 items-end'>
            <div className='join'>
              <input
                className='join-item input input-bordered  border-it-black-1 rounded-none w-full max-w-[5rem]'
                type='number'
                defaultValue={1}
                name='quantity'
              />
              <input
                className='join-item input input-bordered  border-it-black-1 rounded-none w-full max-w-[5rem]' type='text' readOnly value='Users'
              />
            </div>
            <div>
              <p className='text-base font-bold leading-[87%]'>${(price / 100).toFixed(2)}</p>
              <p className='text-xs text-it-gray-2 leading-[87%] font-medium'>Starting Dec 22, 2024</p>
            </div>
          </div>
        </div>
        <input value={id} readOnly type='hidden' name='product' />
        <Submit
          label='+ Add'
          loading={<span className='loading loading-dots loading-sm' />}
          className='btn btn-active btn-neutral rounded-full'
        >
          + Add
        </Submit>
      </form>
      <p
        className='text-base text-it-gray-2 font-light leading-none px-4'
      >
        {desc}
      </p>
      <ul className='px-4'>
        {benefits.map(b =>
          <li className='flex items-center gap-2' key={b}>
            <span className='text-it-blue-1'>
              <Check />
            </span>
            {b}
          </li>)}
      </ul>
      <ul className='px-4'>
        {assets.map(s =>
          <li key={s}>
            <img src={s} alt={s} />
          </li>)}
      </ul>
    </div>
  )
}
