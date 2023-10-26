import React from 'react'
import Industry from './industry'
import { industries } from '@/constants/home-tab-control'

export default function Industires () {
  return (
    <section className='flex flex-col justify-start gap-8'>
      <Industry
        data={industries.none}
      />
      <Industry
        data={industries.consumers}
        title='Consumer Goods'
      />
      <Industry
        data={industries.educations}
        title='Education'
      />
    </section>
  )
}
