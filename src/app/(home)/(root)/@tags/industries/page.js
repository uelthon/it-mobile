import React from 'react'
import Industry from './industry'
import { industries } from '@/constants/home-tab-control'

export default function Industires () {
  return (
    <section className='w-full flex flex-col items-center gap-8'>
      <div>
        <Industry
          data={industries.none}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Industry
          data={industries.consumers}
          title='Consumer Goods'
        />
        <Industry
          data={industries.educations}
          title='Education'
        />
        <Industry
          data={industries.energy}
          title='Energy & Utilities'
        />
        <Industry
          data={industries.financial}
          title='Financial Services'
        />
        <Industry
          data={industries.healthcare}
          title='Healthcare & Life Sciences'
        />
        <Industry
          data={industries.manufacturing}
          title='Manufacturing'
        />
        <Industry
          data={industries.retail}
          title='Retail'
        />
        <Industry
          data={industries.media}
          title='Media'
        />
      </div>
    </section>
  )
}
