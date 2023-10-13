import React from 'react'
import { industries } from '@/constants/home-tab-control'
import Industry from './industry'
const TabIndustries = ({ tab = '' }) => {
  if (tab !== 'industries') {
    return null
  }
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

export default TabIndustries
